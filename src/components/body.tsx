import imgAlpetravel from '../assets/images/marcas_clientes/alpetravel.webp';
import imgAmaru from '../assets/images/marcas_clientes/amaru.jpg.jpeg';
import imgBlackhouse from '../assets/images/marcas_clientes/blackhouse.jpg.jpeg';
import imgBolivar from '../assets/images/marcas_clientes/clinicaBolivar.png';
import imgEmapa from '../assets/images/marcas_clientes/emapa.jpeg';
import imgIceCrazy from '../assets/images/marcas_clientes/iceCrazy.jpg.jpeg';
import imgOe from '../assets/images/marcas_clientes/oe.png';
import imgSarcos from '../assets/images/marcas_clientes/sarcos.jpg.jpeg';
import BrandFeature from './BrandFeature';
import FeatureVideo from './FeatureVideo';
import FeatureCotizacion from './FeatureCotizacion';
import { Quote, Star } from 'lucide-react';
import PrediccionVentas from './PrediccionVentas';

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
            <section className="pt-20 pb-12 px-6 max-w-7xl mx-auto text-center" id="inicio">
                <div className="mb-8 inline-block">
                    <span className="bg-cyan-100 text-cyan-800 text-sm font-bold px-4 py-1.5 rounded-full">
                        Software y Tecnología
                    </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-6 tracking-tight">
                    Gestión integral <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                        para tu empresa
                    </span>
                </h1>
                <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium">
                    Simplifica y optimiza cada aspecto de tu negocio, todo desde un solo lugar.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-cyan-200 hover:scale-105 transition-all flex items-center gap-2">
                        ¡Cotiza tu proyecto! <span className="text-xl">→</span>
                    </button>
                </div>
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
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-10 text-white shadow-2xl border border-slate-700/60">
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
            </div>

            {/* PANEL LATERAL */}
            <div className="grid grid-cols-1 gap-5">
                {/* Card 1 */}
                <div className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm hover:shadow-xl hover:shadow-cyan-100/50 hover:-translate-y-0.5 transition-all duration-300">
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
                </div>

                {/* Card 2 */}
                <div className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-0.5 transition-all duration-300">
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
                </div>

                {/* Card 3 */}
                <div className="group rounded-[2rem] border border-slate-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-7 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
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
                </div>
            </div>
        </div>
    </div>
</section>

{/* SECCIÓN: PLANES Y PRECIOS */}
{/* SECCIÓN: PLANES Y PRECIOS */}
<section className="py-24 bg-slate-50/50 relative overflow-hidden" id="planes">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-blue-50/80 to-transparent rounded-full blur-3xl pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20 text-center">
            <span className="inline-block bg-cyan-100 text-cyan-800 text-xs font-black px-5 py-2 rounded-full mb-5 tracking-widest uppercase">
                Planes Softlyer
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight leading-tight">
                Elige el plan ideal para
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400"> tu negocio</span>
            </h2>
            <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
                Páginas profesionales, rápidas y enfocadas en resultados. Si necesitas algo más complejo, te lo cotizamos por WhatsApp.
            </p>
        </div>

        {/* Cards de planes - Ajustado a 2 columnas centradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch mt-8">

            {/* PLAN 1: START */}
            <div className="group relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 flex flex-col mt-4 md:mt-0">
                
                

                <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-md shadow-cyan-300/30">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <p className="text-sm font-black text-cyan-600 uppercase tracking-widest">Plan Start</p>
                </div>
                
                {/* Precios (Antes y Ahora) */}
                <div className="mb-2 flex items-end gap-2">
                    <span className="text-5xl font-black text-slate-800">S/450</span>
                    <div className="flex flex-col pb-1">
                        <span className="text-slate-400 text-sm line-through decoration-red-400/60 decoration-2 font-bold leading-none mb-1">Antes S/600</span>
                        <span className="text-slate-500 text-[10px] font-black uppercase tracking-wider leading-none">pago único</span>
                    </div>
                </div>
                
                <p className="text-slate-500 text-sm font-semibold leading-relaxed mb-8">
                    Presencia profesional.
                </p>
                
                <div className="space-y-3 flex-1">
                    {["Diseño profesional", "Adaptable a celulares", "WhatsApp", "Formulario", "Dominio .com", "Hosting 1 año", "SSL"].map((item) => (
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
                <button className="mt-8 w-full bg-slate-900 hover:bg-slate-700 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 text-sm tracking-wide">
                    Elegir plan Start
                </button>
            </div>

            {/* PLAN 2: BUSINESS - RECOMENDADO */}
            <div className="group relative rounded-[2rem] border-2 border-cyan-400 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-8 shadow-2xl shadow-cyan-400/10 transform md:scale-[1.03] flex flex-col mt-4 md:-mt-4">
                
                {/* MÁS POPULAR Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-black px-5 py-2 rounded-full shadow-lg shadow-cyan-400/30">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        RECOMENDADO
                    </span>
                </div>

                

                <div className="flex items-center gap-3 mb-6 mt-2">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-md shadow-cyan-400/30">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <p className="text-sm font-black text-cyan-300 uppercase tracking-widest">Plan Business</p>
                </div>
                
                {/* Precios (Antes y Ahora) */}
                <div className="mb-2 flex items-end gap-2">
                    <span className="text-5xl font-black text-white">S/650</span>
                    <div className="flex flex-col pb-1">
                        <span className="text-slate-400 text-sm line-through decoration-red-400/60 decoration-2 font-bold leading-none mb-1">Antes S/900</span>
                        <span className="text-cyan-500 text-[10px] font-black uppercase tracking-wider leading-none">pago único</span>
                    </div>
                </div>

                <p className="text-slate-300 text-sm font-semibold leading-relaxed mb-8">
                    Más sólido para captar clientes.
                </p>
                
                <div className="space-y-3 flex-1">
                    {["Diseño profesional", "Adaptable a celulares", "WhatsApp", "Formulario", "Dominio .com", "Hosting 1 año", "SSL", "Hasta 5 secciones", "Galería de imágenes", "Google Maps", "Correos corporativos"].map((item) => (
                        <div key={item} className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                            <div className="w-5 h-5 rounded-full bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center flex-shrink-0">
                                <svg className="w-3 h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            {item}
                        </div>
                    ))}
                </div>
                <button className="mt-8 w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 text-sm tracking-wide shadow-lg shadow-cyan-400/20">
                    Elegir plan Business
                </button>
            </div>
            
        </div>
    </div>
</section>

            <FeatureCotizacion />

            
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
                            <div key={index} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-500">
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;