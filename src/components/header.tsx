import React, { useEffect, useState } from 'react';
import logoImg from '../assets/images/SUNATALIANSA.png';

const Header: React.FC = () => {
  const [, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efecto para cambiar el estilo al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100; // offset por el header (100px aprox)
      window.scrollTo({ top, behavior: 'smooth' });
      setIsMenuOpen(false);
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky w-full z-50 transition-all duration-300 bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* LOGO AREA */}
        <div className="flex items-center gap-8 xl:gap-12">
          <a href="#top" onClick={(e) => { e.preventDefault(); scrollTo('top'); }} className="transition-transform hover:scale-105 flex items-center">
            <img src={logoImg} alt="Compas Service" className="h-[45px] w-auto object-contain" />
          </a>

          {/* NAVIGATION DESKTOP */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-semibold text-slate-700">
            <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollTo('inicio'); }} className="text-cyan-500 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-cyan-500 after:bottom-[-4px] after:left-0 transition-colors">
              Inicio
            </a>

            {/* DROPDOWN 1: SOLUCIONES IA */}
            <div className="group relative">
              <div className="flex items-center gap-1 cursor-pointer hover:text-cyan-500 py-4 transition-colors">
                <span className="truncate">Soluciones IA</span>
                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Mega Menu Modal */}
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[800px] bg-white border-2 border-cyan-400 rounded-3xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-8 grid grid-cols-2 gap-8">
                {/* Item 1 */}
                <div className="flex gap-4 items-start group/item cursor-pointer" onClick={() => scrollTo('soluciones')}>
                  <div className="w-10 h-10 flex items-center justify-center text-cyan-500 group-hover/item:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-bold text-lg mb-1 group-hover/item:text-cyan-600 transition-colors">Predicción de Ventas</h4>
                    <p className="text-slate-500 text-sm font-normal leading-relaxed">Algoritmos avanzados que predicen la demanda de tus productos usando datos históricos.</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-4 items-start group/item cursor-pointer" onClick={() => scrollTo('soluciones')}>
                  <div className="w-10 h-10 flex items-center justify-center text-cyan-500 group-hover/item:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-bold text-lg mb-1 group-hover/item:text-cyan-600 transition-colors">Estudio de Mercado IA</h4>
                    <p className="text-slate-500 text-sm font-normal leading-relaxed">Análisis automático de tu competencia y segmentación de clientes en tiempo real.</p>
                  </div>
                </div>

                {/* Pie del Menu */}
                <div className="col-span-2 flex justify-between items-center border-t border-slate-100 pt-6 mt-2">
                  <a href="#soluciones" onClick={(e) => { e.preventDefault(); scrollTo('soluciones'); }} className="text-cyan-500 font-bold hover:underline underline-offset-4">Ver todos los casos de estudio</a>
                  <button className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold hover:bg-cyan-500 transition-colors" onClick={() => scrollTo('soluciones')}>
                    Ver Módulos <span className="text-cyan-400 italic">IA</span>
                  </button>
                </div>
              </div>
            </div>

            {/* DROPDOWN 2: SOFTWARE A MEDIDA (ESTILO OSCURO) */}
            <div className="group relative">
              <div className="py-4 cursor-pointer">
                <div className="bg-slate-900 group-hover:bg-cyan-500 transition-colors text-white px-4 py-1.5 rounded-full text-[13px] font-bold flex items-center shadow-lg shadow-slate-200">
                  Software<span className="text-cyan-400 group-hover:text-white ml-1">Medida</span>
                  <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>

              {/* Mega Menu Modal Oscuro */}
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[850px] bg-[#0A0F1E] border border-slate-800 rounded-3xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-10 grid grid-cols-2 gap-x-12 gap-y-10">
                {/* Item 1 */}
                <div className="flex gap-4 items-start group/item cursor-pointer" onClick={() => scrollTo('soluciones')}>
                  <div className="w-8 flex items-center justify-center text-white mt-1 group-hover/item:text-cyan-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1 group-hover/item:text-cyan-400 transition-colors">Desarrollo Custom</h4>
                    <p className="text-slate-400 text-sm font-normal leading-relaxed">Creamos plataformas completas conectadas con las API's y recursos únicos de tu empresa.</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-4 items-start group/item cursor-pointer" onClick={() => scrollTo('soluciones')}>
                  <div className="w-8 flex items-center justify-center text-white mt-1 group-hover/item:text-cyan-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1 group-hover/item:text-cyan-400 transition-colors">Arquitectura Escalable</h4>
                    <p className="text-slate-400 text-sm font-normal leading-relaxed">Servidores en la nube optimizados para tráfico pesado y grandes cantidades de datos.</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-4 items-start group/item cursor-pointer" onClick={() => scrollTo('soluciones')}>
                  <div className="w-8 flex items-center justify-center text-white mt-1 group-hover/item:text-cyan-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1 group-hover/item:text-cyan-400 transition-colors">Apps Móviles</h4>
                    <p className="text-slate-400 text-sm font-normal leading-relaxed">Lleva el control de tus ventas e inventario a iOS y Android sin fricciones.</p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex gap-4 items-start group/item cursor-pointer" onClick={() => scrollTo('soluciones')}>
                  <div className="w-8 flex items-center justify-center text-white mt-1 group-hover/item:text-cyan-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1 group-hover/item:text-cyan-400 transition-colors">Automatización Empresarial</h4>
                    <p className="text-slate-400 text-sm font-normal leading-relaxed">Rompe tus límites operativos delegando trabajos repetitivos a bots inteligentes.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FACTURACION CON BADGE NUVEDAD*/}
            <div className="relative group cursor-pointer" onClick={() => scrollTo('soluciones')}>
              <span className="absolute -top-[2px] -right-2 bg-blue-600 text-[9px] text-white px-2 py-0.5 rounded-full font-black animate-pulse z-10">
                TOP
              </span>
              <div className="flex items-center gap-2 py-4">
                <div className="p-1.5 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-slate-800 font-bold text-sm">Facturación</span>
                  <span className="text-blue-600 font-bold text-sm">Electrónica</span>
                </div>
              </div>
            </div>

            <a href="#soluciones" onClick={(e) => { e.preventDefault(); scrollTo('soluciones'); }} className="hover:text-cyan-500 transition-colors whitespace-nowrap">Estudios Ventas</a>
          </nav>
        </div>

        {/* ACTION BUTTONS */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => scrollTo('contacto')}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-7 py-2.5 rounded-xl font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-md shadow-blue-100 whitespace-nowrap"
          >
            Cotizar Proyecto
          </button>

          <button
            className="border-2 border-cyan-400 text-slate-800 px-7 py-2.5 rounded-full font-bold text-sm hover:bg-cyan-50 transition-all active:scale-95 whitespace-nowrap"
          >
            Acceso
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="lg:hidden p-2 text-slate-800 hover:text-cyan-500 transition-colors focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 w-full bg-white border-b border-t border-slate-100 px-6 py-6 flex flex-col gap-5 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] z-40 max-h-[80vh] overflow-y-auto">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollTo('inicio'); }} className="text-cyan-500 font-black text-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block"></span> Inicio
          </a>

          <div className="flex flex-col gap-3 mt-1 pl-4 border-l-2 border-slate-100">
            <h4 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Soluciones IA</h4>
            <a href="#soluciones" onClick={(e) => { e.preventDefault(); scrollTo('soluciones'); }} className="text-slate-700 font-bold flex items-center gap-3">
              <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              Predicción de Ventas
            </a>
            <a href="#soluciones" onClick={(e) => { e.preventDefault(); scrollTo('soluciones'); }} className="text-slate-700 font-bold flex items-center gap-3">
              <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              Estudio de Mercado IA
            </a>
          </div>

          <div className="flex flex-col gap-3 mt-2 pl-4 border-l-2 border-slate-100">
            <h4 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Software a Medida</h4>
            <a href="#soluciones" onClick={(e) => { e.preventDefault(); scrollTo('soluciones'); }} className="text-slate-700 font-bold flex items-center gap-3">
              <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              Desarrollo Custom
            </a>
            <a href="#soluciones" onClick={(e) => { e.preventDefault(); scrollTo('soluciones'); }} className="text-slate-700 font-bold flex items-center gap-3">
              <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              Apps Móviles
            </a>
          </div>

          <a href="#soluciones" onClick={(e) => { e.preventDefault(); scrollTo('soluciones'); }} className="text-slate-800 font-bold text-lg flex items-center gap-2 mt-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block animate-pulse"></span> Facturación Electrónica <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full ml-1">TOP</span>
          </a>

          <hr className="border-slate-100 my-2" />
          <button className="w-full text-center py-4 border-2 border-cyan-400 text-slate-800 rounded-full font-bold text-lg">Acceso a Clientes</button>
          <button onClick={() => scrollTo('contacto')} className="w-full text-center py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-200">Cotizar Proyecto</button>
        </div>
      )}
    </header>
  );
};

export default Header;