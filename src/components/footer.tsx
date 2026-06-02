import React from 'react';

import { MessageCircle, MapPin, Mail } from 'lucide-react'; 
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logoImg from '../assets/images/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-slate-50 border-t border-cyan-100 pt-16 pb-8 overflow-hidden font-sans text-slate-700">
      
      {/* Elementos decorativos de fondo (colores de la marca) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-cyan-400 to-blue-500"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-100/50 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-10 -right-24 w-80 h-80 bg-blue-100/40 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Columna 1: Branding y Descripción (Ocupa más espacio) */}
        <div className="md:col-span-4 flex flex-col justify-start">
          <div className="flex items-center gap-2 mb-6">
             <img src={logoImg} alt="Softlyer Logo" className="h-14 w-auto object-contain rounded-lg" />
          </div>
          <p className="text-slate-500 leading-relaxed mb-6">
            Transformamos negocios tradicionales y modernos, ofreciéndoles una presencia profesional en Internet. Creamos páginas web modernas, rápidas y optimizadas para captar clientes en todo el Perú, adaptadas a todo tipo de negocio —incluyendo empresas industriales— y a sus necesidades específicas.
          </p>
          <div className="flex flex-col gap-3 text-sm text-slate-600">
             <div className="flex items-center gap-3">
                <MapPin size={18} className="text-cyan-500" />
                <span>Atención 100% Remota a nivel nacional</span>
             </div>
             <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>contactos@softlyer.com</span>
             </div>
          </div>
        </div>

        {/* Columna 2: Servicios Principales */}
        <div className="md:col-span-3 lg:col-span-2">
          <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            Nuestros Servicios
          </h3>
          <ul className="space-y-3">
            <li><a href="#landing-pages" className="hover:text-cyan-600 transition-colors duration-200">Landing Pages</a></li>
            <li><a href="#appwebs" className="hover:text-cyan-600 transition-colors duration-200">AppWebs (Sistemas)</a></li>
            <li><a href="#planes" className="hover:text-cyan-600 transition-colors duration-200">Precios y Planes</a></li>
            <li><a href="#portafolio" className="hover:text-cyan-600 transition-colors duration-200">Portafolio</a></li>
          </ul>
        </div>

        {/* Columna 3: Planes Destacados */}
        <div className="md:col-span-3 lg:col-span-3">
          <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
            Planes Web
          </h3>
          <ul className="space-y-4">
            <li>
                <div className="group cursor-pointer">
                    <p className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">Plan Emprendedor</p>
                    <p className="text-xs text-slate-500">Ideal para empezar con dominio y hosting.</p>
                </div>
            </li>
            <li>
                <div className="group cursor-pointer">
                    <p className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">Plan Negocio <span className="bg-yellow-100 text-yellow-700 text-[10px] px-2 py-0.5 rounded-full ml-1 font-bold">POPULAR</span></p>
                    <p className="text-xs text-slate-500">Galería, mapa y correos corporativos.</p>
                </div>
            </li>
            <li>
                <div className="group cursor-pointer">
                    <p className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">Plan Profesional</p>
                    <p className="text-xs text-slate-500">Con Meta Pixel, Analytics y SEO.</p>
                </div>
            </li>
          </ul>
        </div>

        {/* Columna 4: CTA y Redes Sociales */}
        <div className="md:col-span-2 lg:col-span-3 flex flex-col md:items-end">
          <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center md:justify-end w-full">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 md:hidden"></span>
            Conecta con nosotros
          </h3>
          
          {/* Botón WhatsApp Destacado en Footer */}
          <a href="https://wa.me/925725091" target="_blank" rel="noreferrer" 
             className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-6 rounded-xl flex items-center justify-center gap-2 mb-6 transition-all shadow-lg shadow-green-500/30 hover:-translate-y-1">
            <MessageCircle size={20} />
            Cotizar ahora
          </a>

          <div className="flex gap-3 justify-center md:justify-end w-full">
            <a href="https://www.facebook.com/profile.php?id=61576762857702" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-600 hover:shadow-md transition-all">
              <FaFacebook size={18} />
            </a>
            <a href="https://www.instagram.com/softflyer_" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-500 hover:text-pink-600 hover:border-pink-600 hover:shadow-md transition-all">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.linkedin.com/company/softlyer" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-500 hover:text-blue-700 hover:border-blue-700 hover:shadow-md transition-all">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior: Copyright y Legales */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 px-6 md:px-12 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-slate-500 font-medium">
          © {new Date().getFullYear()} Softlyer. Todos los derechos reservados.
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <a href="/privacidad" className="text-slate-500 hover:text-blue-600 transition-colors">Privacidad</a>
          <a href="/terminos" className="text-slate-500 hover:text-blue-600 transition-colors">Términos del Servicio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;