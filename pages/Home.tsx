import React from 'react';
import { motion } from 'framer-motion';
import { INFO } from '../constants';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home Page - Portfolio Professionale
 * Design moderno con layout responsive e animazioni fluide.
 * Ottimizzato per performance e accessibilità.
 */
const Home: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 min-h-[70vh] py-10"
    >
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900">
              {INFO.cognome}
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed mx-auto lg:mx-0 font-light"
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 font-medium"
          >
            Esplora il mio PCTO
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/contatti" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-2xl hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 active:scale-95 font-medium"
          >
            Contattami
            <ChevronRight size={20} />
          </Link>
        </motion.div>
      </div>

      {/* Sezione Foto Profilo - Destra */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 80 }}
        className="relative group order-1 lg:order-2"
      >
        {/* Sfondo Decorativo Dinamico */}
        <div className="absolute -inset-6 bg-gradient-to-br from-slate-200/30 to-slate-300/20 rounded-[3.5rem] blur-3xl group-hover:opacity-40 transition-opacity duration-700"></div>
        
        {/* Contenitore Foto con Bordo Moderno */}
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] rounded-[3.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border-[12px] border-white bg-slate-100">
          <img 
            src="/foto-progetti/home/profilo-home.webp" 
            alt={`Ritratto professionale di ${INFO.nome} ${INFO.cognome}`} 
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          
          {/* Overlay Gradiente Sottile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/3 to-transparent pointer-events-none"></div>
        </div>

        {/* Elementi Decorativi Geometrici */}
        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-slate-300/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-slate-400/5 rounded-full blur-3xl -z-10"></div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
