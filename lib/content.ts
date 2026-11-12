export const siteName = 'Soft Flyer'
export const siteUrl = process.env.SITE_URL || 'https://softflyer.pe'
export const email = 'contactos@softlyer.com'

export function whatsapp(message: string) {
  return 'https://wa.me/51925725091?text=' + encodeURIComponent(message)
}

export const products = [
  {
    slug: 'restaurantes',
    name: 'Restaurantes',
    status: 'Consulta la demo',
    description: 'Conecta el salón, la cocina y la caja en un solo sistema. Toma pedidos, organiza tus mesas y emite boletas y facturas electrónicas.',
    features: ['Pedidos y mesas', 'Comandas en cocina', 'Caja y facturación', 'Inventario y reportes'],
  },
  {
    slug: 'odontologia',
    name: 'Odontología',
    status: 'En desarrollo',
    description: 'Una solución que estamos desarrollando para la operación diaria de consultorios y clínicas dentales.',
    features: [],
  },
] as const

export const plans = [
  { name: 'Básico', price: '79.90', branches: '1 sucursal', users: '5 usuarios', delivery: false, dailyAiQueries: '100', monthlyAiTokens: 3 },
  { name: 'Profesional', price: '99.90', branches: '2 sucursales', users: '15 usuarios', delivery: true, dailyAiQueries: '300', monthlyAiTokens: 10 },
  { name: 'Empresarial', price: '119.90', branches: '3 sucursales', users: '20 usuarios', delivery: true, dailyAiQueries: '1,000', monthlyAiTokens: 30 },
] as const

export const restaurantPlanFeatures = [
  ['Salón y cocina', 'Plano de mesas, pedidos desde el celular del mozo, carta con modificadores y comandas por estación en pantalla o impresas.'],
  ['Caja y facturación', 'Apertura y cierre de turnos, arqueo de efectivo, registro de ingresos, gastos y retiros, y emisión de boletas y facturas electrónicas.'],
  ['Inventario y recetas', 'Stock por sucursal y almacén, historial de movimientos (kardex) y descuento automático de insumos al enviar comandas.'],
  ['Asistencia y equipo', 'Horarios por trabajador, marcación de entrada y salida con geolocalización y revisión de tardanzas por sucursal.'],
  ['Promociones y ventas', 'Promociones por plato, categoría y horario. Reportes de ventas, ticket promedio, platos más vendidos y horas punta.'],
  ['Asistente y recomendaciones', 'Consulta ventas, rendimiento de mozos y stock bajo con IA. Revisa un resumen diario con alertas y una recomendación según los datos del negocio.'],
] as const

export const services = [
  { slug: 'aplicaciones-web', title: 'Aplicaciones web', text: 'Portales y sistemas internos diseñados para los procesos de tu equipo.' },
  { slug: 'aplicaciones-moviles', title: 'Aplicaciones móviles', text: 'Herramientas móviles para clientes y equipos que trabajan fuera de la oficina.' },
  { slug: 'integraciones-api', title: 'Integraciones API', text: 'Conectamos tus sistemas para que compartan información.' },
  { slug: 'automatizacion', title: 'Automatización', text: 'Reducimos tareas repetitivas y pasos manuales en tu operación.' },
] as const

export const processSteps = [
  ['Descubrimiento', 'Entendemos el problema, a los usuarios y cómo trabaja tu equipo.'],
  ['Diseño y planificación', 'Acordamos el alcance y definimos el flujo de trabajo.'],
  ['Desarrollo', 'Construimos el software en etapas que puedes revisar.'],
  ['Validación y pruebas', 'Probamos los flujos con escenarios de tu operación.'],
  ['Implementación y evolución', 'Planificamos la puesta en marcha y los siguientes cambios.'],
] as const

export const questions = [
  ['¿Qué diferencia hay entre un SaaS y un software a medida?', 'Un SaaS es un producto con funcionalidades ya definidas, que se usa mediante una suscripción. El software a medida se construye para los procesos y requisitos de tu empresa.'],
  ['¿Puedo solicitar una demostración?', 'Sí. En la página de demo puedes enviarnos tu solicitud para conocer Soft Flyer Restaurantes.'],
  ['¿Pueden desarrollar un sistema para mi empresa?', 'Sí. Cuéntanos qué proceso quieres resolver para definir el alcance y cotizarlo.'],
  ['¿Pueden integrar el software con otros sistemas?', 'Evaluamos las interfaces y los datos de los sistemas involucrados para definir qué se puede integrar y cómo.'],
  ['¿Cómo funciona el proceso de desarrollo?', 'Partimos del problema, acordamos un alcance, desarrollamos por etapas y validamos los flujos antes de implementar.'],
  ['¿Ofrecen implementación y soporte?', 'Podemos definir el acompañamiento de implementación y soporte al revisar tu proyecto o plan.'],
  ['¿Cómo puedo solicitar una cotización?', 'En la página de cotización puedes describir tu proyecto y compartir tus datos para que conversemos.'],
] as const
