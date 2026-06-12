import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Printer, Download, X, Bookmark, ChevronRight, Globe
} from 'lucide-react';
import { Document } from '../types';

/**
 * Sezione Inglese.
 * Presenta i progetti e i lavori svolti in lingua inglese con un layout pulito e professionale.
 */
const Inglese: React.FC = () => {
  const [openPdf, setOpenPdf] = useState<Document | null>(null);

  const handlePrint = () => {
    window.print();
  };

  // Dati dei documenti per la sezione inglese
  const docs: Document[] = [
    // Placeholder per i futuri contenuti dell'utente
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
      <header className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Testo a Sinistra */}
        <div className="lg:w-1/2 space-y-6 border-l-4 border-blue-500 pl-8 text-left order-1">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
            <Globe size={18} /> Lingua Inglese
          </span>
          <h2 className="text-5xl font-bold text-slate-900 leading-tight">
            Progetti e Lavori in <br/><span className="text-blue-600">English</span>
          </h2>
          <p className="text-slate-500 italic font-serif text-xl">"Language is the key to understanding different cultures and perspectives."</p>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            Qui raccolgo tutti i progetti, i lavori e gli approfondimenti svolti in lingua inglese. Dai testi di ricerca alle presentazioni, dalle analisi critiche ai progetti collaborativi, questa sezione rappresenta il mio percorso di apprendimento e padronanza della lingua inglese.
          </p>
        </div>
        
        {/* Immagine a Destra */}
        <div className="lg:w-1/2 order-2">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] -rotate-3 opacity-50"></div>
            <div className="relative z-10 rounded-[2.5rem] shadow-2xl w-full aspect-[4/3] bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center overflow-hidden">
              <div className="text-center space-y-6">
                <Globe size={120} className="text-white mx-auto opacity-80" />
                <p className="text-white text-2xl font-bold">Sezione Inglese</p>
                <p className="text-blue-100 text-lg">I tuoi lavori verranno visualizzati qui</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Griglia Progetti */}
      <section className="space-y-10">
        <h3 className="text-3xl font-bold text-slate-800 flex items-center gap-4">
          <Bookmark className="text-blue-500" size={32} /> 
          Progetti e Documenti
        </h3>
        
        {docs.length > 0 ? (
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
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold text-blue-600 uppercase tracking-widest shadow-sm">
                    {doc.tag}
                  </div>
                </div>
                
                {/* Testo Progetto */}
                <div className="md:w-1/2 flex flex-col justify-center space-y-6">
                  <h4 className="text-4xl font-bold text-slate-900">{doc.title}</h4>
                  <p className="text-slate-500 leading-relaxed text-xl font-light">{doc.description}</p>
                  
                  <div className="pt-6 flex items-center gap-6">
                    {doc.pdfUrl && (
                      <>
                        <button 
                          onClick={() => setOpenPdf(doc)}
                          className="flex-1 bg-blue-600 text-white py-4 px-8 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-3 text-lg"
                        >
                          Visualizza Documento 
                          <ChevronRight size={22} />
                        </button>
                        <button 
                          onClick={() => setOpenPdf(doc)}
                          aria-label="Scarica documento"
                          className="p-4 bg-blue-50 text-blue-600 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 border-2 border-blue-100"
                        >
                          <Download size={28} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-[3rem] border-2 border-dashed border-blue-300"
          >
            <Globe size={64} className="text-blue-400 mb-6" />
            <h4 className="text-2xl font-bold text-slate-900 mb-3">Sezione in Costruzione</h4>
            <p className="text-slate-600 text-lg text-center max-w-md">
              Carica qui i tuoi progetti, i tuoi saggi e i tuoi lavori svolti in lingua inglese. Questa sezione è pronta ad accogliere i tuoi contenuti!
            </p>
          </motion.div>
        )}
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
              {/* Pulsanti di controllo galleggianti */}
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
                {openPdf.pdfUrl ? (
                  <iframe 
                    src={`${openPdf.pdfUrl}#view=FitH&toolbar=0`} 
                    className="w-full h-full border-none"
                    title={openPdf.title}
                  />
                ) : (
                  <div className="p-16 md:p-24 space-y-16">
                    {openPdf.pages.length > 0 ? (
                      <>
                        <div className="border-[16px] border-slate-900 p-12 h-[200mm] flex flex-col items-center justify-center text-center space-y-10">
                          <h1 className="text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">{openPdf.pages[0].title}</h1>
                          <div className="w-32 h-3 bg-blue-600 mx-auto"></div>
                        </div>
                        {openPdf.pages[1] && (
                          <div className="pt-20 prose prose-slate max-w-none">
                            <h2 className="text-4xl font-bold text-slate-900 border-b-2 border-slate-100 pb-6 mb-10">{openPdf.pages[1].title}</h2>
                            <p className="text-2xl leading-relaxed text-slate-700 font-serif">{openPdf.pages[1].content}</p>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full text-slate-400">Documento in fase di caricamento...</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Inglese;
