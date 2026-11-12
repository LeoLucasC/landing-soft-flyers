'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Activity, ChevronDown, CodeXml, Menu, Plug, Smartphone, UtensilsCrossed, Workflow, X } from 'lucide-react'
import { useId, useRef, useState, type ReactNode } from 'react'
import { services } from '../lib/content'

const restaurantPath = '/productos/restaurantes'
const planPath = restaurantPath + '#planes'
const productLinks = [
  { title: 'Soft Flyer Restaurantes', text: 'Gestiona pedidos, cocina, caja y facturación electrónica.', href: restaurantPath, icon: UtensilsCrossed },
  { title: 'Soft Flyer Odontología', text: 'Software para consultorios y clínicas dentales. En desarrollo.', href: '/productos/odontologia', icon: Activity },
]
const serviceIcons = [CodeXml, Smartphone, Plug, Workflow]
const serviceLinks = services.map((service, index) => ({
  ...service, href: '/servicios#' + service.slug, icon: serviceIcons[index],
}))

function MegaMenu({ label, dark = false, items, children }: {
  label: ReactNode
  dark?: boolean
  items: typeof productLinks
  children?: ReactNode
}) {
  const id = useId()
  const trigger = useRef<HTMLButtonElement>(null)
  const [mode, setMode] = useState<'closed' | 'hover' | 'open'>('closed')
  const expanded = mode !== 'closed'
  const close = () => setMode('closed')

  return <div className="old-mega" data-dark={dark} data-mode={mode}
    onPointerEnter={(event) => {
      if (event.pointerType === 'mouse') setMode((current) => current === 'closed' ? 'hover' : current)
    }}
    onPointerLeave={(event) => {
      if (event.pointerType === 'mouse' && !event.currentTarget.contains(document.activeElement)) close()
    }}
    onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) close() }}
    onKeyDown={(event) => {
      if (event.key === 'Escape' && expanded) { close(); trigger.current?.focus() }
    }}>
    <button type="button" className="old-mega-trigger" ref={trigger} aria-expanded={expanded} aria-controls={id}
      onClick={() => setMode((current) => current === 'open' ? 'closed' : 'open')}>
      <span>{label}</span><ChevronDown size={16} strokeWidth={2.5}/>
    </button>
    <div className="old-mega-panel" id={id} hidden={!expanded} onClick={(event) => {
      if (event.target instanceof Element && event.target.closest('a')) close()
    }}>
      {items.map(({ title, text, href, icon: Icon }) => <Link className="old-mega-item" href={href} key={href}>
        <Icon size={dark ? 24 : 32} strokeWidth={dark ? 2 : 1.5}/>
        <span><strong>{title}</strong><small>{text}</small></span>
      </Link>)}
      {children}
    </div>
  </div>
}

export function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const mobileTrigger = useRef<HTMLButtonElement>(null)
  const mobileId = useId()
  const home = pathname === '/'

  return <header className="old-header" onKeyDown={(event) => {
    if (event.key === 'Escape' && mobileOpen) { setMobileOpen(false); mobileTrigger.current?.focus() }
  }}>
    <div className="old-header-inner">
      <div className="old-header-start">
        <Link href="/" aria-label="Soft Flyer, inicio" className="old-header-logo" onClick={() => setMobileOpen(false)}>
          <Image src="/media/softflyer-logo.png" width={432} height={257} alt="Soft Flyer" priority/>
        </Link>
        <nav className="old-desktop-nav" aria-label="Navegación principal">
          <Link className="old-nav-link" href="/" aria-current={home ? 'page' : undefined}>Inicio</Link>
          <MegaMenu label="Productos SaaS" items={productLinks}>
            <div className="old-mega-bottom">
              <Link href="/productos">Ver todos los productos</Link>
              <Link href="/demo">Solicitar una <em>demo</em></Link>
            </div>
          </MegaMenu>
          <MegaMenu dark label={<>Software <em>a medida</em></>} items={serviceLinks}/>
          <Link className="old-featured" href={restaurantPath}>
            <span className="old-featured-badge">SaaS</span><UtensilsCrossed size={20}/>
            <span>Soft Flyer<strong>Restaurantes</strong></span>
          </Link>
          <Link className="old-nav-link" href={planPath}>Planes</Link>
        </nav>
      </div>
      <div className="old-header-actions">
        <Link className="old-quote" href="/cotizar">Cotizar proyecto</Link>
        <Link className="old-demo" href="/demo">Solicitar demo</Link>
      </div>
      <button type="button" className="old-mobile-toggle" ref={mobileTrigger} aria-expanded={mobileOpen}
        aria-controls={mobileId} aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={32}/> : <Menu size={32}/>}
      </button>
    </div>
    <nav id={mobileId} className="old-mobile-nav" aria-label="Navegación móvil" hidden={!mobileOpen}
      onClick={(event) => { if (event.target instanceof Element && event.target.closest('a')) setMobileOpen(false) }}>
      <Link className="old-mobile-main" href="/" aria-current={home ? 'page' : undefined}><span/>Inicio</Link>
      <div className="old-mobile-group">
        <Link className="old-mobile-label" href="/productos">Productos SaaS</Link>
        {productLinks.map(({ title, href, icon: Icon }) => <Link key={href} href={href}><Icon size={20}/>{title}</Link>)}
      </div>
      <div className="old-mobile-group">
        <Link className="old-mobile-label" href="/servicios">Software a medida</Link>
        {serviceLinks.map(({ title, href, icon: Icon }) => <Link key={href} href={href}><Icon size={20}/>{title}</Link>)}
      </div>
      <Link className="old-mobile-main" href={planPath}><span/>Planes</Link>
      <div className="old-mobile-actions">
        <Link className="old-demo" href="/demo">Solicitar demo</Link>
        <Link className="old-quote" href="/cotizar">Cotizar proyecto</Link>
      </div>
    </nav>
  </header>
}
