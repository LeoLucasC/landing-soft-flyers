import { notFound } from 'next/navigation'

const cases: readonly { title: string; sector: string; problem: string; solution: string; results: string }[] = []

export default function Cases() {
  if (!cases.length) notFound()
  return <section className="section wrap"><h1>Casos de éxito</h1>{cases.map((item) => <article className="case" key={item.title}>
    <p>{item.sector}</p><h2>{item.title}</h2><p>{item.problem}</p><p>{item.solution}</p><p>{item.results}</p>
  </article>)}</section>
}
