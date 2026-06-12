import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ROUTES } from '../constants';

/**
 * Navbar - Design Minimalista Ultra-Moderno
 * Palette Cyan/Magenta, layout pulito e veloce.
 */
const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 ${
          scrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 gradient-neon-cyan rounded-lg flex items-center justify-center text-slate-900 font-bold text-lg group-hover:neon-glow-cyan transition-all">
              RG
            </div>
            <span className="hidden sm:inline text-cyan-400 font-bold text-lg">Riccardo</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            {ROUTES.map((route) => {
              const isActive = location.pathname === route.path;
              return (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                    isActive
                      ? 'gradient-neon-cyan text-slate-900 neon-glow-cyan'
                      : 'text-slate-300 hover:text-cyan-400'
                  }`}
                >
                  {route.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-900/95 pt-24 px-4 md:hidden"
          >
            <div className="flex flex-col gap-2 max-w-md mx-auto">
              {ROUTES.map((route) => {
                const isActive = location.pathname === route.path;
                return (
                  <Link
                    key={route.path}
                    to={route.path}
                  className={`px-4 py-3 rounded-lg font-bold text-lg transition-all ${
                      isActive
                        ? 'gradient-neon-cyan text-slate-900'
                        : 'text-slate-300 hover:bg-slate-800'
                      }`}
                  >
                    {route.label}
                  </Link>
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
