import React from 'react';
import { motion } from 'framer-motion';
import { INFO } from '../constants';
import { ArrowRight, Code, Zap, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home Page - Rich Bento 2.0 Design
 * Palette Electric Crimson, Grafica Densa e Moderna
 */
const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-24 px-4 relative overflow-hidden"
    >
      {/* Effetti di sfondo ricchi */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-crimson-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Card 1: Foto Profilo - Grande e Imponente */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 md:row-span-2 bento-card flex flex-col items-center justify-center group shadow-deep"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-pink-500/40 shadow-glow-crimson">
              <img
                src="/foto-progetti/home/profilo-home.webp"
                alt={`${INFO.nome} ${INFO.cognome}`}
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              {/* Decorazione angolo */}
              <div className="absolute top-4 right-4 w-12 h-12 border-2 border-pink-500/40 rounded-full"></div>
            </div>
          </motion.div>

          {/* Card 2: Titolo Principale */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bento-card shadow-deep space-y-6"
          >
            <div className="flex items-center gap-2">
              <Star size={20} className="text-pink-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-pink-400">Portfolio 2024</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-tight">
              <span className="block text-white">{INFO.nome}</span>
              <span className="gradient-text-crimson block">{INFO.cognome}</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              {INFO.descrizione}
            </p>
          </motion.div>

          {/* Card 3: CTA Primario */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 bento-card shadow-deep flex flex-col justify-center"
          >
            <Link
              to="/pcto"
              className="group w-full px-6 py-5 gradient-crimson text-white rounded-xl font-bold text-center hover:shadow-glow-crimson transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 overflow-hidden relative"
            >
              <span className="relative z-10">Scopri i Progetti</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          {/* Card 4: Specialità */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 bento-card shadow-deep space-y-4 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 gradient-crimson rounded-lg group-hover:shadow-glow-crimson transition-all">
                <Code size={24} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Specialità</p>
                <p className="text-lg font-bold text-pink-400">Informatica & TLC</p>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Istituto */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 bento-card shadow-deep space-y-4 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 gradient-crimson rounded-lg group-hover:shadow-glow-crimson transition-all">
                <Zap size={24} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Istituto</p>
                <p className="text-lg font-bold text-pink-400">IIS Marconi</p>
              </div>
            </div>
          </motion.div>

          {/* Card 6: CTA Secondario */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 bento-card shadow-deep flex flex-col justify-center"
          >
            <Link
              to="/contatti"
              className="w-full px-6 py-5 border-2 border-pink-500/50 text-pink-400 rounded-xl font-bold text-center hover:border-pink-400 hover:bg-pink-500/10 hover:shadow-glow-crimson transition-all duration-300 active:scale-95"
            >
              Contattami
            </Link>
          </motion.div>

          {/* Card 7: Passioni */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bento-card shadow-deep space-y-4"
          >
            <div className="flex items-center gap-2">
              <Sparkles size={20} className="text-pink-500" />
              <h3 className="text-xl font-bold">Le Mie Passioni</h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Tecnologia, Gaming, Musica e Problem Solving. Scopri di più nella sezione dedicata.
            </p>
            <Link
              to="/passioni"
              className="inline-flex items-center gap-2 text-pink-400 font-bold hover:text-pink-300 transition-colors group"
            >
              Esplora
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
