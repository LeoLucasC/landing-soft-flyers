import { NextRequest, NextResponse } from 'next/server'
import { leadSchema } from '../../../lib/leads'

const attempts = new Map<string, { count: number; expires: number }>()
const duplicates = new Map<string, number>()
const pending = new Set<string>()
const minute = 60_000

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin')
  const host = request.headers.get('host')
  const configuredUrl = process.env.SITE_URL
  const allowedOrigins = [
    request.nextUrl.origin,
    host && request.nextUrl.protocol + '//' + host,
    configuredUrl && new URL(configuredUrl).origin,
  ]
  if (!origin || !allowedOrigins.includes(origin)) {
    return NextResponse.json({ error: 'Origen de la solicitud inválido.' }, { status: 403 })
  }

  const ipHeader = process.env.LEADS_TRUSTED_IP_HEADER
  const ip = (ipHeader && request.headers.get(ipHeader)?.split(',')[0]?.trim()) || 'local'
  const now = Date.now()
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key)
  for (const [key, expires] of duplicates) if (expires <= now) duplicates.delete(key)
  const bucket = attempts.get(ip) ?? { count: 0, expires: now + minute }
  if (bucket.count >= 8) return NextResponse.json({ error: 'Espera un minuto e inténtalo de nuevo.' }, { status: 429 })
  bucket.count += 1
  attempts.set(ip, bucket)

  if (Number(request.headers.get('content-length')) > 12_000) {
    return NextResponse.json({ error: 'La solicitud es demasiado larga.' }, { status: 413 })
  }

  const body = await request.text()
  if (Buffer.byteLength(body) > 12_000) {
    return NextResponse.json({ error: 'La solicitud es demasiado larga.' }, { status: 413 })
  }
  let payload: unknown
  try {
    payload = JSON.parse(body)
  } catch {
    return NextResponse.json({ error: 'La solicitud no contiene JSON válido.' }, { status: 400 })
  }

  const parsed = leadSchema.safeParse(payload)
  if (!parsed.success) return NextResponse.json({ error: 'Revisa los datos del formulario.' }, { status: 422 })

  const webhook = process.env.LEADS_WEBHOOK_URL
  if (!webhook) return NextResponse.json({ error: 'El envío directo no está configurado.' }, { status: 503 })

  const key = [parsed.data.flow, parsed.data.email.toLowerCase(), parsed.data.interest, parsed.data.plan].join(':')
  if (duplicates.has(key) || pending.has(key)) {
    return NextResponse.json({ error: 'Ya hay una solicitud reciente con esos datos.' }, { status: 409 })
  }

  pending.add(key)
  try {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    if (process.env.LEADS_WEBHOOK_TOKEN) headers.set('Authorization', 'Bearer ' + process.env.LEADS_WEBHOOK_TOKEN)
    const response = await fetch(webhook, {
      method: 'POST', headers, body: JSON.stringify(parsed.data), signal: AbortSignal.timeout(8000),
    })
    if (!response.ok) return NextResponse.json({ error: 'No pudimos entregar tu solicitud. Inténtalo de nuevo.' }, { status: 502 })
    duplicates.set(key, now + minute * 5)
    return NextResponse.json({ received: true }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'No pudimos conectar con el servicio de solicitudes.' }, { status: 502 })
  } finally {
    pending.delete(key)
  }
}
