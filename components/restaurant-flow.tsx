'use client'

import { ChefHat, ClipboardList, LayoutGrid, ReceiptText, RotateCcw } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const steps = [
  { name: 'Salón', label: 'Mesas y pedidos', Icon: LayoutGrid },
  { name: 'Cocina', label: 'Comandas', Icon: ChefHat },
  { name: 'Caja', label: 'Cobro y facturación', Icon: ReceiptText },
]

export function RestaurantFlow() {
  const card = useRef<HTMLDivElement>(null)
  const [run, setRun] = useState(0)

  useEffect(() => {
    const element = card.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setRun((current) => current || 1)
      observer.disconnect()
    }, { threshold: 0.65 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div className="operation-card" ref={card}>
    <div className="operation-header">
      <div className="operation-icon"><ClipboardList size={21}/></div>
      <div><strong>Flujo de atención</strong><small>Vista ilustrativa</small></div>
      <button className="operation-replay" type="button" aria-label="Repetir animación del flujo"
        title="Repetir animación del flujo" onClick={() => setRun((current) => current + 1)}>
        <RotateCcw size={17}/>
      </button>
    </div>
    <ol className="operation-steps" key={run} data-playing={run > 0}>
      {steps.map(({ name, label, Icon }) => <li className="operation-row" key={name}>
        <Icon size={16}/><strong>{name}</strong><span>{label}</span>
      </li>)}
    </ol>
  </div>
}
