import React, { useRef, useState, useEffect } from 'react';
import { 
  Smartphone, 
  Check, 
  Apple, 
  ShoppingCart, 
  BarChart3, 
  Bot, 
  Wifi, 
  Cloud, 
  Fingerprint, 
  QrCode, 
  Bell, 
  ChevronLeft, 
  ChevronRight,
  Zap,

  Shield,
  RefreshCw
} from 'lucide-react';

const AppsMoviles: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const features = [
    { 
      icon: <ShoppingCart className="w-6 h-6" />, 
      title: 'Ventas y pedidos', 
      desc: 'Aplicación nativa para gestionar ventas, cotizaciones y pedidos en tiempo real, sincronizada con tu inventario y ERP.' 
    },
    { 
      icon: <BarChart3 className="w-6 h-6" />, 
      title: 'Control de inventario', 
      desc: 'Escáner de códigos de barras, control de stock mínimo, alertas automáticas y reportes de rotación de productos.' 
    },
    { 
      icon: <Bot className="w-6 h-6" />, 
      title: 'Asistentes con IA', 
      desc: 'Chatbots y asistentes inteligentes para atención al cliente, recomendaciones de productos y pronóstico de demanda.' 
    },
    { 
      icon: <Wifi className="w-6 h-6" />, 
      title: 'IoT integrado', 
      desc: 'Conecta sensores de temperatura, balanzas inteligentes, lectores RFID y dispositivos de monitoreo en tiempo real.' 
    },
    { 
      icon: <Cloud className="w-6 h-6" />, 
      title: 'Sincronización en la nube', 
      desc: 'Datos sincronizados automáticamente entre dispositivos, sin pérdida de información y con respaldo continuo.' 
    },
    { 
      icon: <Fingerprint className="w-6 h-6" />, 
      title: 'Biometría y seguridad', 
      desc: 'Autenticación con huella dactilar, reconocimiento facial y cifrado extremo a extremo para tus transacciones.' 
    },
    { 
      icon: <QrCode className="w-6 h-6" />, 
      title: 'Pagos móviles', 
      desc: 'Integración con pasarelas de pago, código QR, billeteras digitales y facturación electrónica.' 
    },
    { 
      icon: <Bell className="w-6 h-6" />, 
      title: 'Notificaciones push', 
      desc: 'Alertas personalizadas, promociones, recordatorios de inventario bajo y seguimiento de pedidos.' 
    }
  ];

  // Imágenes atractivas para cada tarjeta del carrusel
  const cardImages = [
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://commerce.orisha.com//app/uploads/2025/09/Banner-chatbot-advantages-and-disadvantages.jpg',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  // Calcular ancho de tarjeta más gap
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
        {/* Sección principal con fondo impactante */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Imagen de fondo tecnológica */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/70 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Encabezado */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-xs font-black px-4 py-2 rounded-full mb-6 shadow-md">
                <Smartphone className="w-3.5 h-3.5" />
                APPS NATIVAS PARA iOS Y ANDROID
                <Zap className="w-3.5 h-3.5" />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-800 tracking-tight leading-tight">
                Apps Móviles
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
                  para tu negocio
                </span>
              </h1>
              <p className="text-slate-600 text-xl md:text-2xl mt-6 max-w-2xl mx-auto leading-relaxed font-medium">
                Lleva el control de tus <strong className="text-indigo-600">ventas e inventario</strong> a iOS y Android sin fricciones.  
                Integramos <strong className="text-purple-600">IA, IoT, pagos móviles</strong> y sincronización en tiempo real.
              </p>
            </div>

            {/* Carrusel de características con imágenes llamativas */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-slate-800">
                  Todo lo que tu app móvil necesita
                </h2>
                <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                  Desarrollo nativo, multiplataforma o híbrido con las últimas tecnologías: React Native, Flutter, Swift, Kotlin.
                </p>
              </div>

              <div className="relative">
                <button 
                  onClick={() => scrollCarousel('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 hidden md:flex"
                  style={{ marginLeft: '-1rem' }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollCarousel('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 hidden md:flex"
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
                      className="carousel-card w-[260px] sm:w-[280px] lg:w-[300px] flex-shrink-0 snap-start bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/20 group border border-gray-100"
                    >
                      <div className="h-36 w-full overflow-hidden">
                        <img 
                          src={cardImages[idx % cardImages.length]} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-5">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-400 flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                          <div className="text-white">{item.icon}</div>
                        </div>
                        <h3 className="text-lg font-black text-slate-800 mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                        <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full transition-all duration-300 group-hover:w-full" />
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
                          ? 'w-8 bg-gradient-to-r from-indigo-600 to-purple-500 shadow-md' 
                          : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Galería de mockups de apps (imágenes atractivas) */}
            <div className="mt-20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-slate-800">Experiencia móvil de alto impacto</h3>
                <p className="text-slate-500">Diseños nativos, rendimiento excepcional y UX centrada en el usuario.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
                  <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="App ventas" className="w-full h-52 object-cover group-hover:scale-105 transition duration-500" />
                  <div className="p-4 bg-white">
                    <p className="font-bold text-slate-800 flex items-center gap-2"><ShoppingCart className="w-4 h-4 text-indigo-600" /> Punto de venta móvil</p>
                    <p className="text-sm text-slate-500">Cobros, facturación y control de inventario desde tu celular.</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
                  <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="IoT y sensores" className="w-full h-52 object-cover group-hover:scale-105 transition duration-500" />
                  <div className="p-4 bg-white">
                    <p className="font-bold text-slate-800 flex items-center gap-2"><Wifi className="w-4 h-4 text-indigo-600" /> IoT en tiempo real</p>
                    <p className="text-sm text-slate-500">Monitoreo de sensores, alertas y control remoto desde la app.</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
                  <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="IA y datos" className="w-full h-52 object-cover group-hover:scale-105 transition duration-500" />
                  <div className="p-4 bg-white">
                    <p className="font-bold text-slate-800 flex items-center gap-2"><Bot className="w-4 h-4 text-indigo-600" /> Asistentes IA</p>
                    <p className="text-sm text-slate-500">Recomendaciones, predicción de stock y atención inteligente.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Beneficios clave para empresas */}
            <div className="mt-20 bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-black text-slate-800 mb-4">¿Por qué una app móvil con IA e IoT?</h3>
                  <ul className="space-y-3">
                    {[
                      'Controla tus ventas e inventario desde cualquier lugar, sin necesidad de computadora.',
                      'Automatiza procesos de cobro, facturación y reposición de productos.',
                      'Conecta dispositivos IoT para monitorear temperatura, humedad, nivel de existencias, etc.',
                      'Usa IA para predecir demanda, optimizar rutas de reparto y mejorar atención al cliente.',
                      'Sincronización offline automática: trabaja sin internet y se actualiza cuando vuelves a conectarte.'
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-indigo-600" />
                    <h4 className="font-black text-slate-800">Seguridad y escalabilidad</h4>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Tus datos críticos de ventas e inventario estarán protegidos con cifrado, autenticación biométrica y respaldos automáticos en la nube. Escala sin límites para miles de usuarios.
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1"><Apple className="w-4 h-4" /> iOS</div>
                    <div className="flex items-center gap-1"><Smartphone className="w-4 h-4" /> Android</div>
                    <div className="flex items-center gap-1"><RefreshCw className="w-4 h-4" /> Actualización continua</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cierre con llamado a la acción */}
            <div className="mt-16 text-center text-slate-400 text-sm">
              <p>¿Listo para transformar la gestión de tu negocio con una app móvil potente?</p>
              <p className="mt-2 font-medium text-indigo-600">Contáctanos y llevamos tu empresa al siguiente nivel.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AppsMoviles;