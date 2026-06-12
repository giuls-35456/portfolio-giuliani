import React from 'react';
import { motion } from 'framer-motion';
import { INFO } from '../constants';
import { ArrowRight, Code, Zap, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home Page - Bento Grid Design Unico
 * Palette Deep Aurora: Verde Smeraldo + Viola Profondo
 */
const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Bento Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Card 1: Foto Profilo - Grande */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 md:row-span-2 bento-card flex flex-col items-center justify-center"
          >
            <div className="w-48 h-48 md:w-full md:h-80 rounded-2xl overflow-hidden border border-green-400/30 shadow-glow">
              <img
                src="/foto-progetti/home/profilo-home.webp"
                alt={`${INFO.nome} ${INFO.cognome}`}
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Card 2: Titolo e Sottotitolo */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bento-card space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              {INFO.nome} <br />
              <span className="gradient-text">{INFO.cognome}</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Studente appassionato di tecnologia e innovazione digitale
            </p>
          </motion.div>

          {/* Card 3: Descrizione */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bento-card"
          >
            <p className="text-slate-300 leading-relaxed text-base">
              {INFO.descrizione}
            </p>
          </motion.div>

          {/* Card 4: CTA Primario */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 bento-card flex flex-col justify-center"
          >
            <Link
              to="/pcto"
              className="w-full group relative px-6 py-4 bg-gradient-to-r from-green-400 to-green-500 text-slate-900 rounded-xl font-bold text-center hover:shadow-glow transition-all duration-300 active:scale-95 overflow-hidden flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Scopri i Progetti</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Card 5: Competenze */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 bento-card space-y-3"
          >
            <div className="flex items-center gap-3">
              <Code size={24} className="text-green-400" />
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Specialità</p>
                <p className="text-sm font-semibold">Informatica & TLC</p>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Scuola */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 bento-card space-y-3"
          >
            <div className="flex items-center gap-3">
              <Zap size={24} className="text-purple-400" />
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Istituto</p>
                <p className="text-sm font-semibold">IIS Marconi</p>
              </div>
            </div>
          </motion.div>

          {/* Card 7: CTA Secondario */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 bento-card flex flex-col justify-center"
          >
            <Link
              to="/contatti"
              className="w-full px-6 py-4 border-2 border-green-400/50 text-green-400 rounded-xl font-bold text-center hover:bg-green-400/10 transition-all duration-300 active:scale-95"
            >
              Contattami
            </Link>
          </motion.div>

          {/* Card 8: Passioni */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bento-card space-y-4"
          >
            <div className="flex items-center gap-2">
              <Lightbulb size={24} className="text-purple-400" />
              <h3 className="text-lg font-bold">Le Mie Passioni</h3>
            </div>
            <p className="text-slate-400 text-sm">
              Tecnologia, Gaming, Musica e Problem Solving. Scopri di più nella sezione dedicata.
            </p>
            <Link
              to="/passioni"
              className="inline-block text-green-400 font-semibold hover:text-green-300 transition-colors"
            >
              Esplora →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
