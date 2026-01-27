import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Sfondo from './components/Sfondo';

// Caricamento dinamico delle pagine per ottimizzare il bundle size iniziale
const Home = lazy(() => import('./pages/Home'));
const Pcto = lazy(() => import('./pages/Pcto'));
const Contatti = lazy(() => import('./pages/Contatti'));
const Umanistica = lazy(() => import('./pages/Umanistica'));
const Professionale = lazy(() => import('./pages/Professionale'));
const Civica = lazy(() => import('./pages/Civica'));

/**
 * Componente di fallback durante il caricamento delle rotte dinamiche.
 */
const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

/**
 * Gestisce le transizioni animate tra le rotte.
 */
const RotteAnimate: React.FC = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/pcto" element={<Pcto />} />
          <Route path="/umanistica" element={<Umanistica />} />
          <Route path="/professionale" element={<Professionale />} />
          <Route path="/civica" element={<Civica />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

/**
 * Componente Root dell'applicazione.
 */
const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-800 selection:bg-teal-200 antialiased">
        <Sfondo />
        <Navbar />
        
        <main id="main-content" className="container mx-auto px-6 pt-32 pb-20 max-w-6xl relative z-10">
          <RotteAnimate />
        </main>
      </div>
    </Router>
  );
};

export default App;
