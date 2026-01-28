import React from 'react';
import { motion } from 'framer-motion';
import { INFO } from '../constants';
import { Mail, Phone, MapPin, Send, Linkedin, Github, ArrowRight } from 'lucide-react';

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
            <Send size={32} className="text-blue-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black leading-tight tracking-tighter"
          >
            Resto in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Contatto
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-2xl mx-auto"
          >
            Sono sempre disponibile per collaborazioni, opportunità professionali o semplici conversazioni su tecnologia, innovazione e sviluppo. Contattami pure!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 pt-4"
          >
            <div className="px-4 py-2 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 text-sm font-medium hover:bg-white/20 transition-colors">
              💻 Sviluppatore
            </div>
            <div className="px-4 py-2 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 text-sm font-medium hover:bg-white/20 transition-colors">
              🔒 Cybersecurity
            </div>
            <div className="px-4 py-2 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 text-sm font-medium hover:bg-white/20 transition-colors">
              🤖 AI Enthusiast
            </div>
          </motion.div>
        </div>

        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
      </section>

      {/* Contact Cards Grid */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full"></div>
          <h2 className="text-3xl font-bold text-slate-900">Canali di Comunicazione</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Mail, 
              label: "Email", 
              val: INFO.email, 
              link: `https://mail.google.com/mail/?view=cm&fs=1&to=${INFO.email}`,
              color: "from-blue-500 to-cyan-500",
              description: "Scrivimi direttamente via email"
            },
            { 
              icon: Phone, 
              label: "Telefono", 
              val: INFO.telefono, 
              link: `tel:${INFO.telefono}`,
              color: "from-emerald-500 to-teal-500",
              description: "Chiamami per una conversazione"
            },
            { 
              icon: MapPin, 
              label: "Posizione", 
              val: "Jesi (AN), Italia", 
              link: "#",
              color: "from-purple-500 to-pink-500",
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
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 p-8 flex flex-col items-center text-center space-y-6"
            >
              {/* Gradient background accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Icon */}
              <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${item.color} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={32} />
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-3">
                <h3 className="font-bold text-slate-400 text-xs uppercase tracking-[0.15em]">{item.label}</h3>
                <p className="text-xl font-black text-slate-900">{item.val}</p>
                <p className="text-sm text-slate-500 font-light">{item.description}</p>
              </div>

              {/* Arrow */}
              <div className="relative z-10 mt-4">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-slate-600 font-bold group-hover:text-blue-600 transition-colors"
                >
                  Contattami <ArrowRight size={18} />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Social Links Section */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="w-2 h-8 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full"></div>
          <h2 className="text-3xl font-bold text-slate-900">Connettiti con Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
          <motion.a
            href="https://www.linkedin.com/in/riccardo-giuliani-b2a7b3292/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 8 }}
            className="group flex items-center gap-6 p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:border-blue-400 transition-all shadow-md hover:shadow-lg"
          >
            <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Linkedin size={28} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">LinkedIn</h3>
              <p className="text-slate-600 text-sm">Seguimi per aggiornamenti professionali</p>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/giuls-35456"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: -8 }}
            className="group flex items-center gap-6 p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 hover:border-slate-400 transition-all shadow-md hover:shadow-lg"
          >
            <div className="w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Github size={28} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">GitHub</h3>
              <p className="text-slate-600 text-sm">Scopri i miei progetti e codice</p>
            </div>
          </motion.a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-blue-600 to-cyan-600 p-12 md:p-16 text-white shadow-2xl">
        <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-black">Pronto a Collaborare?</h3>
          <p className="text-lg text-blue-100 font-light">
            Che tu sia interessato a un progetto, una partnership o semplicemente vuoi fare una chiacchierata su tecnologia, sono tutto orecchi. Contattami oggi stesso!
          </p>
          <motion.a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${INFO.email}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-10 py-4 rounded-2xl hover:shadow-xl transition-all shadow-lg"
          >
            <Mail size={22} />
            Inviami un'Email
          </motion.a>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      </section>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center space-y-4 py-8"
      >
        <p className="text-slate-600 font-light">
          Rispondo solitamente entro 24-48 ore. Grazie per il tuo interesse!
        </p>
        <p className="text-xs text-slate-400">
          © 2026 Riccardo Giuliani • Portfolio Professionale
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Contatti;
