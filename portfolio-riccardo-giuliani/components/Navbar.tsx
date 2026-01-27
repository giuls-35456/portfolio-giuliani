import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, School } from 'lucide-react';
import { ROUTES } from '../constants';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-lg border border-white/40 shadow-lg shadow-slate-200/50 rounded-2xl px-6 py-3 flex justify-between items-center relative">
            
            {/* Logo Section with Hover Card */}
            <div className="relative group">
              <Link to="/" className="text-lg font-bold text-slate-800 tracking-tight flex items-center gap-2 py-2">
                <span className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md shadow-teal-500/30">RG</span>
                <span className="hidden sm:inline">Riccardo Giuliani</span>
              </Link>

              {/* Hover Card */}
              <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto">
                {/* Arrow */}
                <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-t border-l border-slate-100 transform rotate-45"></div>
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold shrink-0">
                      RG
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 leading-tight">Riccardo Giuliani</p>
                      <p className="text-xs text-slate-500">Studente</p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Calendar size={16} className="text-teal-500" />
                      <div>
                        <p className="text-xs text-slate-400">Data di Nascita</p>
                        <p className="font-medium">9 Maggio 2007</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <School size={16} className="text-teal-500" />
                      <div>
                        <p className="text-xs text-slate-400">Scuola</p>
                        <p className="font-medium">IIS Marconi Pieralisi</p>
                        <p className="text-xs text-slate-500">Indirizzo Informatica</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-1">
              {ROUTES.map((route) => {
                const isActive = location.pathname === route.path;
                
                return (
                  <Link
                    key={route.path}
                    to={route.path}
                    className="relative px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-slate-100 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className={`relative z-10 flex items-center gap-2 ${isActive ? 'text-teal-600' : 'text-slate-500 hover:text-slate-900'}`}>
                       {route.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {ROUTES.map((route, i) => {
                const Icon = route.icon;
                return (
                  <motion.div
                    key={route.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={route.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 p-4 rounded-xl text-lg font-medium transition-all ${
                        location.pathname === route.path
                          ? 'bg-teal-50 text-teal-600'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className={route.color} size={20} />
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