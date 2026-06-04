import React, { useRef, useEffect, useState } from 'react';
import videoFond from '../assets/videos/CORTOFONDO.mp4';
import videoMobile from '../assets/videos/impri_sunat.mp4';
import fondo4 from '../assets/videos/fondo4.mp4';
import { motion } from 'framer-motion';

const FeatureVideo: React.FC = () => {
    const videoRefMain = useRef<HTMLVideoElement>(null);
    const videoRefMobile = useRef<HTMLVideoElement>(null);
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth < 768;
        }
        return false;
    });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    // Auto-play both videos reliably (if they are rendered)
    useEffect(() => {
        const playVideo = (video: HTMLVideoElement | null) => {
            if (video) {
                video.play().catch(error => {
                    console.log("Auto-play was prevented:", error);
                });
            }
        };
        playVideo(videoRefMain.current);
        if (!isMobile) {
            playVideo(videoRefMobile.current);
        }
    }, [isMobile]);

    return (
        <section className="relative py-16 md:py-28 lg:py-36 overflow-hidden bg-white">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-slate-100 z-0"></div>

            {/* Background Texture Video (Very subtle, soft screen blend) - DESKTOP ONLY */}
            {!isMobile && (
                <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply">
                    <video
                        src={fondo4}
                        className="w-full h-full object-cover grayscale"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            )}

            {/* Glowing Orbs (Soft, elegant for light theme) */}
            <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-100/50 blur-[80px] md:blur-[150px] rounded-full mix-blend-multiply pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-50/70 blur-[80px] md:blur-[150px] rounded-full mix-blend-multiply pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center max-w-4xl mx-auto mb-12 md:mb-20 lg:mb-28"
                >
                    <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black text-slate-800 leading-[1.1] md:leading-[1.05] tracking-tight mb-6 md:mb-8">
                        Facilitamos tu gestión <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 pb-2 inline-block">
                            para que te enfoques en tu vocación
                        </span>
                    </h2>
                    <p className="text-base md:text-xl lg:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
                        Descubre cómo nuestra plataforma automatiza los procesos más tediosos, permitiéndote dedicar más tiempo a lo que realmente importa: <strong className="font-bold text-slate-700">hacer crecer tu negocio</strong>.
                    </p>
                </motion.div>

                {/* --- DUAL VIDEO HERO LAYOUT --- */}
                <div className="relative mx-auto max-w-6xl pb-16 md:pb-32 lg:pb-10 lg:pr-24 h-auto lg:h-[650px] flex items-center justify-center">

                    {/* Primary Video Container (Desktop/Web App View) */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative w-full aspect-video md:aspect-auto md:h-full max-h-[600px] bg-white rounded-2xl md:rounded-[2rem] border border-slate-200/80 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] p-2 sm:p-3 xl:mr-32 group sm:-rotate-1 sm:hover:rotate-0 transition-transform duration-700 ease-out z-10"
                    >
                        <div className="relative w-full h-full rounded-xl md:rounded-[1.5rem] overflow-hidden bg-slate-100/50 shadow-inner">
                            {/* Browser/Window Header Mockup */}
                            <div className="absolute top-0 w-full h-8 md:h-10 bg-white/80 backdrop-blur-md border-b border-slate-200/50 flex items-center px-3 md:px-4 gap-1.5 md:gap-2 z-20">
                                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-slate-200"></div>
                                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-slate-200"></div>
                                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-slate-200"></div>
                                <div className="ml-3 md:ml-4 w-1/3 max-w-xs h-3.5 md:h-4 bg-slate-100 rounded-full border border-slate-200/50"></div>
                            </div>

                            <video
                                ref={videoRefMain}
                                src={videoFond}
                                className="w-full h-full object-cover object-left filter brightness-[0.98] pt-8 md:pt-10"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            {/* Inner tint for white contrast */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none z-10"></div>
                        </div>

                        {/* Floating Status Indicator for Primary Video */}
                        <div className="absolute -bottom-6 left-4 md:left-10 z-30 flex items-center gap-3 md:gap-4 bg-white/95 backdrop-blur-xl border border-white px-4 py-2.5 md:px-5 md:py-3 rounded-2xl shadow-[0_20px_40px_-5px_rgba(0,100,200,0.15)] group-hover:-translate-y-2 transition-transform duration-500">
                            <div className="relative flex items-center justify-center w-8 md:w-10 h-8 md:h-10">
                                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                                <div className="relative w-8 md:w-10 h-8 md:h-10 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-md shadow-blue-500/30">
                                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-white rounded-sm animate-pulse"></div>
                                </div>
                            </div>
                            <div>
                                <p className="text-slate-800 font-bold text-xs md:text-[14px] leading-tight mb-0.5">Operación Web</p>
                                <p className="text-blue-600 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Sincronizado</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Secondary Video Container (Mobile/POS View) - DESKTOP ONLY */}
                    {!isMobile && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 40, rotate: 3 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
                            className="absolute -bottom-10 right-4 sm:right-10 lg:right-0 lg:bottom-1/2 lg:translate-y-1/2 w-[160px] sm:w-[220px] lg:w-[280px] aspect-[9/19] bg-white rounded-[2rem] sm:rounded-[2.5rem] p-2 border border-slate-200 shadow-[0_30px_60px_0px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.05)] z-20 group"
                        >
                            {/* Soft ambient glow behind phone */}
                            <div className="absolute -inset-10 bg-cyan-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 -z-10"></div>

                            <div className="relative w-full h-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-white shadow-inner">
                                {/* Mobile notch dummy */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-5 bg-white rounded-b-xl z-20"></div>

                                <video
                                    ref={videoRefMobile}
                                    src={videoMobile}
                                    className="w-full h-full object-contain"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            </div>

                            {/* Floating Receipt/Notification Badge on Mobile */}
                            <div className="absolute top-10 -right-8 sm:-right-12 z-30 bg-white border border-slate-100 px-4 py-2 sm:px-5 sm:py-3 rounded-2xl shadow-xl shadow-slate-200/50 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-cyan-50 text-cyan-500 flex items-center justify-center">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <div className="hidden sm:block">
                                    <p className="text-slate-800 font-bold text-xs">Impresión OS</p>
                                    <p className="text-slate-400 text-[10px] font-medium">Terminal móvil</p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                </div>

                {/* Feature highlights below video (Clean white theme) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
                {/* Card 1 */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    className="relative group flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-md shadow-slate-200/60 hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/80 to-blue-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    <div className="relative z-10 w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600 font-black text-5xl mb-2 leading-none">100%</div>
                    <p className="relative z-10 text-slate-700 font-bold text-sm uppercase tracking-widest mt-1">Flujo Automatizado</p>
                    <p className="relative z-10 text-slate-400 text-xs mt-2 leading-relaxed">Procesos sin intervención manual</p>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="relative group flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-md shadow-slate-200/60 hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-indigo-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    <div className="relative z-10 w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600 font-black text-5xl mb-2 leading-none">24/7</div>
                    <p className="relative z-10 text-slate-700 font-bold text-sm uppercase tracking-widest mt-1">Disponibilidad Total</p>
                    <p className="relative z-10 text-slate-400 text-xs mt-2 leading-relaxed">Siempre activo, sin interrupciones</p>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="relative group flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-md shadow-slate-200/60 hover:shadow-xl hover:shadow-indigo-100/60 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 to-purple-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    <div className="relative z-10 w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-600 font-black text-5xl mb-2 leading-none">0</div>
                    <p className="relative z-10 text-slate-700 font-bold text-sm uppercase tracking-widest mt-1">Fricciones Operativas</p>
                    <p className="relative z-10 text-slate-400 text-xs mt-2 leading-relaxed">Experiencia fluida de principio a fin</p>
                </motion.div>
            </div>
            </div>
        </section>
    );
};

export default FeatureVideo;
