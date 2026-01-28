import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, Code2, Database, Network, Brain, Calculator, 
  ChevronRight, X, Printer, FileText
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
      desc: "Sviluppo software, algoritmi e programmazione ad oggetti." 
    },
    { 
      icon: Network, 
      title: "Sistemi e Reti", 
      desc: "Configurazione infrastrutture, protocolli TCP/IP e sicurezza." 
    },
    { 
      icon: Calculator, 
      title: "Matematica", 
      desc: "Analisi, geometria analitica e calcolo statistico." 
    },
    { 
      icon: Database, 
      title: "TPSIT", 
      desc: "Tecnologie e Progettazione di Sistemi Informatici e di Telecomunicazioni." 
    },
    { 
      icon: Brain, 
      title: "Intelligenza Artificiale", 
      desc: "Fondamenti di Machine Learning e logica computazionale." 
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
          <Cpu size={40} />
        </motion.div>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
          Area <span className="text-indigo-600">Scientifica</span>
        </h1>
        <p className="text-xl text-slate-500 leading-relaxed">
          Un ecosistema di competenze che spazia dall'informatica pura alla logica matematica, 
          passando per l'architettura dei sistemi e le nuove frontiere dell'IA.
        </p>
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {techAreas.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5, backgroundColor: '#f8fafc' }}
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-4 transition-all"
          >
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
              <item.icon size={28} />
            </div>
            <h3 className="font-bold text-slate-800">{item.title}</h3>
            <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
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
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={doc.image} alt={doc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {doc.tag}
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {doc.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                  {doc.description}
                </p>
                <button
                  onClick={() => setOpenPdf(doc)}
                  className="flex items-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all"
                >
                  Visualizza Documento <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}

          {/* Placeholder for other subjects */}
          <div className="bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200 p-8 flex flex-col items-center justify-center text-center space-y-4 opacity-60">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
              <FileText className="text-slate-400" size={32} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Altri Progetti in Arrivo</h3>
              <p className="text-slate-500 text-sm">Sistemi, Informatica e IA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Connection Section */}
      <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 p-10 md:p-16 text-white">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-indigo-400">Teoria e Pratica</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Le materie scientifiche non sono solo concetti astratti. Nel mio percorso, 
              la logica matematica e la progettazione dei sistemi si fondono per creare 
              soluzioni reali, applicate durante le esperienze di PCTO e nei laboratori scolastici.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 font-mono text-sm text-indigo-300">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <p className="mb-2">// Area Scientifica Init</p>
            <p className="mb-2"><span className="text-purple-400">const</span> skills = [</p>
            <p className="ml-4">"Matematica", "Informatica",</p>
            <p className="ml-4">"Sistemi", "TPSIT", "IA"</p>
            <p className="mb-2">];</p>
            <p><span className="text-purple-400">function</span> <span className="text-blue-400">evolve</span>() &#123; ... &#125;</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 blur-[120px] -mr-48 -mt-48"></div>
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
