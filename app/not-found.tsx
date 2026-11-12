import Link from 'next/link'

export default function NotFound() {
  return <section className="section wrap narrow"><p className="kicker"><span/> 404</p><h1>Página no encontrada.</h1><Link className="button primary" href="/">Volver al inicio</Link></section>
}
