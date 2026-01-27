import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Sfondo from './components/Sfondo';

// Pagine con caricamento statico per ora, ottimizzabile con lazy loading in seguito
import Home from './pages/Home';
import Pcto from './pages/Pcto';
import Contatti from './pages/Contatti';
import Umanistica from './pages/Umanistica';
import Professionale from './pages/Professionale';
import Civica from './pages/Civica';

/**
 * Gestisce le transizioni animate tra le rotte.
 * Utilizza useLocation per permettere ad AnimatePresence di rilevare il cambio pagina.
 */
const RotteAnimate: React.FC = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/pcto" element={<Pcto />} />
        <Route path="/umanistica" element={<Umanistica />} />
        <Route path="/professionale" element={<Professionale />} />
        <Route path="/civica" element={<Civica />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </AnimatePresence>
  );
};

/**
 * Componente Root dell'applicazione.
 * Definisce il layout globale e il sistema di routing.
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
