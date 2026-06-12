import React from 'react';
import { motion } from 'framer-motion';
import { INFO } from '../constants';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home Page - Bento Premium Design
 * Palette Blue & Mint, Layout Moderno e Accattivante
 */
const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Effetti di sfondo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Colonna Sinistra - Foto Profilo Grande */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Bordo Animato */}
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
              
              {/* Contenitore Foto */}
              <div className="relative w-80 h-96 sm:w-96 sm:h-[480px] rounded-3xl overflow-hidden border-2 border-cyan-500/30 shadow-glow bg-slate-900">
                <img
                  src="/foto-progetti/home/profilo-home.webp"
                  alt={`${INFO.nome} ${INFO.cognome}`}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Colonna Destra - Contenuti */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold"
            >
              <Sparkles size={16} />
              Portfolio 2024
            </motion.div>

            {/* Titolo */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                <span className="block text-white">{INFO.nome}</span>
                <span className="gradient-text block">{INFO.cognome}</span>
              </h1>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                {INFO.descrizione}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                to="/pcto"
                className="group px-8 py-4 gradient-primary text-slate-900 rounded-xl font-bold text-base hover:shadow-glow transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
              >
                Scopri i Progetti
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contatti"
                className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-xl font-bold text-base hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 active:scale-95"
              >
                Contattami
              </Link>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-700"
            >
              <div className="space-y-2">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Specialità</p>
                <p className="text-lg font-bold text-cyan-400">Informatica & TLC</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Istituto</p>
                <p className="text-lg font-bold text-blue-400">IIS Marconi</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
