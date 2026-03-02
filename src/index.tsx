
const LandingPage = () => {
  return (
    <div className="bg-white">
      {/* SECCIÓN HERO (FONDO BLANCO) */}
      <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-black text-[#0c69ba] leading-tight">
          La mejor solución para <br />
          <span className="text-[#21b2f6]">gestionar tu veterinaria</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl">
          Optimiza tus procesos, organiza historias clínicas y lleva tu negocio al siguiente nivel con el software más completo del mercado.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="bg-[#fbce0e] text-[#0c69ba] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform">
            Ver Funcionalidades
          </button>
          <button className="border-2 border-[#21b2f6] text-[#21b2f6] px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors">
            Saber más
          </button>
        </div>
      </section>

  {/* 3. SECCIÓN TESTIMONIOS (DISEÑO EXACTO A LA IMAGEN) */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0c69ba] text-center mb-16">
            Qué dicen nuestros <span className="text-[#21b2f6]">usuarios</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            {/* Testimonio 1 */}
            <div className="max-w-sm w-full group">
              {/* Info del Usuario (Arriba) */}
              <div className="flex items-center gap-4 mb-6 ml-6">
                <img 
                  src="https://i.pravatar.cc/150?u=felipe" 
                  alt="Felipe Ceballos" 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div className="text-left">
                  <h4 className="font-extrabold text-[#0c69ba] text-lg">Felipe Ceballos</h4>
                  <p className="text-sm text-gray-500 font-bold tracking-tight">Clínica San Lucas</p>
                </div>
              </div>

              {/* Burbuja de Texto (Abajo) */}
              <div className="relative bg-white border border-blue-200 p-8 rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                {/* Flecha apuntando hacia arriba */}
                <div className="absolute -top-3 left-10 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-blue-200"></div>
                <div className="absolute -top-[10px] left-[41px] w-0 h-0 border-l-[11px] border-l-transparent border-r-[11px] border-r-transparent border-b-[11px] border-b-white"></div>
                
                <p className="text-gray-700 text-[15px] leading-relaxed italic text-center">
                  "Gracias por brindarnos una solución tan práctica y útil, nos ayudó a organizar los procesos internos. El módulo de historias clínicas es el más completo que hemos probado."
                </p>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="max-w-sm w-full group">
              <div className="flex items-center gap-4 mb-6 ml-6">
                <img 
                  src="https://i.pravatar.cc/150?u=pablo" 
                  alt="Pablo" 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div className="text-left">
                  <h4 className="font-extrabold text-[#0c69ba] text-lg">Pablo</h4>
                  <p className="text-sm text-gray-500 font-bold tracking-tight">Aquavet</p>
                </div>
              </div>

              <div className="relative bg-white border border-blue-200 p-8 rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                <div className="absolute -top-3 left-10 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-blue-200"></div>
                <div className="absolute -top-[10px] left-[41px] w-0 h-0 border-l-[11px] border-l-transparent border-r-[11px] border-r-transparent border-b-[11px] border-b-white"></div>
                
                <p className="text-gray-700 text-[15px] leading-relaxed italic text-center">
                  "Aunque al inicio tenía dudas al ser un sistema gratuito, nos hemos convencido del magnífico software que es OkVet y la utilidad para nuestra veterinaria. ¡Mil gracias!"
                </p>
              </div>
            </div>

            {/* Testimonio 3 */}
            <div className="max-w-sm w-full group">
              <div className="flex items-center gap-4 mb-6 ml-6">
                <img 
                  src="https://i.pravatar.cc/150?u=diana" 
                  alt="Diana" 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div className="text-left">
                  <h4 className="font-extrabold text-[#0c69ba] text-lg">Diana</h4>
                  <p className="text-sm text-gray-500 font-bold tracking-tight">Mevet</p>
                </div>
              </div>

              <div className="relative bg-white border border-blue-200 p-8 rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                <div className="absolute -top-3 left-10 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-blue-200"></div>
                <div className="absolute -top-[10px] left-[41px] w-0 h-0 border-l-[11px] border-l-transparent border-r-[11px] border-r-transparent border-b-[11px] border-b-white"></div>
                
                <p className="text-gray-700 text-[15px] leading-relaxed italic text-center">
                  "Me encantó el sistema, fue muy fácil de usar y contiene todo lo necesario para gestionar mi veterinaria. Mejoramos mucho los procesos internos y el orden."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;