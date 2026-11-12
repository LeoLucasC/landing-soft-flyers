import type { Metadata } from 'next'
import { LeadForm } from '../../components/lead-form'
import { PageIntro } from '../../components/layout'

export const metadata: Metadata = { title: 'Solicitar cotización', description: 'Describe tu proyecto de software a medida y solicita una cotización.', alternates: { canonical: '/cotizar' } }
export const dynamic = 'force-dynamic'

export default function Quote() {
  return <><PageIntro label="Desarrollo a medida" title="Cuéntanos tu proyecto." description="Describe el proceso que quieres mejorar y qué esperas de la solución."/>
    <section className="section wrap narrow"><LeadForm flow="cotizacion" connected={Boolean(process.env.LEADS_WEBHOOK_URL)}/></section>
  </>
}
