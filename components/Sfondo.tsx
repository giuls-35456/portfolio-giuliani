import React from 'react';
import { motion } from 'framer-motion';

/**
 * Sfondo Minimalista e Pulito
 * Bianco puro con effetti di luce molto leggeri e impercettibili per mantenere la pulizia del design.
 */
const Sfondo: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white pointer-events-none">
      {/* Texture di disturbo molto leggera per un look moderno */}
      <div className="absolute inset-0 opacity-[0.01] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Sfera Teal Molto Leggera - Quasi Invisibile */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] left-[-8%] w-[600px] h-[600px] bg-gradient-to-br from-teal-100/10 via-teal-50/5 to-transparent rounded-full blur-[120px]"
      />

      {/* Sfera Blu Molto Leggera */}
      <motion.div
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 100, -40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-tl from-blue-100/10 via-blue-50/5 to-transparent rounded-full blur-[120px]"
      />

      {/* Sfera Indigo Accento - Minima */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, 40, -50, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-100/5 via-indigo-50/3 to-transparent rounded-full blur-[100px]"
      />
    </div>
  );
};

export default Sfondo;
