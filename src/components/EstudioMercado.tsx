import React from 'react';
import { Target, Radar, MessageSquare, Users, FileText, Video, ArrowRight, Star, TrendingUp, Zap, Shield, BarChart3 } from 'lucide-react';

const EstudioMercado: React.FC = () => {
    const ventajas = [
        {
            icon: <Zap className="w-5 h-5" />,
            titulo: "Resultados en 5 días",
            descripcion: "Análisis completo y accionable"
        },
        {
            icon: <Shield className="w-5 h-5" />,
            titulo: "Datos verificados",
            descripcion: "Fuentes oficiales y actualizadas"
        },
        {
            icon: <TrendingUp className="w-5 h-5" />,
            titulo: "Estrategias probadas",
            descripcion: "Basadas en casos de éxito reales"
        }
    ];

    const entregables = [
        {
            icon: <FileText className="w-6 h-6" />,
            titulo: "Dossier Estratégico PDF",
            descripcion: "Análisis completo con gráficos y recomendaciones",
            color: "bg-sky-50 border-sky-200 text-sky-600"
        },
        {
            icon: <Video className="w-6 h-6" />,
            titulo: "Consultoría 1 a 1 (Zoom)",
            descripcion: "Sesión personalizada para resolver todas tus dudas",
            color: "bg-amber-50 border-amber-200 text-amber-600"
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            titulo: "Dashboard Interactivo",
            descripcion: "Acceso a panel de control con datos en tiempo real",
            color: "bg-blue-50 border-blue-200 text-blue-600"
        }
    ];

    return (
        <section id="estudio-mercado" className="py-24 bg-white relative overflow-hidden font-sans min-h-screen">
            {/* Fondos decorativos suaves */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-sky-100/50 via-sky-50/30 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-50/40 via-blue-50/30 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-sky-50/20 via-blue-50/20 to-amber-50/20 rounded-full blur-[150px] pointer-events-none"></div>

            {/* Patrón de puntos decorativo */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ 
                     backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)',
                     backgroundSize: '30px 30px'
                 }}>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Cabecera de la sección */}
                <div className="text-center mb-20 pt-10">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
                        <Target className="w-4 h-4" />
                        Análisis Inteligente de Mercado
                    </span>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
                        Conoce a tu cliente ideal <br />
                        <span className="relative">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-amber-500">
                                antes de invertir un solo sol
                            </span>
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 20" fill="none">
                                <path d="M0 10 Q100 20 200 10 Q300 0 400 10" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
                            </svg>
                        </span>
                    </h2>
                    
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                        Descubre lo que tu competencia oculta y lo que tu público realmente busca. 
                        Utilizamos Inteligencia Artificial para mapear tu sector y entregarte estrategias listas para ejecutar.
                    </p>

                    {/* Estrellas de confianza */}
                    <div className="flex items-center justify-center gap-2 mt-6">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-sm text-slate-500 ml-2 font-medium">+200 empresas confían en nosotros</span>
                    </div>
                </div>

                {/* Grid de 3 Pilares - Rediseñado con nueva paleta */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {/* Pilar 1 - Celeste/Sky */}
                    <div className="relative group bg-white p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-500 border-2 border-slate-100 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/50">
                        <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-sky-200/50">
                            <Radar className="w-8 h-8 text-white" />
                        </div>
                        <div className="inline-block px-3 py-1 bg-sky-50 text-sky-600 text-xs font-bold rounded-full mb-3">
                            ANÁLISIS COMPETITIVO
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Radar de Competencia</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                            Analizamos la huella digital de tus principales competidores. Descubre qué precios manejan, qué promociones lanzan y de qué se quejan sus clientes.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-slate-500">
                                <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                                Monitoreo de precios en tiempo real
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-500">
                                <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                                Análisis de estrategias digitales
                            </li>
                        </ul>
                    </div>

                    {/* Pilar 2 - Azul */}
                    <div className="relative group bg-white p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-500 border-2 border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-200/50">
                            <MessageSquare className="w-8 h-8 text-white" />
                        </div>
                        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-3">
                            IA & SENTIMIENTO
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Análisis de Sentimiento</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                            Procesamos miles de opiniones y búsquedas locales para entender qué valora tu cliente. La IA te dice exactamente qué palabras usar.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-slate-500">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                Análisis de redes sociales
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-500">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                Keywords de alto impacto
                            </li>
                        </ul>
                    </div>

                    {/* Pilar 3 - Amarillo/Amber */}
                    <div className="relative group bg-white p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-500 border-2 border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-100/50">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-amber-200/50">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <div className="inline-block px-3 py-1 bg-amber-50 text-amber-600 text-xs font-bold rounded-full mb-3">
                            SEGMENTACIÓN
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Segmentación Láser</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                            Se acabó gastar dinero en publicidad que no funciona. Te entregamos el perfil exacto de tu comprador para campañas más efectivas.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-slate-500">
                                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                                Buyer persona detallado
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-500">
                                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                                Estrategias por segmento
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Sección de Ventajas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {ventajas.map((ventaja, index) => (
                        <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100">
                            <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-sky-200/30">
                                <div className="text-white">
                                    {ventaja.icon}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 mb-1">{ventaja.titulo}</h4>
                                <p className="text-sm text-slate-500">{ventaja.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Banner de Entregable - Rediseñado */}
                <div className="relative bg-gradient-to-r from-sky-500 via-blue-500 to-amber-400 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl shadow-sky-200/30">
                    {/* Elementos decorativos */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none"></div>
                    
                    <div className="relative z-10">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                                ¿Qué recibes al finalizar?
                            </h3>
                            <p className="text-white/90 text-lg max-w-2xl mx-auto">
                                No te entregamos datos crudos, te entregamos un plan de acción claro para dominar tu mercado.
                            </p>
                        </div>

                        {/* Grid de entregables */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            {entregables.map((item, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-lg">
                                        <div className={item.color.split(' ')[2]}>
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h4 className="text-white font-bold text-lg mb-2">{item.titulo}</h4>
                                    <p className="text-white/80 text-sm">{item.descripcion}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="text-center">
                            <a 
                                href="https://wa.me/925725091" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="group inline-flex items-center gap-3 bg-white text-slate-800 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 duration-300"
                            >
                                Quiero mi Estudio de Mercado
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <p className="text-white/80 text-sm mt-4">
                                🎯 Incluye garantía de satisfacción • Pago seguro
                            </p>
                        </div>
                    </div>
                </div>

                {/* Garantía final */}
                <div className="text-center mt-12">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-50 border border-amber-200 rounded-full">
                        <Shield className="w-5 h-5 text-amber-500" />
                        <span className="text-sm font-medium text-amber-700">
                            Si no encuentras valor en las primeras 48h, te devolvemos tu inversión
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EstudioMercado;