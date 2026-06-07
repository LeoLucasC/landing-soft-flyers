import React, { useRef, useState, useEffect } from 'react';
import { 
  Bot, 
  Check, 
  Workflow, 
  Clock, 
  FileCheck, 
  Mail, 
  MessageSquare, 
  TrendingUp, 
  Zap, 
  Shield, 
  RefreshCw,
  ChevronLeft, 
  ChevronRight,
  Database,
  BarChart3,
  Users,
  Calendar,
  Briefcase,
  X,
  Award,
  Rocket,
  Code,
  Layers
} from 'lucide-react';

const AutomatizacionEmpresarial: React.FC = () => {
  // Carrusel de características
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Estado para el modal de detalles
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const features = [
    { 
      icon: <Workflow className="w-6 h-6" />, 
      title: 'Flujos de trabajo inteligentes', 
      desc: 'Automatiza procesos completos: desde la recepción de datos hasta la ejecución de tareas en múltiples sistemas.' 
    },
    { 
      icon: <Bot className="w-6 h-6" />, 
      title: 'Bots personalizados', 
      desc: 'Creamos asistentes virtuales que ejecutan tareas repetitivas en tus aplicaciones (CRM, ERP, hojas de cálculo, correos).' 
    },
    { 
      icon: <Clock className="w-6 h-6" />, 
      title: 'Programación de tareas', 
      desc: 'Ejecuta acciones en horarios específicos o ante eventos: facturación automática, envío de reportes, respaldos.' 
    },
    { 
      icon: <FileCheck className="w-6 h-6" />, 
      title: 'Procesamiento de documentos', 
      desc: 'Extracción de datos de facturas, contratos, formularios con OCR e IA. Clasificación y archivo automático.' 
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      title: 'Automatización de correos', 
      desc: 'Respuestas automáticas, seguimiento de clientes, envío masivo personalizado y filtrado inteligente.' 
    },
    { 
      icon: <MessageSquare className="w-6 h-6" />, 
      title: 'Chatbots omnicanal', 
      desc: 'WhatsApp, Messenger, web, Telegram. Atención 24/7, resolución de dudas, toma de pedidos y calendarización.' 
    },
    { 
      icon: <Database className="w-6 h-6" />, 
      title: 'Integración con sistemas legacy', 
      desc: 'Conectamos tus bases de datos antiguas, archivos locales o ERPs sin APIs modernas mediante RPA.' 
    },
    { 
      icon: <BarChart3 className="w-6 h-6" />, 
      title: 'Dashboards y reportes', 
      desc: 'Visualiza el rendimiento de tus procesos automatizados, ahorro de tiempo y ROI en tiempo real.' 
    }
  ];

  const cardImages = [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://www.sistemaimpulsa.com/blog/wp-content/uploads/2021/07/Asistente-virtual-en-CRM1-696x522.jpg',
    'https://i.blogs.es/7e83a8/programar-tareas-en-windows-10/1366_2000.jpg',
    'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://commerce.orisha.com//app/uploads/2025/09/Banner-chatbot-advantages-and-disadvantages.jpg',
    'https://fortia.com.mx/wp-content/uploads/2026/01/que-es-un-sistema-legacy-caracteristicas-y-migracion-3-1024x683.jpg',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  // Proyectos con información detallada (para el modal) - ahora en grid
  const proyectos = [
    {
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8MJlmrPmXvtO2QwqpU3iLvYZGQKeBrhldvQ&s',
      titulo: 'Automatización de facturación para empresa de logística',
      descripcion: 'Reducción del 95% en tiempo de emisión de facturas e integración con ERP SAP.',
      detalles: {
        problema: 'La empresa emitía manualmente 10,000+ facturas al mes, con un 3% de errores y demoras de hasta 48 horas.',
        solucion: 'Desarrollamos un bot RPA que extrae datos del sistema de envíos, los valida contra el ERP SAP y genera facturas electrónicas automáticamente.',
        tecnologias: ['RPA (UiPath)', 'SAP ERP', 'Python', 'APIs REST'],
        duracion: '3 meses',
        resultados: [
          '95% menos tiempo de emisión (de 2 horas a 6 minutos por lote)',
          '0% errores de facturación',
          'Integración con sistemas de contabilidad en tiempo real',
          'ROI positivo en 2 meses'
        ]
      }
    },
    {
      imagen: 'https://images.unsplash.com/photo-1676299081847-824916de030a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      titulo: 'Chatbot para atención al cliente en WhatsApp',
      descripcion: 'Respuesta instantánea a 10,000+ consultas mensuales, derivación a agentes humanos solo cuando es necesario.',
      detalles: {
        problema: 'Equipo de atención al cliente saturado: 90% de consultas repetitivas (estado de pedidos, horarios, precios).',
        solucion: 'Implementamos un chatbot con IA (Dialogflow + WhatsApp Business API) que resuelve preguntas frecuentes y deriva casos complejos.',
        tecnologias: ['Dialogflow CX', 'WhatsApp Business API', 'Node.js', 'MongoDB'],
        duracion: '2 meses',
        resultados: [
          'Atención 24/7, tiempo de respuesta < 3 segundos',
          'Derivación a humanos solo en 10% de las consultas',
          'Satisfacción del cliente aumentó un 40%',
          'Ahorro de 120 horas mensuales del equipo humano'
        ]
      }
    },
    {
      imagen: 'https://images.unsplash.com/photo-1551434678-e076c2236a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      titulo: 'RPA para conciliación bancaria',
      descripcion: 'Robot que extrae transacciones, las empareja con facturas y genera informes automáticos cada noche.',
      detalles: {
        problema: 'Conciliación manual de 15,000+ movimientos bancarios mensuales, con desfases de hasta 15 días.',
        solucion: 'Desarrollamos un robot que descarga extractos bancarios (API bancaria y OCR si es necesario), los empareja con facturas del ERP y genera informes.',
        tecnologias: ['Automation Anywhere', 'OCR (Tesseract)', 'SQL Server', 'Power BI'],
        duracion: '4 meses',
        resultados: [
          'Conciliación diaria en 30 minutos (antes 8 horas)',
          'Detección automática de discrepancias',
          'Dashboard en Power BI con visibilidad total',
          'Reducción de fraudes por anomalías detectadas'
        ]
      }
    }
  ];

  // Funciones para el carrusel de características
  const getCardScrollStep = (): number => {
    if (!carouselRef.current) return 300;
    const firstCard = carouselRef.current.querySelector('.carousel-card') as HTMLElement;
    if (!firstCard) return 300;
    const cardWidth = firstCard.offsetWidth;
    const gap = 32;
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

  // Abrir modal con detalles del proyecto
  const openModal = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Cerrar con tecla ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Autoplay para características
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
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Fondo dinámico */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c2236a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/70 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Encabezado principal - colores azules */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-black px-4 py-2 rounded-full mb-6 shadow-md">
                <Bot className="w-3.5 h-3.5" />
                AUTOMATIZACIÓN INTELIGENTE
                <Zap className="w-3.5 h-3.5" />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-800 tracking-tight leading-tight">
                Automatización Empresarial
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  rompe tus límites operativos
                </span>
              </h1>
              <p className="text-slate-600 text-xl md:text-2xl mt-6 max-w-2xl mx-auto leading-relaxed font-medium">
                Delega trabajos repetitivos a <strong className="text-blue-600">bots inteligentes</strong>. Integramos RPA, IA y workflows para que tu equipo se enfoque en lo que realmente importa.
              </p>
            </div>

            {/* Carrusel de características - colores azules */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-slate-800">
                  Capacidades de automatización
                </h2>
                <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                  Desde tareas simples hasta procesos complejos cross-system. Todo con monitoreo, seguridad y escalabilidad.
                </p>
              </div>

              <div className="relative">
                <button 
                  onClick={() => scrollCarousel('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 hidden md:flex"
                  style={{ marginLeft: '-1rem' }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollCarousel('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 hidden md:flex"
                  style={{ marginRight: '-1rem' }}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div 
                  ref={carouselRef}
                  onScroll={handleScroll}
                  className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 px-4 scroll-smooth"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {features.map((item, idx) => (
                    <div 
                      key={item.title} 
                      className="carousel-card w-[260px] sm:w-[280px] lg:w-[300px] flex-shrink-0 snap-start bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 group border border-gray-100"
                    >
                      <div className="h-36 w-full overflow-hidden">
                        <img 
                          src={cardImages[idx % cardImages.length]} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-5">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                          <div className="text-white">{item.icon}</div>
                        </div>
                        <h3 className="text-lg font-black text-slate-800 mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                        <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300 group-hover:w-full" />
                      </div>
                    </div>
                  ))}
                </div>

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

            {/* SECCIÓN DE PROYECTOS EN GRID (sin carrusel) */}
            <div className="mt-32">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  <Briefcase className="w-3.5 h-3.5" />
                  PORTAFOLIO DE ÉXITO
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-800">
                  Proyectos que han transformado negocios
                </h3>
                <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
                  Casos reales de automatización que hemos desarrollado. Cada proyecto representa un trabajo exitoso con resultados medibles.
                </p>
              </div>

              {/* Grid responsivo: 1 columna en móvil, 2 en tablet, 3 en escritorio */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {proyectos.map((proyecto, idx) => (
                  <div 
                    key={idx}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 border border-gray-100"
                  >
                    <div className="h-56 w-full overflow-hidden relative">
                      <img 
                        src={proyecto.imagen} 
                        alt={proyecto.titulo}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Caso de éxito</span>
                      </div>
                      <h4 className="text-xl font-black text-slate-800 mb-2 leading-tight">
                        {proyecto.titulo}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {proyecto.descripcion}
                      </p>
                      <button 
                        onClick={() => openModal(proyecto)}
                        className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold hover:gap-3 transition-all cursor-pointer hover:text-blue-800"
                      >
                        <span>Ver detalles</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10 text-sm text-slate-500">
                ¿Quieres ver más casos? <button className="text-blue-600 font-semibold hover:underline">Contáctanos</button> y te mostraremos demostraciones personalizadas.
              </div>
            </div>

            {/* Beneficios clave - colores azules */}
            <div className="mt-28 bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-black text-slate-800 mb-4">Impacto real en tu negocio</h3>
                  <ul className="space-y-3">
                    {[
                      'Ahorro de hasta un 80% del tiempo en tareas repetitivas.',
                      'Reducción de errores humanos a casi cero.',
                      'Escalabilidad: los bots trabajan 24/7 sin fatiga.',
                      'Integración con cualquier software (con o sin API).',
                      'ROI medible en menos de 3 meses.'
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
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                    <h4 className="font-black text-slate-800">Automatización segura</h4>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Tus datos están protegidos con cifrado, logs de auditoría y cumplimiento normativo. Los bots actúan dentro de entornos aislados y controlados.
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1"><Shield className="w-4 h-4" /> Datos seguros</div>
                    <div className="flex items-center gap-1"><RefreshCw className="w-4 h-4" /> Monitoreo continuo</div>
                    <div className="flex items-center gap-1"><Users className="w-4 h-4" /> + Productividad</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cierre */}
            <div className="mt-16 text-center text-slate-400 text-sm">
              <p>¿Listo para liberar a tu equipo de tareas repetitivas y enfocarse en la innovación?</p>
              <p className="mt-2 font-medium text-blue-600">Hablemos y diseñamos la automatización que necesita tu empresa.</p>
            </div>
          </div>
        </section>
      </main>

      {/* MODAL DINÁMICO PARA DETALLES DEL PROYECTO (mismo diseño pero con acentos azules) */}
      {modalOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-all duration-300"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 md:h-72 rounded-t-3xl overflow-hidden">
              <img 
                src={selectedProject.imagen} 
                alt={selectedProject.titulo}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
              >
                <X className="w-5 h-5 text-slate-700" />
              </button>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-flex items-center gap-1 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  <Award className="w-3 h-3" /> Caso de éxito
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">
                  {selectedProject.titulo}
                </h2>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-lg font-black text-slate-800 mb-2 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-blue-500" /> Problema
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {selectedProject.detalles.problema}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-black text-slate-800 mb-2 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-500" /> Solución implementada
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {selectedProject.detalles.solucion}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-black text-slate-800 mb-2 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-blue-500" /> Tecnologías utilizadas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.detalles.tecnologias.map((tech: string, i: number) => (
                    <span key={i} className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-black text-slate-800 mb-2 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-500" /> Resultados clave
                </h3>
                <ul className="space-y-2">
                  {selectedProject.detalles.resultados.map((resultado: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {resultado}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  Duración: <strong>{selectedProject.detalles.duracion}</strong>
                </div>
                <button 
                  onClick={closeModal}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold px-6 py-2 rounded-full transition-all shadow-md hover:shadow-lg"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AutomatizacionEmpresarial;