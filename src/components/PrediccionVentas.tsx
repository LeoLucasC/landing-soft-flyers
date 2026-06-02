import React from 'react';
import { TrendingUp, Database, BrainCircuit, BarChart4, CheckCircle2, ArrowRight, Zap, Shield, LineChart, Calendar, AlertTriangle, Users, Clock, Star } from 'lucide-react';

const PrediccionVentas: React.FC = () => {
    const beneficios = [
        {
            icon: <Zap className="w-5 h-5" />,
            titulo: "Predicciones en tiempo real",
            descripcion: "Actualización continua de pronósticos según nuevos datos de ventas"
        },
        {
            icon: <Shield className="w-5 h-5" />,
            titulo: "Reducción de pérdidas",
            descripcion: "Evita quiebres de stock y exceso de inventario"
        },
        {
            icon: <LineChart className="w-5 h-5" />,
            titulo: "Precisión superior al 95%",
            descripcion: "Modelos entrenados con datos específicos de tu industria"
        },
        {
            icon: <Calendar className="w-5 h-5" />,
            titulo: "Planificación estratégica",
            descripcion: "Proyecciones a 30, 60 y 90 días con escenarios múltiples"
        }
    ];

    const metricas = [
        { valor: "40%", etiqueta: "Reducción de quiebres de stock", icon: <AlertTriangle className="w-5 h-5" />, color: "from-sky-400 to-sky-500", bgColor: "bg-sky-50", textColor: "text-sky-600", shadowColor: "shadow-sky-200/50" },
        { valor: "3x", etiqueta: "ROI promedio en 6 meses", icon: <TrendingUp className="w-5 h-5" />, color: "from-blue-500 to-blue-600", bgColor: "bg-blue-50", textColor: "text-blue-600", shadowColor: "shadow-blue-200/50" },
        { valor: "+10K", etiqueta: "Empresas usando IA predictiva", icon: <Users className="w-5 h-5" />, color: "from-amber-400 to-amber-500", bgColor: "bg-amber-50", textColor: "text-amber-600", shadowColor: "shadow-amber-200/50" },
        { valor: "24/7", etiqueta: "Monitoreo continuo automatizado", icon: <Clock className="w-5 h-5" />, color: "from-sky-400 to-blue-500", bgColor: "bg-sky-50", textColor: "text-sky-600", shadowColor: "shadow-sky-200/50" }
    ];

    return (
        <section id="prediccion-ventas" className="py-24 bg-white relative overflow-hidden font-sans min-h-screen">
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
                        <BrainCircuit className="w-4 h-4" />
                        Inteligencia Artificial Aplicada a Ventas
                    </span>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
                        Transforma tus datos en <br />
                        <span className="relative">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-amber-500">
                                predicciones accionables
                            </span>
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 20" fill="none">
                                <path d="M0 10 Q100 20 200 10 Q300 0 400 10" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
                            </svg>
                        </span>
                    </h2>
                    
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                        Nuestro módulo de IA predictiva analiza tu historial de ventas, comportamiento de clientes y tendencias del mercado para anticipar la demanda con precisión milimétrica. Deja de reaccionar y empieza a anticiparte.
                    </p>

                    {/* Estrellas de confianza */}
                    <div className="flex items-center justify-center gap-2 mt-6">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-sm text-slate-500 ml-2 font-medium">+10,000 empresas optimizando su inventario</span>
                    </div>
                </div>

                {/* Métricas destacadas */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {metricas.map((metrica, index) => (
                        <div key={index} className="bg-white border-2 border-slate-100 p-6 rounded-2xl text-center hover:border-sky-200 hover:shadow-xl transition-all duration-300 group">
                            <div className={`w-14 h-14 bg-gradient-to-br ${metrica.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg ${metrica.shadowColor} group-hover:scale-110 transition-transform duration-300`}>
                                <div className="text-white">
                                    {metrica.icon}
                                </div>
                            </div>
                            <div className="text-3xl md:text-4xl font-black text-slate-800 mb-2">
                                {metrica.valor}
                            </div>
                            <div className="text-slate-500 text-sm font-medium">
                                {metrica.etiqueta}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Grid de Proceso: ¿Cómo funciona? */}
                <div className="mb-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 text-center">
                        ¿Cómo funciona nuestro motor de predicción?
                    </h3>
                    <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
                        Tres pasos simples para revolucionar la gestión de tu negocio
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                        {/* Línea conectora (solo desktop) */}
                        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-sky-200 via-blue-300 to-sky-200 z-0"></div>

                        {/* Paso 1 - Celeste */}
                        <div className="relative z-10 bg-white p-8 rounded-[2rem] text-center hover:-translate-y-2 transition-all duration-300 border-2 border-slate-100 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/50 group">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-sky-200/50 group-hover:scale-110 transition-transform duration-300">
                                <Database className="w-10 h-10 text-white" />
                            </div>
                            <div className="inline-block px-3 py-1 bg-sky-50 text-sky-600 text-xs font-bold rounded-full mb-3">
                                PASO 1
                            </div>
                            <h4 className="text-xl font-bold text-slate-800 mb-3">Recolección Inteligente</h4>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Conectamos con tus fuentes de datos: Excel, ERPs, bases de datos SQL, APIs y sistemas de facturación electrónica.
                            </p>
                            <ul className="space-y-2 text-left">
                                <li className="flex items-start gap-2 text-sm text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                                    Historial de ventas multi-canal
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                                    Datos estacionales y promocionales
                                </li>
                            </ul>
                        </div>

                        {/* Paso 2 - Azul (Destacado) */}
                        <div className="relative z-10 bg-gradient-to-b from-blue-50 to-white p-8 rounded-[2rem] text-center hover:-translate-y-2 transition-all duration-300 border-2 border-blue-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 group">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200/50 relative group-hover:scale-110 transition-transform duration-300">
                                <span className="absolute -top-2 -right-2 flex h-5 w-5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-500"></span>
                                </span>
                                <BrainCircuit className="w-10 h-10 text-white" />
                            </div>
                            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded-full mb-3">
                                PASO 2 • IA ACTIVA
                            </div>
                            <h4 className="text-xl font-bold text-slate-800 mb-3">Entrenamiento de IA</h4>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Modelos de Machine Learning analizan patrones complejos: estacionalidad, tendencias macro y comportamiento de clientes.
                            </p>
                            <ul className="space-y-2 text-left">
                                <li className="flex items-start gap-2 text-sm text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    Detección de anomalías y outliers
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    Segmentación por SKU y categoría
                                </li>
                            </ul>
                        </div>

                        {/* Paso 3 - Amarillo */}
                        <div className="relative z-10 bg-white p-8 rounded-[2rem] text-center hover:-translate-y-2 transition-all duration-300 border-2 border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-100/50 group">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-200/50 group-hover:scale-110 transition-transform duration-300">
                                <BarChart4 className="w-10 h-10 text-white" />
                            </div>
                            <div className="inline-block px-3 py-1 bg-amber-50 text-amber-600 text-xs font-bold rounded-full mb-3">
                                PASO 3
                            </div>
                            <h4 className="text-xl font-bold text-slate-800 mb-3">Predicciones Accionables</h4>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Dashboard intuitivo con proyecciones de ventas, alertas de stock crítico y recomendaciones de compra automatizadas.
                            </p>
                            <ul className="space-y-2 text-left">
                                <li className="flex items-start gap-2 text-sm text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                                    Alertas automáticas por email/Slack
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                                    Simulador de escenarios "What-if"
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Beneficios detallados */}
                <div className="mb-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 text-center">
                        Beneficios cuantificables para tu negocio
                    </h3>
                    <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
                        Resultados reales que impactan directamente en tu rentabilidad
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {beneficios.map((beneficio, index) => (
                            <div key={index} className="bg-white border-2 border-slate-100 p-6 rounded-2xl hover:border-sky-200 hover:shadow-lg transition-all duration-300 flex gap-4 group">
                                <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-sky-200/30 group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-white">
                                        {beneficio.icon}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800 mb-2">{beneficio.titulo}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">{beneficio.descripcion}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Integraciones */}
                <div className="bg-gradient-to-br from-sky-50 via-white to-amber-50 border-2 border-slate-100 rounded-[2.5rem] p-8 md:p-12 mb-20">
                    <div className="text-center mb-8">
                        <span className="inline-block px-4 py-2 bg-sky-100 text-sky-600 text-xs font-bold rounded-full mb-4">
                            COMPATIBILIDAD TOTAL
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">¿Ya tienes un sistema de gestión?</h3>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Nuestro módulo de IA se integra perfectamente con tus herramientas actuales. No necesitas cambiar nada.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {['SAP', 'Odoo', 'Excel/Google Sheets', 'Facturación Electrónica', 'Shopify', 'WooCommerce', 'SQL Server', 'MySQL/PostgreSQL'].map((sistema, index) => (
                            <div key={index} className="bg-white border-2 border-slate-100 rounded-xl p-4 hover:border-sky-200 hover:shadow-md transition-all duration-300">
                                <span className="text-slate-700 text-sm font-semibold">{sistema}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call To Action */}
                <div className="text-center">
                    <div className="inline-flex flex-col items-center">
                        <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-sky-500 via-blue-500 to-amber-400 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl hover:shadow-2xl hover:shadow-sky-200/50 hover:scale-105 duration-300">
                            <TrendingUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            Solicitar Auditoría de Datos Gratuita
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-slate-500 text-sm mt-4 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-sky-400" />
                            Sin compromiso • Análisis inicial gratuito • Resultados en 48h
                        </p>
                        <p className="text-slate-400 text-xs mt-2">
                            Disponible como módulo independiente o integrado a tu sistema actual
                        </p>
                    </div>
                </div>

                {/* Garantía final */}
                <div className="text-center mt-12">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-50 border border-amber-200 rounded-full">
                        <Shield className="w-5 h-5 text-amber-500" />
                        <span className="text-sm font-medium text-amber-700">
                            Garantía de precisión: Si no superamos el 90% de exactitud, te devolvemos tu inversión
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrediccionVentas;