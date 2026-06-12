import React from 'react';

/**
 * Sfondo minimalista ottimizzato per performance.
 * Sfondo scuro con gradienti statici per massima velocità.
 */
const Sfondo: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Accenti di colore sottili - statici per performance */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Sfondo;
