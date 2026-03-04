import React, { useRef, useEffect } from 'react';
import videoFond from '../assets/videos/CORTOFONDO.mp4';
import videoMobile from '../assets/videos/impri_sunat.mp4';
import fondo4 from '../assets/videos/fondo4.mp4';

const FeatureVideo: React.FC = () => {
    const videoRefMain = useRef<HTMLVideoElement>(null);
    const videoRefMobile = useRef<HTMLVideoElement>(null);

    // Auto-play both videos reliably
    useEffect(() => {
        const playVideo = (video: HTMLVideoElement | null) => {
            if (video) {
                video.play().catch(error => {
                    console.log("Auto-play was prevented:", error);
                });
            }
        };
        playVideo(videoRefMain.current);
        playVideo(videoRefMobile.current);
    }, []);

    return (
        <section className="relative py-28 lg:py-36 overflow-hidden bg-white">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-slate-100 z-0"></div>

            {/* Background Texture Video (Very subtle, soft screen blend) */}
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

            {/* Glowing Orbs (Soft, elegant for light theme) */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-100/50 blur-[150px] rounded-full mix-blend-multiply pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 right-0 w-[800px] h-[800px] bg-blue-50/70 blur-[150px] rounded-full mix-blend-multiply pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-28">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black text-slate-800 leading-[1.05] tracking-tight mb-8">
                        Facilitamos tu gestión <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 pb-2 inline-block">
                            para que te enfoques en tu vocación
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
                        Descubre cómo nuestra plataforma automatiza los procesos más tediosos, permitiéndote dedicar más tiempo a lo que realmente importa: <strong className="font-bold text-slate-700">hacer crecer tu negocio</strong>.
                    </p>
                </div>

                {/* --- DUAL VIDEO HERO LAYOUT --- */}
                <div className="relative mx-auto max-w-6xl pb-32 lg:pb-10 lg:pr-24 h-auto lg:h-[650px] flex items-center justify-center">

                    {/* Primary Video Container (Desktop/Web App View) */}
                    <div className="relative w-full aspect-video md:aspect-auto md:h-full max-h-[600px] bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] p-2 sm:p-3 xl:mr-32 group sm:-rotate-1 sm:hover:rotate-0 transition-transform duration-700 ease-out z-10">
                        <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-slate-100/50 shadow-inner">
                            {/* Browser/Window Header Mockup */}
                            <div className="absolute top-0 w-full h-10 bg-white/80 backdrop-blur-md border-b border-slate-200/50 flex items-center px-4 gap-2 z-20">
                                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                <div className="ml-4 w-1/3 max-w-xs h-4 bg-slate-100 rounded-full border border-slate-200/50"></div>
                            </div>

                            <video
                                ref={videoRefMain}
                                src={videoFond}
                                className="w-full h-full object-cover object-left filter brightness-[0.98] pt-10"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            {/* Inner tint for white contrast */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none z-10"></div>
                        </div>

                        {/* Floating Status Indicator for Primary Video */}
                        <div className="absolute -bottom-6 -left-4 sm:left-10 z-30 flex items-center gap-4 bg-white/95 backdrop-blur-xl border border-white px-5 py-3 rounded-2xl shadow-[0_20px_40px_-5px_rgba(0,100,200,0.15)] group-hover:-translate-y-2 transition-transform duration-500">
                            <div className="relative flex items-center justify-center w-10 h-10">
                                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                                <div className="relative w-10 h-10 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-md shadow-blue-500/30">
                                    <div className="w-2.5 h-2.5 bg-white rounded-sm animate-pulse"></div>
                                </div>
                            </div>
                            <div>
                                <p className="text-slate-800 font-bold text-[14px] leading-tight mb-0.5">Operación Web</p>
                                <p className="text-blue-600 text-[10px] font-bold uppercase tracking-widest">Sincronizado</p>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Video Container (Mobile/POS View) - Positioning overlays and pops out */}
                    <div className="absolute -bottom-10 right-4 sm:right-10 lg:right-0 lg:bottom-1/2 lg:translate-y-1/2 w-[160px] sm:w-[220px] lg:w-[280px] aspect-[9/19] bg-white rounded-[2rem] sm:rounded-[2.5rem] p-2 border border-slate-200 shadow-[0_30px_60px_0px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.05)] z-20 group hover:-translate-y-4 hover:-rotate-2 transition-all duration-700 ease-out rotate-3">
                        {/* Soft ambient glow behind phone */}
                        <div className="absolute -inset-10 bg-cyan-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 -z-10"></div>

                        <div className="relative w-full h-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-slate-900 shadow-inner">
                            {/* Mobile notch dummy */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-5 bg-white rounded-b-xl z-20"></div>

                            <video
                                ref={videoRefMobile}
                                src={videoMobile}
                                className="w-full h-full object-cover scale-105"
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
                    </div>

                </div>

                {/* Feature highlights below video (Clean white theme) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mt-20 max-w-4xl mx-auto md:border md:border-slate-100 md:bg-white md:shadow-lg md:shadow-slate-200/50 md:rounded-3xl overflow-hidden p-6 md:p-0">
                    <div className="text-center px-4 md:py-8 bg-white md:bg-transparent rounded-2xl shadow-sm border border-slate-100 md:border-0 md:shadow-none p-6 md:p-0">
                        <div className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600 font-black text-4xl mb-2">100%</div>
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Flujo Automatizado</p>
                    </div>
                    <div className="text-center px-4 md:py-8 border-y md:border-y-0 md:border-x border-slate-100 py-6 md:p-0 bg-white md:bg-transparent rounded-2xl shadow-sm md:shadow-none md:rounded-none">
                        <div className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600 font-black text-4xl mb-2">24/7</div>
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Disponibilidad Total</p>
                    </div>
                    <div className="text-center px-4 md:py-8 bg-white md:bg-transparent rounded-2xl shadow-sm border border-slate-100 md:border-0 md:shadow-none p-6 md:p-0">
                        <div className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-600 font-black text-4xl mb-2">0</div>
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Fricciones Operativas</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureVideo;
