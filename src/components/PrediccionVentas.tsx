import React from 'react';
import { TrendingUp, Database, BrainCircuit, BarChart4, CheckCircle2, ArrowRight, Zap, Shield, LineChart, Calendar, AlertTriangle, Users, Clock } from 'lucide-react';

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
        { valor: "40%", etiqueta: "Reducción de quiebres de stock", icon: <AlertTriangle className="w-5 h-5" /> },
        { valor: "3x", etiqueta: "ROI promedio en 6 meses", icon: <TrendingUp className="w-5 h-5" /> },
        { valor: "+10K", etiqueta: "Empresas usando IA predictiva", icon: <Users className="w-5 h-5" /> },
        { valor: "24/7", etiqueta: "Monitoreo continuo automatizado", icon: <Clock className="w-5 h-5" /> }
    ];

    return (
        <section id="prediccion-ventas" className="py-24 bg-[#0A0F1E] relative overflow-hidden font-sans border-y border-slate-800">
            {/* Luces de fondo IA mejoradas */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Cabecera de la sección mejorada */}
                <div className="text-center mb-20">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-900/30 border border-cyan-800/50 text-cyan-400 text-xs font-black tracking-widest uppercase mb-6">
                        <BrainCircuit className="w-4 h-4" />
                        Inteligencia Artificial Aplicada a Ventas
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
                        Transforma tus datos en <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                            predicciones accionables
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
                        Nuestro módulo de IA predictiva analiza tu historial de ventas, comportamiento de clientes y tendencias del mercado para anticipar la demanda con precisión milimétrica. Deja de reaccionar y empieza a anticiparte.
                    </p>
                </div>

                {/* Métricas destacadas */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {metricas.map((metrica, index) => (
                        <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl text-center hover:border-cyan-800/50 transition-all duration-300">
                            <div className="text-cyan-400 mb-3 flex justify-center">
                                {metrica.icon}
                            </div>
                            <div className="text-3xl md:text-4xl font-black text-white mb-2">
                                {metrica.valor}
                            </div>
                            <div className="text-slate-400 text-sm font-medium">
                                {metrica.etiqueta}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Grid de Proceso: ¿Cómo funciona? */}
                <div className="mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
                        ¿Cómo funciona nuestro motor de predicción?
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Línea conectora (solo desktop) */}
                        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-cyan-900 via-blue-800 to-cyan-900 z-0"></div>

                        {/* Paso 1 */}
                        <div className="relative z-10 bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="w-20 h-20 mx-auto bg-slate-800 border-2 border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,211,238,0.1)] group-hover:border-cyan-500/50 transition-all">
                                <Database className="w-10 h-10 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">1. Recolección Inteligente</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Conectamos con tus fuentes de datos: Excel, ERPs, bases de datos SQL, APIs y sistemas de facturación electrónica. Extraemos y limpiamos automáticamente la información.
                            </p>
                            <ul className="mt-4 space-y-2 text-left">
                                <li className="flex items-start gap-2 text-xs text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                    Historial de ventas multi-canal
                                </li>
                                <li className="flex items-start gap-2 text-xs text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                    Datos estacionales y promocionales
                                </li>
                            </ul>
                        </div>

                        {/* Paso 2 */}
                        <div className="relative z-10 bg-gradient-to-b from-slate-800 to-slate-900 backdrop-blur-sm border border-cyan-900/50 p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300 shadow-[0_0_40px_rgba(34,211,238,0.1)] group">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,211,238,0.4)] relative group-hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] transition-shadow">
                                <span className="absolute -top-2 -right-2 flex h-4 w-4">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500"></span>
                                </span>
                                <BrainCircuit className="w-10 h-10 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">2. Entrenamiento de IA</h4>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Modelos de Machine Learning (LSTM, XGBoost, Prophet) analizan patrones complejos: estacionalidad, tendencias macro, comportamiento de clientes y elasticidad de precios.
                            </p>
                            <ul className="mt-4 space-y-2 text-left">
                                <li className="flex items-start gap-2 text-xs text-slate-400">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                    Detección de anomalías y outliers
                                </li>
                                <li className="flex items-start gap-2 text-xs text-slate-400">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                    Segmentación por SKU y categoría
                                </li>
                            </ul>
                        </div>

                        {/* Paso 3 */}
                        <div className="relative z-10 bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="w-20 h-20 mx-auto bg-slate-800 border-2 border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.1)] group-hover:border-blue-500/50 transition-all">
                                <BarChart4 className="w-10 h-10 text-blue-400" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">3. Predicciones Accionables</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Dashboard intuitivo con proyecciones de ventas, alertas de stock crítico y recomendaciones de compra. Exportable a PDF, Excel o integrable vía API.
                            </p>
                            <ul className="mt-4 space-y-2 text-left">
                                <li className="flex items-start gap-2 text-xs text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    Alertas automáticas por email/Slack
                                </li>
                                <li className="flex items-start gap-2 text-xs text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    Simulador de escenarios "What-if"
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Beneficios detallados */}
                <div className="mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                        Beneficios cuantificables para tu negocio
                    </h3>
                    <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                        Resultados reales que impactan directamente en tu rentabilidad
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {beneficios.map((beneficio, index) => (
                            <div key={index} className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl hover:border-cyan-800/50 transition-all duration-300 flex gap-4">
                                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <div className="text-cyan-400">
                                        {beneficio.icon}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">{beneficio.titulo}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{beneficio.descripcion}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Integraciones */}
                <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 border border-slate-700 rounded-3xl p-8 md:p-12 mb-20">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4">¿Ya tienes un sistema de gestión?</h3>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Nuestro módulo de IA se integra perfectamente con tus herramientas actuales. No necesitas cambiar nada.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {['SAP', 'Odoo', 'Excel/Google Sheets', 'Facturación Electrónica', 'Shopify', 'WooCommerce', 'SQL Server', 'MySQL/PostgreSQL'].map((sistema, index) => (
                            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                                <span className="text-slate-300 text-sm font-medium">{sistema}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call To Action mejorado */}
                <div className="text-center">
                    <div className="inline-flex flex-col items-center">
                        <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] hover:-translate-y-1">
                            <TrendingUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            Solicitar Auditoría de Datos Gratuita
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-slate-500 text-sm mt-4 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                            Sin compromiso • Análisis inicial gratuito • Resultados en 48h
                        </p>
                        <p className="text-slate-600 text-xs mt-2">
                            Disponible como módulo independiente o integrado a tu sistema actual
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrediccionVentas;