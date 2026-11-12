import Link from 'next/link'
import { ArrowUpRight, Plus } from 'lucide-react'
import { questions } from '../lib/content'

export function FAQ() {
  return <section id="preguntas" className="section wrap faq-grid">
    <div><p className="kicker"><span/> Preguntas frecuentes</p><h2>Antes de empezar.</h2><Link href="/contacto" className="text-link">Habla con nosotros <ArrowUpRight size={17}/></Link></div>
    <div>{questions.map(([question, answer]) => <details className="faq-item" key={question}>
      <summary>{question}<Plus size={19}/></summary><p>{answer}</p>
    </details>)}</div>
  </section>
}

export function PageIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return <div className="page-intro"><div className="wrap">
    <p className="kicker"><span/> {label}</p><h1>{title}</h1><p className="lede">{description}</p>
  </div></div>
}
