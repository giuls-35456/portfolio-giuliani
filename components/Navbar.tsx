import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, School } from 'lucide-react';
import { ROUTES } from '../constants';

/**
 * Navbar Component - Design Pulito e Professionale
 * Massima leggibilità con contrasto ottimale e animazioni eleganti.
 */
const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredRoute, setHoveredRoute] = useState<string | null>(null);

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
          scrolled 
            ? 'bg-white shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Contenitore Navbar */}
          <div 
            className={`relative rounded-2xl px-6 md:px-8 py-3 md:py-4 flex justify-between items-center transition-all duration-300 ${
              scrolled
                ? 'bg-white border border-slate-200 shadow-lg'
                : 'bg-white/90 backdrop-blur-sm border border-slate-200 shadow-md'
            }`}
          >
            {/* Logo Section */}
            <div className="relative group z-10">
              <Link to="/" className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-3 py-2 hover:opacity-80 transition-opacity">
                <motion.div 
                  className="w-10 h-10 bg-gradient-to-br from-teal-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  RG
                </motion.div>
                <span className="hidden sm:inline font-bold text-slate-900">
                  Riccardo Giuliani
                </span>
              </Link>

              {/* Hover Card (Desktop Only) */}
              <motion.div 
                className="absolute top-full left-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-7 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
              >
                <div className="absolute -top-3 left-8 w-6 h-6 bg-white border-t border-l border-slate-200 transform rotate-45"></div>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-600 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-md"
                      whileHover={{ scale: 1.08 }}
                    >
                      RG
                    </motion.div>
                    <div>
                      <p className="font-bold text-slate-900 leading-tight text-lg">Riccardo Giuliani</p>
                      <p className="text-xs text-teal-700 font-semibold uppercase tracking-wider">Informatica & TLC</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <motion.div 
                      className="flex items-center gap-3 text-sm text-slate-700 hover:text-slate-900 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <Calendar size={18} className="text-teal-600 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase font-bold">Nascita</p>
                        <p className="font-medium">9 Maggio 2007</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-3 text-sm text-slate-700 hover:text-slate-900 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <School size={18} className="text-teal-600 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase font-bold">Istituto</p>
                        <p className="font-medium">IIS Marconi Pieralisi</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-1 z-10">
              {ROUTES.map((route) => {
                const isActive = location.pathname === route.path;
                
                return (
                  <motion.div
                    key={route.path}
                    onMouseEnter={() => setHoveredRoute(route.path)}
                    onMouseLeave={() => setHoveredRoute(null)}
                    className="relative"
                  >
                    <Link
                      to={route.path}
                      className="relative px-5 py-2.5 text-sm font-semibold transition-colors rounded-lg group"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-700 rounded-lg shadow-md"
                          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                        />
                      )}
                      
                      {/* Hover Background */}
                      {hoveredRoute === route.path && !isActive && (
                        <motion.div
                          className="absolute inset-0 bg-slate-100 rounded-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                      
                      <span className={`relative z-10 transition-colors duration-300 ${
                        isActive 
                          ? 'text-white' 
                          : hoveredRoute === route.path
                          ? 'text-slate-900'
                          : 'text-slate-700 hover:text-slate-900'
                      }`}>
                        {route.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Toggle */}
            <motion.button 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
              className="md:hidden p-2.5 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors z-10 relative"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 90 }}
                    exit={{ rotate: 0 }}
                  >
                    <X size={26} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90 }}
                  >
                    <Menu size={26} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-3 pb-10">
              {ROUTES.map((route, i) => {
                const Icon = route.icon;
                const isActive = location.pathname === route.path;
                return (
                  <motion.div
                    key={route.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
                  >
                    <Link
                      to={route.path}
                      className={`flex items-center gap-5 p-5 rounded-xl text-lg font-bold transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-teal-600 to-blue-700 text-white shadow-md'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        className="flex-shrink-0"
                      >
                        <Icon size={24} className={isActive ? 'text-white' : route.color} />
                      </motion.div>
                      <span>{route.label}</span>
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
