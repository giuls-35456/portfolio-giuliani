import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, Code2, Database, Network, Brain, Calculator, 
  ChevronRight, X, Printer, FileText, ShieldCheck, BarChart3, Terminal, Gamepad2
} from 'lucide-react';
import { Document } from '../types';

const Professionale: React.FC = () => {
  const [openPdf, setOpenPdf] = useState<Document | null>(null);

  const handlePrint = () => {
    window.print();
  };

  const scientificDocuments = [
    {
      id: 'flappy-bird',
      title: 'Flappy Bird Clone',
      tag: 'Informatica & Game Dev',
      image: '/foto-progetti/area-scientifica/flappy-bird.jpg',
      description: "Sviluppo di un clone del celebre gioco Flappy Bird. Il progetto esplora la logica dei giochi 2D, la gestione delle collisioni, la fisica della gravità e il rendering grafico in tempo reale.",
      links: [
        { label: 'Apri Progetto', url: 'https://giuls-35456.github.io/flappy-bird/', type: 'external' }
      ],
      pages: []
    },
    {
      id: 'informatica-helpdesk',
      title: 'Sistema Helpdesk',
      tag: 'Informatica',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
      description: "Piattaforma di assistenza tecnica realizzata in 5° superiore. Include gestione ticket, chat in tempo reale e integrazione con Google Workspace.",
      links: [
        { label: 'Apri Progetto', url: 'https://helpdesk.sviluppo.host/login.php', type: 'external' }
      ],
      pages: []
    },
    {
      id: 'sistemi-laboratorio',
      title: 'Progetti di Sistemi e Reti',
      tag: 'Sistemi e Reti',
      image: '/foto-progetti/sistemi/split-sistemi.jpg',
      description: "Progetto integrato che comprende l'analisi tecnica e la progettazione di sistemi moderni. Include un'esercitazione pratica su configurazione NAT/PAT (Cisco Packet Tracer) e una relazione dettagliata sulla progettazione di un'infrastruttura di Bike Sharing per la prova d'esame.",
      links: [
        { label: 'Analisi NAT/PAT (Cisco PKT)', url: '/documents/esercitazionenatpat.giuliani.pkt', type: 'download' },
        { label: 'Progetto Bike Sharing (PDF)', url: '/documents/Relazione_BikeSharing_Giuliani_5BM.pdf', type: 'pdf' }
      ],
      pages: []
    },
    {
      id: 'matematica-coniche',
      title: 'Geometria Analitica: Le Coniche',
      tag: 'Matematica',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop',
      description: "Studio approfondito delle sezioni coniche: parabola, ellisse e iperbole. Analisi delle proprietà geometriche e applicazioni algebriche.",
      links: [
        { label: 'Esplora Documento', url: '/documents/GeometriaAnalitica_Coniche.pdf', type: 'pdf' }
      ],
      pages: []
    }
  ];

  const techAreas = [
    { 
      icon: Code2, 
      title: "Informatica", 
      color: "from-blue-600 to-cyan-600",
      details: [
        "• PHP: Sviluppo backend e framework MVC",
        "• C#: Applicazioni .NET desktop e web",
        "• HTML & JavaScript: Frontend moderno",
        "• SQL: Query ottimizzate e normalizzazione",
        "• OOP: Ereditarietà, polimorfismo, pattern",
        "• Full-Stack: Architetture complete"
      ]
    },
    { 
      icon: Network, 
      title: "Sistemi e Reti", 
      color: "from-emerald-600 to-teal-600",
      details: [
        "• Cisco Packet Tracer: Simulazioni di rete",
        "• Protocolli TCP/IP: Configurazione",
        "• Router e Switch: Gestione avanzata",
        "• Firewall & VPN: Politiche di sicurezza",
        "• Sicurezza: Prevenzione minacce",
        "• Analisi traffico: Monitoraggio"
      ]
    },
    { 
      icon: BarChart3, 
      title: "TPSIT", 
      color: "from-purple-600 to-pink-600",
      details: [
        "• Analisi della concorrenza: Mercato IT",
        "• Macchine virtuali: Virtualizzazione",
        "• Programmazione Java: Progetti avanzati",
        "• Progettazione sistemi: Architetture",
        "• Automazione: Workflow e processi"
      ]
    },
    { 
      icon: Calculator, 
      title: "Matematica", 
      color: "from-orange-600 to-red-600",
      details: [
        "• Derivate: Regole e applicazioni",
        "• Integrali: Definiti, indefiniti, per parti",
        "• Calcolo combinatorio: Permutazioni",
        "• Geometria analitica: Coniche, vettori",
        "• Statistica: Analisi dati e probabilità",
        "• Limiti e continuità: Teoremi"
      ]
    },
    { 
      icon: Brain, 
      title: "Intelligenza Artificiale", 
      color: "from-indigo-500 to-blue-500",
      details: [
        "• Machine Learning: Supervised/Unsupervised",
        "• Reti Neurali: Architetture e training",
        "• Deep Learning: CNN e RNN",
        "• Algoritmi: Ricerca e ottimizzazione",
        "• Logica computazionale: Problem solving",
        "• Etica AI: Responsabilità algoritmica"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-16 py-8"
    >
      <style>{`
        ${openPdf ? 'nav { display: none !important; }' : ''}
        @media print {
          body * { visibility: hidden; }
          #printable-pdf, #printable-pdf * { visibility: visible; }
          #printable-pdf { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}</style>

      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-3xl shadow-2xl mb-4"
        >
          <Terminal size={40} />
        </motion.div>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
          Area <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Scientifica</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-light">
          Un ecosistema di competenze tecniche avanzate, dalla programmazione backend alla 
          sicurezza delle infrastrutture di rete, dalla matematica pura all'intelligenza artificiale.
        </p>
      </div>

      {/* Tech Grid - Modern Glassmorphism Cards - Compatto */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {techAreas.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ y: -6, boxShadow: "0 15px 35px rgba(0,0,0,0.1)" }}
            className="group relative"
          >
            {/* Glassmorphism Card */}
            <div className="relative h-full bg-white/40 backdrop-blur-xl rounded-[1.75rem] border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Gradient Background Accent */}
              <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-2xl -mr-12 -mt-12 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-5 h-full flex flex-col">
                {/* Icon & Title */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`p-2.5 bg-gradient-to-br ${item.color} text-white rounded-lg shadow-lg`}>
                    <item.icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                </div>

                {/* Details List */}
                <div className="space-y-1.5 flex-1">
                  {item.details.map((detail, dIdx) => (
                    <motion.div
                      key={dIdx}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 + dIdx * 0.04 }}
                      className="text-slate-700 text-xs leading-relaxed font-medium"
                    >
                      <span className={`inline-block w-1 h-1 rounded-full bg-gradient-to-r ${item.color} mr-2 align-middle`}></span>
                      {detail}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Documents Section */}
      <div className="space-y-8 mt-16">
        <div className="flex items-center gap-4">
          <div className="w-2 h-8 bg-gradient-to-b from-indigo-600 to-blue-600 rounded-full"></div>
          <h2 className="text-3xl font-bold text-slate-900">Progetti e Documentazione</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {scientificDocuments.map((doc) => (
            <motion.div
              key={doc.id}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group bg-white/70 backdrop-blur-md rounded-[3rem] overflow-hidden border border-white/80 shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={doc.image} alt={doc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute top-6 right-6">
                   <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg">
                      <FileText className="text-indigo-600" size={24} />
                   </div>
                </div>
                <div className="absolute bottom-6 left-8">
                  <span className="bg-indigo-600 text-white px-5 py-1.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg">
                    {doc.tag}
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-10 space-y-6">
                <h3 className="text-3xl font-black text-slate-900 leading-tight">
                  {doc.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium opacity-80">
                  {doc.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {doc.links.map((link, lIdx) => (
                    link.type === 'pdf' ? (
                      <button
                        key={lIdx}
                        onClick={() => setOpenPdf({ ...doc, pdfUrl: link.url } as Document)}
                        className="flex-1 bg-slate-900 text-white py-4 px-6 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-lg flex items-center justify-center gap-2 group/btn"
                      >
                        {link.label}
                        <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    ) : (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-indigo-600 text-white py-4 px-6 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg flex items-center justify-center gap-2 group/btn"
                      >
                        {link.label}
                        <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    )
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Placeholder for other subjects */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-[2.5rem] border-2 border-dashed border-slate-200 p-10 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
              <ShieldCheck className="text-indigo-400" size={40} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Prossimi Caricamenti</h3>
              <p className="text-slate-500">Laboratori e Progetti Avanzati</p>
            </div>
          </div>
        </div>
      </div>

      {/* Connection Section */}
      <div className="relative overflow-hidden rounded-[3.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 md:p-20 text-white shadow-2xl mt-16">
        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
              Dalla Teoria al Codice
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              Il mio approccio unisce il rigore della <strong>matematica avanzata</strong> alla praticità dello 
              <strong>sviluppo software</strong>. Che si tratti di configurare una rete sicura su 
              Cisco Packet Tracer, sviluppare in PHP e C# o implementare algoritmi complessi, 
              l'obiettivo è sempre l'eccellenza tecnica e l'innovazione.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-white/10 rounded-xl border border-white/20 text-sm font-mono backdrop-blur-sm hover:bg-white/20 transition-colors">#CiscoPacketTracer</div>
              <div className="px-4 py-2 bg-white/10 rounded-xl border border-white/20 text-sm font-mono backdrop-blur-sm hover:bg-white/20 transition-colors">#FullStack</div>
              <div className="px-4 py-2 bg-white/10 rounded-xl border border-white/20 text-sm font-mono backdrop-blur-sm hover:bg-white/20 transition-colors">#CyberSecurity</div>
              <div className="px-4 py-2 bg-white/10 rounded-xl border border-white/20 text-sm font-mono backdrop-blur-sm hover:bg-white/20 transition-colors">#Java</div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-2xl rounded-[2rem] p-10 border border-white/10 font-mono text-sm text-indigo-300 shadow-inner">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
            </div>
            <p className="mb-2 text-slate-400">// Technical Stack</p>
            <p className="mb-2"><span className="text-purple-400">class</span> <span className="text-yellow-400">RiccardoGiuliani</span> &#123;</p>
            <p className="ml-4 mb-1"><span className="text-blue-400">languages</span> = ["PHP", "C#", "Java", "JavaScript"];</p>
            <p className="ml-4 mb-1"><span className="text-blue-400">tools</span> = ["CiscoPacketTracer", "VSCode"];</p>
            <p className="ml-4 mb-1"><span className="text-blue-400">focus</span> = "Security & Innovation";</p>
            <p className="mb-0">&#125;</p>
          </div>
        </div>
      </div>

      {/* Modal PDF Viewer */}
      <AnimatePresence>
        {openPdf && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-900/95 backdrop-blur-xl overflow-y-auto p-4 md:p-10"
          >
            <div className="w-full h-full relative z-[10000] flex flex-col">
              <div className="fixed top-6 right-6 z-[10001] flex flex-col gap-4 no-print">
                <button 
                  onClick={() => setOpenPdf(null)} 
                  className="p-5 bg-red-600 text-white hover:bg-red-700 transition-all duration-300 rounded-full flex items-center justify-center shadow-2xl border-4 border-white hover:scale-110 active:scale-95"
                >
                  <X size={32} strokeWidth={4} />
                </button>
                <button 
                  onClick={handlePrint} 
                  className="p-4 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-full flex items-center justify-center shadow-xl border-4 border-white hover:scale-110 active:scale-95"
                >
                  <Printer size={24} />
                </button>
              </div>
              
              <div id="printable-pdf" className="bg-white shadow-2xl rounded-xl w-full h-[90vh] overflow-hidden mt-4">
                <iframe 
                  src={`${openPdf.pdfUrl}#view=FitH&toolbar=0`} 
                  className="w-full h-full border-none"
                  title={openPdf.title}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Professionale;
