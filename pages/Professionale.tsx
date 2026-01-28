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
      color: "from-blue-500 to-cyan-500",
      details: [
        "PHP: Backend development, MVC framework",
        "C#: .NET applications, desktop & web",
        "HTML & JavaScript: Frontend moderno",
        "SQL: Query optimization, normalization",
        "OOP: Design patterns, architecture",
        "Full-Stack: Complete web solutions"
      ]
    },
    { 
      icon: Network, 
      title: "Sistemi e Reti", 
      color: "from-emerald-500 to-teal-500",
      details: [
        "Cisco Packet Tracer: Network simulation",
        "TCP/IP Protocols: Configuration & analysis",
        "Router & Switch: Advanced setup",
        "Firewall & VPN: Security policies",
        "Network Architecture: Infrastructure design",
        "Traffic Monitoring: Diagnostics"
      ]
    },
    { 
      icon: BarChart3, 
      title: "TPSIT", 
      color: "from-purple-500 to-pink-500",
      details: [
        "Analisi della Concorrenza: Market research",
        "Macchine Virtuali: Virtualization & deployment",
        "Programmazione Java: Latest projects",
        "Progettazione Sistemi: Scalable architecture",
        "Process Management: Workflow automation",
        "System Integration: Modern solutions"
      ]
    },
    { 
      icon: Calculator, 
      title: "Matematica", 
      color: "from-orange-500 to-red-500",
      details: [
        "Derivate: Differentiation rules & applications",
        "Integrali: Definite, indefinite, by parts",
        "Calcolo Combinatorio: Permutations & combinations",
        "Geometria Analitica: Conics, vectors, transformations",
        "Statistica: Data analysis & probability",
        "Limiti: Continuity & fundamental theorems"
      ]
    },
    { 
      icon: Brain, 
      title: "Intelligenza Artificiale", 
      color: "from-indigo-500 to-blue-500",
      details: [
        "Machine Learning: Supervised & unsupervised",
        "Reti Neurali: Architecture & training",
        "Deep Learning: CNN & RNN networks",
        "Algoritmi: Search, optimization, clustering",
        "Logica Computazionale: Advanced problem solving",
        "AI Ethics: Responsibility & bias mitigation"
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

      {/* Tech Grid - Modern Glassmorphism Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {techAreas.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            className="group relative"
          >
            {/* Glassmorphism Card */}
            <div className="relative h-full bg-white/40 backdrop-blur-xl rounded-[2rem] border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Gradient Background Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${item.color} text-white rounded-xl shadow-lg`}>
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                </div>

                {/* Details List */}
                <div className="space-y-2.5 flex-1">
                  {item.details.map((detail, dIdx) => (
                    <motion.div
                      key={dIdx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 + dIdx * 0.05 }}
                      className="text-slate-700 text-sm leading-relaxed font-medium"
                    >
                      <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color} mr-2.5 align-middle`}></span>
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
              whileHover={{ y: -8 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={doc.image} alt={doc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                <div className="absolute bottom-6 left-8">
                  <span className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
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
            <p className="text-slate-300 text-xl leading-relaxed font-light">
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
            <p className="ml-4 mb-1"><span className="text-blue-400">expertise</span> = ["Backend", "Networking", "Security"];</p>
            <p className="ml-4 mb-1"><span className="text-blue-400">math</span> = ["Calculus", "Combinatorics", "Analytics"];</p>
            <p className="mb-2">&#125;</p>
            <p className="text-emerald-400 mt-4">// Ready for deployment...</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] -ml-32 -mb-32"></div>
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
