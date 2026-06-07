import React, { useRef, useState, useEffect } from 'react';
import { 
  Cloud, 
  Check, 
  Server, 
  Cpu, 
  Database, 
  Globe, 
  BarChart3, 
  Shield, 
  Zap, 
  RefreshCw, 
  TrendingUp, 
  ChevronLeft, 
  ChevronRight,
  HardDrive,
  Network,
  Lock
} from 'lucide-react';

const ArquitecturaEscalable: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const features = [
    { 
      icon: <Server className="w-6 h-6" />, 
      title: 'Balanceo de carga', 
      desc: 'Distribuimos el tráfico entre múltiples servidores para evitar cuellos de botella y garantizar respuesta instantánea.' 
    },
    { 
      icon: <Cpu className="w-6 h-6" />, 
      title: 'Autoescalado dinámico', 
      desc: 'La infraestructura crece automáticamente con tu demanda: más usuarios, más recursos en segundos.' 
    },
    { 
      icon: <Database className="w-6 h-6" />, 
      title: 'Bases de datos distribuidas', 
      desc: 'Sharding, réplicas y clustering para manejar millones de registros con latencia mínima.' 
    },
    { 
      icon: <Globe className="w-6 h-6" />, 
      title: 'CDN global', 
      desc: 'Contenido estático y dinámico servido desde la ubicación más cercana a tus usuarios, reduciendo latencia.' 
    },
    { 
      icon: <BarChart3 className="w-6 h-6" />, 
      title: 'Monitoreo 360°', 
      desc: 'Métricas en tiempo real, alertas proactivas y dashboards personalizados para cada servicio.' 
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: 'Seguridad en capas', 
      desc: 'WAF, DDoS protection, aislamiento de contenedores y políticas Zero Trust.' 
    },
    { 
      icon: <HardDrive className="w-6 h-6" />, 
      title: 'Almacenamiento elástico', 
      desc: 'Objetos, bloques y archivos con capacidad ilimitada y recuperación ante desastres.' 
    },
    { 
      icon: <Network className="w-6 h-6" />, 
      title: 'Microservicios', 
      desc: 'Arquitectura basada en contenedores (Docker/K8s) que permite escalar componentes independientes.' 
    }
  ];

  const cardImages = [
    'https://www.customprofessionalhosting.com/numaqum/2025/03/balanceador-de-carga-848x440.png',
    'https://ausum.cloud/wp-content/uploads/2022/05/autoscaling_2-1.jpg',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://conejoblancoad.com/wp-content/uploads/2024/08/como-elegir-hosting.jpg.webp',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://www.sccenlared.es/wp-content/uploads/2019/07/almacenamiento-objetos.jpg',
    'https://img.impactotic.co/wp-content/uploads/2024/10/23101532/Microservicios-escalabilidad-y-flexibilidad-en-la-era-digital.jpg'
  ];

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
          {/* Fondo con data center style */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/70 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Encabezado */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-xs font-black px-4 py-2 rounded-full mb-6 shadow-md">
                <Cloud className="w-3.5 h-3.5" />
                INFRAESTRUCTURA DE ALTA PERFORMANCE
                <Zap className="w-3.5 h-3.5" />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-800 tracking-tight leading-tight">
                Arquitectura Escalable
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  para empresas en crecimiento
                </span>
              </h1>
              <p className="text-slate-600 text-xl md:text-2xl mt-6 max-w-2xl mx-auto leading-relaxed font-medium">
                Servidores en la nube optimizados para <strong className="text-emerald-600">tráfico pesado</strong> y{' '}
                <strong className="text-teal-600">grandes cantidades de datos</strong>. Escalamiento automático, alta disponibilidad y seguridad.
              </p>
            </div>

            {/* Carrusel de características */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-slate-800">
                  Componentes de una arquitectura moderna
                </h2>
                <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                  Diseñamos sistemas que crecen contigo: desde una startup hasta millones de usuarios concurrentes.
                </p>
              </div>

              <div className="relative">
                <button 
                  onClick={() => scrollCarousel('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 hidden md:flex"
                  style={{ marginLeft: '-1rem' }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollCarousel('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 hidden md:flex"
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
                      className="carousel-card w-[260px] sm:w-[280px] lg:w-[300px] flex-shrink-0 snap-start bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/20 group border border-gray-100"
                    >
                      <div className="h-36 w-full overflow-hidden">
                        <img 
                          src={cardImages[idx % cardImages.length]} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-5">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                          <div className="text-white">{item.icon}</div>
                        </div>
                        <h3 className="text-lg font-black text-slate-800 mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                        <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-300 group-hover:w-full" />
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
                          ? 'w-8 bg-gradient-to-r from-emerald-600 to-teal-500 shadow-md' 
                          : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Galería de imágenes: infraestructura cloud */}
            <div className="mt-20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-slate-800">Tecnologías de clase mundial</h3>
                <p className="text-slate-500">AWS, Google Cloud, Azure, Kubernetes, Terraform, y más.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
                  <img src="https://www.digitalbizmagazine.com/wp-content/uploads/2023/06/db54_multicloud-sector-financiero_GFT.jpg" alt="Cloud servers" className="w-full h-52 object-cover group-hover:scale-105 transition duration-500" />
                  <div className="p-4 bg-white">
                    <p className="font-bold text-slate-800 flex items-center gap-2"><Cloud className="w-4 h-4 text-emerald-600" /> Multi-cloud & Hybrid</p>
                    <p className="text-sm text-slate-500">Despliegues en cualquier proveedor con infraestructura como código.</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
                  <img src="https://zesty.co/wp-content/uploads/2024/10/Container-K8s.png" alt="Kubernetes" className="w-full h-52 object-cover group-hover:scale-105 transition duration-500" />
                  <div className="p-4 bg-white">
                    <p className="font-bold text-slate-800 flex items-center gap-2"><Cpu className="w-4 h-4 text-emerald-600" /> Kubernetes & Containers</p>
                    <p className="text-sm text-slate-500">Orquestación de microservicios con autoescalado y resiliencia.</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
                  <img src="https://analyzing-testing.netzsch.com/_Resources/Persistent/9/8/d/5/98d50640aa194614636c67cb218c737d5ce387e8/NETZSCH_Data-Science_Big-Data-scaled-1847x1038-1118x628.jpeg" alt="Big Data" className="w-full h-52 object-cover group-hover:scale-105 transition duration-500" />
                  <div className="p-4 bg-white">
                    <p className="font-bold text-slate-800 flex items-center gap-2"><Database className="w-4 h-4 text-emerald-600" /> Data Lakes & Analytics</p>
                    <p className="text-sm text-slate-500">Procesamiento de petabytes con Spark, BigQuery, Redshift.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Beneficios clave */}
            <div className="mt-20 bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-black text-slate-800 mb-4">¿Por qué una arquitectura escalable?</h3>
                  <ul className="space-y-3">
                    {[
                      'Soporta picos de tráfico sin degradar la experiencia del usuario.',
                      'Optimiza costos: pagas solo por los recursos que usas, con autoescalado.',
                      'Alta disponibilidad: tu sistema sigue funcionando incluso si fallan servidores.',
                      'Procesamiento de grandes volúmenes de datos en tiempo real (streaming, batch).',
                      'Seguridad y cumplimiento normativo integrados desde el diseño.'
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                    <h4 className="font-black text-slate-800">Rendimiento garantizado</h4>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Realizamos pruebas de carga, benchmarking y optimización continua. Nuestros SLA incluyen tiempo de respuesta &lt;99.9% y escalado en menos de 60 segundos.
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1"><Zap className="w-4 h-4" /> Baja latencia</div>
                    <div className="flex items-center gap-1"><RefreshCw className="w-4 h-4" /> CI/CD</div>
                    <div className="flex items-center gap-1"><Lock className="w-4 h-4" /> Zero Trust</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cierre */}
            <div className="mt-16 text-center text-slate-400 text-sm">
              <p>¿Necesitas una infraestructura que no limite el crecimiento de tu negocio?</p>
              <p className="mt-2 font-medium text-emerald-600">Contáctanos y diseñamos la arquitectura perfecta para ti.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ArquitecturaEscalable;