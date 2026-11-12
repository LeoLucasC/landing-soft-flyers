import { Monitor, Plug, Smartphone, Workflow } from 'lucide-react'
import { processSteps, services } from '../lib/content'

const serviceIcons = [Monitor, Smartphone, Plug, Workflow]

export function ServiceGrid() {
  return <div className="service-grid">
    {services.map(({ slug, title, text }, index) => {
      const Icon = serviceIcons[index]
      return <article id={slug} key={slug}><Icon size={23}/><h3>{title}</h3><p>{text}</p></article>
    })}
  </div>
}

export function Process() {
  return <section className="section wrap">
    <p className="kicker"><span/> Cómo trabajamos</p><h2>De la idea a la implementación.</h2>
    <ol className="process-list">{processSteps.map(([title, text], index) => <li key={title}>
      <span className="step-number">{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p>
    </li>)}</ol>
  </section>
}
