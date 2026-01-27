
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from '../components/TextReveal';
import { 
  BookOpen, FileText, Download, X, Printer, PenTool, Library, 
  Scroll, Sword, History, Bookmark, ChevronRight
} from 'lucide-react';

const Umanistica: React.FC = () => {
  const [openPdf, setOpenPdf] = useState<any>(null);

  const handlePrint = () => {
    window.print();
  };

  // Dati dei documenti
  const docs = [
    {
      id: 'leopardi',
      title: 'Giacomo Leopardi',
      tag: 'Letteratura Italiana',
      image: '/foto-progetti/area-umanistica/italiano-01.webp',
      description: "Un'analisi profonda del pensiero leopardiano, dal pessimismo storico a quello cosmico. La riflessione sulla natura 'matrigna' e la ricerca della felicità attraverso l'immaginazione e il ricordo.",
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
      className="space-y-16"
    >
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #printable-pdf, #printable-pdf * { visibility: visible; }
          #printable-pdf { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}</style>

      {/* Intro Section con Slogan a Sinistra */}
      <section className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="lg:w-1/3 space-y-4 border-l-4 border-rose-500 pl-8">
          <span className="text-rose-500 font-bold uppercase tracking-widest text-sm">Visione Critica</span>
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">
            Le radici del <br/><span className="text-rose-600">Pensiero Moderno</span>
          </h2>
          <p className="text-slate-500 italic">"La storia è testimone dei tempi, luce della verità, vita della memoria."</p>
        </div>
        
        <div className="lg:w-2/3">
          <p className="text-xl text-slate-600 leading-relaxed">
            Il percorso nell'area umanistica mi ha permesso di esplorare la complessità dell'animo umano attraverso la letteratura e le grandi dinamiche geopolitiche della storia. 
            Dalla malinconia attiva di Leopardi alla ferocia strategica della Guerra dei Sette Anni, ogni studio ha contribuito a formare una coscienza critica indispensabile per comprendere il presente.
          </p>
        </div>
      </section>

      {/* Griglia Documenti Affiancati */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
          <Bookmark className="text-rose-500" /> Approfondimenti e Documenti
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {docs.map((doc) => (
            <motion.div 
              key={doc.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img src={doc.image} alt={doc.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-rose-600 uppercase tracking-widest shadow-sm">
                  {doc.tag}
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h4 className="text-2xl font-bold text-slate-800">{doc.title}</h4>
                <p className="text-slate-500 leading-relaxed">{doc.description}</p>
                <div className="pt-4 flex items-center justify-between">
                  <button 
                    onClick={() => setOpenPdf(doc)}
                    className="inline-flex items-center gap-2 text-rose-600 font-bold hover:gap-3 transition-all"
                  >
                    Visualizza Documento <ChevronRight size={18} />
                  </button>
                  <button 
                    onClick={() => setOpenPdf(doc)}
                    className="p-3 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-600 hover:text-white transition-all"
                  >
                    <Download size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal PDF Viewer */}
      <AnimatePresence>
        {openPdf && (
          <motion.div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-xl overflow-y-auto p-4 md:p-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-8 no-print sticky top-0 bg-slate-900/80 p-4 rounded-xl z-10">
                <div className="text-white">
                  <h3 className="text-xl font-bold">{openPdf.title}</h3>
                  <p className="text-xs text-slate-400">Anteprima PDF</p>
                </div>
                <div className="flex gap-4">
                  <button onClick={handlePrint} className="flex items-center gap-2 bg-rose-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-rose-500 transition-colors">
                    <Printer size={20} /> Salva / Stampa
                  </button>
                  <button onClick={() => setOpenPdf(null)} className="p-2 text-white hover:bg-white/10 rounded-full">
                    <X size={24} />
                  </button>
                </div>
              </div>
              
              <div id="printable-pdf" className="space-y-10 bg-white p-16 shadow-2xl rounded-sm min-h-[297mm]">
                <div className="border-8 border-slate-900 p-12 h-full flex flex-col items-center justify-center text-center">
                  <h1 className="text-6xl font-black text-slate-900 uppercase tracking-tighter mb-4">{openPdf.pages[0].title}</h1>
                  <div className="w-24 h-2 bg-rose-600 mb-8"></div>
                  <h2 className="text-2xl font-bold text-slate-500">{openPdf.pages[0].subtitle}</h2>
                  <p className="mt-20 text-xl font-serif italic">Redatto da: {openPdf.pages[0].author}</p>
                </div>
                {/* Contenuto generico per il visualizzatore */}
                <div className="pt-20 prose prose-slate max-w-none">
                  <h2 className="text-3xl font-bold text-slate-800">{openPdf.pages[1].title}</h2>
                  <p className="text-xl leading-relaxed">{openPdf.pages[1].content}</p>
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
