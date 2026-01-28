import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { INFO } from '../constants';
import { ArrowRight, ChevronRight, Sparkles, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home Page Premium del Portfolio
 * Design straordinario con animazioni fluide, effetti wow e call-to-action irresistibile.
 */
const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Tracciamento del mouse per effetti parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animazione del testo con caratteri singoli
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

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
      {/* Effetto Glow Seguente il Mouse */}
      {isHovering && (
        <motion.div
          className="fixed w-96 h-96 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full blur-3xl pointer-events-none -z-5"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      )}

      {/* Colonna Testi - Sinistra */}
      <motion.div 
        className="flex-1 space-y-10 order-2 lg:order-1 text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Sezione Titolo con Animazione Spettacolare */}
        <div className="space-y-8">
          {/* Badge Introduttivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-full px-6 py-3 mx-auto lg:mx-0 w-fit"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={18} className="text-teal-600" />
            </motion.div>
            <span className="text-sm font-semibold text-teal-700">Benvenuto nel mio portfolio</span>
          </motion.div>

          {/* Titolo Principale con Effetto Gradient Animato */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="space-y-4"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter">
              <span className="block text-slate-900">{INFO.nome}</span>
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 relative"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                {INFO.cognome}
              </motion.span>
            </h1>

            {/* Linea Decorativa Animata */}
            <motion.div
              className="h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '100px' }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>
          
          {/* Descrizione con Effetto Fade-In */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-light"
          >
            {INFO.descrizione}
          </motion.p>

          {/* Sottotitolo Accattivante */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="space-y-3"
          >
            <p className="text-lg text-slate-500 font-medium flex items-center gap-3 justify-center lg:justify-start">
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Target size={20} className="text-teal-500" />
              </motion.div>
              Scopri il mio percorso formativo e le mie competenze
            </p>
          </motion.div>
        </div>
        
        {/* Sezione CTA - Call to Action Irresistibile */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-8"
        >
          {/* Pulsante Principale PCTO - Effetto Wow */}
          <Link 
            to="/pcto" 
            className="relative group w-full sm:w-auto"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-10 py-6 rounded-2xl font-bold text-lg shadow-2xl shadow-teal-500/50 overflow-hidden group"
            >
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <span className="relative z-10 flex items-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Zap size={22} />
                </motion.div>
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white border-2 border-slate-200 text-slate-700 px-10 py-6 rounded-2xl font-bold text-lg hover:border-teal-500 hover:text-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
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

        {/* Indicatori di Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center lg:justify-start pt-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm text-slate-400 flex items-center gap-2"
          >
            <span>Scorri per scoprire di più</span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ChevronRight size={18} className="rotate-90" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Foto Profilo - Destra con Effetti Avanzati */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 80, damping: 20 }}
        className="relative group order-1 lg:order-2"
      >
        {/* Decorazioni di sfondo dinamiche - Orbite */}
        <motion.div 
          className="absolute -inset-8 rounded-[3.5rem]"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/30 to-blue-600/30 rounded-[3.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>

        {/* Anello Esterno Animato */}
        <motion.div
          className="absolute -inset-6 rounded-[3.5rem] border-2 border-transparent bg-gradient-to-tr from-teal-500/50 to-blue-600/50 bg-clip-border"
          animate={{ 
            rotate: 360,
            borderColor: ['rgba(20, 184, 166, 0.3)', 'rgba(59, 130, 246, 0.3)', 'rgba(20, 184, 166, 0.3)']
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Cornice Foto con Effetti */}
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-50">
          <motion.img 
            src="/foto-progetti/home/profilo-home.webp" 
            alt={`Ritratto di ${INFO.nome} ${INFO.cognome}`} 
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Overlay gradiente protettivo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>

          {/* Effetto Glow Hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-blue-600/0 group-hover:from-teal-500/20 group-hover:to-blue-600/20 transition-all duration-500 pointer-events-none"
          />
        </div>

        {/* Elementi Geometrici di Accento - Animati */}
        <motion.div 
          className="absolute -bottom-12 -left-12 w-48 h-48 bg-teal-500/15 rounded-full blur-3xl -z-10"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl -z-10"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Badge Floating */}
        <motion.div
          className="absolute -bottom-6 -right-6 bg-gradient-to-br from-teal-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-xl font-bold text-sm flex items-center gap-2"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={16} />
          Portfolio 2025
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
