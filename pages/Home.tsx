import React from 'react';
import { motion } from 'framer-motion';
import { INFO } from '../constants';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home Page del Portfolio.
 * Layout ottimizzato per massimizzare l'impatto visivo e la velocità di caricamento.
 */
const Home: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 min-h-[70vh] py-10"
    >
      {/* Colonna Testi - Sinistra */}
      <div className="flex-1 space-y-10 order-2 lg:order-1 text-center lg:text-left">
        <div className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-slate-900 leading-[1.1] tracking-tight"
          >
            {INFO.nome} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600">
              {INFO.cognome}
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-500 max-w-xl leading-relaxed mx-auto lg:mx-0 font-light"
          >
            {INFO.descrizione}
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-6"
        >
          <Link 
            to="/pcto" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl hover:bg-teal-600 transition-all duration-300 shadow-xl shadow-slate-200 group active:scale-95 font-medium"
          >
            Esplora il mio PCTO
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/contatti" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-600 px-10 py-5 rounded-2xl hover:bg-slate-50 transition-all duration-300 active:scale-95 font-medium"
          >
            Contattami
            <ChevronRight size={20} />
          </Link>
        </motion.div>
      </div>

      {/* Foto Profilo - Destra */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        className="relative group order-1 lg:order-2"
      >
        {/* Decorazioni di sfondo dinamiche */}
        <div className="absolute -inset-6 bg-gradient-to-tr from-teal-500/20 to-blue-600/20 rounded-[3.5rem] blur-3xl group-hover:opacity-50 transition-opacity duration-500"></div>
        
        {/* Cornice Foto Quadrata 1:1 con ottimizzazione LCP */}
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] rounded-[3.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] border-[12px] border-white bg-slate-50">
          <img 
            src="/foto-progetti/home/profilo-home.webp" 
            alt={`Ritratto di ${INFO.nome} ${INFO.cognome}`} 
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            style={{ objectPosition: 'center 20%' }}
          />
          
          {/* Overlay gradiente protettivo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
        </div>

        {/* Elementi Geometrici di Accento */}
        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
