import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, School } from 'lucide-react';
import { ROUTES } from '../constants';

/**
 * Navbar Component.
 * Design moderno con effetto glassmorphism e menu mobile ottimizzato.
 */
const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gestione dello scroll per cambiare l'aspetto della navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Chiudi il menu mobile al cambio di rotta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 md:py-6 ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className={`rounded-2xl px-6 py-3 flex justify-between items-center relative transition-all duration-300 ${
            scrolled 
              ? 'bg-white/90 backdrop-blur-lg border border-white/60 shadow-lg' 
              : 'bg-white/70 backdrop-blur-lg border border-white/40 shadow-md'
          }`}>
            
            {/* Logo Section con Hover Card Informativa */}
            <div className="relative group">
              <Link to="/" className="text-lg font-bold text-slate-800 tracking-tight flex items-center gap-3 py-2">
                <motion.span 
                  className="w-9 h-9 bg-gradient-to-br from-teal-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  RG
                </motion.span>
                <span className="hidden sm:inline font-bold">Riccardo Giuliani</span>
              </Link>

              {/* Hover Card (Desktop Only) */}
              <div className="absolute top-full left-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto">
                <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-t border-l border-slate-100 transform rotate-45"></div>
                
                <div className="space-y-5 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-600 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                      RG
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 leading-tight">Riccardo Giuliani</p>
                      <p className="text-xs text-teal-700 font-semibold uppercase tracking-wider">Informatica & TLC</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-2 border-t border-slate-50">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Calendar size={18} className="text-teal-600" />
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Nascita</p>
                        <p className="font-medium">9 Maggio 2007</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <School size={18} className="text-teal-600" />
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Istituto</p>
                        <p className="font-medium">IIS Marconi Pieralski</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-2">
              {ROUTES.map((route) => {
                const isActive = location.pathname === route.path;
                
                return (
                  <Link
                    key={route.path}
                    to={route.path}
                    className="relative px-4 py-2 text-sm font-semibold transition-colors"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-700 rounded-xl"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900'}`}>
                       {route.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-6 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {ROUTES.map((route, i) => {
                const Icon = route.icon;
                const isActive = location.pathname === route.path;
                return (
                  <motion.div
                    key={route.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={route.path}
                      className={`flex items-center gap-5 p-5 rounded-2xl text-xl font-bold transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-teal-600 to-blue-700 text-white shadow-lg'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Icon size={24} className={isActive ? 'text-white' : route.color} />
                      {route.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
