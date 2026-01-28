import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Printer, X, Heart, ChevronRight
} from 'lucide-react';
import { Document } from '../types';

/**
 * Educazione Civica - Design Esclusivo
 * Sezione dedicata al documento originale di Human Rights.
 */
const Civica: React.FC = () => {
  const [openPdf, setOpenPdf] = useState<Document | null>(null);

  const handlePrint = () => {
    window.print();
  };

  // Documento originale
  const doc: Document = {
    id: 'human-rights',
    title: 'Human Rights',
    tag: 'Diritti Umani',
    image: '/foto-progetti/civica/human-rights.jpg',
    description: "A comprehensive exploration of human rights, freedom, and global dignity. Understanding the universal principles that protect every individual and the importance of collective action for justice and equality.",
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

      {/* Hero Section Unico - Nuova Palette di Colori */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 p-12 md:p-20 text-white">
        {/* Sfondo animato con pattern */}
        <motion.div
          className="absolute inset-0 opacity-15"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></motion.div>

        <div className="relative z-10 space-y-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Heart size={24} />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-orange-100">Diritti Universali</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-black leading-tight"
          >
            Human Rights
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-orange-100 leading-relaxed"
          >
            Un'esplorazione profonda dei diritti umani fondamentali, della libertà e della dignità globale. Comprendere i principi universali che proteggono ogni individuo e l'importanza dell'azione collettiva per la giustizia.
          </motion.p>
        </div>

        {/* Elementi decorativi animati */}
        <motion.div
          className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </section>

      {/* Sezione Documento Principale */}
      <section className="space-y-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl font-bold text-slate-900 flex items-center gap-4"
        >
          <div className="w-2 h-10 bg-gradient-to-b from-orange-500 to-red-600 rounded-full"></div>
          Documento Originale
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}
          className="group cursor-pointer"
        >
          {/* Card Container */}
          <div className="relative h-full rounded-3xl overflow-hidden bg-white border-2 border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* Immagine */}
            <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-orange-100 to-red-100">
              <img
                src={doc.image}
                alt={doc.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Tag sovrapposto */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold text-orange-600 uppercase tracking-widest shadow-lg">
                {doc.tag}
              </div>
            </div>

            {/* Contenuto */}
            <div className="p-8 md:p-12 space-y-8">
              {/* Titolo */}
              <div className="space-y-4">
                <h3 className="text-5xl font-black text-slate-900">{doc.title}</h3>
                <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
              </div>

              {/* Descrizione */}
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                {doc.description}
              </p>

              {/* Pulsante CTA */}
              <motion.button
                onClick={() => setOpenPdf(doc)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-red-600 text-white py-5 px-10 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-2xl transition-all shadow-lg"
              >
                Visualizza Documento
                <ChevronRight size={24} />
              </motion.button>
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
                  className="p-4 bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300 rounded-full flex items-center justify-center shadow-xl border-4 border-white hover:scale-110 active:scale-95"
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
