import type { Metadata } from 'next'
import { Braces, Layers3, PanelsTopLeft, Users } from 'lucide-react'
import { PageIntro } from '../../components/layout'

export const metadata: Metadata = { title: 'Nosotros', description: 'Conoce el enfoque de Soft Flyer para crear software empresarial.', alternates: { canonical: '/nosotros' } }

const principles = [
  [Braces, 'Soluciones adaptadas', 'Partimos de los procesos y las necesidades de quienes usarán el software.'],
  [Layers3, 'Arquitectura escalable', 'Diseñamos sistemas que puedan evolucionar con tu operación.'],
  [PanelsTopLeft, 'Experiencias intuitivas', 'Priorizamos interfaces claras y recorridos que faciliten el trabajo diario.'],
  [Users, 'Acompañamiento', 'Colaboramos con tu equipo desde el análisis hasta la implementación.'],
] as const

export default function About() {
  return <><PageIntro label="Nosotros" title="Ingeniería para el trabajo diario." description="En Soft Flyer combinamos ingeniería, diseño y conocimiento del negocio para crear productos propios y soluciones a medida."/>
    <section className="section wrap"><h2>Cómo diseñamos software</h2><div className="service-grid">{principles.map(([Icon, title, description]) => <article key={title}><Icon size={24}/><h3>{title}</h3><p>{description}</p></article>)}</div></section>

  </>
}
