import type { Metadata } from 'next'
import { LeadForm } from '../../components/lead-form'
import { PageIntro } from '../../components/layout'
import { demoPlans } from '../../lib/leads'

export const metadata: Metadata = { title: 'Solicitar demo', description: 'Solicita una demostración de Soft Flyer Restaurantes.', alternates: { canonical: '/demo' } }

export default async function Demo({ searchParams }: { searchParams: Promise<{ plan?: string }> }) {
  const { plan = '' } = await searchParams
  return <><PageIntro label="Soft Flyer Restaurantes" title="Agenda una demo." description="Cuéntanos sobre tu restaurante para conversar sobre pedidos, cocina, caja y facturación."/>
    <section className="section wrap narrow"><LeadForm flow="demo" plan={demoPlans.includes(plan) ? plan : ''} connected={Boolean(process.env.LEADS_WEBHOOK_URL)}/></section>
  </>
}
