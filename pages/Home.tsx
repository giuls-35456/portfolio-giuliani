import React from 'react';
import { motion } from 'framer-motion';
import { INFO } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home Page - Nuovo Design Ultra-Moderno
 * Hero centrato, palette Cyan/Magenta, design minimalista e veloce.
 */
const Home: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-screen text-center space-y-12 py-20"
    >
      {/* Foto Profilo - Centrata in Alto */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="relative"
      >
        <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-glow">
          <img 
            src="/foto-progetti/home/profilo-home.webp" 
            alt={`${INFO.nome} ${INFO.cognome}`}
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Accento decorativo */}
        <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-cyan-400/30 rounded-full"></div>
        <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-pink-500/30 rounded-full"></div>
      </motion.div>

      {/* Titolo e Sottotitolo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-6 max-w-2xl px-4"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
          {INFO.nome} <br />
          <span className="gradient-text">{INFO.cognome}</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
          {INFO.descrizione}
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center px-4"
      >
        <Link 
          to="/pcto"
          className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-900 rounded-lg font-bold text-lg hover:shadow-glow transition-all duration-300 active:scale-95 overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Scopri i Miei Progetti
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
        
        <Link 
          to="/contatti"
          className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 rounded-lg font-bold text-lg hover:bg-cyan-400/10 transition-all duration-300 active:scale-95"
        >
          Contattami
        </Link>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-16 text-cyan-400/50"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default Home;
