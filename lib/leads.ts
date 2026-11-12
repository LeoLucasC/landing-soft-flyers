import { z } from 'zod'
import { plans } from './content'

export const demoPlans = [...plans.map(({ name }) => name), 'Prueba', 'A medida']
export const projectTypes = ['Aplicación web', 'Aplicación móvil', 'Integración API', 'Automatización', 'Otro']
export const budgets = ['Por definir', 'Hasta S/ 5,000', 'S/ 5,000 a S/ 15,000', 'Más de S/ 15,000']

export const leadSchema = z.object({
  flow: z.enum(['demo', 'cotizacion']),
  name: z.string().trim().min(2, 'Ingresa tu nombre.').max(100),
  company: z.string().trim().min(2, 'Ingresa el nombre de tu empresa.').max(120),
  email: z.email({ error: 'Ingresa un correo válido.' }).max(160),
  phone: z.string().trim().regex(/^\+?[\d\s()-]{7,22}$/, 'Ingresa un número de WhatsApp válido.').refine((value) => value.replace(/\D/g, '').length >= 7 && value.replace(/\D/g, '').length <= 15, 'Ingresa un número de WhatsApp válido.'),
  interest: z.string().trim().min(1, 'Selecciona una opción.').max(80),
  plan: z.string().max(30),
  budget: z.string().max(40),
  message: z.string().trim().max(1800, 'Usa hasta 1800 caracteres.'),
  consent: z.boolean().refine(Boolean, 'Autoriza el uso de tus datos para responderte.'),
  website: z.string().max(0),
}).superRefine((lead, ctx) => {
  const issue = (path: string, message: string) => ctx.addIssue({ code: 'custom', path: [path], message })
  if (lead.flow === 'demo') {
    if (lead.interest !== 'Restaurantes') issue('interest', 'Selecciona el producto de la demo.')
    if (lead.plan && !demoPlans.includes(lead.plan)) issue('plan', 'Selecciona un plan válido.')
    if (lead.budget) issue('budget', 'El presupuesto corresponde a las cotizaciones.')
    return
  }
  if (!projectTypes.includes(lead.interest)) issue('interest', 'Selecciona un tipo de proyecto.')
  if (lead.message.length < 15) issue('message', 'Describe tu proyecto en al menos 15 caracteres.')
  if (lead.budget && !budgets.includes(lead.budget)) issue('budget', 'Selecciona un presupuesto válido.')
  if (lead.plan) issue('plan', 'El plan corresponde a las solicitudes de demo.')
})

export type Lead = z.infer<typeof leadSchema>

export function leadMessage(lead: Lead) {
  return [
    lead.flow === 'demo' ? 'Hola, me interesa una demo de Soft Flyer.' : 'Hola, quisiera cotizar un proyecto con Soft Flyer.',
    'Nombre: ' + lead.name,
    'Empresa: ' + lead.company,
    'Correo: ' + lead.email,
    'WhatsApp: ' + lead.phone,
    (lead.flow === 'demo' ? 'Producto: ' : 'Tipo de proyecto: ') + lead.interest,
    lead.plan && 'Plan: ' + lead.plan,
    lead.budget && 'Presupuesto: ' + lead.budget,
    lead.message && 'Mensaje: ' + lead.message,
  ].filter(Boolean).join('\n')
}
