import React from 'react';
import { motion } from 'framer-motion';
import { INFO } from '../constants';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home Page - Portfolio Professionale
 * Design moderno con layout responsive, animazioni fluide e grafica accattivante.
 * Ottimizzato per performance e accessibilità.
 */
const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 min-h-[80vh] py-10"
    >
      {/* Sezione Testo - Sinistra */}
      <motion.div 
        className="flex-1 space-y-10 order-2 lg:order-1 text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge Introduttivo */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-6 py-3 rounded-full font-semibold text-sm backdrop-blur-sm border border-indigo-200 w-fit mx-auto lg:mx-0"
        >
          <Sparkles size={18} />
          Benvenuto nel mio portfolio
        </motion.div>

        {/* Titolo Principale */}
        <motion.div 
          variants={itemVariants}
          className="space-y-6"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.1] tracking-tight">
            {INFO.nome} <br />
            <span className="gradient-text">
              {INFO.cognome}
            </span>
          </h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed mx-auto lg:mx-0 font-light"
          >
            {INFO.descrizione}
          </motion.p>
        </motion.div>
        
        {/* Pulsanti di Azione */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-6"
        >
          <Link 
            to="/pcto" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 gradient-primary text-white px-10 py-5 rounded-2xl hover:shadow-glow transition-all duration-300 active:scale-95 font-bold text-lg shadow-lg"
          >
            Esplora il mio PCTO
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/contatti" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white border-2 border-indigo-200 text-slate-700 px-10 py-5 rounded-2xl hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 active:scale-95 font-bold text-lg shadow-soft"
          >
            Contattami
            <ChevronRight size={22} />
          </Link>
        </motion.div>

        {/* Statistiche Veloci */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200"
        >
          <div className="text-center">
            <p className="text-3xl font-black gradient-text">10+</p>
            <p className="text-sm text-slate-600 font-medium">Progetti</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black gradient-text">5+</p>
            <p className="text-sm text-slate-600 font-medium">Competenze</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black gradient-text">2+</p>
            <p className="text-sm text-slate-600 font-medium">Anni Exp</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Sezione Foto Profilo - Destra */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 70 }}
        className="relative group order-1 lg:order-2 w-full lg:w-auto flex justify-center"
      >
        {/* Elementi Decorativi Animati */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-8 bg-gradient-to-br from-indigo-300/20 via-purple-300/20 to-pink-300/20 rounded-[4rem] blur-3xl"
        ></motion.div>

        {/* Contenitore Foto con Bordo Moderno */}
        <div className="relative w-72 h-96 sm:w-96 sm:h-[480px] lg:w-[420px] lg:h-[560px] rounded-[3rem] overflow-hidden shadow-large border-[12px] border-white bg-slate-100 card-hover">
          <img 
            src="/foto-progetti/home/profilo-home.webp" 
            alt={`Ritratto professionale di ${INFO.nome} ${INFO.cognome}`} 
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
          />
          
          {/* Overlay Gradiente Sofisticato */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>

          {/* Badge Floating */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-white/60"
          >
            <p className="text-sm font-bold text-slate-900">Disponibile per collaborazioni</p>
          </motion.div>
        </div>

        {/* Elementi Decorativi Geometrici */}
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -bottom-12 -left-12 w-48 h-48 bg-gradient-to-br from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl -z-10"
        ></motion.div>
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-pink-300/10 to-purple-300/10 rounded-full blur-3xl -z-10"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
