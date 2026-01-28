import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Printer, X, Heart, ChevronRight, Globe, Shield, Users, Cpu, Lock, Eye
} from 'lucide-react';
import { Document } from '../types';

/**
 * Educazione Civica - Design Moderno e Digitale
 * Sezione dedicata ai Diritti Umani e alla Cittadinanza Digitale.
 */
const Civica: React.FC = () => {
  const [openPdf, setOpenPdf] = useState<Document | null>(null);

  const handlePrint = () => {
    window.print();
  };

  // Documento sui Diritti Umani
  const doc: Document = {
    id: 'human-rights',
    title: 'Human Rights & Digital Ethics',
    tag: 'Diritti Umani Digitali',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    description: "Un'esplorazione dei diritti umani fondamentali applicati all'era digitale. Analisi dell'etica informatica, della protezione dei dati e della libertà di espressione nel cyberspazio.",
    pdfUrl: '/documents/HumanRights.pdf',
    pages: []
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-24 py-10"
    >
      <style>{`
        ${openPdf ? 'nav { display: none !important; }' : ''}
        @media print {
          body * { visibility: hidden; }
          #printable-pdf, #printable-pdf * { visibility: visible; }
          #printable-pdf { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}</style>

      {/* Hero Section Moderna con Focus Digitale */}
      <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 p-12 md:p-20 text-white shadow-2xl">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-md rounded-full text-sm font-bold uppercase tracking-widest border border-blue-400/30"
            >
              <Cpu size={16} className="text-blue-400" />
              <span>Civica Digitale</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black leading-tight tracking-tighter"
            >
              Diritti & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Tecnologia
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-blue-100 leading-relaxed font-light"
            >
              L'educazione civica oggi non può prescindere dall'informatica. Abbiamo esplorato come i principi universali di libertà e dignità si traducano in <strong>Cittadinanza Digitale</strong>, etica degli algoritmi e responsabilità nel web.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                <Lock size={18} className="text-emerald-400" />
                <span className="text-sm font-medium">Privacy</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                <Eye size={18} className="text-blue-400" />
                <span className="text-sm font-medium">Etica AI</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                <Users size={18} className="text-purple-400" />
                <span className="text-sm font-medium">Inclusione</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="hidden md:block relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
              alt="Digital Human Rights" 
              className="relative z-10 rounded-3xl shadow-2xl border-2 border-white/10 transform -rotate-2 hover:rotate-0 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Sezione Approfondimento */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold text-slate-900 flex items-center gap-4"
            >
              <div className="w-2 h-10 bg-gradient-to-b from-blue-600 to-indigo-700 rounded-full"></div>
              Cittadinanza Digitale
            </motion.h2>
            <p className="text-slate-500 max-w-2xl">
              L'integrazione tra informatica ed educazione civica ci permette di comprendere le sfide del futuro: dalla protezione dei dati personali alla lotta contro la disinformazione.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -10 }}
          className="group cursor-pointer"
          onClick={() => setOpenPdf(doc)}
        >
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-xl group-hover:shadow-2xl transition-all duration-500">
            <div className="grid md:grid-cols-2">
              <div className="relative h-80 md:h-auto overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent"></div>
                <div className="absolute top-8 left-8">
                  <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg">
                    {doc.tag}
                  </span>
                </div>
              </div>

              <div className="p-10 md:p-16 flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <h3 className="text-4xl font-black text-slate-900 tracking-tight">
                    {doc.title}
                  </h3>
                  <div className="w-20 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <p className="text-slate-600 text-xl leading-relaxed font-light italic">
                  "{doc.description}"
                </p>

                <div className="pt-4">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="inline-flex items-center gap-4 text-blue-600 font-bold text-lg"
                  >
                    Visualizza Approfondimento
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <ChevronRight size={24} />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

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
                  className="p-4 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl border-4 border-white"
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

export default Civica;
