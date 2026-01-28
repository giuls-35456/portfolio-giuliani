import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, Code2, Database, Network, Brain, Calculator, 
  ChevronRight, X, Printer, FileText, ShieldCheck, BarChart3, Terminal
} from 'lucide-react';
import { Document } from '../types';

const Professionale: React.FC = () => {
  const [openPdf, setOpenPdf] = useState<Document | null>(null);

  const handlePrint = () => {
    window.print();
  };

  const scientificDocuments: Document[] = [
    {
      id: 'matematica-coniche',
      title: 'Geometria Analitica: Le Coniche',
      tag: 'Matematica',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop',
      description: "Studio approfondito delle sezioni coniche: parabola, ellisse e iperbole. Analisi delle proprietà geometriche e applicazioni algebriche.",
      pdfUrl: '/documents/GeometriaAnalitica_Coniche.pdf',
      pages: []
    }
  ];

  const techAreas = [
    { 
      icon: Code2, 
      title: "Informatica", 
      details: [
        "• PHP: Sviluppo backend, framework MVC, gestione sessioni",
        "• C#: Programmazione .NET, applicazioni desktop e web",
        "• HTML & JavaScript: Frontend moderno, DOM manipulation",
        "• SQL: Query complesse, normalizzazione, ottimizzazione",
        "• OOP: Ereditarietà, polimorfismo, design patterns",
        "• Full-Stack: Architetture complete e best practices"
      ]
    },
    { 
      icon: Network, 
      title: "Sistemi e Reti", 
      details: [
        "• Cisco Packet Tracer: Simulazioni di reti complesse",
        "• Protocolli TCP/IP: Configurazione e troubleshooting",
        "• Router e Switch: Configurazione e gestione",
        "• Firewall & VPN: Politiche di sicurezza avanzate",
        "• Network Security: Prevenzione minacce informatiche",
        "• Analisi del traffico: Monitoraggio e diagnostica"
      ]
    },
    { 
      icon: BarChart3, 
      title: "TPSIT", 
      details: [
        "• Analisi della Concorrenza: Studio del mercato IT",
        "• Macchine Virtuali: Virtualizzazione e deployment",
        "• Programmazione Java: Ultimi progetti e applicazioni",
        "• Strategie Business: Posizionamento e ROI",
        "• Progettazione Sistemi: Architetture scalabili",
        "• Process Management: Workflow e automazione"
      ]
    },
    { 
      icon: Calculator, 
      title: "Matematica", 
      details: [
        "• Derivate: Regole di derivazione e applicazioni",
        "• Integrali: Definiti, indefiniti e per parti",
        "• Calcolo Combinatorio: Permutazioni e combinazioni",
        "• Geometria Analitica: Coniche, vettori, trasformazioni",
        "• Statistica: Analisi dati e probabilità",
        "• Limiti e Continuità: Teoremi fondamentali"
      ]
    },
    { 
      icon: Brain, 
      title: "Intelligenza Artificiale", 
      details: [
        "• Machine Learning: Supervised e unsupervised learning",
        "• Reti Neurali: Architetture e training",
        "• Deep Learning: Convolutional e recurrent networks",
        "• Algoritmi: Ricerca, ottimizzazione e clustering",
        "• Logica Computazionale: Problem solving avanzato",
        "• Etica AI: Responsabilità algoritmica e bias"
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
          className="inline-flex items-center justify-center p-4 bg-indigo-600 text-white rounded-3xl shadow-xl mb-4"
        >
          <Terminal size={40} />
        </motion.div>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
          Area <span className="text-indigo-600">Scientifica</span>
        </h1>
        <p className="text-xl text-slate-500 leading-relaxed">
          Un ecosistema di competenze tecniche avanzate, dalla programmazione backend alla 
          sicurezza delle infrastrutture di rete, dalla matematica pura all'intelligenza artificiale.
        </p>
      </div>

      {/* Tech Grid - Large Static Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techAreas.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-[2.5rem] border-2 border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 flex items-center gap-4 border-b-2 border-slate-100">
              <div className="p-4 bg-indigo-600 text-white rounded-2xl">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
            </div>

            {/* Content */}
            <div className="p-8 space-y-3">
              {item.details.map((detail, dIdx) => (
                <p key={dIdx} className="text-slate-700 text-sm leading-relaxed font-medium">
                  {detail}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Documents Section */}
      <div className="space-y-8 mt-16">
        <div className="flex items-center gap-4">
          <div className="w-2 h-8 bg-indigo-600 rounded-full"></div>
          <h2 className="text-3xl font-bold text-slate-900">Progetti e Documentazione</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {scientificDocuments.map((doc) => (
            <motion.div
              key={doc.id}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={doc.image} alt={doc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                <div className="absolute bottom-6 left-8">
                  <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    {doc.tag}
                  </span>
                </div>
              </div>
              <div className="p-10 space-y-6">
                <h3 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {doc.title}
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed line-clamp-3 font-light">
                  {doc.description}
                </p>
                <button
                  onClick={() => setOpenPdf(doc)}
                  className="flex items-center gap-3 text-indigo-600 font-bold text-lg hover:gap-5 transition-all"
                >
                  Esplora Documento <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          ))}

          {/* Placeholder for other subjects */}
          <div className="bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200 p-10 flex flex-col items-center justify-center text-center space-y-6 opacity-70">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
              <ShieldCheck className="text-indigo-400" size={40} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Prossimi Caricamenti</h3>
              <p className="text-slate-500">Laboratori di Sistemi, PHP e Cisco Packet Tracer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Connection Section */}
      <div className="relative overflow-hidden rounded-[3.5rem] bg-slate-900 p-12 md:p-20 text-white shadow-2xl mt-16">
        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-indigo-400 tracking-tight">Dalla Teoria al Codice</h3>
            <p className="text-slate-300 text-xl leading-relaxed font-light">
              Il mio approccio unisce il rigore della <strong>matematica avanzata</strong> alla praticità dello 
              <strong>sviluppo software</strong>. Che si tratti di configurare una rete sicura su 
              Cisco Packet Tracer, analizzare la concorrenza in TPSIT, sviluppare in PHP e C# o implementare 
              algoritmi complessi, l'obiettivo è sempre l'eccellenza tecnica e l'innovazione.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-white/10 rounded-xl border border-white/10 text-sm font-mono">#CiscoPacketTracer</div>
              <div className="px-4 py-2 bg-white/10 rounded-xl border border-white/10 text-sm font-mono">#FullStack</div>
              <div className="px-4 py-2 bg-white/10 rounded-xl border border-white/10 text-sm font-mono">#CyberSecurity</div>
              <div className="px-4 py-2 bg-white/10 rounded-xl border border-white/10 text-sm font-mono">#Java</div>
            </div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-2xl rounded-[2rem] p-10 border border-white/10 font-mono text-sm text-indigo-300 shadow-inner">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
            </div>
            <p className="mb-2 text-slate-500">// Technical Stack</p>
            <p className="mb-2"><span className="text-purple-400">class</span> <span className="text-yellow-400">RiccardoGiuliani</span> &#123;</p>
            <p className="ml-4 mb-1"><span className="text-blue-400">languages</span> = ["PHP", "C#", "Java", "JavaScript"];</p>
            <p className="ml-4 mb-1"><span className="text-blue-400">tools</span> = ["CiscoPacketTracer", "VSCode"];</p>
            <p className="ml-4 mb-1"><span className="text-blue-400">expertise</span> = ["Backend", "Networking", "Security"];</p>
            <p className="ml-4 mb-1"><span className="text-blue-400">math</span> = ["Calculus", "Combinatorics", "Analytics"];</p>
            <p className="mb-2">&#125;</p>
            <p className="text-emerald-400 mt-4">// Ready for deployment...</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[150px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] -ml-32 -mb-32"></div>
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
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOpenPdf(null)}
                  className="p-5 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white cursor-pointer"
                >
                  <X size={32} strokeWidth={4} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrint}
                  className="p-4 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-xl border-4 border-white"
                >
                  <Printer size={24} />
                </motion.button>
              </div>

              <div id="printable-pdf" className="bg-white shadow-2xl rounded-2xl w-full h-[90vh] overflow-hidden mt-4 border-4 border-slate-200">
                <iframe
                  src={`${openPdf.pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
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
