import imgAlpetravel from '../assets/images/marcas_clientes/alpetravel.webp';
import imgAmaru from '../assets/images/marcas_clientes/amaru.jpg.jpeg';
import imgBlackhouse from '../assets/images/marcas_clientes/blackhouse.jpg.jpeg';
import imgBolivar from '../assets/images/marcas_clientes/clinicaBolivar.png';
import imgEmapa from '../assets/images/marcas_clientes/emapa.jpeg';
import imgIceCrazy from '../assets/images/marcas_clientes/iceCrazy.jpg.jpeg';
import imgOe from '../assets/images/marcas_clientes/oe.png';
import imgSarcos from '../assets/images/marcas_clientes/sarcos.jpg.jpeg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandFeature from './BrandFeature';
import FeatureVideo from './FeatureVideo';
// import FeatureCotizacion from './FeatureCotizacion';
import {
  Quote,
  Star,
  CheckCircle2,
  ArrowRight,
  FileText,
  UtensilsCrossed,
  Pill,
  Wrench,
  ShoppingCart,
  Truck,
  Hotel,
  Activity,
  Factory
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';


// ─── Datos de rubros para la sección Soluciones Softlyer ───
const rubros = [
  {
    id: 'restaurantes', label: 'Restaurantes', icon: UtensilsCrossed, imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80', gradientFrom: 'from-orange-400', gradientTo: 'to-red-500', shadowColor: 'shadow-orange-200/50', borderHover: 'hover:border-orange-200', shadowHover: 'hover:shadow-orange-100/50', tagText: 'text-orange-600', bgGlow: 'from-orange-50/60',
    descripcion: 'Agiliza pedidos de mesa y delivery. Control de caja exacto, emisión de boletas y facturas al instante desde cualquier dispositivo.',
    beneficios: ['Facturación por mesa y delivery en tiempo real', 'Cierre de caja diario automatizado', 'Control de consumo y stock de insumos', 'Integrado con SUNAT sin pasos manuales']
  },
  {
    id: 'farmacias', label: 'Farmacias', icon: Pill, imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80', gradientFrom: 'from-emerald-400', gradientTo: 'to-green-600', shadowColor: 'shadow-emerald-200/50', borderHover: 'hover:border-emerald-200', shadowHover: 'hover:shadow-emerald-100/50', tagText: 'text-emerald-700', bgGlow: 'from-emerald-50/60',
    descripcion: 'Venta rápida con código de barras, control de vencimientos y alertas de stock crítico. Cumplimiento 100% con regulaciones.',
    beneficios: ['Alerta de vencimiento de medicamentos', 'Boletas y facturas con detalle de lotes', 'Stock mínimo con pedido automático', 'Registro de ventas con receta médica']
  },
  {
    id: 'ferreterias', label: 'Ferreterías', icon: Wrench, imageUrl: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80', gradientFrom: 'from-yellow-400', gradientTo: 'to-amber-500', shadowColor: 'shadow-yellow-200/50', borderHover: 'hover:border-yellow-200', shadowHover: 'hover:shadow-yellow-100/50', tagText: 'text-yellow-700', bgGlow: 'from-yellow-50/60',
    descripcion: 'Maneja miles de SKUs con facilidad. Facturación por unidad, metro o kg. Control de deudas y reportes de ventas por categoría.',
    beneficios: ['Catálogo de productos con múltiples unidades', 'Crédito y cobranza a clientes frecuentes', 'Factura en segundos sin errores de cálculo', 'Reporte de rentabilidad por producto']
  },
  {
    id: 'minimarkets', label: 'Minimarkets', icon: ShoppingCart, imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80', gradientFrom: 'from-sky-400', gradientTo: 'to-cyan-500', shadowColor: 'shadow-sky-200/50', borderHover: 'hover:border-sky-200', shadowHover: 'hover:shadow-sky-100/50', tagText: 'text-sky-700', bgGlow: 'from-sky-50/60',
    descripcion: 'Ventas rápidas en caja con escáner. Control preciso de inventario, automatización de descuentos y seguimiento de compras en tiempo real.',
    beneficios: ['Control preciso del inventario en tiempo real', 'Automatización de descuentos y promociones', 'Cierre de caja multi-turno', 'Integración con proveedores y pedidos']
  },
  {
    id: 'distribuidoras', label: 'Distribuidoras', icon: Truck, imageUrl: 'https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?auto=format&fit=crop&w=800&q=80', gradientFrom: 'from-blue-500', gradientTo: 'to-indigo-600', shadowColor: 'shadow-blue-200/50', borderHover: 'hover:border-blue-200', shadowHover: 'hover:shadow-blue-100/50', tagText: 'text-blue-700', bgGlow: 'from-blue-50/60',
    descripcion: 'Gestión de rutas, pedidos de vendedores en campo y facturación masiva. Dashboard de cobranza por zona en tiempo real.',
    beneficios: ['Pedidos desde celular por vendedores en ruta', 'Facturación masiva a múltiples clientes', 'Control de créditos y cobranza por zona', 'Liquidación de vendedores automatizada']
  },
  {
    id: 'hoteles', label: 'Hoteles', icon: Hotel, imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', gradientFrom: 'from-violet-500', gradientTo: 'to-purple-600', shadowColor: 'shadow-violet-200/50', borderHover: 'hover:border-violet-200', shadowHover: 'hover:shadow-violet-100/50', tagText: 'text-violet-700', bgGlow: 'from-violet-50/60',
    descripcion: 'Check-in/check-out integrado con facturación. Emisión de boletas al término de estancia, reporte de ocupación y facturación por empresa.',
    beneficios: ['Factura automática al hacer check-out', 'Registro de consumos por habitación', 'Facturación a empresas con RUC', 'Reporte de ocupación y rentabilidad']
  },
  {
    id: 'clinicas', label: 'Clínicas', icon: Activity, imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', gradientFrom: 'from-rose-400', gradientTo: 'to-pink-500', shadowColor: 'shadow-rose-200/50', borderHover: 'hover:border-rose-200', shadowHover: 'hover:shadow-rose-100/50', tagText: 'text-rose-700', bgGlow: 'from-rose-50/60',
    descripcion: 'Facturación de consultas, procedimientos y hospitalización. Integración con seguros y EPS. Historial de pacientes ligado a sus comprobantes.',
    beneficios: ['Facturación por servicio médico y procedimiento', 'Integración con seguros y EPS', 'Historial de pagos por paciente', 'Emisión de facturas a empresas convenio']
  },
  {
    id: 'acopio', label: 'Centros de Acopio', icon: Factory, imageUrl: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=800&q=80', gradientFrom: 'from-slate-600', gradientTo: 'to-slate-800', shadowColor: 'shadow-slate-300/50', borderHover: 'hover:border-slate-300', shadowHover: 'hover:shadow-slate-100/50', tagText: 'text-slate-700', bgGlow: 'from-slate-50/60',
    descripcion: 'Control de ingreso y salida de mercadería por lote y peso. Liquidación a proveedores con comprobante electrónico y trazabilidad completa.',
    beneficios: ['Trazabilidad de lote desde origen', 'Liquidación automática a proveedores', 'Comprobantes de compra y venta integrados', 'Control de inventario por almacén']
  },
];

// ─── Sección embebida en la landing ───
const SolucionesRubrosSection = () => {
  const [activeRubro, setActiveRubro] = useState(rubros[0]);
  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden" id="soluciones-rubros">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-cyan-50/60 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 text-xs font-black px-5 py-2 rounded-full mb-5 tracking-widest uppercase">
            <FileText className="w-3.5 h-3.5" />
            Soluciones Softlyer
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight leading-tight">
            Software para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">cada rubro</span>
          </h2>
          <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
            Facturación electrónica y gestión adaptada a la realidad de tu negocio. Selecciona tu sector.
          </p>
        </motion.div>
        {/* Pills de rubros */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {rubros.map(r => (
            <button key={r.id} onClick={() => setActiveRubro(r)}
              className={`group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border-2 transition-all duration-300 cursor-pointer ${activeRubro.id === r.id
                ? `bg-gradient-to-r ${r.gradientFrom} ${r.gradientTo} text-white border-transparent shadow-lg ${r.shadowColor}`
                : 'bg-white border-slate-200 text-slate-600 hover:border-cyan-300 hover:text-cyan-600 hover:shadow-md'
                }`}
            >
              <r.icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${activeRubro.id === r.id ? 'scale-110 text-white' : 'text-slate-400 group-hover:text-cyan-500'}`} />
              <span>{r.label}</span>
            </button>
          ))}
        </motion.div>
        {/* Panel de detalle con Framer Motion */}
        <div className="min-h-[550px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRubro.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Card izquierda: descripción y foto */}
              <div className="group lg:col-span-8 relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 md:p-10 text-white shadow-2xl border border-slate-800/60 flex flex-col md:flex-row gap-8 items-stretch transition-all duration-300 hover:border-slate-700/80">
                {/* Brillo dinámico con el gradiente del rubro */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${activeRubro.gradientFrom} ${activeRubro.gradientTo} opacity-10 rounded-full blur-3xl`} />
                  <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br ${activeRubro.gradientFrom} ${activeRubro.gradientTo} opacity-10 rounded-full blur-3xl`} />
                </div>

                {/* Columna de texto */}
                <div className="relative z-10 flex-1 flex flex-col justify-between min-h-[360px]">
                  <div>
                    <span className="inline-flex items-center gap-2 bg-white/10 text-cyan-200 text-xs font-bold px-3 py-1.5 rounded-full border border-white/10 mb-6 backdrop-blur-sm">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-br ${activeRubro.gradientFrom} ${activeRubro.gradientTo} animate-pulse`} />
                      {activeRubro.label.toUpperCase()}
                    </span>

                    {/* Icono del Rubro estilizado y moderno */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeRubro.gradientFrom} ${activeRubro.gradientTo} flex items-center justify-center text-white mb-6 shadow-lg ${activeRubro.shadowColor} group-hover:scale-105 transition-transform duration-300`}>
                      <activeRubro.icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black leading-snug mb-4">
                      Softlyer para{' '}
                      <span className={`text-transparent bg-clip-text bg-gradient-to-r ${activeRubro.gradientFrom} ${activeRubro.gradientTo}`}>{activeRubro.label}</span>
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-sm max-w-lg mb-7">{activeRubro.descripcion}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <a href="https://wa.me/925725091" target="_blank" rel="noreferrer"
                      className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${activeRubro.gradientFrom} ${activeRubro.gradientTo} text-white px-5 py-3.5 rounded-2xl font-bold text-sm shadow-lg ${activeRubro.shadowColor} transition-all hover:scale-[1.03] active:scale-95 shrink-0`}>
                      <FaWhatsapp className="w-5 h-5 text-white" />
                      Cotizar para mi negocio
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <Link to="/planes"
                      className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3.5 rounded-2xl font-bold text-sm transition-all hover:scale-[1.03] backdrop-blur-sm text-center">
                      Consultar planes
                    </Link>
                  </div>
                </div>

                {/* Columna de foto: Completamente visible y de gran tamaño */}
                <div className="relative z-10 w-full md:w-[280px] lg:w-[360px] h-72 md:h-auto shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-slate-800/80 group/img">
                  <img
                    src={activeRubro.imageUrl}
                    alt={activeRubro.label}
                    className="w-full h-full object-cover transition-transform duration-750 ease-out group-hover/img:scale-105"
                  />
                  {/* Overlay sutil inferior para dar profundidad */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              {/* Card derecha: beneficios */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className={`rounded-[2rem] border-2 border-slate-100 ${activeRubro.borderHover} bg-gradient-to-br ${activeRubro.bgGlow} to-white px-8 py-5 transition-all duration-300 shadow-sm`}>
                  <p className={`text-xs font-black tracking-widest uppercase mb-1 ${activeRubro.tagText}`}>Beneficios clave</p>
                  <h3 className="text-xl font-black text-slate-800">¿Qué ganas con nuestro sistema?</h3>
                </div>

                <div className="flex flex-col gap-3 flex-1">
                  {activeRubro.beneficios.map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.25 }}
                      className={`group flex items-start gap-4 bg-white border-2 border-slate-100 ${activeRubro.borderHover} ${activeRubro.shadowHover} rounded-[1.5rem] px-6 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5`}
                    >
                      <div className={`w-8 h-8 flex-shrink-0 bg-gradient-to-br ${activeRubro.gradientFrom} ${activeRubro.gradientTo} rounded-xl flex items-center justify-center shadow-md ${activeRubro.shadowColor}`}>
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-slate-700 font-semibold text-sm leading-relaxed pt-1">{b}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="rounded-[1.5rem] bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 px-6 py-4 flex items-center gap-4 shadow-md">
                  <div className={`w-10 h-10 bg-gradient-to-br ${activeRubro.gradientFrom} ${activeRubro.gradientTo} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${activeRubro.shadowColor}`}>
                    <span className="text-white text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-white font-black text-sm">+200 empresas del mismo rubro</p>
                    <p className="text-slate-400 text-xs">ya gestionan con Softlyer · Garantía SUNAT</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTE DE LA PÁGINA PRINCIPAL ---
const LandingPage = () => {
  // Array doble para crear el efecto infinito sin cortes limpios
  const logos = [
    { src: imgAlpetravel, alt: "Alpe Travel" },
    { src: imgAmaru, alt: "Amaru" },
    { src: imgBlackhouse, alt: "Black House" },
    { src: imgBolivar, alt: "Clinica Bolivar" },
    { src: imgEmapa, alt: "Emapa" },
    { src: imgIceCrazy, alt: "Ice Crazy" },
    { src: imgOe, alt: "OE" },
    { src: imgSarcos, alt: "Sarcos" },
  ];

  const casosDeExito = [
    {
      empresa: "EMAPA San Luis",
      rubro: "Servicios y Saneamiento",
      ubicacion: "Huánuco - Perú",
      texto: "El sistema AppWeb a medida transformó nuestra recaudación y gestión de agua. Ahora tenemos un control empresarial absoluto sobre los pagos diarios, cortes y piletas.",
      img: imgEmapa
    },
    {
      empresa: "Restaurante Amaru",
      rubro: "Gastronomía",
      ubicacion: "Pasco - Perú",
      texto: "Implementar el sistema de facturación y control de mesas en tiempo real fue el mejor acierto. Las meseras toman los pedidos al instante y el flujo de caja es exacto.",
      img: imgAmaru
    },
    {
      empresa: "Alpetravel",
      rubro: "Agencia de Viajes",
      ubicacion: "Huánuco - Perú",
      texto: "Nuestra nueva Landing Page destaca perfectamente nuestros servicios de vuelo. La plataforma transmite tanta profesionalidad que la confianza de los turistas aumentó drásticamente.",
      img: imgAlpetravel
    },
    {
      empresa: "Grupo Sarcos",
      rubro: "Comercio y Distribución",
      ubicacion: "Tingo María - Perú",
      texto: "El dashboard y los reportes integrados nos dieron claridad. El análisis de ventas nos permite entender a fondo a nuestros clientes y tomar decisiones estratégicas.",
      img: imgSarcos
    }
  ];

  // Duplicamos las imágenes para que el loop no tenga espacios en blanco
  const infiniteLogos = [...logos, ...logos];

  return (
    <div className="bg-white">
      {/* 1. SECCIÓN HERO (TOTALMENTE BLANCA) */}
      <section className="pt-20 pb-12 px-6 max-w-7xl mx-auto text-center overflow-hidden" id="inicio">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 inline-block"
        >
          <span className="bg-cyan-100 text-cyan-800 text-sm font-bold px-4 py-1.5 rounded-full">
            Software y Tecnología
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black text-slate-800 mb-6 tracking-tight"
        >
          Gestión integral <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            para tu empresa
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium"
        >
          Simplifica y optimiza cada aspecto de tu negocio, todo desde un solo lugar.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
          className="flex justify-center gap-4"
        >
          <Link
            to="/planes"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-cyan-200 hover:scale-105 transition-all flex items-center gap-2 active:scale-95"
          >
            ¡Cotiza tu proyecto! <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </section>

      {/* CARRUSEL DE MARCAS INFINITO */}
      <section className="py-10 bg-slate-50/50 border-y border-slate-100 overflow-hidden relative">
        <p className="text-center text-sm font-bold text-slate-600 mb-8 tracking-wide">
          CON LA CONFIANZA DE EMPRESAS LÍDERES
        </p>

        {/* Contenedor del Carrusel Animado */}
        <div className="relative w-full flex items-center">
          {/* Gradientes laterales para difuminar entrada/salida */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Track del carrusel */}
          <div className="flex w-max animate-scroll gap-16 items-center px-8 cursor-default">
            {infiniteLogos.map((logo, index) => (
              <div key={index} className="w-[180px] h-[80px] flex items-center justify-center flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <img src={logo.src} alt={logo.alt} className="max-w-full max-h-full object-contain mix-blend-multiply" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN SOBRE LA MARCA (TEMA PRINCIPAL) */}
      <BrandFeature />

      {/* SECCIÓN DE VIDEO EMOCIONAL / FUNCIONALIDAD */}
      <FeatureVideo />



      {/* SECCIÓN: SOLUCIONES SOFTLYER POR RUBRO */}
      <SolucionesRubrosSection />

      {/* SECCIÓN: SOLUCIONES DIGITALES */}
      <section className="py-24 bg-white relative overflow-hidden" id="soluciones">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-50/60 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 text-center">
            <span className="inline-block bg-cyan-100 text-cyan-800 text-xs font-black px-5 py-2 rounded-full mb-5 tracking-widest uppercase">
              Soluciones Digitales
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight leading-tight">
              Landings y AppWebs
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400"> que convierten</span>
            </h2>
            <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
              Diseñamos páginas modernas para captar clientes, vender más y presentar tu negocio con una imagen profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* CARD PRINCIPAL OSCURA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-10 text-white shadow-2xl border border-slate-700/60"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 bg-white/10 text-cyan-200 text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  LANDING PAGE PREMIUM
                </span>
                <h3 className="mt-5 text-3xl md:text-4xl font-black leading-tight">
                  Tu negocio, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                    listo para vender online
                  </span>
                </h3>
                <p className="mt-5 text-slate-300 leading-relaxed max-w-xl text-sm">
                  Creamos landings rápidas, elegantes y enfocadas en conversiones. Perfectas para clínicas, dentistas,
                  abogados, inmobiliarias, restaurantes y cualquier negocio que necesite captar clientes.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
                  {[
                    { label: "Entrega", value: "3–5 días" },
                    { label: "Diseño", value: "Responsive" },
                    { label: "Botón", value: "WhatsApp" },
                    { label: "Objetivo", value: "Más leads" },
                  ].map(({ label, value }) => (
                    <div key={label} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                      <p className="text-xs text-slate-400">{label}</p>
                      <p className="text-base font-bold mt-1">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 text-sm">
                    Quiero una landing
                  </button>
                  <button className="px-8 py-4 rounded-2xl font-bold border border-white/15 bg-white/5 hover:bg-white/10 transition-all text-sm">
                    Ver ejemplos
                  </button>
                </div>
              </div>
            </motion.div>

            {/* PANEL LATERAL */}
            <div className="grid grid-cols-1 gap-5">
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm hover:shadow-xl hover:shadow-cyan-100/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-md shadow-cyan-300/30">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-black text-cyan-600 uppercase tracking-widest">01 · Landing Pages</p>
                </div>
                <h4 className="text-xl font-bold text-slate-800">Páginas que presentan y venden</h4>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                  Ideales para campañas, promociones, servicios y captación de clientes por Facebook, Instagram o Google.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["WhatsApp", "Formulario", "SEO básico"].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold">{tag}</span>
                  ))}
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-300/30">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <p className="text-sm font-black text-blue-600 uppercase tracking-widest">02 · AppWebs</p>
                </div>
                <h4 className="text-xl font-bold text-slate-800">Sistemas web para tu negocio</h4>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                  Reservas, citas, inventario, clientes, reportes y módulos administrativos con interfaz limpia y simple.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Panel", "Reportes", "Base de datos"].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">{tag}</span>
                  ))}
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="group rounded-[2rem] border border-slate-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-7 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-300/30">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p className="text-sm font-black text-slate-700 uppercase tracking-widest">03 · Soporte y evolución</p>
                </div>
                <h4 className="text-xl font-bold text-slate-800">Crece sin rehacer todo</h4>
                <p className="mt-2 text-slate-600 leading-relaxed text-sm">
                  Empezamos con una landing y luego puedes escalar a automatizaciones, dashboards o una app web completa.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[{ top: "Inicio", bot: "Landing" }, { top: "Luego", bot: "Automatiza" }, { top: "Escala", bot: "AppWeb" }].map(({ top, bot }) => (
                    <div key={bot} className="rounded-2xl bg-white/80 border border-white p-3 text-center">
                      <p className="text-xs text-slate-500">{top}</p>
                      <p className="font-bold text-slate-800 mt-1 text-sm">{bot}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* <FeatureCotizacion /> */}


      {/* 3. SECCIÓN TESTIMONIOS (DISEÑO BURBUJA) */}
      <section className="py-24 bg-slate-50/50 relative overflow-hidden font-sans">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
        <div className="absolute -left-40 top-40 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -right-40 bottom-10 w-96 h-96 bg-yellow-100/30 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Cabecera */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">
              Casos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Éxito</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
              Negocios de todo el país ya están escalando sus operaciones gracias a nuestras Landing Pages y AppWebs a medida.
            </p>
          </div>

          {/* Grilla de Testimonios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {casosDeExito.map((caso, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-500"
              >
                {/* Icono de comillas gigante de fondo */}
                <Quote className="absolute top-8 right-8 w-24 h-24 text-slate-50 opacity-50 rotate-3 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 pointer-events-none" strokeWidth={1} />

                {/* Estrellas */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Texto del testimonio */}
                <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10 font-medium italic">
                  "{caso.texto}"
                </p>

                {/* Info del Cliente */}
                <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-slate-100">
                  {/* Contenedor del logo con fondo blanco, bordes y sombra sutil */}
                  <div className="w-14 h-14 rounded-2xl border border-slate-100 bg-white p-1 flex items-center justify-center shadow-md shrink-0 overflow-hidden">
                    <img
                      src={caso.img}
                      alt={`Logo ${caso.empresa}`}
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg leading-tight">{caso.empresa}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-1">
                      <p className="text-xs font-semibold text-cyan-600 tracking-wide uppercase">
                        {caso.rubro}
                      </p>
                      <span className="hidden sm:inline text-slate-300">•</span>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                        {caso.ubicacion}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;