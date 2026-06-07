import React from 'react';
import { 
  Building, 
  Receipt, 
  Cloud, 
  Shield, 
  Database, 
  TrendingUp, 
  Lock, 
  RefreshCw, 
  Check, 
  FileCheck, 
  Zap, 
  Award,
  Clock,
  Headphones,
  Sun
} from 'lucide-react';

const SistemasRucSunat: React.FC = () => {
  const features = [
    { icon: <Building className="w-6 h-6" />, title: 'Validación de RUC en tiempo real', desc: 'Consulta estado, nombre y domicilio fiscal de cualquier RUC al instante, con datos directos de SUNAT.' },
    { icon: <Receipt className="w-6 h-6" />, title: 'Comprobantes electrónicos', desc: 'Facturas, boletas, notas de crédito/débito, guías de remisión con formato UBL 2.1 y envío automático.' },
    { icon: <Cloud className="w-6 h-6" />, title: 'Almacenamiento en la nube', desc: 'Repositorio seguro de XML y CDR, disponible 24/7, con respaldo legal y búsqueda avanzada.' },
    { icon: <Shield className="w-6 h-6" />, title: 'Cumplimiento normativo', desc: 'Cumple con la ley de facturación electrónica peruana, versiones 4.2 y anexos exigidos por SUNAT.' },
    { icon: <Database className="w-6 h-6" />, title: 'APIs para integración', desc: 'Conecta tu ERP, CRM o sistema de gestión con nuestras APIs REST documentadas.' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Dashboards analíticos', desc: 'Visualiza ventas, detracciones, percepciones y estados de envío en paneles interactivos.' },
    { icon: <Lock className="w-6 h-6" />, title: 'Seguridad bancaria', desc: 'Cifrado AES-256, firmas digitales y servidores con certificación ISO 27001.' },
    { icon: <RefreshCw className="w-6 h-6" />, title: 'Actualización automática', desc: 'Nos adaptamos a cambios de SUNAT sin que tú hagas nada.' }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime garantizado' },
    { number: '3s', label: 'Respuesta promedio' },
    { number: '500K+', label: 'Facturas procesadas' },
    { number: '24/7', label: 'Soporte técnico' }
  ];

  const testimonials = [
    { name: 'Carlos Gutiérrez', role: 'Gerente de TI, Logística del Sur', text: 'Redujimos el tiempo de facturación en un 90% y eliminamos errores de envío a SUNAT. La integración fue sencilla.' },
    { name: 'María Fernanda Rossi', role: 'Contadora General, Rossi Group', text: 'El sistema nos permite validar RUC al instante y tener todo el histórico de comprobantes en la nube. 100% recomendado.' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Hero Section con fondo de oficina SUNAT */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Oficina SUNAT" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-800/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 mb-6 shadow-lg">
            <Zap className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-bold tracking-wide">INTEGRACIÓN OFICIAL CON SUNAT</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight drop-shadow-2xl">
            Sistemas RUC y Facturación
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-cyan-300">
              Electrónica con SUNAT
            </span>
          </h1>
          <p className="text-xl md:text-2xl mt-6 max-w-3xl mx-auto text-gray-100 font-medium">
            Automatiza la emisión, envío y validación de comprobantes electrónicos. Cumple la normativa peruana sin esfuerzo.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center gap-2">
              <FileCheck className="w-5 h-5" /> Solicitar demo gratis
            </button>
            <button className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-full transition-all flex items-center gap-2">
              <Headphones className="w-5 h-5" /> Contactar asesor
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-yellow-300">{stat.number}</div>
                <div className="text-xs uppercase tracking-wider text-gray-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,195.28,77.9,321.39,56.44Z" fill="white" opacity="0.4"></path>
            <path d="M0,98.8L0,120L1200,120L1200,57.2C1100.8,80.2,1000.6,95.6,891,105.2,768.4,116.2,632.9,114,505.3,89.9,400.6,69.7,304.9,31.6,200,6.3,120.9-12,44.6-6.4,0,98.8Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Sección de características */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-sm font-bold px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4" /> PLATAFORMA TODO EN UNO
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-800">
              Todo lo que necesitas para facturar con SUNAT
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
              Desde validación de RUC hasta el envío del CDR, todo en una sola plataforma segura y escalable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-6 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-black text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificación */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white text-blue-700 text-sm font-bold px-4 py-2 rounded-full shadow-md mb-4">
                <Award className="w-4 h-4" /> CERTIFICACIÓN OFICIAL
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-800">Proveedor autorizado por SUNAT</h3>
              <p className="text-slate-600 mt-4 text-lg">
                Cumplimos con todos los requisitos técnicos, legales y de seguridad exigidos por la administración tributaria peruana. Nuestra plataforma está homologada para producción.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Integración con los web services de SUNAT (beta, homologación y producción)',
                  'Soporte para factura, boleta, nota crédito, nota débito, guía de remisión',
                  'Manejo de detracciones, percepciones y retenciones',
                  'Firma digital y validación automática de CDR'
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Certificación SUNAT" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                <span className="bg-white/90 backdrop-blur text-blue-800 font-bold px-4 py-2 rounded-full">SUNAT Oficial Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-slate-800">Lo que dicen nuestros clientes</h3>
            <p className="text-slate-500 mt-2">Empresas que ya confían en nuestra integración SUNAT</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>
                <p className="text-slate-600 italic">"{t.text}"</p>
                <div className="mt-4">
                  <p className="font-bold text-slate-800">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Facturación electrónica" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-800/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-6">
          <h2 className="text-4xl md:text-5xl font-black">Comienza a facturar con SUNAT sin complicaciones</h2>
          <p className="text-xl mt-4 text-gray-100">Más de 500 empresas ya optimizaron su facturación electrónica con nosotros.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center gap-2">
              <Zap className="w-5 h-5" /> Probar ahora gratis
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-bold py-3 px-8 rounded-full transition-all flex items-center gap-2">
              <Clock className="w-5 h-5" /> Agendar demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SistemasRucSunat;