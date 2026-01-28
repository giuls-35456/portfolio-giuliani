import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Printer, Download, X, Bookmark, ChevronRight, BookOpen, History, PenTool, Quote
} from 'lucide-react';
import { Document } from '../types';

/**
 * Area Umanistica - Versione Strategica 2026
 * Presenta i progetti di Italiano e Storia con un layout moderno e accattivante.
 */
const Umanistica: React.FC = () => {
  const [openPdf, setOpenPdf] = useState<Document | null>(null);

  const handlePrint = () => {
    window.print();
  };

  const docs: Document[] = [
    {
      id: 'storia',
      title: 'La Guerra dei 7 Anni',
      tag: 'Storia',
      image: 'https://images.unsplash.com/photo-1599409674493-259650397361?q=80&w=2070&auto=format&fit=crop',
      description: "Considerata la vera prima guerra mondiale, questo conflitto ha ridefinito gli equilibri globali, sancendo l'egemonia britannica e preparando il terreno per le rivoluzioni del Settecento.",
      pdfUrl: '/documents/guerra7anni.pdf',
      pages: []
    },
    {
      id: 'italiano',
      title: 'Giacomo Leopardi',
      tag: 'Letteratura Italiana',
      image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop',
      description: "Un'analisi profonda del pensiero leopardiano, dal pessimismo storico a quello cosmico. La riflessione sulla natura 'matrigna' e la ricerca della felicità attraverso l'immaginazione.",
      pdfUrl: '/documents/leopardi.pdf',
      pages: []
    },
    {
      id: 'escape-room',
      title: 'Escape Room - Umanesimo e Rinascimento',
      tag: 'Progetto Interattivo',
      image: 'https://images.unsplash.com/photo-1519074063912-ad24b5f15c54?q=80&w=2070&auto=format&fit=crop',
      description: "Un'esperienza interattiva immersiva nel Quattrocento. Risolvi enigmi affascinanti sul Concilio di Trento, l'Umanesimo e le grandi opere del Rinascimento.",
      pages: []
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-24 py-10"
    >
      <style>{`
        ${openPdf ? 'nav { display: none !important; }' : ''}
        @media print {
          body * { visibility: hidden; }
          #printable-pdf, #printable-pdf * { visibility: visible; }
          #printable-pdf { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}</style>

      {/* Introduzione Breve e Moderna */}
      <section className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center justify-center p-4 bg-rose-50 text-rose-600 rounded-full mb-4"
        >
          <Quote size={32} />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight"
        >
          Area <span className="text-rose-600">Umanistica</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 leading-relaxed font-light"
        >
          Un viaggio attraverso la letteratura e la storia per comprendere le radici del pensiero moderno. 
          Dalla profondità filosofica di Leopardi alle dinamiche geopolitiche della Guerra dei Sette Anni.
        </motion.p>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-rose-600 via-pink-600 to-orange-600 p-12 md:p-20 text-white shadow-2xl">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold uppercase tracking-widest"
            >
              <BookOpen size={16} className="text-rose-200" />
              <span>Pensiero Critico</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black leading-tight tracking-tighter"
            >
              Radici del <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 to-orange-200">
                Pensiero Moderno
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-rose-100 leading-relaxed font-light italic"
            >
              "La storia è testimone dei tempi, luce della verità, vita della memoria."
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:grid grid-cols-2 gap-4"
          >
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 space-y-4">
              <History className="text-rose-300" size={32} />
              <p className="font-bold">Analisi Storica</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 space-y-4">
              <PenTool className="text-orange-300" size={32} />
              <p className="font-bold">Letteratura</p>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      </section>

      {/* Griglia Progetti */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="w-2 h-8 bg-rose-600 rounded-full"></div>
          <h2 className="text-3xl font-bold text-slate-900">Approfondimenti e Documenti</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {docs.map((doc, index) => (
            <motion.article 
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 group p-6 md:p-10`}
            >
              {/* Immagine Progetto */}
              <div className="lg:w-1/2 aspect-video overflow-hidden relative rounded-[2rem]">
                <img 
                  src={doc.image} 
                  alt={doc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold text-rose-600 uppercase tracking-widest shadow-sm">
                  {doc.tag}
                </div>
              </div>
              
              {/* Testo Progetto */}
              <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
                <h3 className="text-4xl font-black text-slate-900 group-hover:text-rose-600 transition-colors">{doc.title}</h3>
                <p className="text-slate-500 leading-relaxed text-xl font-light">{doc.description}</p>
                
                <div className="pt-6 flex items-center gap-4">
                  {doc.id === 'escape-room' ? (
                    <a 
                      href="https://view.genially.com/664754a0fc6f5c00154dcad9/interactive-content-escape-room-umanesimo-e-rinascimento"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-rose-600 text-white py-5 px-8 rounded-2xl font-bold hover:bg-rose-700 transition-all shadow-xl shadow-rose-200 flex items-center justify-center gap-3 text-lg"
                    >
                      Accedi all'Escape Room 
                      <ChevronRight size={22} />
                    </a>
                  ) : (
                    <button 
                      onClick={() => setOpenPdf(doc)}
                      className="flex-1 bg-rose-600 text-white py-5 px-8 rounded-2xl font-bold hover:bg-rose-700 transition-all shadow-xl shadow-rose-200 flex items-center justify-center gap-3 text-lg"
                    >
                      Visualizza Documento 
                      <ChevronRight size={22} />
                    </button>
                  )}
                  {doc.id !== 'escape-room' && (
                    <button 
                      onClick={() => setOpenPdf(doc)}
                      className="p-5 bg-rose-50 text-rose-600 rounded-2xl hover:bg-rose-600 hover:text-white transition-all duration-300 border-2 border-rose-100"
                    >
                      <Download size={28} />
                    </button>
                  )}
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
              <div className="fixed top-6 right-6 z-[10001] flex flex-col gap-4 no-print">
                <button onClick={() => setOpenPdf(null)} className="p-5 bg-red-600 text-white rounded-full shadow-2xl border-4 border-white hover:scale-110 transition-all"><X size={32} strokeWidth={4} /></button>
                <button onClick={handlePrint} className="p-4 bg-blue-600 text-white rounded-full shadow-xl border-4 border-white hover:scale-110 transition-all"><Printer size={24} /></button>
              </div>
              
              <div id="printable-pdf" className="bg-white shadow-2xl rounded-[2rem] w-full h-[90vh] overflow-hidden mt-4 border-4 border-slate-200">
                <iframe 
                  src={`${openPdf.pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`} 
                  className="w-full h-full border-none"
                  title={openPdf.title}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Umanistica;
