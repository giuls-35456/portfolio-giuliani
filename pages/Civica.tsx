import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Printer, X, Heart, ChevronRight, Globe, Shield, Users
} from 'lucide-react';
import { Document } from '../types';

/**
 * Educazione Civica - Design Moderno e Dinamico
 * Sezione dedicata ai Diritti Umani e alla cittadinanza globale.
 */
const Civica: React.FC = () => {
  const [openPdf, setOpenPdf] = useState<Document | null>(null);

  const handlePrint = () => {
    window.print();
  };

  // Documento sui Diritti Umani
  const doc: Document = {
    id: 'human-rights',
    title: 'Human Rights',
    tag: 'Diritti Umani',
    image: '/foto-progetti/civica/human-rights.jpg',
    description: "Un'esplorazione profonda dei diritti umani fondamentali, della libertà e della dignità globale. Comprendere i principi universali che proteggono ogni individuo e l'importanza dell'azione collettiva per la giustizia.",
    pdfUrl: '/documents/HumanRights.pdf',
    pages: []
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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

      {/* Hero Section Moderna */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-12 md:p-20 text-white shadow-2xl">
        {/* Sfondo animato con pattern geometrico */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm66-3c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-46-43c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm20 0c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="0.4" fill-rule="evenodd"/%3E%3C/svg%3E")',
          }}
        ></motion.div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold uppercase tracking-widest"
            >
              <Heart size={16} className="text-pink-300" />
              <span>Educazione Civica</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black leading-tight tracking-tighter"
            >
              Diritti <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-indigo-200">
                Universali
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-indigo-100 leading-relaxed font-light"
            >
              Non solo leggi, ma il fondamento della nostra dignità. In un mondo interconnesso, 
              comprendere i diritti umani significa costruire ponti verso una giustizia globale 
              e un'azione collettiva consapevole.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                <Globe size={18} className="text-indigo-300" />
                <span className="text-sm font-medium">Globalità</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                <Shield size={18} className="text-pink-300" />
                <span className="text-sm font-medium">Protezione</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                <Users size={18} className="text-purple-300" />
                <span className="text-sm font-medium">Collettività</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="hidden md:block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img 
              src="/foto-progetti/civica/human-rights.jpg" 
              alt="Human Rights Illustration" 
              className="relative z-10 rounded-3xl shadow-2xl border-4 border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Sezione Documento Principale */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold text-slate-900 flex items-center gap-4"
            >
              <div className="w-2 h-10 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
              Approfondimento
            </motion.h2>
            <p className="text-slate-500 max-w-xl">
              Analisi dettagliata dei principi universali e del loro impatto nella società moderna.
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
              {/* Immagine */}
              <div className="relative h-80 md:h-auto overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                <div className="absolute top-8 left-8">
                  <span className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full text-xs font-black text-indigo-600 uppercase tracking-[0.2em] shadow-lg">
                    {doc.tag}
                  </span>
                </div>
              </div>

              {/* Contenuto */}
              <div className="p-10 md:p-16 flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <h3 className="text-5xl font-black text-slate-900 tracking-tight leading-none">
                    {doc.title}
                  </h3>
                  <div className="w-20 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
                </div>

                <p className="text-slate-600 text-xl leading-relaxed font-light italic">
                  "{doc.description}"
                </p>

                <div className="pt-4">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="inline-flex items-center gap-4 text-indigo-600 font-bold text-lg"
                  >
                    Esplora il documento
                    <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
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
              {/* Pulsanti di controllo */}
              <div className="fixed top-6 right-6 z-[10001] flex flex-col gap-4 no-print">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpenPdf(null);
                  }}
                  className="p-5 bg-red-600 text-white hover:bg-red-700 transition-all duration-300 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] border-4 border-white hover:scale-110 active:scale-95 cursor-pointer"
                  style={{ pointerEvents: 'auto' }}
                  title="Chiudi"
                >
                  <X size={32} strokeWidth={4} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrint}
                  className="p-4 bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 rounded-full flex items-center justify-center shadow-xl border-4 border-white hover:scale-110 active:scale-95"
                  title="Stampa / PDF"
                >
                  <Printer size={24} />
                </motion.button>
              </div>

              {/* PDF Viewer */}
              <div id="printable-pdf" className="bg-white shadow-2xl rounded-2xl w-full h-[90vh] overflow-hidden mt-4 border-4 border-slate-200">
                {openPdf.pdfUrl ? (
                  <iframe
                    src={`${openPdf.pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                    className="w-full h-full border-none"
                    title={openPdf.title}
                    allowFullScreen
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400 text-xl">
                    Caricamento documento...
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Civica;
