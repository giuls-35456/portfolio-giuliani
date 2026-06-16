import React from 'react';
import { motion } from 'framer-motion';
import { INFO } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home Page - Layout Classico Modernizzato
 * Immagine a Sinistra, Testo a Destra
 */
const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Colonna Sinistra - Foto Profilo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative group">
              <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-medium bg-slate-900 hover:border-blue-400 transition-all duration-300">
                <img
                  src="/foto-progetti/home/profilo-home.webp"
                  alt={`${INFO.nome} ${INFO.cognome}`}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Colonna Destra - Contenuti */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Titolo */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight">
                <span className="block text-white">{INFO.nome}</span>
                <span className="gradient-text block">{INFO.cognome}</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                {INFO.descrizione}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/pcto"
                className="group px-8 py-4 gradient-primary text-white rounded-lg font-bold text-base hover:shadow-medium transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
              >
                Scopri i Progetti
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contatti"
                className="px-8 py-4 border-2 border-slate-600 text-slate-300 rounded-lg font-bold text-base hover:border-blue-400 hover:text-blue-400 transition-all duration-300 active:scale-95"
              >
                Contattami
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
