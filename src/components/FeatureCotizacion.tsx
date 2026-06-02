import React from 'react';
import { Code, LineChart, BarChart3, TrendingUp, FileText, Cpu, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const FeatureCotizacion: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 font-sans">
            
            {/* Cabecera de la sección (Añadido para darle contexto al bloque) */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-xs font-bold uppercase tracking-widest mb-4">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    Evolución Digital
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
                    Soluciones avanzadas para escalar
                </h2>
                <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
                    Lleva la gestión de tu negocio al siguiente nivel con sistemas web personalizados y análisis inteligente de datos.
                </p>
            </div>

            {/* BLOQUE EXTRA: SOFTWARE A MEDIDA + ANALÍTICA */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* 1. Tarjeta Dark: Software a medida (AppWebs) */}
                <div className="group rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-10 text-white shadow-2xl relative overflow-hidden border border-slate-700/50 hover:-translate-y-1 transition-all duration-500">
                    {/* Luces de fondo (Brand Colors) */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
                    <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-500/15 rounded-full blur-2xl pointer-events-none"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-400/20">
                                <Code className="w-6 h-6 text-white" strokeWidth={2.5} />
                            </div>
                            <p className="text-sm font-black text-cyan-300 uppercase tracking-widest">AppWebs a Medida</p>
                        </div>
                        
                        <h3 className="text-3xl font-black leading-tight mb-4 text-white">
                            ¿Necesitas un sistema de gestión potente?
                        </h3>
                        <p className="text-slate-300 leading-relaxed text-[15px] mb-8 flex-grow">
                            Desarrollamos aplicaciones web rápidas y seguras para inventarios, reservas, control de caja y gestión de clientes. Estructuramos la arquitectura perfecta sin costos de servidores inflados.
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-8">
                            {["Inventarios", "Caja", "Ventas", "Reportes", "Clientes"].map(tag => (
                                <span key={tag} className="text-xs font-bold bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 px-4 py-2 rounded-full transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        
                        <a href="https://wa.me/tunumerodecontacto" target="_blank" rel="noreferrer" 
                           className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-cyan-500/30 text-[15px] w-full sm:w-auto">
                            <FaWhatsapp className="w-5 h-5" />
                            Cotizar mi Sistema Web
                        </a>
                    </div>
                </div>

                {/* 2. Tarjeta Light: IA y analítica (Dashboards) */}
                <div className="group rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10 shadow-xl relative overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5">
                    {/* Luces de fondo (Brand Colors) */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/80 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                                <LineChart className="w-6 h-6 text-white" strokeWidth={2.5} />
                            </div>
                            <p className="text-sm font-black text-blue-600 uppercase tracking-widest">IA y Analítica</p>
                        </div>
                        
                        <h3 className="text-3xl font-black text-slate-800 leading-tight mb-4">
                            Decisiones basadas en datos reales
                        </h3>
                        <p className="text-slate-500 leading-relaxed text-[15px] mb-8">
                            Transformamos la información de tu negocio en Dashboards interactivos y herramientas inteligentes. Analiza tendencias, predice ventas y automatiza notificaciones.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8 flex-grow">
                            {[
                                { label: "Dashboards", icon: <BarChart3 className="w-5 h-5 text-blue-500" /> },
                                { label: "Predicción", icon: <TrendingUp className="w-5 h-5 text-cyan-500" /> },
                                { label: "Reportes", icon: <FileText className="w-5 h-5 text-indigo-500" /> },
                                { label: "Automatización", icon: <Cpu className="w-5 h-5 text-blue-400" /> },
                            ].map(({ label, icon }) => (
                                <div key={label} className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-100 p-4 hover:border-blue-200 hover:bg-blue-50/50 transition-colors duration-300">
                                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                                        {icon}
                                    </div>
                                    <p className="font-bold text-slate-700 text-sm">{label}</p>
                                </div>
                            ))}
                        </div>
                        
                        <a href="https://wa.me/tunumerodecontacto" target="_blank" rel="noreferrer"
                           className="inline-flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 text-[15px] shadow-lg shadow-slate-900/20">
                            Consultar sobre Dashboards
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeatureCotizacion;