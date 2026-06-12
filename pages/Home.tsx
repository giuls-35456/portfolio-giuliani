import React from 'react';
import { motion } from 'framer-motion';
import { INFO } from '../constants';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home Page - Portfolio Professionale
 * Design minimalista, veloce e moderno con sfondo scuro.
 */
const Home: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 min-h-[80vh] py-10"
    >
      {/* Sezione Testo - Sinistra */}
      <motion.div 
        className="flex-1 space-y-8 order-2 lg:order-1 text-center lg:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        {/* Titolo Principale */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight">
            {INFO.nome} <br />
            <span className="gradient-text">
              {INFO.cognome}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed mx-auto lg:mx-0 font-light">
            {INFO.descrizione}
          </p>
        </div>
        
        {/* Pulsanti di Azione */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Link 
            to="/pcto" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 gradient-primary text-white px-8 py-4 rounded-xl hover:shadow-glow transition-all duration-300 active:scale-95 font-bold text-base shadow-soft"
          >
            Esplora il mio PCTO
            <ArrowRight size={20} />
          </Link>
          <Link 
            to="/contatti" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-xl hover:bg-slate-700 transition-all duration-300 active:scale-95 font-bold text-base"
          >
            Contattami
            <ChevronRight size={20} />
          </Link>
        </motion.div>
      </motion.div>

      {/* Sezione Foto Profilo - Destra */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative group order-1 lg:order-2 w-full lg:w-auto flex justify-center"
      >
        {/* Contenitore Foto - Minimalista */}
        <div className="relative w-72 h-96 sm:w-96 sm:h-[480px] lg:w-[400px] lg:h-[520px] rounded-2xl overflow-hidden shadow-medium border-[8px] border-slate-800 bg-slate-900">
          <img 
            src="/foto-progetti/home/profilo-home.webp" 
            alt={`Ritratto professionale di ${INFO.nome} ${INFO.cognome}`} 
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Overlay Sottile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Accento Decorativo Semplice */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl -z-10"></div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
