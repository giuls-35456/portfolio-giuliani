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
      pages: [
        { type: 'cover', title: 'GIACOMO LEOPARDI', subtitle: 'Scheda Riassuntiva', author: 'Riccardo Giuliani' },
        { type: 'text', title: 'La Poetica', content: "La poetica di Leopardi si fonda sul 'sistema del piacere'. L'uomo desidera un piacere infinito, ma poiché non può ottenerlo nella realtà, lo cerca nell'immaginazione attraverso il 'vago e l'indefinito'." }
      ]
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
        @media print {
          body * { visibility: hidden; }
          #printable-pdf, #printable-pdf * { visibility: visible; }
          #printable-pdf { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}</style>

      {/* Header Sezione */}
      <header className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="lg:w-1/3 space-y-4 border-l-4 border-rose-500 pl-8">
          <span className="text-rose-500 font-bold uppercase tracking-widest text-sm">Visione Critica</span>
          <h2 className="text-5xl font-bold text-slate-900 leading-tight">
            Le radici del <br/><span className="text-rose-600">Pensiero Moderno</span>
          </h2>
          <p className="text-slate-500 italic font-serif">"La storia è testimone dei tempi, luce della verità, vita della memoria."</p>
        </div>
        
        <div className="lg:w-2/3">
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            Il percorso nell'area umanistica mi ha permesso di esplorare la complessità dell'animo umano attraverso la letteratura e le grandi dinamiche geopolitiche della storia. 
            Dalla malinconia attiva di Leopardi alla ferocia strategica della Guerra dei Sette Anni, ogni studio ha contribuito a formare una coscienza critica indispensabile per comprendere il presente.
          </p>
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
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
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
            className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-xl overflow-y-auto p-4 md:p-10"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-8 sticky top-0 bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl z-10 border border-white/10">
                <div className="text-white">
                  <h3 className="text-2xl font-bold">{openPdf.title}</h3>
                  <p className="text-sm text-slate-400">Anteprima Documento</p>
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={handlePrint} 
                    className="flex items-center gap-2 bg-rose-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-rose-500 transition-colors shadow-lg shadow-rose-900/20"
                  >
                    <Printer size={20} /> Stampa / PDF
                  </button>
                  <button 
                    onClick={() => setOpenPdf(null)} 
                    className="p-3 text-white hover:bg-white/10 rounded-xl transition-colors"
                  >
                    <X size={28} />
                  </button>
                </div>
              </div>
              
              <div id="printable-pdf" className="bg-white shadow-2xl rounded-sm min-h-[297mm] overflow-hidden">
                <div className="p-16 md:p-24 space-y-16">
                  {/* Copertina */}
                  <div className="border-[16px] border-slate-900 p-12 h-[200mm] flex flex-col items-center justify-center text-center space-y-10">
                    <div className="space-y-4">
                      <h1 className="text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                        {openPdf.pages[0].title}
                      </h1>
                      <div className="w-32 h-3 bg-rose-600 mx-auto"></div>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-500 uppercase tracking-widest">
                      {openPdf.pages[0].subtitle}
                    </h2>
                    <p className="pt-20 text-2xl font-serif italic text-slate-400">
                      Redatto da: <span className="text-slate-900 font-bold not-italic">{openPdf.pages[0].author}</span>
                    </p>
                  </div>

                  {/* Pagina di Testo */}
                  <div className="pt-20 prose prose-slate max-w-none">
                    <h2 className="text-4xl font-bold text-slate-900 border-b-2 border-slate-100 pb-6 mb-10">
                      {openPdf.pages[1].title}
                    </h2>
                    <p className="text-2xl leading-relaxed text-slate-700 font-serif">
                      {openPdf.pages[1].content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Umanistica;
