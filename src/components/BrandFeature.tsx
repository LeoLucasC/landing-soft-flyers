import React from 'react';
import imgLeo from '../assets/images/img_leo.png';

const BrandFeature: React.FC = () => {
    return (
        <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
            {/* Background Decorators */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-50 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[800px] h-[400px] bg-blue-50 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left selection:bg-cyan-100">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-cyan-100 bg-cyan-50 mb-8">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse"></span>
                        <span className="text-cyan-700 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase">Ecosistema Integrado</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 leading-[1.1] tracking-tight mb-8">
                        El futuro de tu <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 relative inline-block">
                            operación
                            {/* Decorative line under italic text */}
                            <svg className="absolute w-full h-3 -bottom-2 left-0 text-cyan-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>

                    <p className="text-lg text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                        Más que un software, ofrecemos un ecosistema tecnológico diseñado para llevar tu negocio al siguiente nivel. <strong className="text-slate-800 font-bold">Centraliza tu facturación</strong>, anticipa el mercado con <strong className="text-slate-800 font-bold">Inteligencia Artificial</strong>, y desarrolla herramientas únicas que se adaptan a tu visión corporativa.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start">
                        <div className="flex items-center gap-5 group">
                            <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center border border-cyan-100 group-hover:bg-cyan-100 transition-colors duration-300">
                                <svg className="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <div className="text-left">
                                <h4 className="text-slate-800 font-bold text-lg sm:text-xl">Rapidez</h4>
                                <p className="text-slate-500 text-sm">Ejecución en ms</p>
                            </div>
                        </div>

                        <div className="w-px h-12 bg-slate-200 hidden sm:block"></div>

                        <div className="flex items-center gap-5 group">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:bg-blue-100 transition-colors duration-300">
                                <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                            </div>
                            <div className="text-left">
                                <h4 className="text-slate-800 font-bold text-lg sm:text-xl">Seguridad</h4>
                                <p className="text-slate-500 text-sm">Datos encriptados</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image/Visual */}
                <div className="flex-1 w-full flex justify-center lg:justify-end mt-12 lg:mt-0 relative">
                    {/* Decorative background shape */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-blue-50 rounded-[3rem] rotate-3 scale-105 -z-10 transition-transform duration-700"></div>

                    <div className="relative z-10 w-full max-w-2xl bg-white rounded-[2rem] border border-slate-100 p-2 sm:p-4 shadow-2xl shadow-slate-200/50">
                        {/* Image Container - Using object-contain to ensure the full image is visible without cropping */}
                        <div className="relative rounded-[1.5rem] overflow-hidden bg-slate-50 flex items-center justify-center w-full min-h-[400px]">
                            {/* Image */}
                            <img
                                src={imgLeo}
                                alt="Dashboard principal"
                                className="w-full h-auto max-h-[600px] object-contain object-center z-0 p-4"
                            />

                            {/* Floating Glassmorphism Badge */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-[-20px] md:translate-x-0 bg-white/95 backdrop-blur-xl border border-white p-4 sm:p-5 rounded-3xl z-20 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] w-[280px]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-bold text-[15px] sm:text-base leading-none mb-1.5">Crecimiento Asegurado</p>
                                        <div className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4 text-cyan-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" /></svg>
                                            <p className="text-cyan-600 text-sm font-bold">+45% eficiencia</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandFeature;
