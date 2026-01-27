import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ROUTES, NEXT_PAGE_TEXTS } from '../constants';

const NextPageLink: React.FC = () => {
  const location = useLocation();
  const currentIndex = ROUTES.findIndex(r => r.path === location.pathname);

  // If we are at the end or not found, return null
  if (currentIndex === -1 || currentIndex === ROUTES.length - 1) {
    return null;
  }

  const nextRoute = ROUTES[currentIndex + 1];
  const customText = NEXT_PAGE_TEXTS[location.pathname] || `Vai a ${nextRoute.label}`;

  return (
    <div className="mt-24 pt-10 border-t border-slate-200 flex flex-col items-center">
      <p className="text-sm text-slate-400 uppercase tracking-widest mb-4 font-medium">Prossima Sezione</p>
      <Link to={nextRoute.path} className="group">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <div className="text-2xl md:text-3xl font-bold text-slate-800 group-hover:text-teal-600 transition-colors text-center">
            {customText}
          </div>
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default NextPageLink;