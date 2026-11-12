import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Braces, Layers3 } from 'lucide-react'
import { Catalog, Pricing, RestaurantVisual } from '../components/products'
import { FAQ } from '../components/layout'
import { siteUrl } from '../lib/content'

import { Process, ServiceGrid } from '../components/services'
import './home.css'

export const metadata: Metadata = { alternates: { canonical: '/' } }

export default function Home() {
  const organization = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Soft Flyer', url: siteUrl, logo: new URL('/media/softflyer-logo.png', siteUrl).href }
  return <div className="home">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, '\\u003c') }}/>
    <section className="home-hero">
      <div className="home-hero-inner">
        <div className="home-hero-copy">
          <h1>Software para el <em>día a día</em> de tu negocio.</h1>
          <p className="lede">Plataformas para restaurantes y clínicas dentales. Software a medida para las empresas que necesitan resolver un proceso propio.</p>
          <div className="actions"><Link className="button home-primary" href="#productos">Explorar productos <ArrowRight size={18}/></Link><Link className="button home-secondary" href="/cotizar">Cotizar un proyecto <ArrowUpRight size={17}/></Link></div>
        </div>
        <RestaurantVisual/>
      </div>
    </section>
    <div className="solution-strip home-directory"><div className="wrap">
      <Link href="#productos"><Layers3 size={21}/><div><strong>Productos SaaS</strong><span>Software especializado por rubro</span></div><ArrowUpRight size={18}/></Link>
      <Link href="/servicios"><Braces size={22}/><div><strong>Desarrollo a medida</strong><span>Aplicaciones, integraciones y automatización</span></div><ArrowUpRight size={18}/></Link>
    </div></div>
    <section className="section wrap home-products" id="productos">
      <div className="section-heading"><h2>Software para<br/>cada rubro.</h2><Link className="text-link" href="/productos">Ver catálogo <ArrowUpRight size={18}/></Link></div>
      <Catalog/>
    </section>
    <div className="home-pricing"><Pricing/></div>
    <section className="section wrap home-services" id="desarrollo">
      <div className="section-heading"><h2>Software que se adapta a tu empresa.</h2><Link className="text-link" href="/servicios">Explorar servicios <ArrowUpRight size={18}/></Link></div>
      <ServiceGrid/>
    </section>
    <div className="muted-section"><Process/></div>
    <FAQ/>
  </div>
}
