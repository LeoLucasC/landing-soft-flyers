import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ChefHat, ClipboardList, Package, ReceiptText } from 'lucide-react'
import { Pricing, ProductPhoto } from '../../../components/products'
import { products } from '../../../lib/content'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((item) => item.slug === slug)
  if (!product) return {}
  return { title: product.name, description: product.description, alternates: { canonical: '/productos/' + slug } }
}

const restaurantFeatures = [
  [ClipboardList, 'Pedidos y mesas', 'Toma pedidos desde el salón y organiza las mesas de cada sucursal.'],
  [ChefHat, 'Comandas en cocina', 'Envía las comandas a las estaciones de preparación.'],
  [ReceiptText, 'Caja y facturación', 'Registra cobros y emite boletas y facturas electrónicas.'],
  [Package, 'Inventario y reportes', 'Consulta movimientos de inventario y analiza tus ventas.'],
] as const

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = products.find((item) => item.slug === slug)
  if (!product) notFound()

  if (product.slug === 'odontologia') {
    return <section className="hero"><div className="wrap hero-grid product-hero">
      <div>
        <h1>Soft Flyer <em>Odontología</em></h1>
        <p className="lede">{product.description}</p>
        <div className="actions"><Link className="button primary" href="/contacto?producto=odontologia">Consultar por Odontología <ArrowRight size={17}/></Link></div>
      </div>
      <ProductPhoto slug={product.slug} prominent/>
    </div></section>
  }

  return <>
    <section className="hero"><div className="wrap hero-grid product-hero">
      <div>
        <h1>Soft Flyer <em>Restaurantes</em></h1>
        <p className="lede">{product.description}</p>
        <div className="actions"><Link className="button primary" href="/demo">Solicitar demo <ArrowRight size={17}/></Link><Link className="button secondary" href="#planes">Ver planes</Link></div>
      </div>
      <ProductPhoto slug={product.slug} prominent/>
    </div></section>
    <section className="section wrap"><h2>Soft Flyer Restaurantes</h2><div className="service-grid">
      {restaurantFeatures.map(([Icon, title, text]) => <article key={title}><Icon size={24}/><h3>{title}</h3><p>{text}</p></article>)}
    </div></section>
    <div className="muted-section"><Pricing/></div>
  </>
}
