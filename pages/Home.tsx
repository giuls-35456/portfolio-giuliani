import React from 'react';
import { motion } from 'framer-motion';
import { INFO } from '../constants';
import { ArrowRight, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home Page - Design Futuristico Neon
 * Immagine profilo gigante, palette Cyan/Pink/Purple
 */
const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden"
    >
      {/* Effetti di sfondo animati */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="max-w-5xl w-full space-y-12">
        {/* Foto Profilo - GIGANTE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8, type: "spring" }}
          className="flex justify-center"
        >
          <div className="relative group">
            {/* Bordo Neon Animato */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-neon"></div>
            
            {/* Contenitore Foto */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] rounded-3xl overflow-hidden border-2 border-cyan-400 bg-slate-900 shadow-2xl">
              <img
                src="/foto-progetti/home/profilo-home.webp"
                alt={`${INFO.nome} ${INFO.cognome}`}
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay Neon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Titolo Futuristico */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-tight">
            <span className="block text-white">{INFO.nome}</span>
            <span className="gradient-text-neon block text-6xl sm:text-7xl md:text-8xl">
              {INFO.cognome}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {INFO.descrizione}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            to="/pcto"
            className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-slate-900 rounded-xl font-bold text-lg hover:neon-glow-cyan transition-all duration-300 active:scale-95 overflow-hidden flex items-center gap-3 shadow-xl"
          >
            <span className="relative z-10">Scopri i Progetti</span>
            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
          </Link>

          <Link
            to="/contatti"
            className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 rounded-xl font-bold text-lg hover:bg-cyan-400/10 hover:neon-glow-cyan transition-all duration-300 active:scale-95"
          >
            Contattami
          </Link>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16"
        >
          {/* Card 1 */}
          <div className="p-6 border-2 border-cyan-400/30 rounded-2xl bg-slate-900/50 backdrop-blur-sm hover:border-cyan-400 hover:bg-slate-900/80 transition-all duration-300 group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg group-hover:neon-glow-cyan transition-all">
                <Code size={24} className="text-slate-900" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Specialità</p>
                <p className="text-lg font-bold text-cyan-400">Informatica & TLC</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 border-2 border-pink-400/30 rounded-2xl bg-slate-900/50 backdrop-blur-sm hover:border-pink-400 hover:bg-slate-900/80 transition-all duration-300 group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg group-hover:neon-glow-pink transition-all">
                <Zap size={24} className="text-slate-900" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Istituto</p>
                <p className="text-lg font-bold text-pink-400">IIS Marconi</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-12 text-cyan-400/50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
