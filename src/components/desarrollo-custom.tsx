import React, { useRef, useState, useEffect } from 'react';
import { Zap, Check, Database, Code, Shield, Lock, RefreshCw, Server, Bot, FileText, Cpu, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const DesarrolloCustom: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const features = [
    { icon: <Database className="w-6 h-6" />, title: 'APIs internas y externas', desc: 'Creamos APIs RESTful, GraphQL o WebSockets para conectar tus sistemas legacy, CRMs, ERPs o cualquier servicio propietario.' },
    { icon: <Bot className="w-6 h-6" />, title: 'Agentes inteligentes', desc: 'Automatizamos procesos con asistentes de IA, chatbots y agentes autónomos que se integran a tus APIs para tareas complejas.' },
    { icon: <Code className="w-6 h-6" />, title: 'Recursos únicos', desc: 'Aprovechamos tus activos digitales: bases de datos internas, archivos, microservicios, dispositivos IoT y más.' },
    { icon: <Shield className="w-6 h-6" />, title: 'Seguridad en APIs', desc: 'Implementamos autenticación OAuth2, JWT, API Keys y cifrado avanzado para proteger cada intercambio de datos.' },
    { icon: <Server className="w-6 h-6" />, title: 'Alta disponibilidad', desc: 'Diseñamos arquitecturas resistentes con balanceo de carga, caché y bases de datos replicadas para un uptime del 99.9%.' },
    { icon: <RefreshCw className="w-6 h-6" />, title: 'Actualización continua', desc: 'Versionado de APIs, documentación interactiva (Swagger/Postman) y soporte para evolucionar tus integraciones sin afectar el negocio.' },
    { icon: <FileText className="w-6 h-6" />, title: 'Optimización de documentos', desc: 'Extracción, clasificación y procesamiento inteligente de documentos (facturas, contratos, informes) usando OCR e IA.' },
    { icon: <Cpu className="w-6 h-6" />, title: 'IoT con API', desc: 'Conecta dispositivos IoT (sensores, cámaras, wearables) a tus APIs para monitoreo en tiempo real y control remoto.' }
  ];

  // Imágenes para cada tarjeta (más llamativas)
  const cardImages = [
    'https://media.licdn.com/dms/image/v2/D4D12AQFZROZGmMMF_Q/article-cover_image-shrink_720_1280/B4DZgKWBLFGkAI-/0/1752520203127?e=2147483647&v=beta&t=QF_Hp6FvzwMeZfvzt6JfHsqfGkDxM9vdV7G04hxImEE',
    'https://www.channelpartner.es/wp-content/uploads/2024/11/agentes-inteligentes-de-IA-buena.jpg',
    'https://revistaempresarial.com/wp-content/uploads/2023/03/DispIoT_Empresas.jpg',
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://whitestack.com/wp-content/uploads/2025/11/ha-architecture-diagram-1024x576.jpg',
    'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://latam.requordit.com/wp-content/webp-express/webp-images/uploads/2025/01/gestion-documental-con-ia.jpg.webp',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  // Obtener ancho real de tarjeta más gap
  const getCardScrollStep = (): number => {
    if (!carouselRef.current) return 300;
    const firstCard = carouselRef.current.querySelector('.carousel-card') as HTMLElement;
    if (!firstCard) return 300;
    const cardWidth = firstCard.offsetWidth;
    const gap = 32; // gap-8 = 2rem = 32px
    return cardWidth + gap;
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    setAutoplay(false);
    if (carouselRef.current) {
      const step = getCardScrollStep();
      const newScrollLeft = direction === 'left' 
        ? carouselRef.current.scrollLeft - step 
        : carouselRef.current.scrollLeft + step;
      carouselRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
    setTimeout(() => setAutoplay(true), 5000);
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const step = getCardScrollStep();
      const index = Math.round(carouselRef.current.scrollLeft / step);
      setCurrentIndex(Math.min(Math.max(0, index), features.length - 1));
    }
  };

  // Autoplay effect
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const step = getCardScrollStep();
        const nextIndex = (currentIndex + 1) % features.length;
        carouselRef.current.scrollTo({ left: step * nextIndex, behavior: 'smooth' });
        setCurrentIndex(nextIndex);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [autoplay, currentIndex, features.length]);

  return (
    <div className="min-h-screen bg-white font-sans">
      <main>
        {/* Fondo mejorado: imagen más visible y overlay ligero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Imagen de fondo con opacidad notable (30%) */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30 pointer-events-none" />
          {/* Overlay sutil para dar contraste al texto */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Encabezado principal con énfasis en IA */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-black px-4 py-2 rounded-full mb-6 shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                POTENCIADO CON INTELIGENCIA ARTIFICIAL
                <Zap className="w-3.5 h-3.5" />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-800 tracking-tight leading-tight">
                Desarrollo Custom
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  para tu empresa
                </span>
              </h1>
              <p className="text-slate-600 text-xl md:text-2xl mt-6 max-w-2xl mx-auto leading-relaxed font-medium">
                Creamos plataformas completas conectadas con las{' '}
                <strong className="text-blue-600">API's y recursos únicos</strong>{' '}
                de tu negocio. <strong className="text-cyan-600">Integramos IA</strong> para automatizar procesos, optimizar documentos y potenciar tus agentes inteligentes.
              </p>
            </div>

            {/* Carrusel llamativo - Tarjetas más angostas (anchitas) con imagen */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-slate-800">
                  Integración total con tu ecosistema
                </h2>
                <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                  Desarrollamos soluciones que se conectan a la perfección con tus sistemas internos, bases de datos, servicios externos y cualquier recurso digital exclusivo de tu empresa.
                </p>
              </div>

              <div className="relative">
                {/* Botones de navegación con diseño moderno */}
                <button 
                  onClick={() => scrollCarousel('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 hidden md:flex items-center justify-center"
                  style={{ marginLeft: '-1rem' }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollCarousel('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 hidden md:flex items-center justify-center"
                  style={{ marginRight: '-1rem' }}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Carrusel scrollable con tarjetas de ancho fijo (anchitas) */}
                <div 
                  ref={carouselRef}
                  onScroll={handleScroll}
                  className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 px-4 scroll-smooth"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {features.map((item, idx) => (
                    <div 
                      key={item.title} 
                      className="carousel-card w-[260px] sm:w-[280px] lg:w-[300px] flex-shrink-0 snap-start bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20 group border border-gray-100"
                    >
                      {/* Imagen superior para darle más vida */}
                      <div className="h-36 w-full overflow-hidden">
                        <img 
                          src={cardImages[idx % cardImages.length]} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      {/* Contenido con icono, título y descripción */}
                      <div className="p-5">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                          <div className="text-white">{item.icon}</div>
                        </div>
                        <h3 className="text-lg font-black text-slate-800 mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                        {/* Línea decorativa al hover */}
                        <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300 group-hover:w-full" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Indicadores (dots) más atractivos */}
                <div className="flex justify-center gap-3 mt-6">
                  {features.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setAutoplay(false);
                        if (carouselRef.current) {
                          const step = getCardScrollStep();
                          carouselRef.current.scrollTo({ left: step * idx, behavior: 'smooth' });
                          setCurrentIndex(idx);
                        }
                        setTimeout(() => setAutoplay(true), 5000);
                      }}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentIndex === idx 
                          ? 'w-8 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md' 
                          : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Galería de imágenes referenciales (sin cambios) */}
            <div className="mt-20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-slate-800">Tecnologías que impulsamos</h3>
                <p className="text-slate-500">Ejemplos de integraciones reales con agentes, APIs y documentos</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                  <img src="https://images.unsplash.com/photo-1676299081847-824916de030a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Agentes IA" className="w-full h-48 object-cover" />
                  <div className="p-4 bg-white">
                    <p className="font-bold text-slate-800">Agentes inteligentes con IA</p>
                    <p className="text-sm text-slate-500">Automatización de flujos de trabajo y atención al cliente 24/7.</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="APIs y nube" className="w-full h-48 object-cover" />
                  <div className="p-4 bg-white">
                    <p className="font-bold text-slate-800">Arquitectura de APIs</p>
                    <p className="text-sm text-slate-500">Escalable, documentada y lista para cualquier frontend.</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                  <img src="https://www.channelpartner.es/wp-content/uploads/2023/07/GESTION-DOCUMENTAL-1.jpg" alt="Optimización documentos" className="w-full h-48 object-cover" />
                  <div className="p-4 bg-white">
                    <p className="font-bold text-slate-800">Gestión documental inteligente</p>
                    <p className="text-sm text-slate-500">OCR, extracción de datos y automatización de procesos documentales.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Beneficios clave */}
            <div className="mt-20 bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-black text-slate-800 mb-4">¿Por qué APIs a medida?</h3>
                  <ul className="space-y-3">
                    {[
                      'Conectas tus sistemas existentes sin migraciones costosas.',
                      'Automatizas procesos internos y externos (facturación, inventario, CRM).',
                      'Creas experiencias omnicanal (web, app móvil, kioscos, wearables).',
                      'Escalas sin límites: cada API puede crecer independientemente.',
                      'Mantienes el control total de tus datos y recursos.'
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Lock className="w-6 h-6 text-blue-600" />
                    <h4 className="font-black text-slate-800">Seguridad ante todo</h4>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Tus APIs y recursos únicos estarán protegidos con estándares empresariales: cifrado en tránsito y reposo, control de accesos, auditoría de eventos y cumplimiento normativo (GDPR, PCI, etc.).
                  </p>
                </div>
              </div>
            </div>

            {/* Cierre */}
            <div className="mt-16 text-center text-slate-400 text-sm">
              <p>¿Listo para potenciar tu negocio con una plataforma conectada a tus APIs, recursos únicos e inteligencia artificial?</p>
              <p className="mt-2">Contáctanos para una asesoría personalizada.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesarrolloCustom;