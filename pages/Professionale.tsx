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
      desc: "Linguaggi di programmazione e sviluppo backend",
      fullDesc: "Sviluppo software con PHP e C#. Programmazione orientata agli oggetti (OOP), design patterns e architetture software. Gestione di Database relazionali (SQL), query ottimizzate e normalizzazione. Sviluppo di applicazioni web full-stack con focus sulla qualità del codice e best practices.",
      details: ["PHP Backend", "C# .NET", "OOP Design", "SQL Database", "Full-Stack"]
    },
    { 
      icon: Network, 
      title: "Sistemi e Reti", 
      desc: "Infrastrutture di rete e sicurezza informatica",
      fullDesc: "Sicurezza delle reti informatiche, protocolli TCP/IP, configurazione di router e switch. Utilizzo pratico di Cisco Packet Tracer per simulazioni di reti complesse. Analisi del traffico di rete, firewall e VPN. Implementazione di politiche di sicurezza e prevenzione delle minacce informatiche.",
      details: ["Cisco Packet Tracer", "Network Security", "TCP/IP Protocols", "Firewall & VPN", "Traffic Analysis"]
    },
    { 
      icon: BarChart3, 
      title: "TPSIT", 
      desc: "Tecnologie e progettazione di sistemi informatici",
      fullDesc: "Analisi della concorrenza nel mercato IT, strategie di business e posizionamento. Progettazione di sistemi informatici scalabili e affidabili. Gestione dei processi aziendali, workflow e automazione. Valutazione di soluzioni tecnologiche e ROI. Integrazione di sistemi legacy con tecnologie moderne.",
      details: ["Analisi Concorrenza", "Progettazione Sistemi", "Business Strategy", "Process Management", "System Integration"]
    },
    { 
      icon: Calculator, 
      title: "Matematica", 
      desc: "Analisi avanzata e calcolo differenziale",
      fullDesc: "Calcolo differenziale: derivate, regole di derivazione e applicazioni. Calcolo integrale: integrali definiti e indefiniti, tecniche di integrazione. Analisi combinatoria: permutazioni, combinazioni e disposizioni. Geometria analitica: coniche, vettori e trasformazioni geometriche. Statistica e probabilità applicate.",
      details: ["Derivate", "Integrali", "Combinatoria", "Geometria Analitica", "Probabilità"]
    },
    { 
      icon: Brain, 
      title: "Intelligenza Artificiale", 
      desc: "Machine Learning e logica computazionale",
      fullDesc: "Fondamenti di Machine Learning: supervised e unsupervised learning. Reti neurali artificiali, deep learning e algoritmi di ottimizzazione. Logica computazionale, algoritmi di ricerca e problem solving. Applicazioni pratiche di AI in ambiti aziendali e scientifici. Etica dell'IA e responsabilità algoritmica.",
      details: ["Machine Learning", "Neural Networks", "Deep Learning", "Algorithms", "AI Ethics"]
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

      {/* Tech Grid - Expandable Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {techAreas.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative"
          >
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center space-y-4 cursor-pointer hover:border-indigo-200">
              <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <item.icon size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-800 text-lg">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
              
              {/* Expanded content on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-[2rem] p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center space-y-4 shadow-xl">
                <item.icon size={40} className="text-indigo-200" />
                <p className="text-sm leading-relaxed font-light">{item.fullDesc}</p>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  {item.details.map((detail, dIdx) => (
                    <span key={dIdx} className="text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white px-2 py-1 rounded-md border border-white/30">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Documents Section */}
      <div className="space-y-8">
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

      {/* Detailed Breakdown Section */}
      <div className="space-y-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-2 h-8 bg-indigo-600 rounded-full"></div>
          <h2 className="text-3xl font-bold text-slate-900">Competenze Dettagliate</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Informatica Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-[2.5rem] p-10 border border-blue-200 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-600 text-white rounded-xl">
                <Code2 size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Informatica</h3>
            </div>
            <div className="space-y-4 text-slate-700">
              <p className="font-semibold text-lg">Linguaggi & Framework</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> <span><strong>PHP</strong>: Sviluppo backend, framework MVC, gestione sessioni e autenticazione</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> <span><strong>C#</strong>: Programmazione .NET, applicazioni desktop e web, LINQ</span></li>
              </ul>
              <p className="font-semibold text-lg pt-4">Database & OOP</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> <span><strong>SQL</strong>: Query complesse, normalizzazione, indici e ottimizzazione</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> <span><strong>OOP</strong>: Ereditarietà, polimorfismo, incapsulamento, design patterns</span></li>
              </ul>
            </div>
          </motion.div>

          {/* Sistemi e Reti Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-[2.5rem] p-10 border border-green-200 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-600 text-white rounded-xl">
                <Network size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Sistemi e Reti</h3>
            </div>
            <div className="space-y-4 text-slate-700">
              <p className="font-semibold text-lg">Infrastrutture & Sicurezza</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">•</span> <span><strong>Cisco Packet Tracer</strong>: Simulazione di reti complesse, routing, switching</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">•</span> <span><strong>Protocolli TCP/IP</strong>: Configurazione, troubleshooting, analisi del traffico</span></li>
              </ul>
              <p className="font-semibold text-lg pt-4">Sicurezza Informatica</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">•</span> <span><strong>Firewall & VPN</strong>: Configurazione e gestione delle politiche di sicurezza</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">•</span> <span><strong>Minacce Informatiche</strong>: Prevenzione, rilevamento e risposta agli attacchi</span></li>
              </ul>
            </div>
          </motion.div>

          {/* TPSIT Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-[2.5rem] p-10 border border-purple-200 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-600 text-white rounded-xl">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">TPSIT</h3>
            </div>
            <div className="space-y-4 text-slate-700">
              <p className="font-semibold text-lg">Analisi & Progettazione</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span> <span><strong>Analisi Concorrenza</strong>: Studio del mercato IT, posizionamento strategico</span></li>
                <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span> <span><strong>Progettazione Sistemi</strong>: Architetture scalabili, affidabilità e performance</span></li>
              </ul>
              <p className="font-semibold text-lg pt-4">Gestione Processi</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span> <span><strong>Business Process</strong>: Workflow, automazione e ottimizzazione</span></li>
                <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span> <span><strong>ROI & Valutazione</strong>: Analisi costi-benefici di soluzioni tecnologiche</span></li>
              </ul>
            </div>
          </motion.div>

          {/* Matematica Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-[2.5rem] p-10 border border-orange-200 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-600 text-white rounded-xl">
                <Calculator size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Matematica</h3>
            </div>
            <div className="space-y-4 text-slate-700">
              <p className="font-semibold text-lg">Calcolo Differenziale</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2"><span className="text-orange-600 font-bold">•</span> <span><strong>Derivate</strong>: Regole di derivazione, applicazioni fisiche e economiche</span></li>
                <li className="flex items-start gap-2"><span className="text-orange-600 font-bold">•</span> <span><strong>Limiti</strong>: Continuità, teoremi fondamentali dell'analisi</span></li>
              </ul>
              <p className="font-semibold text-lg pt-4">Calcolo Integrale & Combinatoria</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2"><span className="text-orange-600 font-bold">•</span> <span><strong>Integrali</strong>: Definiti, indefiniti, tecniche di integrazione per parti</span></li>
                <li className="flex items-start gap-2"><span className="text-orange-600 font-bold">•</span> <span><strong>Combinatoria</strong>: Permutazioni, combinazioni, disposizioni, probabilità</span></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Connection Section */}
      <div className="relative overflow-hidden rounded-[3.5rem] bg-slate-900 p-12 md:p-20 text-white shadow-2xl">
        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-indigo-400 tracking-tight">Dalla Teoria al Codice</h3>
            <p className="text-slate-300 text-xl leading-relaxed font-light">
              Il mio approccio unisce il rigore della <strong>matematica avanzata</strong> alla praticità dello 
              <strong>sviluppo software</strong>. Che si tratti di configurare una rete sicura su 
              Cisco Packet Tracer, analizzare la concorrenza in TPSIT o implementare algoritmi complessi in PHP e C#, 
              l'obiettivo è sempre l'eccellenza tecnica e l'innovazione.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-white/10 rounded-xl border border-white/10 text-sm font-mono">#CiscoPacketTracer</div>
              <div className="px-4 py-2 bg-white/10 rounded-xl border border-white/10 text-sm font-mono">#FullStack</div>
              <div className="px-4 py-2 bg-white/10 rounded-xl border border-white/10 text-sm font-mono">#CyberSecurity</div>
              <div className="px-4 py-2 bg-white/10 rounded-xl border border-white/10 text-sm font-mono">#AdvancedMath</div>
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
            <p className="ml-4 mb-1"><span className="text-blue-400">languages</span> = ["PHP", "C#", "SQL"];</p>
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
