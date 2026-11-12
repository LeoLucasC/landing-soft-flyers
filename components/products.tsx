import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check, UtensilsCrossed } from 'lucide-react'
import { plans, products, restaurantPlanFeatures } from '../lib/content'
import { RestaurantFlow } from './restaurant-flow'

const productPhotos = {
  restaurantes: {
    src: 'https://images.unsplash.com/photo-1749997209112-4c8a3be03f4a?auto=format&fit=crop&w=1080&q=80',
    alt: 'Salón de restaurante con mesas de madera y sillas tapizadas',
  },
  odontologia: {
    src: 'https://images.unsplash.com/photo-1704455306251-b4634215d98f?auto=format&fit=crop&w=1080&q=80',
    alt: 'Consultorio odontológico con sillón dental y equipo de atención',
  },
} as const

const restaurantPreview = {
  src: '/media/restaurantes-facturacion.webp',
  alt: 'Terminal de punto de venta con una interfaz de pedidos y facturación',
}

export function ProductPhoto({ slug, prominent = false }: { slug: keyof typeof productPhotos; prominent?: boolean }) {
  const isRestaurantPreview = prominent && slug === 'restaurantes'
  return <figure className={prominent ? 'product-photo product-photo-feature' : 'product-photo'}>
    <Image {...(isRestaurantPreview ? restaurantPreview : productPhotos[slug])} fill
      sizes="(max-width: 860px) 100vw, 50vw" unoptimized={!isRestaurantPreview} loading={prominent ? 'eager' : 'lazy'}/>
    {isRestaurantPreview && <figcaption>Imagen referencial</figcaption>}
  </figure>
}

export function RestaurantVisual() {
  return <figure className="restaurant-visual">
    <Image {...restaurantPreview} fill sizes="(max-width: 860px) 100vw, 50vw" preload />
    <div className="photo-shade" aria-hidden="true"/>
    <div className="visual-caption"><span><UtensilsCrossed size={16}/></span> Imagen referencial</div>
    <RestaurantFlow/>
  </figure>
}

export function Catalog() {
  return <div className="catalog-grid">
    {products.map((product) => {
      const isRestaurant = product.slug === 'restaurantes'
      return <article key={product.slug} className={'product-card ' + (isRestaurant ? 'product-restaurant' : 'product-dental')}>
        <ProductPhoto slug={product.slug}/>
        <div className="product-content">
          <div className="product-top"><h3>{product.name}</h3><span className="product-status"><span/>{product.status}</span></div>
          <p>{product.description}</p>
          {isRestaurant && <ul className="feature-tags">{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>}
          <Link className="text-link" href={'/productos/' + product.slug}>{isRestaurant ? 'Ver producto y planes' : 'Conocer el proyecto'} <ArrowUpRight size={17}/></Link>
        </div>
      </article>
    })}
  </div>
}

export function Pricing() {
  return <section className="section wrap" id="planes">
    <p className="kicker"><span/> Planes de Restaurantes</p>
    <div className="section-heading"><h2>Un plan para cada operación.</h2><p>Compara la capacidad por sucursal, el delivery y las cuotas del asistente. Abajo puedes ver las funciones incluidas en los tres planes.</p></div>
    <div className="pricing-grid">
      {plans.map((plan) => <article className={'price-card ' + (plan.name === 'Profesional' ? 'price-featured' : '')} key={plan.name}>
        <div className="price-card-heading">
          <h3>{plan.name}</h3>
          {plan.name === 'Profesional' && <span className="price-badge">Más solicitado</span>}
        </div>
        <div className="price"><span>S/</span> {plan.price} <small>/ mes</small></div>
        <ul>
          <li><Check size={17}/>{plan.branches}</li>
          <li><Check size={17}/>{plan.users} activos</li>
          <li><Check size={17}/>{plan.delivery ? 'Recojo y delivery con motorizados' : 'Pedidos para recojo en local'}</li>
          <li><Check size={17}/>Hasta {plan.dailyAiQueries} consultas diarias al asistente IA</li>
          <li><Check size={17}/>{plan.monthlyAiTokens} millones de tokens de IA al mes</li>
        </ul>
        <Link className="button secondary" href={'/demo?plan=' + plan.name}>Consultar plan <ArrowRight size={16}/></Link>
      </article>)}
    </div>
    <div className="plan-features">
      <h3>Qué incluyen los tres planes</h3>
      <dl className="plan-feature-grid">
        {restaurantPlanFeatures.map(([title, detail]) => <div key={title}>
          <dt>{title}</dt><dd>{detail}</dd>
        </div>)}
      </dl>
      <div className="plan-delivery">
        <h4>Delivery en Profesional y Empresarial</h4>
        <p>Configura zonas y tarifas por sucursal, asigna motorizados, revisa el estado de cada entrega y liquida en caja los cobros contra entrega. Cada motorizado actualiza sus pedidos desde un enlace en el celular.</p>
      </div>
    </div>
    <div className="pricing-notes">
      <div><strong>Prueba gratis</strong><p>1 sucursal, 5 usuarios activos, delivery con motorizados y hasta 50 consultas diarias al asistente IA.</p><Link className="text-link" href="/demo?plan=Prueba">Consultar la prueba <ArrowUpRight size={16}/></Link></div>
      <div><strong>A medida</strong><p>Precio a convenir, delivery con motorizados y cupos de usuarios y sucursales según tu operación.</p><Link className="text-link" href="/demo?plan=A%20medida">Consultar plan a medida <ArrowUpRight size={16}/></Link></div>
    </div>
  </section>
}
