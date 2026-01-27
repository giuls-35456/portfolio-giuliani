import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Printer, Download, X, Bookmark, ChevronRight
} from 'lucide-react';
import { Document } from '../types';

/**
 * Area Umanistica.
 * Presenta i progetti di Italiano e Storia con un layout pulito e professionale.
 */
const Umanistica: React.FC = () => {
  const [openPdf, setOpenPdf] = useState<Document | null>(null);

  const handlePrint = () => {
    window.print();
  };

  // Dati dei documenti ottimizzati con immagini locali
  const docs: Document[] = [
    {
      id: 'italiano',
      title: 'Giacomo Leopardi',
      tag: 'Letteratura Italiana',
      image: '/foto-progetti/area-umanistica/italiano-01.webp',
      description: "Un'analisi profonda del pensiero leopardiano, dal pessimismo storico a quello cosmico. La riflessione sulla natura 'matrigna' e la ricerca della felicità attraverso l'immaginazione.",
      pdfUrl: '/documents/leopardi.pdf',
      pages: []
    },
    {
      id: 'storia',
      title: 'La Guerra dei 7 Anni',
      tag: 'Storia Moderna',
      image: '/foto-progetti/area-umanistica/storia-01.webp',
      description: "Considerata la vera prima guerra mondiale, questo conflitto ha ridefinito gli equilibri globali, sancendo l'egemonia britannica e preparando il terreno per le rivoluzioni del Settecento.",
      pages: [
        { type: 'cover', title: 'LA GUERRA DEI 7 ANNI', subtitle: 'Il Primo Conflitto Globale', author: 'Riccardo Giuliani' },
        { type: 'text', title: 'Analisi', content: "Il conflitto (1756-1763) vide contrapposte le principali potenze europee. La vittoria della Gran Bretagna portò al controllo quasi totale delle colonie nordamericane e indiane." }
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
        <div className="lg:w-1/2 space-y-6 border-r-4 border-rose-500 pr-8 text-right order-1">
          <span className="text-rose-500 font-bold uppercase tracking-widest text-sm">Visione Critica</span>
          <h2 className="text-5xl font-bold text-slate-900 leading-tight">
            Le radici del <br/><span className="text-rose-600">Pensiero Moderno</span>
          </h2>
          <p className="text-slate-500 italic font-serif text-xl">"La storia è testimone dei tempi, luce della verità, vita della memoria."</p>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            Il percorso nell'area umanistica mi ha permesso di esplorare la complessità dell'animo umano attraverso la letteratura e le grandi dinamiche geopolitiche della storia. 
          </p>
        </div>
        
        {/* Immagine a Sinistra (grazie a row-reverse) */}
        <div className="lg:w-1/2 order-2">
          <div className="relative">
            <div className="absolute -inset-4 bg-rose-100 rounded-[3rem] rotate-3 opacity-50"></div>
            <img 
              src="/foto-progetti/area-umanistica/umanistica-main.webp" 
              alt="Area Umanistica" 
              className="relative z-10 rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/3]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
              }}
            />
          </div>
        </div>
      </header>

      {/* Griglia Progetti */}
      <section className="space-y-10">
        <h3 className="text-3xl font-bold text-slate-800 flex items-center gap-4">
          <Bookmark className="text-rose-500" size={32} /> 
          Approfondimenti e Documenti
        </h3>
        
        <div className="grid md:grid-cols-2 gap-10">
          {docs.map((doc) => (
            <motion.article 
              key={doc.id}
              whileHover={{ y: -12 }}
              className="bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={doc.image} 
                  alt={`Copertina progetto ${doc.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[1.02] contrast-[1.02]" 
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold text-rose-600 uppercase tracking-widest shadow-sm">
                  {doc.tag}
                </div>
              </div>
              
              <div className="p-10 space-y-6">
                <h4 className="text-3xl font-bold text-slate-900">{doc.title}</h4>
                <p className="text-slate-500 leading-relaxed text-lg font-light">{doc.description}</p>
                
                <div className="pt-6 flex items-center justify-between">
                  <button 
                    onClick={() => setOpenPdf(doc)}
                    className="inline-flex items-center gap-2 text-rose-600 font-bold hover:gap-4 transition-all group/btn text-lg"
                  >
                    Visualizza Documento 
                    <ChevronRight size={22} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => setOpenPdf(doc)}
                    aria-label="Scarica documento"
                    className="p-4 bg-rose-50 text-rose-600 rounded-2xl hover:bg-rose-600 hover:text-white transition-all duration-300"
                  >
                    <Download size={24} />
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
            <div className="max-w-4xl mx-auto relative z-[10000]">
              {/* Pulsanti di controllo galleggianti */}
              <div className="fixed top-4 right-4 md:top-8 md:right-8 z-[10001] flex flex-col gap-4 no-print">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpenPdf(null);
                  }} 
                  className="p-4 md:p-5 bg-red-600 text-white hover:bg-red-700 transition-all duration-300 rounded-full flex items-center justify-center shadow-2xl border-4 border-white hover:scale-110 active:scale-95 cursor-pointer"
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
              
              <div id="printable-pdf" className="bg-white shadow-2xl rounded-sm h-[80vh] overflow-hidden">
                {openPdf.pdfUrl ? (
                  <iframe 
                    src={`${openPdf.pdfUrl}#toolbar=0`} 
                    className="w-full h-full border-none"
                    title={openPdf.title}
                  />
                ) : (
                  <div className="p-16 md:p-24 space-y-16">
                    {/* Fallback per documenti senza PDF URL */}
                    {openPdf.pages.length > 0 ? (
                      <>
                        <div className="border-[16px] border-slate-900 p-12 h-[200mm] flex flex-col items-center justify-center text-center space-y-10">
                          <h1 className="text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">{openPdf.pages[0].title}</h1>
                          <div className="w-32 h-3 bg-rose-600 mx-auto"></div>
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

export default Umanistica;
