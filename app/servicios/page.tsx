import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageIntro } from '../../components/layout'
import { Process, ServiceGrid } from '../../components/services'

export const metadata: Metadata = { title: 'Desarrollo a medida', description: 'Aplicaciones web y móviles, integraciones API y automatización para empresas.', alternates: { canonical: '/servicios' } }

export default function Services() {
  return <><PageIntro label="Desarrollo a medida" title="Software para tus procesos." description="Diseñamos aplicaciones e integraciones alrededor de la forma en que trabaja tu equipo."/>
    <section className="section wrap"><h2>Qué podemos construir</h2><ServiceGrid/><Link className="button primary" href="/cotizar">Cuéntanos tu proyecto <ArrowRight size={17}/></Link></section>
    <div className="muted-section"><Process/></div>
  </>
}
