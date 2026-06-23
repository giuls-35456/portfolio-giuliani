import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INFO } from '../constants';
import { ArrowRight, ChevronRight, FileText, X, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [openPdf, setOpenPdf] = useState<{ url: string, title: string } | null>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 min-h-[70vh] py-10"
    >
      <style>{`
        ${openPdf ? 'nav { display: none !important; }' : ''}
        @media print {
          body * { visibility: hidden; }
          #printable-pdf, #printable-pdf * { visibility: visible; }
          #printable-pdf { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}</style>

      {/* Sezione Testo - Sinistra */}
      <div className="flex-1 space-y-10 order-2 lg:order-1 text-center lg:text-left">
        {/* Titolo Principale */}
        <div className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-slate-900 leading-[1.1] tracking-tight"
          >
            {INFO.nome} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse">
              {INFO.cognome}
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-2xl text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-light"
          >
            {INFO.descrizione}
          </motion.p>
        </div>
        
        {/* Pulsanti di Azione */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-6"
        >
          <Link 
            to="/pcto" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl hover:shadow-2xl transition-all duration-300 shadow-lg active:scale-95 font-bold"
          >
            Esplora il mio PCTO
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/contatti" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white border-2 border-purple-300 text-purple-600 px-10 py-5 rounded-2xl hover:border-purple-500 hover:bg-purple-50 transition-all duration-300 active:scale-95 font-bold"
          >
            Contatti
            <ChevronRight size={20} />
          </Link>
        </motion.div>

        {/* Pulsanti Download CV - Più piccoli e con visualizzazione PDF */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap items-center gap-3 justify-center lg:justify-start pt-2"
        >
          <button 
            onClick={() => setOpenPdf({ url: '/documents/CV_Riccardo_Giuliani_ITA.pdf', title: 'Curriculum Vitae ITA' })}
            className="inline-flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 px-5 py-2.5 rounded-xl hover:bg-emerald-100 transition-all duration-300 active:scale-95 font-semibold text-sm"
          >
            <FileText size={16} />
            CV Italiano
          </button>
          <button 
            onClick={() => setOpenPdf({ url: '/documents/CV_Riccardo_Giuliani_ENG.pdf', title: 'Curriculum Vitae ENG' })}
            className="inline-flex items-center justify-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 px-5 py-2.5 rounded-xl hover:bg-blue-100 transition-all duration-300 active:scale-95 font-semibold text-sm"
          >
            <FileText size={16} />
            CV Inglese
          </button>
        </motion.div>
      </div>

      {/* Sezione Foto Profilo - Destra */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 80 }}
        className="relative group order-1 lg:order-2"
      >
        <div className="absolute -inset-6 bg-gradient-to-br from-blue-300/40 via-purple-300/30 to-pink-300/20 rounded-[3.5rem] blur-3xl group-hover:opacity-60 transition-opacity duration-700"></div>
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] rounded-[3.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] border-[12px] border-white bg-slate-100 ring-2 ring-purple-200/50">
          <img 
            src="/foto-progetti/home/profilo-home.webp" 
            alt={`Ritratto professionale di ${INFO.nome} ${INFO.cognome}`} 
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/3 to-transparent pointer-events-none"></div>
        </div>
      </motion.div>

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
                  src={`${openPdf.url}#view=FitH&toolbar=0`} 
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

export default Home;
