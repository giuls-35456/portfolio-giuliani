import React from 'react';
import { motion } from 'framer-motion';
import { INFO } from '../constants';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 min-h-[75vh]"
    >
      {/* Colonna Testi - Sinistra */}
      <div className="flex-1 space-y-8 order-2 lg:order-1 text-center lg:text-left">
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-100 rounded-full"
          >
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
            <span className="text-teal-700 text-sm font-medium uppercase tracking-widest">Portfolio Studente 2024</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold text-slate-900 leading-[1.1]"
          >
            {INFO.nome} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600">
              {INFO.cognome}
            </span>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-slate-500 max-w-xl leading-relaxed mx-auto lg:mx-0"
        >
          {INFO.descrizione}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4"
        >
          <Link to="/pcto" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-slate-200 group active:scale-95">
            Esplora il mio PCTO
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/contatti" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-600 px-8 py-4 rounded-2xl hover:bg-slate-50 transition-all duration-300 active:scale-95">
            Contattami
            <ChevronRight size={20} />
          </Link>
        </motion.div>
      </div>

      {/* Foto Profilo - Destra */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        className="relative group order-1 lg:order-2"
      >
        {/* Decorazioni di sfondo */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500 to-blue-600 rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
        
        {/* Cornice Foto Quadrata 1:1 */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-[3rem] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.2)] border-8 border-white bg-slate-100">
          <img 
            src="https://raw.githubusercontent.com/ai-studio-images/profile-pic/main/riccardo.jpg" 
            alt="Riccardo Giuliani" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: 'center 20%' }}
          />
          
          {/* Overlay gradiente leggerissimo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
        </div>

        {/* Elemento decorativo Geometrico */}
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      </motion.div>
    </motion.div>
  );
};

export default Home;