import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Printer, Download, X, Bookmark, ChevronRight, Scale
} from 'lucide-react';
import { Document } from '../types';

/**
 * Educazione Civica.
 * Presenta i progetti di educazione civica con un layout pulito e professionale.
 */
const Civica: React.FC = () => {
  const [openPdf, setOpenPdf] = useState<Document | null>(null);

  const handlePrint = () => {
    window.print();
  };

  // Dati dei documenti di educazione civica
  const docs: Document[] = [
    {
      id: 'cittadinanza-digitale',
      title: 'Cittadinanza Digitale',
      tag: 'Educazione Civica',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      description: "Un approfondimento sulla cittadinanza digitale, i diritti e i doveri nell'era della tecnologia. Analisi critica dei diritti online, della privacy e della responsabilità digitale nel mondo contemporaneo.",
      pages: [
        {
          type: 'cover',
          title: 'Cittadinanza Digitale',
          subtitle: 'Diritti e Doveri nell\'Era Digitale',
          author: 'Riccardo Giuliani'
        },
        {
          type: 'text',
          title: 'Introduzione',
          content: 'La cittadinanza digitale rappresenta un insieme di competenze, comportamenti e diritti che ogni individuo deve possedere per vivere consapevolmente nell\'era digitale. In un mondo sempre più connesso, è fondamentale comprendere i propri diritti online, la protezione della privacy e la responsabilità digitale.'
        }
      ]
    },
    {
      id: 'diritti-umani',
      title: 'I Diritti Umani',
      tag: 'Educazione Civica',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      description: "Una trattazione completa sui diritti umani fondamentali, la loro storia e la loro importanza nel mondo moderno. Esplorazione della Dichiarazione Universale dei Diritti Umani e dei principi di uguaglianza e dignità.",
      pages: [
        {
          type: 'cover',
          title: 'I Diritti Umani',
          subtitle: 'Fondamenti di Dignità e Uguaglianza',
          author: 'Riccardo Giuliani'
        },
        {
          type: 'text',
          title: 'Cosa Sono i Diritti Umani',
          content: 'I diritti umani sono i diritti fondamentali che appartengono a ogni persona, indipendentemente dalla nazionalità, genere, religione o condizione sociale. Essi includono il diritto alla vita, alla libertà, all\'uguaglianza e alla dignità.'
        }
      ]
    },
    {
      id: 'sostenibilita',
      title: 'Sostenibilità e Ambiente',
      tag: 'Educazione Civica',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      description: "Un'analisi della sostenibilità ambientale, degli obiettivi di sviluppo sostenibile e della responsabilità collettiva nel proteggere il nostro pianeta. Esplorazione delle sfide climatiche e delle soluzioni innovative.",
      pages: [
        {
          type: 'cover',
          title: 'Sostenibilità e Ambiente',
          subtitle: 'Responsabilità Verso il Nostro Pianeta',
          author: 'Riccardo Giuliani'
        },
        {
          type: 'text',
          title: 'La Sfida della Sostenibilità',
          content: 'La sostenibilità rappresenta la capacità di soddisfare i bisogni del presente senza compromettere la possibilità delle generazioni future di soddisfare i propri bisogni. È una sfida globale che richiede impegno collettivo e consapevolezza individuale.'
        }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-20 py-10"
    >
      <style>{`
        /* Nasconde la navbar quando il PDF è aperto */
        ${openPdf ? 'nav { display: none !important; }' : ''}

        @media print {
          body * { visibility: hidden; }
          #printable-pdf, #printable-pdf * { visibility: visible; }
          #printable-pdf { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}</style>

      {/* Header Sezione */}
      <header className="flex flex-col lg:flex-row-reverse gap-12 items-center">
        {/* Testo a Destra (grazie a row-reverse) */}
        <div className="lg:w-1/2 space-y-6 border-r-4 border-emerald-500 pr-8 text-right order-1">
          <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm">Consapevolezza Civica</span>
          <h2 className="text-5xl font-bold text-slate-900 leading-tight">
            Educazione <br/><span className="text-emerald-600">Civica</span>
          </h2>
          <p className="text-slate-500 italic font-serif text-xl">"La democrazia non è solo un sistema politico, ma una responsabilità condivisa."</p>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            Il percorso in educazione civica mi ha permesso di sviluppare una consapevolezza critica dei diritti, dei doveri e delle sfide del mondo contemporaneo. Questi progetti rappresentano il mio impegno nel comprendere le dinamiche sociali, ambientali e digitali che caratterizzano la nostra società.
          </p>
        </div>
        
        {/* Icona a Sinistra (grazie a row-reverse) */}
        <div className="lg:w-1/2 order-2">
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-100 rounded-[3rem] rotate-3 opacity-50"></div>
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] rounded-[2.5rem] shadow-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Scale size={120} className="text-white opacity-80" />
            </div>
          </div>
        </div>
      </header>

      {/* Griglia Progetti */}
      <section className="space-y-10">
        <h3 className="text-3xl font-bold text-slate-800 flex items-center gap-4">
          <Bookmark className="text-emerald-500" size={32} /> 
          Approfondimenti e Documenti
        </h3>
        
        <div className="space-y-16">
          {docs.map((doc, index) => (
            <motion.article 
              key={doc.id}
              whileHover={{ y: -5 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group p-6 md:p-10`}
            >
              {/* Immagine Progetto */}
              <div className="md:w-1/2 aspect-[16/10] overflow-hidden relative rounded-[2rem]">
                <img 
                  src={doc.image} 
                  alt={`Copertina progetto ${doc.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold text-emerald-600 uppercase tracking-widest shadow-sm">
                  {doc.tag}
                </div>
              </div>
              
              {/* Testo Progetto */}
              <div className="md:w-1/2 flex flex-col justify-center space-y-6">
                <h4 className="text-4xl font-bold text-slate-900">{doc.title}</h4>
                <p className="text-slate-500 leading-relaxed text-xl font-light">{doc.description}</p>
                
                <div className="pt-6 flex items-center gap-6">
                  <button 
                    onClick={() => setOpenPdf(doc)}
                    className="flex-1 bg-emerald-600 text-white py-4 px-8 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-3 text-lg"
                  >
                    Visualizza Documento 
                    <ChevronRight size={22} />
                  </button>
                  <button 
                    onClick={() => setOpenPdf(doc)}
                    aria-label="Scarica documento"
                    className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all duration-300 border-2 border-emerald-100"
                  >
                    <Download size={28} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Modal PDF Viewer */}
      <AnimatePresence>
        {openPdf && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-900/95 backdrop-blur-xl overflow-y-auto p-4 md:p-10"
          >
            <div className="w-full h-full relative z-[10000] flex flex-col">
              {/* Pulsanti di controllo galleggianti - Posizionati per non coprire il PDF */}
              <div className="fixed top-6 right-6 z-[10001] flex flex-col gap-4 no-print">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpenPdf(null);
                  }} 
                  className="p-5 bg-red-600 text-white hover:bg-red-700 transition-all duration-300 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] border-4 border-white hover:scale-110 active:scale-95 cursor-pointer"
                  style={{ pointerEvents: 'auto' }}
                  title="Chiudi"
                >
                  <X size={32} strokeWidth={4} />
                </button>
                <button 
                  onClick={handlePrint} 
                  className="p-4 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-full flex items-center justify-center shadow-xl border-4 border-white hover:scale-110 active:scale-95"
                  title="Stampa / PDF"
                >
                  <Printer size={24} />
                </button>
              </div>
              
              <div id="printable-pdf" className="bg-white shadow-2xl rounded-xl w-full h-[90vh] overflow-hidden mt-4">
                {openPdf.pages.length > 0 ? (
                  <div className="p-16 md:p-24 space-y-16">
                    <>
                      <div className="border-[16px] border-slate-900 p-12 h-[200mm] flex flex-col items-center justify-center text-center space-y-10">
                        <h1 className="text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">{openPdf.pages[0].title}</h1>
                        <div className="w-32 h-3 bg-emerald-600 mx-auto"></div>
                        {openPdf.pages[0].subtitle && (
                          <p className="text-2xl text-slate-600">{openPdf.pages[0].subtitle}</p>
                        )}
                        {openPdf.pages[0].author && (
                          <p className="text-lg text-slate-500 italic">di {openPdf.pages[0].author}</p>
                        )}
                      </div>
                      {openPdf.pages[1] && (
                        <div className="pt-20 prose prose-slate max-w-none">
                          <h2 className="text-4xl font-bold text-slate-900 border-b-2 border-slate-100 pb-6 mb-10">{openPdf.pages[1].title}</h2>
                          <p className="text-2xl leading-relaxed text-slate-700 font-serif">{openPdf.pages[1].content}</p>
                        </div>
                      )}
                    </>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400">Documento in fase di caricamento...</div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Civica;
