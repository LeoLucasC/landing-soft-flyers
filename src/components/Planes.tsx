import React from 'react';
import { ArrowRight, Zap, Check, ShieldCheck, HeartHandshake, RefreshCw, Headphones } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Planes: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden min-h-screen font-sans" id="planes-page">
      {/* Fondos decorativos */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-50/80 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-50/60 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ─── HEADER PRINCIPAL ─── */}
        <div className="text-center pt-6 mb-12">
          <span className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 text-xs font-black px-5 py-2 rounded-full mb-5 tracking-widest uppercase">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            NUESTROS PLANES
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight leading-tight">
            El plan ideal para
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400"> tu negocio</span>
          </h1>
          <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
            Elige el plan mensual que mejor se adapte a tus necesidades de facturación y gestión comercial.
          </p>
        </div>

        {/* ─── BANNER DE INCLUSIONES COMUNES ─── */}
        <div className="max-w-5xl mx-auto mb-16 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
          <p className="text-xs font-black tracking-widest text-blue-600 uppercase text-center mb-6">TODOS NUESTROS PLANES DE FACTURACIÓN INCLUYEN</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                <RefreshCw className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Software Actualizado</h4>
                <p className="text-slate-500 text-xs mt-1">Mejoras continuas y nuevas funciones sin costo.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                <Headphones className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Soporte Técnico 24/7</h4>
                <p className="text-slate-500 text-xs mt-1">Atención permanente ante cualquier incidencia.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Asesoramiento</h4>
                <p className="text-slate-500 text-xs mt-1">Guías y soporte especializado para tu negocio.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Validación SUNAT</h4>
                <p className="text-slate-500 text-xs mt-1">Envío y validación diaria de tus comprobantes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── CARDS DE PLANES DE FACTURACIÓN (MENSUALES) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch mb-28">

          {/* PLAN 1: NUEVO RUS */}
          <div className="group relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 flex flex-col">
            <div className="mb-6">
              <span className="inline-block bg-slate-100 text-slate-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                Para Emprendedores
              </span>
              <h3 className="text-2xl font-black text-slate-800">Plan Nuevo RUS</h3>
              <p className="text-slate-400 text-xs mt-1 font-semibold">Gestión ágil para regímenes simplificados.</p>
            </div>

            {/* Precio */}
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-slate-800 text-4xl font-black">S/ 39.90</span>
                <span className="text-slate-500 text-sm font-bold">/ mes</span>
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-slate-500 text-xs font-bold">Precio Anual: S/ 360.00</span>
                <span className="bg-emerald-100 text-emerald-800 text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
                  Ahorra S/ 118
                </span>
              </div>
            </div>

            {/* Características */}
            <div className="space-y-2.5 flex-1 border-t border-slate-100 pt-6">
              {[
                "APP móvil",
                "Boleta",
                "Nota de crédito",
                "Impresión (Red y Bluetooth)",
                "Registro de ventas",
                "Registro de compras",
                "Registro de productos",
                "Control de stock",
                "Reportes",
                "Control de caja",
                "Solo 1 usuario",
                "Hasta 500 comprobantes"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-slate-600 text-sm font-semibold">
                  <div className="w-4 h-4 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-blue-600" strokeWidth={3} />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/925725091?text=Hola,%20estoy%20interesado%20en%20el%20Plan%20Nuevo%20RUS"
              target="_blank"
              rel="noreferrer"
              className="mt-8 w-full bg-slate-900 hover:bg-slate-700 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 text-sm tracking-wide flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-slate-200/50"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
              Adquirir RUS
            </a>
          </div>

          {/* PLAN 2: BÁSICO (DESTACADO) */}
          <div className="group relative rounded-[2rem] border-2 border-blue-600 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-8 shadow-2xl shadow-blue-500/10 transform md:scale-[1.03] flex flex-col md:-mt-4">
            {/* Badge RECOMENDADO */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-black px-5 py-2 rounded-full shadow-lg shadow-blue-500/30">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                MÁS POPULAR
              </span>
            </div>

            <div className="mb-6 mt-2">
              <span className="inline-block bg-blue-500/20 text-blue-300 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                Para Negocios en Crecimiento
              </span>
              <h3 className="text-2xl font-black text-white">Plan Básico</h3>
              <p className="text-slate-300 text-xs mt-1 font-semibold">Control total de inventario y facturación.</p>
            </div>

            {/* Precio */}
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-white text-4xl font-black">S/ 59.90</span>
                <span className="text-slate-400 text-sm font-bold">/ mes</span>
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-slate-300 text-xs font-bold">Precio Anual: S/ 549.90</span>
                <span className="bg-cyan-500/20 text-cyan-300 text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
                  Ahorra S/ 168
                </span>
              </div>
            </div>

            {/* Características */}
            <div className="space-y-2.5 flex-1 border-t border-slate-700/60 pt-6">
              {[
                "Factura",
                "Boleta",
                "Nota de crédito",
                "Nota de débito",
                "Proforma",
                "Orden de compra",
                "Control de inventario",
                "Control de caja",
                "Cuentas por cobrar",
                "Cuentas por pagar",
                "Múltiples Reportes",
                "Control de usuarios",
                "Hasta 5 usuarios",
                "Hasta 1000 comprobantes"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-slate-200 text-sm font-semibold">
                  <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-blue-400" strokeWidth={3} />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/925725091?text=Hola,%20estoy%20interesado%20en%20el%20Plan%20Basico"
              target="_blank"
              rel="noreferrer"
              className="mt-8 w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 text-sm tracking-wide flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-blue-500/20"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
              Adquirir Básico
            </a>
          </div>

          {/* PLAN 3: ESTÁNDAR */}
          <div className="group relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 flex flex-col">
            <div className="mb-6">
              <span className="inline-block bg-slate-100 text-slate-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                Plan Completo
              </span>
              <h3 className="text-2xl font-black text-slate-800">Plan Estándar</h3>
              <p className="text-slate-400 text-xs mt-1 font-semibold">Módulos avanzados y multialmacén.</p>
            </div>

            {/* Precio */}
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-slate-800 text-4xl font-black">S/ 79.90</span>
                <span className="text-slate-500 text-sm font-bold">/ mes</span>
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-slate-500 text-xs font-bold">Precio Anual: S/ 749.90</span>
                <span className="bg-emerald-100 text-emerald-800 text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
                  Ahorra S/ 208
                </span>
              </div>
            </div>

            {/* Características */}
            <div className="space-y-2.5 flex-1 border-t border-slate-100 pt-6">
              {[
                "Factura, Boleta, Notas de crédito y débito",
                "Proforma y Orden de compra",
                "Control de inventario y caja",
                "Cuentas por cobrar y pagar",
                "Múltiples Reportes",
                "Control de usuarios (Hasta 10 usuarios)",
                "Hasta 1500 comprobantes",
                "Restaurant (Mesas, pedidos y comandas)",
                "Guía de remisión y Liquidación de compra",
                "Hasta 2 almacenes",
                "SIRE integrado",
                "Descarga de PDF de compra"
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-slate-600 text-sm font-semibold leading-tight">
                  <div className="w-4 h-4 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-blue-600" strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/925725091?text=Hola,%20estoy%20interesado%20en%20el%20Plan%20Estandar"
              target="_blank"
              rel="noreferrer"
              className="mt-8 w-full bg-slate-900 hover:bg-slate-700 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 text-sm tracking-wide flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-slate-200/50"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
              Adquirir Estándar
            </a>
          </div>

        </div>

        {/* ─── SECCIÓN INTERMEDIA: DIVISOR Y DISEÑO WEB ─── */}
        <div className="relative mb-20">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-6 text-slate-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-500" /> ¿BUSCAS DISEÑO O DESARROLLO WEB?
            </span>
          </div>
        </div>

        {/* ─── HEADER DESARROLLO WEB ─── */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight">
            Páginas Web y Landings de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400"> Pago Único</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Planes diseñados para crear tu presencia digital profesional. Sin mensualidades recurrentes.
          </p>
        </div>

        {/* ─── CARDS DE PLANES DE DESARROLLO WEB ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto items-stretch">

          {/* PLAN START */}
          <div className="group relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-md shadow-cyan-300/30">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-sm font-black text-cyan-600 uppercase tracking-widest">Plan Start</p>
            </div>

            {/* Precio */}
            <div className="mb-2 flex items-end gap-2">
              <span className="text-5xl font-black text-slate-800">S/450</span>
              <div className="flex flex-col pb-1">
                <span className="text-slate-400 text-sm line-through decoration-red-400/60 decoration-2 font-bold leading-none mb-1">Antes S/600</span>
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-wider leading-none">pago único</span>
              </div>
            </div>

            <p className="text-slate-500 text-sm font-semibold leading-relaxed mb-8">Presencia profesional rápida en internet.</p>

            <div className="space-y-3 flex-1 border-t border-slate-100 pt-6">
              {["Diseño profesional", "Adaptable a celulares", "WhatsApp integrado", "Formulario de contacto", "Dominio .com por 1 año", "Hosting por 1 año", "Certificado de seguridad SSL"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <div className="w-5 h-5 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/925725091?text=Hola,%20estoy%20interesado%20en%20el%20Plan%20Start%20Web"
              target="_blank"
              rel="noreferrer"
              className="mt-8 w-full bg-slate-900 hover:bg-slate-700 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 text-sm tracking-wide flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-slate-200/50"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
              Elegir Plan Start
            </a>
          </div>

          {/* PLAN BUSINESS - RECOMENDADO WEB */}
          <div className="group relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-md shadow-cyan-400/30">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm font-black text-cyan-600 uppercase tracking-widest">Plan Business</p>
            </div>

            {/* Precio */}
            <div className="mb-2 flex items-end gap-2">
              <span className="text-5xl font-black text-slate-800">S/650</span>
              <div className="flex flex-col pb-1">
                <span className="text-slate-400 text-sm line-through decoration-red-400/60 decoration-2 font-bold leading-none mb-1">Antes S/900</span>
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-wider leading-none">pago único</span>
              </div>
            </div>

            <p className="text-slate-500 text-sm font-semibold leading-relaxed mb-8">Estructura sólida y correos corporativos.</p>

            <div className="space-y-3 flex-1 border-t border-slate-100 pt-6">
              {["Diseño profesional", "Adaptable a celulares", "WhatsApp integrado", "Formulario de contacto", "Dominio .com por 1 año", "Hosting por 1 año", "SSL", "Hasta 5 secciones independientes", "Galería de imágenes", "Google Maps", "Correos corporativos"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <div className="w-5 h-5 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/925725091?text=Hola,%20estoy%20interesado%20en%20el%20Plan%20Business%20Web"
              target="_blank"
              rel="noreferrer"
              className="mt-8 w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#075E54] text-white px-6 py-4.5 rounded-2xl font-black transition-all duration-300 text-[15px] tracking-wide shadow-lg shadow-green-500/10 flex items-center justify-center gap-2.5 active:scale-95"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
              Elegir Plan Business
            </a>
          </div>

        </div>

        {/* ─── NOTA / CTA INFERIOR ─── */}
        <div className="mt-24 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-50 border border-slate-200 rounded-[2rem] px-8 py-6 shadow-sm">
            <div className="text-left">
              <p className="font-black text-slate-800 text-lg">¿Necesitas algo más personalizado?</p>
              <p className="text-slate-500 text-sm mt-1">AppWebs complejas, sistemas de gran volumen o funcionalidades especiales — cotizamos a medida.</p>
            </div>
            <a
              href="https://wa.me/925725091?text=Hola,%20quiero%20cotizar%20un%20proyecto%20a%20medida"
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-cyan-200/50 transition-all hover:scale-105 active:scale-95"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
              Cotizar Proyecto
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Planes;
