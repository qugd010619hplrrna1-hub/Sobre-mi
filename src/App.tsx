import React, { useState } from 'react';
import { 
  Beer, Utensils, Share2, QrCode, Smartphone, TrendingUp, Clock, 
  MessageSquare, Zap, MapPin, Brain, Target, Eye, Layers, Home, 
  CheckCircle, ShieldCheck, LineChart, ChevronRight 
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('goyo');
  const [showPsychology, setShowPsychology] = useState(false);

  const cases = {
    goyo: {
      title: "Cervecería Don Goyo",
      icon: <Beer className="w-6 h-6" />,
      color: "bg-amber-500",
      accent: "text-amber-600",
      tagline: "El negocio de la pertenencia",
      action: "Reestructuración de menú y narrativa de origen.",
      result: "Realidad: +25% en consumo por mesa.",
      description: "Vender cerveza artesanal es difícil si el cliente solo busca emborracharse barato. Cambiamos las reglas del juego. Convertimos el menú en un manifiesto de identidad de Atlixco. Cuando el cliente entiende la historia detrás de lo que bebe, deja de comparar precios y empieza a comprar la experiencia de sentirse local.",
      tools: ["Anclaje Territorial", "Arquitectura de Precios", "Storytelling Crudo"],
      stats: [
        { label: "Ticket Promedio", value: "+25%", icon: <TrendingUp className="w-4 h-4" /> },
        { label: "Fricción de Precio", value: "Nula", icon: <ShieldCheck className="w-4 h-4" /> }
      ]
    },
    verito: {
      title: "Desayunos Verito",
      icon: <Utensils className="w-6 h-6" />,
      color: "bg-emerald-500",
      accent: "text-emerald-600",
      tagline: "Tapando las fugas de capital",
      action: "Sistema de gestión a medida y auditoría operativa.",
      result: "Realidad: 5 horas recuperadas a la semana.",
      description: "Un restaurante lleno no sirve de nada si el dinero se escapa por la puerta de atrás en mermas y desorden. Desarrollé una herramienta exacta para su operación. El objetivo no era hacer 'marketing', era devolverle al dueño su tiempo para que dejara de ser esclavo de su inventario y volviera a ser el estratega de su negocio.",
      tools: ["Sistemas a Medida", "Optimización de Flujos", "Reducción de Mermas"],
      stats: [
        { label: "Tiempo Libre", value: "+5h/sem", icon: <Clock className="w-4 h-4" /> },
        { label: "Control", value: "Total", icon: <CheckCircle className="w-4 h-4" /> }
      ]
    },
    astucia: {
      title: "Astucia Social",
      icon: <Share2 className="w-6 h-6" />,
      color: "bg-blue-500",
      accent: "text-blue-600",
      tagline: "Hackeando la atención orgánica",
      action: "Distribución basada en comportamiento y contexto.",
      result: "Realidad: +10,000 impactos sin pauta.",
      description: "Todos quieren viralidad y reconocimiento, pero pocos entienden su anatomía. Nosotros leemos la calle. Creamos contenido que la gente comparte porque les otorga estatus social o les resuelve una duda genuina. Los miles de likes y el alcance orgánico llegan solos cuando te insertas en las conversaciones correctas, en lugar de interrumpirlas.",
      tools: ["Psicología de Masas", "Distribución Orgánica", "Lectura de Contexto"],
      stats: [
        { label: "Alcance", value: "+10k", icon: <Share2 className="w-4 h-4" /> },
        { label: "Inversión Ad", value: "$0", icon: <Zap className="w-4 h-4" /> }
      ]
    },
    inmobiliaria: {
      title: "Altos de Atlixco",
      icon: <Home className="w-6 h-6" />,
      color: "bg-slate-800",
      accent: "text-slate-800",
      tagline: "Filtrando a los turistas inmobiliarios",
      action: "Fricción estratégica y calificación de leads.",
      result: "Realidad: Cierre de ventas acelerado.",
      description: "El sector inmobiliario está infestado de curiosos sin presupuesto. Diseñamos un embudo que usa la fricción a nuestro favor: alejamos a los preguntones con un copy directo y filtros estrictos. A ventas solo le llegan prospectos con el capital y la urgencia real de invertir. Calidad sobre volumen, siempre.",
      tools: ["Copywriting Directo", "Fricción Positiva", "Embudos de Filtrado"],
      stats: [
        { label: "Leads Basura", value: "-80%", icon: <Target className="w-4 h-4" /> },
        { label: "Tasa de Cierre", value: "Alta", icon: <TrendingUp className="w-4 h-4" /> }
      ]
    },
    tech: {
      title: "Puentes Físico-Digitales",
      icon: <QrCode className="w-6 h-6" />,
      color: "bg-purple-500",
      accent: "text-purple-600",
      tagline: "El vendedor silencioso",
      action: "Digitalización del punto de venta.",
      result: "Realidad: Captura de datos en automático.",
      description: "Un QR en la mesa que solo abre un PDF es un desperdicio imperdonable. Los nuestros son embudos invisibles. Capturan datos, sugieren el platillo de mayor margen y facilitan que el cliente regrese. Hacemos que la tecnología trabaje mientras tú atiendes el negocio.",
      tools: ["Captura de Datos", "Upselling Automático", "Retención"],
      stats: [
        { label: "Fricción", value: "Cero", icon: <Smartphone className="w-4 h-4" /> },
        { label: "Base de Datos", value: "Activa", icon: <Layers className="w-4 h-4" /> }
      ]
    }
  };

  const psychInsights = [
    {
      title: "La Paradoja de la Elección",
      desc: "Si los haces pensar demasiado, se van. Reducimos las opciones y simplificamos la interfaz para forzar la decisión. Menos ruido, más conversiones.",
      icon: <Layers className="w-5 h-5 text-indigo-500" />
    },
    {
      title: "Autoridad sin Alardes",
      desc: "La gente es escéptica por naturaleza. No creen en promesas vacías, creen en números crudos y en la seguridad con la que presentas la solución.",
      icon: <Target className="w-5 h-5 text-red-500" />
    },
    {
      title: "Fricción Estratégica",
      desc: "No todos los clientes son buenos clientes. A veces, poner obstáculos intencionales filtra a los problemáticos y aumenta el deseo de los que realmente valen la pena.",
      icon: <ShieldCheck className="w-5 h-5 text-amber-500" />
    },
    {
      title: "Tribalismo y Pertenencia",
      desc: "El ser humano busca una tribu. Si logras que tu marca hable su idioma y defienda sus mismos códigos, te perdonan los errores y te defienden de la competencia.",
      icon: <MapPin className="w-5 h-5 text-emerald-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      {/* Hero Section */}
      <header className="bg-slate-900 text-white pt-20 pb-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 bg-amber-500 text-slate-900 text-xs font-black rounded-full mb-6 tracking-widest uppercase shadow-lg">
            Estrategia • Realismo • Resultados
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
            Daniel Quiroz
          </h1>
          <p className="text-2xl text-slate-300 max-w-3xl leading-relaxed font-light mb-8">
            Tu producto ya es excepcional; ese es tu mérito. Mi trabajo es dominar la psicología de tu cliente para que elegirte sea su única opción lógica.<br className="hidden md:block"/>
            No hago "marketing bonito". <strong className="text-white font-bold underline decoration-amber-500 decoration-4 underline-offset-4">Construyo sistemas que hacen que la gente saque la cartera.</strong>
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#metodologia" className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-500 hover:text-white transition-colors flex items-center gap-2">
              Cómo pienso <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto -mt-12 px-4 relative z-20 space-y-12">
        
        {/* Resumen / Metodología Section */}
        <section id="metodologia" className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck className="w-8 h-8 text-amber-500" />
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">Mi forma de operar</h2>
          </div>
          <p className="text-slate-600 mb-8 text-lg leading-relaxed">
            Los "likes", el alcance masivo y el estatus nos encantan a todos. Pero entiendo algo fundamental: esas métricas de vanidad son la consecuencia inevitable de una estrategia profunda y bien ejecutada, no el punto de partida. Así es como construyo ese impacto:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">1. Identidad Arraigada</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Nadie compra un café, compran el estatus o el refugio que representa. Anclamos tu marca a la cultura local para que competir por precio se vuelva irrelevante.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <LineChart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">2. Ingeniería Interna</h3>
              <p className="text-sm text-slate-600 leading-relaxed">El marketing que trae clientes a un negocio desordenado solo acelera su quiebra. Arreglamos la casa por dentro (procesos, fugas) antes de invitar a la gente.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">3. Atención Asimétrica</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Gritar más fuerte que tu competencia es un juego caro y estúpido. Usamos la disrupción y el contexto para que el cliente sea quien te busque a ti.</p>
            </div>
          </div>
        </section>

        {/* Portfolio Dashboard */}
        <section className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">El Trabajo en la Calle</h2>
            <p className="text-slate-500 mt-2">Casos reales. Problemas reales. Soluciones pragmáticas.</p>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-slate-100 p-3 gap-2 border-b border-slate-200">
            {Object.entries(cases).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 min-w-[130px] py-3 px-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                  activeTab === key 
                    ? 'bg-white shadow-md scale-100 ring-1 ring-slate-200' 
                    : 'text-slate-500 hover:bg-slate-200/70 scale-95'
                }`}
              >
                <div className={`${activeTab === key ? data.accent : 'text-slate-400'}`}>
                  {data.icon}
                </div>
                <span className={`text-xs font-bold whitespace-nowrap ${activeTab === key ? 'text-slate-900' : 'text-slate-500'}`}>
                  {data.title.split(' ')[0]} {data.title.split(' ')[1] || ''}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content Area */}
          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1 space-y-8">
                <div>
                  <h3 className={`text-3xl font-black mb-2 ${cases[activeTab as keyof typeof cases].accent}`}>
                    {cases[activeTab as keyof typeof cases].title}
                  </h3>
                  <p className="text-xl font-semibold text-slate-600 italic">
                    "{cases[activeTab as keyof typeof cases].tagline}"
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-300">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">El Problema y la Jugada</h4>
                    <p className="text-slate-800 leading-relaxed text-lg">{cases[activeTab as keyof typeof cases].description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Arsenal Táctico</h4>
                    <div className="flex flex-wrap gap-2">
                      {cases[activeTab as keyof typeof cases].tools.map((tool, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`p-6 rounded-2xl ${cases[activeTab as keyof typeof cases].color} text-white shadow-lg transform transition-all hover:-translate-y-1`}>
                    <h4 className="text-xs font-black opacity-80 uppercase tracking-widest mb-2">El Resultado</h4>
                    <p className="text-2xl font-black leading-tight">{cases[activeTab as keyof typeof cases].result}</p>
                  </div>
                </div>
              </div>

              {/* Stats Sidebar */}
              <div className="w-full md:w-72 space-y-4">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Métricas Duras</h4>
                <div className="grid grid-cols-1 gap-4">
                  {cases[activeTab as keyof typeof cases].stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                      <div className={`p-3 rounded-xl ${cases[activeTab as keyof typeof cases].color} text-white shadow-sm`}>
                        {stat.icon}
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                        <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Psychology Section */}
        <section>
          <button 
            onClick={() => setShowPsychology(!showPsychology)}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white p-8 rounded-3xl shadow-xl flex items-center justify-between transition-all group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <div className="flex items-center gap-5 relative z-10">
              <div className="bg-amber-500 text-slate-900 p-4 rounded-2xl shadow-inner">
                <Brain className="w-8 h-8" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-black uppercase tracking-tight">El Motor Oculto</h3>
                <p className="text-slate-300 text-sm mt-1 font-medium">La psicología detrás de por qué la gente hace lo que hace.</p>
              </div>
            </div>
            <div className={`transition-transform duration-500 ${showPsychology ? 'rotate-180' : ''}`}>
               <Zap className="w-8 h-8 text-amber-500" />
            </div>
          </button>

          {showPsychology && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-8 duration-500">
              {psychInsights.map((insight, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      {insight.icon}
                    </div>
                    <h4 className="font-black text-slate-900 text-sm uppercase tracking-tight">{insight.title}</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{insight.desc}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="bg-amber-500 rounded-3xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Hablemos de negocios reales.</h3>
            <p className="text-slate-900/80 font-semibold text-lg mb-8 max-w-2xl mx-auto">
              Si quieres que tu marca sea el centro de atención, necesitas más que fotos bonitas: necesitas un sistema. Los likes, el estatus y las ventas masivas son el resultado inevitable de hacer las cosas con rigor. Si estás listo para dominar tu mercado desde la raíz, hablemos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-xl hover:shadow-2xl">
                <MessageSquare className="w-6 h-6" />
                Agendar Sesión Táctica
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-20 text-center text-slate-400 text-xs font-black tracking-widest uppercase pb-8">
        Daniel Quiroz © 2026 | Estrategia Pragmática y Operaciones
      </footer>
    </div>
  );
};

export default App;

