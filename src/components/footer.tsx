import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail } from 'lucide-react'; 
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import logoImg from '../assets/images/logo.png';
import mailboxImg from '../assets/images/mailbox_3d.png';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-slate-100/40 pt-20 pb-12 overflow-hidden font-sans text-slate-700">
      
      {/* Elementos decorativos de fondo (colores de la marca) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-cyan-400 to-blue-500"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-100/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-10 -right-24 w-80 h-80 bg-blue-100/30 rounded-full blur-[80px] pointer-events-none"></div>

      {/* 1. Tarjeta Flotante de Asesoría (CTA) */}
      <div className="relative max-w-5xl mx-auto z-20 -mb-24 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] p-6 md:p-8 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden border border-white/10"
        >
          {/* Brillos decorativos */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

          {/* Contenido Izquierda: Ilustración y Textos */}
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10 text-center md:text-left flex-1">
            {/* Ilustración 3D del Buzón con transparencia nativa real */}
            <div className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0 flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img src={mailboxImg} alt="Mailbox 3D" className="w-full h-full object-contain drop-shadow-xl" />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-black tracking-tight mb-2">
                ¿Listo para impulsar tu negocio?
              </h4>
              <p className="text-white/80 text-xs md:text-sm max-w-md">
                Conversa hoy mismo con un especialista. Obtén una asesoría personalizada y una demostración de nuestros sistemas sin costo.
              </p>
            </div>
          </div>

          <div className="relative z-10 flex-shrink-0 w-full md:w-auto flex justify-center">
            <a 
              href="https://wa.me/925725091?text=Hola,%20quiero%20solicitar%20una%20asesor%C3%ADa%20personalizada%20para%20mi%20negocio" 
              target="_blank" 
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-green-500/30 active:scale-95 flex items-center gap-2 cursor-pointer whitespace-nowrap hover:scale-105"
            >
              <FaWhatsapp size={20} className="text-white" />
              Solicitar Asesoría Gratis
            </a>
          </div>
        </motion.div>
      </div>

      {/* 2. Tarjeta Contenedora del Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] pt-36 pb-8 px-8 md:px-12 relative z-10"
        >
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8">
            
            {/* Columna 1: Branding y Redes Sociales */}
            <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-start">
              <div className="flex items-center gap-2 mb-5">
                 <img src={logoImg} alt="Softlyer Logo" className="h-12 w-auto object-contain rounded-lg" />
              </div>
              <p className="text-slate-500 leading-relaxed mb-6 text-sm max-w-sm">
                Transformamos negocios tradicionales y modernos, ofreciéndoles una presencia profesional en Internet. Creamos páginas web rápidas y optimizadas para captar clientes en todo el Perú.
              </p>
              
              {/* Iconos de Redes Sociales (debajo del texto como en el modelo) */}
              <div className="flex gap-3 justify-start w-full">
                <a href="https://www.facebook.com/profile.php?id=61576762857702" target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-50 border border-slate-200/60 rounded-xl flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-600 hover:shadow-md transition-all">
                  <FaFacebook size={18} />
                </a>
                <a href="https://www.instagram.com/softflyer_" target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-50 border border-slate-200/60 rounded-xl flex items-center justify-center text-slate-500 hover:text-pink-600 hover:border-pink-600 hover:shadow-md transition-all">
                  <FaInstagram size={18} />
                </a>
                <a href="https://www.linkedin.com/company/softlyer" target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-50 border border-slate-200/60 rounded-xl flex items-center justify-center text-slate-500 hover:text-blue-700 hover:border-blue-700 hover:shadow-md transition-all">
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>

            {/* Columna 2: Servicios */}
            <div className="md:col-span-6 lg:col-span-2">
              <h3 className="font-bold text-base text-slate-800 mb-5 flex items-center">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>
                Servicios
              </h3>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#landing-pages" className="hover:text-cyan-600 transition-colors duration-200">Landing Pages</a></li>
                <li><a href="#appwebs" className="hover:text-cyan-600 transition-colors duration-200">AppWebs (Sistemas)</a></li>
                <li><Link to="/planes" className="hover:text-cyan-600 transition-colors duration-200">Precios y Planes</Link></li>
                <li><a href="#portafolio" className="hover:text-cyan-600 transition-colors duration-200">Portafolio</a></li>
              </ul>
            </div>

            {/* Columna 3: Planes Destacados */}
            <div className="md:col-span-6 lg:col-span-2">
              <h3 className="font-bold text-base text-slate-800 mb-5 flex items-center">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                Planes Web
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/planes" className="group block cursor-pointer">
                    <p className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors text-sm">Plan Emprendedor</p>
                    <p className="text-xs text-slate-400 mt-0.5">Ideal para empezar con dominio y hosting.</p>
                  </Link>
                </li>
                <li>
                  <Link to="/planes" className="group block cursor-pointer">
                    <p className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors text-sm">
                      Plan Negocio <span className="bg-yellow-100 text-yellow-700 text-[10px] px-2 py-0.5 rounded-full ml-1 font-bold">POPULAR</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">Galería, mapa y correos corporativos.</p>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 4: Contacto */}
            <div className="md:col-span-6 lg:col-span-3 flex flex-col items-start">
              <h3 className="font-bold text-base text-slate-800 mb-5 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Contacto
              </h3>
              <div className="flex flex-col gap-4 text-sm text-slate-500 w-full mb-6">
                 <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-cyan-500 shrink-0 mt-0.5" />
                    <span>Atención 100% Remota a nivel nacional</span>
                 </div>
                 <div className="flex items-start gap-3">
                    <Mail size={18} className="text-blue-500 shrink-0 mt-0.5" />
                    <a href="mailto:contactos@softlyer.com" className="hover:text-cyan-600 transition-colors break-all">
                      contactos@softlyer.com
                    </a>
                 </div>
              </div>

            </div>
          </div>

          {/* Línea inferior: Copyright y Legales */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div>
              © {new Date().getFullYear()} Softlyer. Todos los derechos reservados.
            </div>
            <div className="flex gap-6 font-medium">
              <a href="/privacidad" className="hover:text-blue-600 transition-colors">Privacidad</a>
              <a href="/terminos" className="hover:text-blue-600 transition-colors">Términos del Servicio</a>
            </div>
          </div>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;