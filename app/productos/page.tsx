import type { Metadata } from 'next'
import { Catalog } from '../../components/products'
import { PageIntro } from '../../components/layout'

export const metadata: Metadata = { title: 'Productos SaaS', description: 'Explora Soft Flyer Restaurantes y Soft Flyer Odontología.', alternates: { canonical: '/productos' } }

export default function Products() {
  return <><PageIntro label="Productos SaaS" title="Software por rubro." description="Plataformas enfocadas en la operación diaria de cada negocio."/><section className="section wrap"><h2 className="sr-only">Catálogo</h2><Catalog/></section></>
}
