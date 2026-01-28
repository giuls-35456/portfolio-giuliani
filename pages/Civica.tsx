import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Printer, X, Scale, ChevronRight, Globe, Heart, Leaf
} from 'lucide-react';
import { Document } from '../types';

/**
 * Educazione Civica - Design Esclusivo e Distintivo
 * Una sezione dedicata ai progetti di cittadinanza e consapevolezza globale.
 */
const Civica: React.FC = () => {
  const [openPdf, setOpenPdf] = useState<Document | null>(null);

  const handlePrint = () => {
    window.print();
  };

  // Dati dei documenti con i PDF originali
  const docs: Document[] = [
    {
      id: 'digital-education',
      title: 'Digital Education',
      tag: 'Cittadinanza Digitale',
      image: '/foto-progetti/civica/digital-citizenship.jpg',
      description: "Un'esplorazione completa dell'educazione digitale e della cittadinanza consapevole nel mondo online. Analisi dei diritti, delle responsabilità e delle competenze necessarie per navigare l'era digitale.",
      pdfUrl: '/documents/DigitalEducation.pdf',
      pages: []
    },
    {
      id: 'human-rights',
      title: 'Human Rights',
      tag: 'Diritti Umani',
      image: '/foto-progetti/civica/human-rights.jpg',
      description: "A comprehensive exploration of human rights, freedom, and global dignity. Understanding the universal principles that protect every individual and the importance of collective action for justice.",
      pdfUrl: '/documents/HumanRights.pdf',
      pages: []
    },
    {
      id: 'sustainability',
      title: 'Sustainability & Environment',
      tag: 'Sostenibilità',
      image: '/foto-progetti/civica/sustainability.jpg',
      description: "Un'analisi della sostenibilità ambientale e della responsabilità verso il nostro pianeta. Scopri come le scelte individuali e collettive possono creare un futuro più verde e consapevole.",
      pdfUrl: '/documents/Sustainability.pdf',
      pages: []
    }
  ];

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

      {/* Hero Section Unico */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-12 md:p-20 text-white">
        {/* Sfondo animato */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></motion.div>

        <div className="relative z-10 space-y-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Scale size={24} />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-100">Consapevolezza Globale</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-black leading-tight"
          >
            Educazione Civica
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-blue-100 leading-relaxed"
          >
            Cittadinanza responsabile, diritti universali e sostenibilità. Un percorso di consapevolezza verso un mondo più giusto e consapevole.
          </motion.p>
        </div>

        {/* Elementi decorativi */}
        <motion.div
          className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </section>

      {/* Griglia di Progetti - Layout Diverso */}
      <section className="space-y-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl font-bold text-slate-900 flex items-center gap-4"
        >
          <div className="w-2 h-10 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
          Progetti e Approfondimenti
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {docs.map((doc, index) => {
            const icons = [<Globe size={32} />, <Heart size={32} />, <Leaf size={32} />];
            const colors = [
              'from-blue-500 to-cyan-500',
              'from-rose-500 to-pink-500',
              'from-green-500 to-emerald-500'
            ];

            return (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="group cursor-pointer"
              >
                {/* Card Container */}
                <div className="relative h-full rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Immagine */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={doc.image}
                      alt={doc.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  {/* Contenuto */}
                  <div className="p-6 space-y-4">
                    {/* Icon e Tag */}
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 bg-gradient-to-br ${colors[index]} text-white rounded-xl flex items-center justify-center shadow-lg`}>
                        {icons[index]}
                      </div>
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                        {doc.tag}
                      </span>
                    </div>

                    {/* Titolo */}
                    <h3 className="text-2xl font-bold text-slate-900">{doc.title}</h3>

                    {/* Descrizione */}
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {doc.description}
                    </p>

                    {/* Pulsante */}
                    <motion.button
                      onClick={() => setOpenPdf(doc)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full mt-4 bg-gradient-to-r ${colors[index]} text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all`}
                    >
                      Visualizza
                      <ChevronRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
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
                  className="p-4 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-full flex items-center justify-center shadow-xl border-4 border-white hover:scale-110 active:scale-95"
                  title="Stampa / PDF"
                >
                  <Printer size={24} />
                </motion.button>
              </div>

              {/* PDF Viewer */}
              <div id="printable-pdf" className="bg-white shadow-2xl rounded-xl w-full h-[90vh] overflow-hidden mt-4">
                {openPdf.pdfUrl ? (
                  <iframe
                    src={`${openPdf.pdfUrl}#view=FitH&toolbar=0`}
                    className="w-full h-full border-none"
                    title={openPdf.title}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400">
                    Documento in fase di caricamento...
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
