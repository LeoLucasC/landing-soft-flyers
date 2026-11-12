'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { budgets, demoPlans, leadMessage, leadSchema, projectTypes, type Lead } from '../lib/leads'
import { whatsapp } from '../lib/content'

export function LeadForm({ flow, plan = '', connected }: { flow: Lead['flow']; plan?: string; connected: boolean }) {
  const isDemo = flow === 'demo'
  const [feedback, setFeedback] = useState('')
  const [share, setShare] = useState('')
  const [delivered, setDelivered] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Lead>({
    resolver: zodResolver(leadSchema),
    defaultValues: { flow, interest: isDemo ? 'Restaurantes' : '', plan, budget: '', message: '', consent: false, website: '' },
  })

  async function submit(lead: Lead) {
    setFeedback('')
    setShare('')
    if (!connected) {
      setShare(whatsapp(leadMessage(lead)))
      return
    }
    try {
      const response = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) })
      const result = await response.json()
      if (!response.ok || !result.received) {
        setFeedback(result.error || 'No pudimos enviar la solicitud.')
        return
      }
      setDelivered(true)
    } catch {
      setFeedback('No pudimos conectar con el servicio de solicitudes.')
    }
  }

  if (delivered) return <div className="form-card" role="status"><h2>Solicitud recibida.</h2><p>Usaremos los datos que compartiste para responderte.</p></div>

  const field = (name: 'name' | 'company' | 'email' | 'phone', label: string, autoComplete: string, type = 'text') => (
    <div><label>{label}<input {...register(name)} type={type} autoComplete={autoComplete} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? name + '-error' : undefined} required/></label>
      {errors[name] && <small className="field-error" id={name + '-error'}>{errors[name].message}</small>}
    </div>
  )

  return <form className="form-card" noValidate onSubmit={handleSubmit(submit, () => { setShare(''); setFeedback('') })} onChange={() => { setShare(''); setFeedback('') }}>
    <h2>{isDemo ? 'Datos para tu demo' : 'Datos de tu proyecto'}</h2>
    <div className="field-grid">
      {field('name', 'Nombre', 'name')}{field('company', 'Empresa', 'organization')}
      {field('email', 'Correo', 'email', 'email')}{field('phone', 'WhatsApp', 'tel', 'tel')}
      <div><label>{isDemo ? 'Producto' : 'Tipo de proyecto'}
        <select {...register('interest')} aria-invalid={!!errors.interest} aria-describedby={errors.interest ? 'interest-error' : undefined} required>
          {isDemo ? <option>Restaurantes</option> : <><option value="">Selecciona una opción</option>{projectTypes.map((item) => <option key={item}>{item}</option>)}</>}
        </select></label>{errors.interest && <small id="interest-error" className="field-error">{errors.interest.message}</small>}
      </div>
      {isDemo
        ? <label>Plan (opcional)<select {...register('plan')} defaultValue={plan}><option value="">Quiero comparar</option>{demoPlans.map((item) => <option key={item}>{item}</option>)}</select></label>
        : <label>Presupuesto aproximado (opcional)<select {...register('budget')}><option value="">Selecciona una opción</option>{budgets.map((item) => <option key={item}>{item}</option>)}</select></label>}
    </div>
    <label>{isDemo ? 'Mensaje (opcional)' : '¿Qué necesitas resolver?'}<textarea {...register('message')} rows={5} maxLength={1800} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} required={!isDemo}/></label>
    {errors.message && <small id="message-error" className="field-error">{errors.message.message}</small>}
    <div hidden><label>Sitio web<input {...register('website')} autoComplete="off" tabIndex={-1}/></label></div>
    <div className="consent"><label><input type="checkbox" {...register('consent')} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? 'consent-error' : undefined} required/> Autorizo el uso de mis datos para responder a esta solicitud.</label><Link href="/privacidad">Ver aviso de privacidad</Link></div>
    {errors.consent && <small id="consent-error" className="field-error">{errors.consent.message}</small>}
    {!connected && <p className="form-note">Prepara tu mensaje y revísalo en WhatsApp antes de enviarlo.</p>}
    {feedback && <p className="field-error" role="alert">{feedback}</p>}
    {share ? <a className="button primary" href={share} target="_blank" rel="noreferrer">Abrir WhatsApp <ArrowUpRight size={17}/></a>
      : <button type="submit" className="button primary" disabled={isSubmitting}>{isSubmitting ? 'Procesando…' : connected ? 'Enviar solicitud' : 'Preparar mensaje'} <ArrowRight size={17}/></button>}
  </form>
}
