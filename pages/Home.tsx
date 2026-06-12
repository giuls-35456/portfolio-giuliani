import React from 'react';
import { motion } from 'framer-motion';
import { INFO } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home Page - Minimalist Tech Luxury
 * Design elegante e professionale con palette Blu Reale/Grafite
 */
const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4"
    >
      <div className="max-w-3xl w-full space-y-12">
        {/* Foto Profilo - Grande e Elegante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-slate-700 shadow-medium bg-slate-900">
            <img
              src="/foto-progetti/home/profilo-home.webp"
              alt={`${INFO.nome} ${INFO.cognome}`}
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Titolo e Sottotitolo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight">
            <span className="block text-white">{INFO.nome}</span>
            <span className="gradient-text block">{INFO.cognome}</span>
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
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/pcto"
            className="group px-8 py-4 gradient-primary text-white rounded-lg font-bold text-base hover:shadow-medium transition-all duration-300 active:scale-95 flex items-center gap-2"
          >
            Scopri i Progetti
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/contatti"
            className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg font-bold text-base hover:border-slate-400 hover:text-slate-100 transition-all duration-300 active:scale-95"
          >
            Contattami
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
