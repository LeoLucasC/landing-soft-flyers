import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-cyan-400 pt-10 pb-6 px-4 md:px-20 font-sans text-blue-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Columna 1: Logo */}
        <div className="flex justify-center md:justify-start">
          <img src="src/img/logo.png" alt="OkVet Logo" className="h-40" />
        </div>

        {/* Columna 2: Mapa del sitio */}
        <div>
          <h3 className="font-bold text-xl mb-4 border-b-2 border-blue-900 w-fit">Mapa del sitio</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-cyan-500">Inicio</a></li>
            <li><a href="/okvet" className="hover:text-cyan-500">OkVet</a></li>
            <li><a href="/funcionalidades" className="hover:text-cyan-500">Funcionalidades</a></li>
            <li><a href="/okvet-pro" className="hover:text-cyan-500">OkVet Pro</a></li>
            <li><a href="/novedades" className="hover:text-cyan-500">Novedades</a></li>
            <li><a href="/contacto" className="hover:text-cyan-500">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: OkVet Pro */}
        <div>
          <div className="bg-black text-white px-4 py-1 rounded-full w-fit mb-4 font-bold italic">
            OkVet <span className="text-cyan-400">Pro</span>
          </div>
          <ul className="space-y-2">
            <li>Facturación electrónica</li>
            <li>Ventas e inventario</li>
            <li>Hospitalización y ambulatorios</li>
            <li>Marketing</li>
            <li>Informes especializados</li>
            <li>Rompe tus límites</li>
          </ul>
        </div>

        {/* Columna 4: Redes Sociales */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="font-bold text-xl mb-4">Síguenos</h3>
          <div className="flex gap-3">
            {/* Iconos simulados con círculos negros (puedes usar react-icons) */}
            <div className="bg-black text-white p-2 rounded-lg cursor-pointer">FB</div>
            <div className="bg-black text-white p-2 rounded-lg cursor-pointer">IG</div>
            <div className="bg-black text-white p-2 rounded-lg cursor-pointer">YT</div>
            <div className="bg-black text-white p-2 rounded-lg cursor-pointer">TK</div>
          </div>
        </div>
      </div>

      {/* Línea inferior: Apps y Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-4">
          <img src="/app-store-badge.png" alt="App Store" className="h-10" />
          <img src="/google-play-badge.png" alt="Google Play" className="h-10" />
        </div>
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="/privacidad" className="hover:underline">Política de privacidad</a>
          <a href="/soporte" className="hover:underline">Soporte</a>
          <span>- OkVet Todos los derechos Reservados © 2024</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;