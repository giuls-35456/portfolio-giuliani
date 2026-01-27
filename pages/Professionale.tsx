import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Database, Network } from 'lucide-react';

const Professionale: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-50 text-indigo-600 rounded-2xl mb-4">
          <Cpu size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800">Area Professionale</h1>
        <p className="text-xl text-slate-500 text-center max-w-3xl mx-auto">
          Scienze Applicate e Tecnologie Informatiche
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
        <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto text-center">
           In questa sezione approfondisco le competenze tecniche acquisite, con un focus particolare su Matematica e Informatica, 
           creando un ponte diretto con la mia esperienza pratica durante il PCTO.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              icon: Code2, 
              title: "Sviluppo Software", 
              desc: "Progettazione e coding di soluzioni software, con attenzione alla pulizia del codice." 
            },
            { 
              icon: Database, 
              title: "Analisi Dati", 
              desc: "Utilizzo di strumenti matematici e statistici per l'interpretazione dei dati." 
            },
            { 
              icon: Network, 
              title: "Reti e Sistemi", 
              desc: "Comprensione delle infrastrutture di rete e della sicurezza informatica di base." 
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100"
            >
              <item.icon className="w-10 h-10 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="relative z-10 flex-1">
             <h3 className="text-2xl font-bold mb-4 text-indigo-300">Il collegamento con la Realtà</h3>
             <p className="text-slate-300 leading-relaxed">
               Le materie scientifiche non sono rimaste concetti astratti: ho potuto applicare algoritmi e logica matematica direttamente 
               durante lo sviluppo di progetti scolastici e nell'esperienza lavorativa.
             </p>
          </div>
          <div className="relative z-10 w-full md:w-1/3 aspect-video bg-white/10 rounded-xl backdrop-blur-md flex items-center justify-center border border-white/20">
             <span className="text-sm font-mono text-indigo-200">&lt;Progetto / Code /&gt;</span>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 blur-[100px] opacity-30 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-600 blur-[100px] opacity-30 pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

export default Professionale;
