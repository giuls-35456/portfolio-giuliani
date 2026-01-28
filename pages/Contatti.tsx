import React from 'react';
import { motion } from 'framer-motion';
import { INFO } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contatti: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto space-y-12"
    >
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Contatti</h1>
        <p className="text-slate-500 text-xl">Restiamo in contatto per collaborazioni o informazioni.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Mail, label: "Email", val: INFO.email, link: `https://mail.google.com/mail/?view=cm&fs=1&to=${INFO.email}` },
          { icon: Phone, label: "Telefono", val: INFO.telefono, link: `tel:${INFO.telefono}` },
          { icon: MapPin, label: "Posizione", val: "Jesi (AN), Italia", link: "#" }
        ].map((item, i) => (
          <a 
            key={i} 
            href={item.link}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center group"
          >
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500 group-hover:text-white transition-colors">
              <item.icon size={24} />
            </div>
            <h3 className="font-bold text-slate-400 text-sm uppercase tracking-widest">{item.label}</h3>
            <p className="text-lg font-bold text-slate-800 mt-2">{item.val}</p>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Contatti;