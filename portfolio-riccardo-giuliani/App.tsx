
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Sfondo from './components/Sfondo';
import Cursore from './components/Cursore';

// Pagine
import Home from './pages/Home';
// Fix: Corrected casing to match 'pages/Pcto.tsx' instead of 'pages/PCTO.tsx' to resolve casing mismatch error
import Pcto from './pages/Pcto';
import Contatti from './pages/Contatti';
import Umanistica from './pages/Umanistica';
import Professionale from './pages/Professionale';
import Civica from './pages/Civica';

// Componente per le rotte animate
const RotteAnimate = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
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

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen text-slate-800 selection:bg-teal-200">
        <Sfondo />
        <Cursore />
        <Navbar />
        
        <main className="container mx-auto px-6 pt-32 pb-20 max-w-6xl">
          <RotteAnimate />
        </main>
      </div>
    </Router>
  );
};

export default App;
