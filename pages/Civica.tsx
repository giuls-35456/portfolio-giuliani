import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Scale, X, Printer, ChevronRight, History, BrainCircuit, Globe2
} from 'lucide-react';

const Civica: React.FC = () => {
  const [openPres, setOpenPres] = useState<any>(null);

  const presentations = [
    {
      id: 'migrazioni',
      title: 'Migrazioni nel Medioevo',
      lang: 'it',
      icon: <History />,
      color: 'bg-emerald-600',
      description: "Un'analisi dei flussi migratori durante il periodo medievale, focalizzandosi su cause e impatti socio-culturali.",
      slides: [
        { title: "Migrazioni nel medioevo", subtitle: "Riccardo Giuliani, Joel Tafani, Federico Bastari, Mattia Cerioni, Tommaso Copparoni", theme: 'medieval' },
        { title: "Medioevo Introduzione", content: "Il Medioevo è un periodo storico della civiltà europea tra la fine dell'Età antica (476 d.C) e la nascita della nuova cultura umanistica." },
        { title: "Mobilità Transnazionale", content: "Nel Medioevo la mobilità aveva un ruolo significativo, sebbene non ufficialmente riconosciuto. La società era fondata sull'agricoltura." }
      ]
    },
    {
      id: 'reti-neurali',
      title: 'Le Reti Neurali',
      lang: 'it',
      icon: <BrainCircuit />,
      color: 'bg-indigo-600',
      description: "Esplorazione tecnica e cittadinanza digitale: come l'AI e le reti neurali stanno cambiando la nostra società.",
      slides: [
        { title: "LE RETI NEURALI", subtitle: "Riccardo Giuliani, Joel Tafani, Federico Bastari", theme: 'tech' },
        { title: "Cosa sono?", content: "Algoritmi di apprendimento automatico che imitano il funzionamento del cervello umano." },
        { title: "Applicazioni", content: "Riconoscimento immagini, traduzione lingue e predizione di dati futuri." }
      ]
    },
    {
      id: 'human-rights',
      title: 'The Human Rights',
      lang: 'en',
      icon: <Globe2 />,
      color: 'bg-blue-600',
      description: "A comprehensive presentation on Human Rights, history and their importance in the modern world.",
      slides: [
        { title: "THE HUMAN RIGHTS", subtitle: "Freedom of religion & Right to play", theme: 'modern' },
        { title: "What is meant?", content: "Human rights refers to the basic rights and freedoms that all people are entitled to, regardless of nationality or gender." },
        { title: "History", content: "Milestones like the Magna Carta (1215) shaped the social landscape." }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-16"
    >
      <style>{`
        /* Nasconde la navbar quando la presentazione è aperta */
        ${openPres ? 'nav { display: none !important; }' : ''}
      `}</style>

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center justify-center p-3 bg-emerald-50 text-emerald-600 rounded-2xl mb-4">
          <Scale size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800">Educazione Civica</h1>
        <p className="text-xl text-slate-500 text-center max-w-3xl mx-auto">
          Cittadinanza Digitale e Consapevolezza Storica
        </p>
      </div>

      {/* Sezione Presentazioni */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-slate-800">Presentazioni Scolastiche</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {presentations.map((pres) => (
            <motion.div 
              key={pres.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => setOpenPres(pres)}
            >
              <div className={`w-14 h-14 ${pres.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-200`}>
                {React.cloneElement(pres.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{pres.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{pres.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="font-bold text-emerald-600 uppercase tracking-widest">{pres.lang}</span>
                <span className="text-slate-400 group-hover:text-emerald-600 transition-colors flex items-center gap-1">
                  Apri <ChevronRight size={16} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Presentazione */}
      <AnimatePresence>
        {openPres && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-900/98 overflow-y-auto p-4 md:p-10"
          >
            <div className="max-w-6xl mx-auto relative z-[10000]">
              {/* Pulsanti di controllo galleggianti */}
              <div className="fixed top-4 right-4 md:top-8 md:right-8 z-[10001] flex flex-col gap-4 no-print">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpenPres(null);
                  }} 
                  className="p-4 md:p-5 bg-red-600 text-white hover:bg-red-700 transition-all duration-300 rounded-full flex items-center justify-center shadow-2xl border-4 border-white hover:scale-110 active:scale-95 cursor-pointer"
                  style={{ pointerEvents: 'auto' }}
                  title="Chiudi"
                >
                  <X size={32} strokeWidth={4} />
                </button>
                <button 
                  onClick={() => window.print()} 
                  className="p-4 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-full flex items-center justify-center shadow-xl border-4 border-white hover:scale-110 active:scale-95"
                  title="Stampa / PDF"
                >
                  <Printer size={24} />
                </button>
              </div>

              <div id="presentation-viewer" className="space-y-20">
                {openPres.slides.map((slide: any, i: number) => (
                  <div key={i} className={`aspect-video w-full rounded-2xl p-16 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center
                    ${openPres.id === 'migrazioni' ? 'bg-[#2d3e40] text-white' : ''}
                    ${openPres.id === 'reti-neurali' ? 'bg-black text-white' : ''}
                    ${openPres.id === 'human-rights' ? 'bg-blue-600 text-white' : ''}
                  `}>
                    {openPres.id === 'migrazioni' && <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] pointer-events-none"></div>}
                    <h2 className="text-6xl font-bold mb-8 uppercase tracking-tighter">{slide.title}</h2>
                    {slide.subtitle && <p className="text-2xl opacity-80">{slide.subtitle}</p>}
                    {slide.content && <p className="text-3xl max-w-4xl leading-relaxed">{slide.content}</p>}
                    <div className="absolute bottom-8 right-8 text-sm opacity-30 font-mono">SLIDE {i+1}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Civica;
