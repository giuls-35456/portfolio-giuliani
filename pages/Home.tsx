import React from 'react';
import { motion } from 'framer-motion';
import { INFO } from '../constants';
import { ArrowRight, ChevronRight, Code2, Network, Brain, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home Page del Portfolio - Versione Strategica 2026
 * Layout ottimizzato per impatto visivo, SEO e navigazione fluida.
 */
const Home: React.FC = () => {
  const stats = [
    { icon: Code2, label: "Sviluppo", value: "PHP/C#" },
    { icon: Network, label: "Networking", value: "Cisco" },
    { icon: Brain, label: "AI", value: "ML/DL" },
    { icon: Calculator, label: "Math", value: "Advanced" },
  ];

  return (
    <div className="space-y-24 py-10">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 min-h-[60vh]"
      >
        {/* Colonna Testi - Sinistra */}
        <div className="flex-1 space-y-10 order-2 lg:order-1 text-center lg:text-left">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold uppercase tracking-widest"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Disponibile per nuovi progetti
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.1] tracking-tighter"
            >
              {INFO.nome} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-500">
                {INFO.cognome}
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-slate-500 max-w-xl leading-relaxed mx-auto lg:mx-0 font-light"
            >
              {INFO.descrizione}
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-6"
          >
            <Link 
              to="/professionale" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-indigo-600 text-white px-10 py-5 rounded-2xl hover:bg-indigo-700 transition-all duration-300 shadow-2xl shadow-indigo-200 group active:scale-95 font-bold text-lg"
            >
              Area Scientifica
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/pcto" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white border-2 border-slate-100 text-slate-600 px-10 py-5 rounded-2xl hover:bg-slate-50 transition-all duration-300 active:scale-95 font-bold text-lg"
            >
              Esperienza PCTO
              <ChevronRight size={22} />
            </Link>
          </motion.div>
        </div>

        {/* Foto Profilo - Destra */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="relative group order-1 lg:order-2"
        >
          <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500/20 to-teal-500/20 rounded-[4rem] blur-3xl group-hover:opacity-70 transition-opacity duration-500"></div>
          
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-[4rem] overflow-hidden shadow-2xl border-[16px] border-white bg-slate-50">
            <img 
              src="/foto-progetti/home/profilo-home.webp" 
              alt={`Ritratto di ${INFO.nome} ${INFO.cognome}`} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none"></div>
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                <Code2 size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Specializzazione</p>
                <p className="font-black text-slate-800">Full-Stack Dev</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats/Skills Quick View */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + idx * 0.1 }}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center space-y-3"
          >
            <div className="mx-auto w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-indigo-600">
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{stat.label}</p>
              <p className="text-xl font-black text-slate-800">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Section Preview */}
      <section className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Innovazione, Logica e <br />
            <span className="text-indigo-400">Cittadinanza Digitale</span>
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed font-light">
            Il mio percorso unisce le competenze tecniche dell'informatica e dei sistemi 
            con una profonda consapevolezza civica. Esplora come la tecnologia può 
            essere uno strumento di progresso e giustizia.
          </p>
          <div className="flex gap-6">
            <Link to="/civica" className="text-indigo-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Scopri Ed. Civica <ArrowRight size={20} />
            </Link>
          </div>
        </div>
        
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 blur-[120px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 blur-[100px] -ml-32 -mb-32"></div>
      </section>
    </div>
  );
};

export default Home;
