import React from 'react';
import { motion } from 'framer-motion';

/**
 * Sfondo Premium con Animazioni Fluide e Effetti Wow
 * Sfere colorate dinamiche, gradienti e effetti di profondità per un'esperienza visiva straordinaria.
 */
const Sfondo: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 pointer-events-none">
      {/* Texture di disturbo per un look moderno */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Sfera Teal Principale - Grande e Dinamica */}
      <motion.div
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] left-[-8%] w-[600px] h-[600px] bg-gradient-to-br from-teal-300/40 via-teal-200/30 to-transparent rounded-full blur-[120px] shadow-2xl"
      />

      {/* Sfera Blu Secondaria - Movimento Opposto */}
      <motion.div
        animate={{
          x: [0, -100, 80, 0],
          y: [0, 120, -50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-tl from-blue-300/40 via-blue-200/30 to-transparent rounded-full blur-[120px] shadow-2xl"
      />

      {/* Sfera Indigo Accento - Movimento Lento */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, 50, -60, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-300/30 via-indigo-200/20 to-transparent rounded-full blur-[100px]"
      />

      {/* Sfera Rosa Accento - Movimento Diagonale */}
      <motion.div
        animate={{
          x: [0, -80, 100, 0],
          y: [0, -100, 80, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-rose-200/30 via-pink-200/20 to-transparent rounded-full blur-[110px]"
      />

      {/* Effetto Glow Centrale Sottile */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-teal-100/20 via-blue-100/10 to-transparent rounded-full blur-[150px]"
      />

      {/* Overlay Sfumato per Profondità */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Sfondo;
