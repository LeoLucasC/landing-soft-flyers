import imgAlpetravel from '../assets/images/marcas_clientes/alpetravel.webp';
import imgAmaru from '../assets/images/marcas_clientes/amaru.jpg.jpeg';
import imgBlackhouse from '../assets/images/marcas_clientes/blackhouse.jpg.jpeg';
import imgBolivar from '../assets/images/marcas_clientes/clinicaBolivar.png';
import imgEmapa from '../assets/images/marcas_clientes/emapa.jpeg';
import imgIceCrazy from '../assets/images/marcas_clientes/iceCrazy.jpg.jpeg';
import imgOe from '../assets/images/marcas_clientes/oe.png';
import imgSarcos from '../assets/images/marcas_clientes/sarcos.jpg.jpeg';

// --- COMPONENTE DE LA PÁGINA PRINCIPAL ---
const LandingPage = () => {
    // Array doble para crear el efecto infinito sin cortes limpios
    const logos = [
        { src: imgAlpetravel, alt: "Alpe Travel" },
        { src: imgAmaru, alt: "Amaru" },
        { src: imgBlackhouse, alt: "Black House" },
        { src: imgBolivar, alt: "Clinica Bolivar" },
        { src: imgEmapa, alt: "Emapa" },
        { src: imgIceCrazy, alt: "Ice Crazy" },
        { src: imgOe, alt: "OE" },
        { src: imgSarcos, alt: "Sarcos" },
    ];

    // Duplicamos las imágenes para que el loop no tenga espacios en blanco
    const infiniteLogos = [...logos, ...logos];

    return (
        <div className="bg-white">
            {/* 1. SECCIÓN HERO (TOTALMENTE BLANCA) */}
            <section className="pt-20 pb-12 px-6 max-w-7xl mx-auto text-center" id="inicio">
                <div className="mb-8 inline-block">
                    <span className="bg-cyan-100 text-cyan-800 text-sm font-bold px-4 py-1.5 rounded-full">
                        Software y Tecnología
                    </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-6 tracking-tight">
                    Gestión integral <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                        para tu empresa
                    </span>
                </h1>
                <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium">
                    Simplifica y optimiza cada aspecto de tu negocio, todo desde un solo lugar.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-cyan-200 hover:scale-105 transition-all flex items-center gap-2">
                        ¡Cotiza tu proyecto! <span className="text-xl">→</span>
                    </button>
                </div>
            </section>

            {/* CARRUSEL DE MARCAS INFINITO */}
            <section className="py-10 bg-slate-50/50 border-y border-slate-100 overflow-hidden relative">
                <p className="text-center text-sm font-bold text-slate-600 mb-8 tracking-wide">
                    CON LA CONFIANZA DE EMPRESAS LÍDERES
                </p>

                {/* Contenedor del Carrusel Animado */}
                <div className="relative w-full flex items-center">
                    {/* Gradientes laterales para difuminar entrada/salida */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

                    {/* Track del carrusel */}
                    <div className="flex w-max animate-scroll gap-16 items-center px-8 cursor-default">
                        {infiniteLogos.map((logo, index) => (
                            <div key={index} className="w-[180px] h-[80px] flex items-center justify-center flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <img src={logo.src} alt={logo.alt} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. NUEVA SECCIÓN: GALERÍA DE LA APP (IMPACTANTE) */}
            <section className="py-16 bg-white" id="soluciones">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card de Funcionalidad 1 */}
                        <div className="group overflow-hidden rounded-3xl border-2 border-slate-100 hover:border-cyan-400 transition-all shadow-sm hover:shadow-xl">
                            <div className="h-48 bg-slate-50 flex items-center justify-center">
                                <span className="text-cyan-600 font-bold text-lg">Soluciones IA</span>
                            </div>
                            <div className="p-8 bg-white">
                                <h3 className="font-bold text-slate-800 text-xl">Predicción de Ventas</h3>
                                <p className="text-slate-500 mt-3 leading-relaxed">Anticípate al mercado utilizando algoritmos avanzados que analizan tus datos para predecir tendencias.</p>
                            </div>
                        </div>
                        {/* Card de Funcionalidad 2 */}
                        <div className="group overflow-hidden rounded-3xl border-2 border-slate-100 hover:border-blue-500 transition-all shadow-sm hover:shadow-xl">
                            <div className="h-48 bg-blue-50 flex items-center justify-center">
                                <span className="text-blue-600 font-bold text-lg">Facturación</span>
                            </div>
                            <div className="p-8 bg-white">
                                <h3 className="font-bold text-slate-800 text-xl">Facturación Electrónica</h3>
                                <p className="text-slate-500 mt-3 leading-relaxed">Emisión de comprobantes rápidos, seguros y validados con altos estándares de cumplimiento.</p>
                            </div>
                        </div>
                        {/* Card de Funcionalidad 3 */}
                        <div className="group overflow-hidden rounded-3xl border-2 border-slate-100 hover:border-indigo-500 transition-all shadow-sm hover:shadow-xl">
                            <div className="h-48 bg-indigo-50 flex items-center justify-center">
                                <span className="text-indigo-600 font-bold text-lg">Desarrollo Custom</span>
                            </div>
                            <div className="p-8 bg-white">
                                <h3 className="font-bold text-slate-800 text-xl">Software a Medida</h3>
                                <p className="text-slate-500 mt-3 leading-relaxed">Plataformas escalables construidas específicamente alrededor de los flujos únicos de tu negocio.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SECCIÓN TESTIMONIOS (DISEÑO BURBUJA) */}
            <section className="py-20 bg-slate-50/50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-slate-800 mb-16">
                        Casos de <span className="text-blue-600">Éxito</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-12">
                        <div className="max-w-sm flex flex-col items-center">
                            <div className="bg-white border-2 border-blue-100 p-8 rounded-[2.5rem] shadow-sm italic text-slate-600 relative mb-8">
                                "El software a medida transformó por completo nuestra facturación e inventario. Los estudios de IA nos permiten prever la demanda mensual con gran exactitud."
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-blue-100"></div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                                <div className="text-left leading-tight">
                                    <p className="font-bold text-blue-800">Roberto Gómez</p>
                                    <p className="text-xs text-slate-500">Director Comercial</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;