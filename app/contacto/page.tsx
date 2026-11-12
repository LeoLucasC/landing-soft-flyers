import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import { PageIntro } from '../../components/layout'
import { email, whatsapp } from '../../lib/content'

export const metadata: Metadata = { title: 'Contacto', description: 'Conversa con Soft Flyer sobre productos o desarrollo a medida.', alternates: { canonical: '/contacto' } }

export default async function Contact({ searchParams }: { searchParams: Promise<{ producto?: string }> }) {
  const { producto } = await searchParams
  const dental = producto === 'odontologia'
  const message = dental ? 'Hola, quisiera conocer más sobre Soft Flyer Odontología.' : 'Hola, quisiera conversar con Soft Flyer.'
  return <><PageIntro label="Contacto" title={dental ? 'Conversemos sobre Odontología.' : 'Hablemos.'} description={dental ? 'Cuéntanos qué te gustaría resolver en tu consultorio o clínica dental.' : 'Elige cómo quieres conversar con el equipo de Soft Flyer.'}/>
    <section className="section wrap">
      <div className="contact-options">
        <a href={whatsapp(message)} target="_blank" rel="noreferrer"><MessageCircle/><strong>WhatsApp</strong><ArrowUpRight size={19}/></a>
        <a href={'mailto:' + email + '?subject=' + encodeURIComponent(dental ? 'Soft Flyer Odontología' : 'Consulta para Soft Flyer')}><Mail/><strong>{email}</strong><ArrowUpRight size={19}/></a>
      </div>
      <div className="actions"><Link href="/demo" className="button primary">Solicitar demo</Link><Link href="/cotizar" className="button secondary">Solicitar cotización</Link></div>
    </section>
  </>
}
