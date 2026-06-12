import React from 'react';

/**
 * Sfondo minimalista - Nessuna animazione per massima performance.
 */
const Sfondo: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Accenti sottili */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Sfondo;
