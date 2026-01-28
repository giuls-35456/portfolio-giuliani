import React from 'react';
import { motion } from 'framer-motion';
import { INFO } from '../constants';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home Page del Portfolio - Design Pulito e Professionale
 * Animazioni eleganti e minimaliste con effetto Wow attraverso i dettagli.
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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 min-h-[85vh] py-10 relative"
    >
      {/* Colonna Testi - Sinistra */}
      <motion.div 
        className="flex-1 space-y-10 order-2 lg:order-1 text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Sezione Titolo */}
        <div className="space-y-8">
          {/* Badge Introduttivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 mx-auto lg:mx-0"
          >
            <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
            Benvenuto nel mio portfolio
          </motion.div>

          {/* Titolo Principale */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="space-y-4"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-slate-900">
              <span className="block">{INFO.nome}</span>
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                {INFO.cognome}
              </motion.span>
            </h1>

            {/* Linea Decorativa */}
            <motion.div
              className="h-1.5 bg-gradient-to-r from-teal-600 to-blue-700 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>
          
          {/* Descrizione */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-light"
          >
            {INFO.descrizione}
          </motion.p>

          {/* Sottotitolo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-lg text-slate-500 font-medium"
          >
            Scopri il mio percorso formativo e le mie competenze
          </motion.p>
        </div>
        
        {/* Sezione CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-8"
        >
          {/* Pulsante Principale PCTO */}
          <Link 
            to="/pcto" 
            className="relative group w-full sm:w-auto"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-700 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-600 to-blue-700 text-white px-10 py-6 rounded-xl font-bold text-lg shadow-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Zap size={22} />
                Esplora il mio PCTO
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={22} />
                </motion.div>
              </span>
            </motion.button>
          </Link>

          {/* Pulsante Secondario Contatti */}
          <Link 
            to="/contatti" 
            className="w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white border-2 border-slate-300 text-slate-700 px-10 py-6 rounded-xl font-bold text-lg hover:border-teal-600 hover:text-teal-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contattami
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight size={22} />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>

        {/* Indicatore di Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center lg:justify-start pt-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm text-slate-400 flex items-center gap-2"
          >
            <span>Scorri per scoprire di più</span>
            <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ChevronRight size={18} className="rotate-90" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Foto Profilo - Destra */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 80, damping: 20 }}
        className="relative group order-1 lg:order-2"
      >
        {/* Anello Esterno Animato */}
        <motion.div
          className="absolute -inset-6 rounded-[3rem] border-2 border-slate-200"
          animate={{ 
            rotate: 360,
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Cornice Foto */}
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] rounded-[3rem] overflow-hidden shadow-xl border-[12px] border-white bg-slate-50">
          <motion.img 
            src="/foto-progetti/home/profilo-home.webp" 
            alt={`Ritratto di ${INFO.nome} ${INFO.cognome}`} 
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Overlay leggero */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
        </div>

        {/* Elementi Geometrici di Accento - Leggeri */}
        <motion.div 
          className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-100/20 rounded-full blur-3xl -z-10"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100/20 rounded-full blur-3xl -z-10"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;
