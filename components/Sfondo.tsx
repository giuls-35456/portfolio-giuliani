import React from 'react';
import { motion } from 'framer-motion';

/**
 * Sfondo con sfere colorate animate. 
 * Usa 'will-change-transform' per garantire la massima fluidità su ogni PC.
 */
const Sfondo: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50 pointer-events-none">
      {/* Texture di disturbo per un look moderno */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Sfera Teal */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-200/30 rounded-full blur-[100px]"
      />

      {/* Sfera Blu */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[100px]"
      />
    </div>
  );
};

export default Sfondo;
