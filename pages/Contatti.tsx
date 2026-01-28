import React from 'react';
import { motion } from 'framer-motion';
import { INFO } from '../constants';
import { Mail, Phone, MapPin, Send, Github, ArrowRight } from 'lucide-react';

const Contatti: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-20 py-10"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[3.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 md:p-24 text-white shadow-2xl">
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-md rounded-full mb-4"
          >
            <Send size={32} className="text-slate-300" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black leading-tight tracking-tighter"
          >
            Resto in <br />
            <span className="text-slate-300">
              Contatto
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed font-light max-w-2xl mx-auto"
          >
            Sono sempre disponibile per collaborazioni, opportunità professionali o semplici conversazioni su tecnologia, innovazione e sviluppo.
          </motion.p>
        </div>

        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-700/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-700/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
      </section>

      {/* Contact Cards Grid */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="w-2 h-8 bg-slate-800 rounded-full"></div>
          <h2 className="text-3xl font-bold text-slate-900">Canali di Comunicazione</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Mail, 
              label: "Email", 
              val: INFO.email, 
              link: `https://mail.google.com/mail/?view=cm&fs=1&to=${INFO.email}`,
              description: "Scrivimi direttamente via email"
            },
            { 
              icon: Phone, 
              label: "Telefono", 
              val: INFO.telefono, 
              link: `tel:${INFO.telefono}`,
              description: "Chiamami per una conversazione"
            },
            { 
              icon: MapPin, 
              label: "Posizione", 
              val: "Jesi (AN), Italia", 
              link: "#",
              description: "Disponibile per incontri locali"
            }
          ].map((item, i) => (
            <motion.a 
              key={i}
              href={item.link}
              target={item.link !== "#" ? "_blank" : "_self"}
              rel={item.link !== "#" ? "noopener noreferrer" : ""}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 p-8 flex flex-col items-center text-center space-y-6"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-slate-100 text-slate-800 rounded-2xl flex items-center justify-center shadow-md group-hover:bg-slate-800 group-hover:text-white transition-all duration-300">
                <item.icon size={32} />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-bold text-slate-600 text-xs uppercase tracking-widest">{item.label}</h3>
                <p className="text-xl font-bold text-slate-900">{item.val}</p>
                <p className="text-sm text-slate-500 font-light">{item.description}</p>
              </div>

              {/* Arrow */}
              <div className="mt-4">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-slate-700 font-bold group-hover:text-slate-900 transition-colors"
                >
                  Contattami <ArrowRight size={18} />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* GitHub Section */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="w-2 h-8 bg-slate-800 rounded-full"></div>
          <h2 className="text-3xl font-bold text-slate-900">Progetti e Codice</h2>
        </div>

        <motion.a
          href="https://github.com/giuls-35456"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="group flex items-center gap-8 p-10 bg-gradient-to-br from-slate-50 to-slate-100 rounded-[2.5rem] border border-slate-200 hover:border-slate-400 transition-all shadow-lg hover:shadow-xl"
        >
          <div className="w-20 h-20 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Github size={40} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-slate-900 text-2xl mb-2">GitHub</h3>
            <p className="text-slate-600 font-light">Scopri i miei progetti, repository e contributi al codice open source.</p>
          </div>
          <ArrowRight className="text-slate-600 group-hover:text-slate-900 transition-colors" size={28} />
        </motion.a>
      </section>
    </motion.div>
  );
};

export default Contatti;
