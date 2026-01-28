import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { 
  Briefcase, CheckCircle2, FileText, Image as ImageIcon, Download, X, Printer,
  Wine, Utensils, Armchair, Shirt, Flame, Factory, Store, CarFront, Stethoscope, Globe, Landmark, Ship,
  Building2, Users, Target, Rocket
} from 'lucide-react';

// Dati della relazione strutturati per pagina
const PDF_PAGES = [
  // PAGINA 1: COPERTINA
  {
    type: 'cover',
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", 
    title: "REPORT FINALE",
    student: "Riccardo Giuliani",
    school: "IIS Marconi Pieralisi",
    city: "Jesi"
  },
  // PAGINA 2: 1° SETTIMANA
  {
    type: 'content',
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    weekTitle: "1° SETTIMANA",
    contentTitle: "Accoglienza e introduzione alle attività aziendali",
    text: `Nella prima settimana di formazione PCTO, siamo stati accolti da una figura responsabile del progetto all'interno dell'azienda. Dopo un breve incontro introduttivo, ci è stata fatta visitare l'intera sede, permettendoci di avere una visione generale dell'ambiente lavorativo e delle varie aree dove svolgere delle pause.
    
    Successivamente, siamo stati accompagnati da una persona che si occupa della sistemistica delle reti. Durante la mattinata, ci ha illustrato le sue attività quotidiane, facendo anche una panoramica generale e spiegandoci in cosa consiste il suo lavoro. Nel pomeriggio, ci ha accompagnato nel suo ufficio helpdesk dove vengono gestite le problematiche dei clienti.`
  },
  // PAGINA 3: 2° SETTIMANA
  {
    type: 'content',
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    weekTitle: "2° SETTIMANA",
    contentTitle: "Approfondimento attività Help Desk",
    text: `Durante la seconda settimana di PCTO, siamo rimasti all'interno dell'ufficio Help Desk per approfondire le attività di assistenza tecnica. Abbiamo continuato ad osservare il lavoro di due operatori che già dal pomeriggio del giorno prima stavano gestendo una problematica specifica dell'azienda Goldengas.
    
    È stato molto interessante seguire questa attività di assistenza così da capire meglio le tempistiche e le modalità con cui vengono affrontate le problematiche all'interno di un reparto specifico dell'azienda.`
  },
  // PAGINA 4: 3° SETTIMANA
  {
    type: 'content',
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    weekTitle: "3° SETTIMANA",
    contentTitle: "Introduzione alla BI",
    text: `Durante la terza settimana siamo stati introdotti a un nuovo reparto dell'azienda, chiamato BI (Business Intelligence). Ci è stata fornita una panoramica generale sul ruolo di questo reparto, che si occupa principalmente dell'analisi dei dati aziendali.
    
    Abbiamo assistito a una spiegazione dei principali software che vengono utilizzati nella BI, e ci è stato mostrato come i dati vengano raccolti, elaborati e trasformati in informazioni utili per prendere decisioni strategiche da parte del cliente. Il software utilizzato prende il nome di Power BI. Il pomeriggio sempre help desk.`
  },
  // PAGINA 5: 4° SETTIMANA
  {
    type: 'content',
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    weekTitle: "4° SETTIMANA",
    contentTitle: "Software gestionale Essenzia e programmazione in Omnis nel reparto i-Wine",
    text: `Durante la quarta settimana abbiamo approfondito il funzionamento del software gestionale Essenzia, utilizzato principalmente per la gestione delle attività in tutti i settori ma in particolare nell'i-Wine, considerato il reparto principale e strategico di Apra. La mattinata è stata guidata da Daniele, che ci ha mostrato in maniera dettagliata il funzionamento di Essenzia.
			
    A metà settimana, siamo stati affiancati da un programmatore del reparto i-Wine, che ci ha mostrato il software Omnis, lo strumento utilizzato per lo sviluppo e la manutenzione del gestionale.
    
    Durante tutta la giornata, le persone che ci hanno affiancato hanno dimostrato grande passione e competenza, sottolineando più volte quanto il reparto i-Wine sia considerato il cuore pulsante dell'azienda Apra.`,
    showLogos: true
  },
  // PAGINA 6: 5° SETTIMANA
  {
    type: 'content',
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    weekTitle: "5° SETTIMANA",
    contentTitle: "Progettazione Avanzata e realtà virtuale",
    text: `Durante la quinta settimana, abbiamo esplorato il reparto dedicato alla progettazione 3D, dove i software 3CAD e AutoCAD sono strumenti fondamentali. In questa area, i progettisti utilizzano AutoCAD per creare modelli tecnici dettagliati, che vengono successivamente importati in 3CAD per la realizzazione di ambienti virtuali interattivi.
    
    Abbiamo osservato come i modelli 3D vengano arricchiti con illuminazione in tempo reale e animazioni automatizzate. Un esempio pratico ci ha mostrato la simulazione dell'apertura e chiusura di infissi come una porta o una finestra. La giornata si è conclusa con la realizzazione di questa relazione, sintesi dell'esperienze vissute in queste settimane.`,
    showAutocad: true
  }
];

// COMPONENTE GRAFICO PER L'IMMAGINE DEI SETTORI
const SectorsGraphic = ({ isThumbnail }: { isThumbnail: boolean }) => {
  const items = [
    { icon: Wine, label: "Wine" },
    { icon: Utensils, label: "Agrifood" },
    { icon: Armchair, label: "Furniture" },
    { icon: Shirt, label: "Fashion" },
    { icon: Flame, label: "Oil & Gas" },
    { icon: Factory, label: "Manufacturing" },
    { icon: Store, label: "Retail" },
    { icon: CarFront, label: "Automotive" },
    { icon: Stethoscope, label: "Pharma" },
    { icon: Globe, label: "Distribution\n& logistic" },
    { icon: Landmark, label: "Banks\n& Insurance" },
    { icon: Ship, label: "Shipping\n& Logistic" },
  ];

  return (
    <div className={`w-full h-full bg-white flex flex-col items-center justify-center select-none ${isThumbnail ? 'p-3' : 'p-8'}`}>
      <div className={`grid grid-cols-4 ${isThumbnail ? 'gap-x-3 gap-y-3' : 'gap-x-12 gap-y-12'}`}>
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-1 text-center group">
             <div className="relative">
               <item.icon 
                 strokeWidth={1.2} 
                 size={isThumbnail ? 22 : 56} 
                 className="text-slate-800 transition-colors group-hover:text-blue-600" 
               />
             </div>
             <span className={`font-bold text-blue-700 leading-none whitespace-pre-line ${isThumbnail ? 'text-[8px]' : 'text-sm md:text-base mt-3'}`}>
               {item.label}
             </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Pcto: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [isReportOpen, setIsReportOpen] = useState(false);

  const galleryImages = [
    { 
      type: 'image',
      url: "https://www.centropagina.it/wp-content/uploads/2021/09/Apra_sede_esterno-1280x853.jpg", 
      caption: "Sede APRA",
      desc: "Ingresso degli uffici dove ho svolto l'alternanza sede a Jesi."
    },
    { 
      type: 'component',
      component: <SectorsGraphic isThumbnail={false} />,
      thumbnail: <SectorsGraphic isThumbnail={true} />,
      caption: "Settori Strategici",
      desc: "Wine, Agrifood, Furniture, Fashion, Oil & Gas, Manufacturing, Retail, Automotive, Pharma, Distribution & logistic, Banks & Insurance, Shipping & Logistic."
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style>
        {`
          ${(isReportOpen || selectedImage) ? 'nav { display: none !important; }' : ''}
          @media print {
            body * { visibility: hidden; }
            #printable-report, #printable-report * { visibility: visible; }
            #printable-report { position: absolute; left: 0; top: 0; width: 100%; height: auto !important; overflow: visible !important; }
            .no-print { display: none !important; }
            .page-break { page-break-after: always; height: 297mm; padding: 20mm !important; }
          }
        `}
      </style>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="space-y-24 py-10"
      >
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-12 md:p-20 text-white shadow-2xl">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold uppercase tracking-widest"
              >
                <Briefcase size={16} className="text-blue-200" />
                <span>Percorso Formativo</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black leading-tight tracking-tighter"
              >
                PCTO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                  Apra S.p.a.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-blue-100 leading-relaxed font-light"
              >
                Un'immersione profonda nel mondo dell'informatica aziendale e della consulenza tecnologica di alto livello presso una delle realtà più significative del territorio.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden md:grid grid-cols-2 gap-4"
            >
              <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 space-y-4">
                <Building2 className="text-blue-300" size={32} />
                <p className="font-bold">Ambiente Aziendale</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 space-y-4">
                <Users className="text-indigo-300" size={32} />
                <p className="font-bold">Team Working</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 space-y-4">
                <Target className="text-purple-300" size={32} />
                <p className="font-bold">Obiettivi Tecnici</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 space-y-4">
                <Rocket className="text-teal-300" size={32} />
                <p className="font-bold">Crescita Professionale</p>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        </section>

        {/* Galleria Attività */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-slate-900">Galleria Esperienze</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedImage(item)}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="aspect-video overflow-hidden relative bg-slate-50">
                  {item.type === 'image' ? (
                    <img src={item.url} alt={item.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                      {item.thumbnail}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <p className="text-white font-bold text-xl">Visualizza Dettagli</p>
                  </div>
                </div>
                <div className="p-8 space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">{item.caption}</h3>
                  <p className="text-slate-500 line-clamp-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Relazione */}
        <section className="bg-slate-50 rounded-[3rem] p-12 md:p-20 text-center space-y-8 border border-slate-100">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center mx-auto shadow-xl">
              <FileText size={40} />
            </div>
            <h2 className="text-4xl font-black text-slate-900">Relazione Finale</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Ho documentato l'intero percorso settimana dopo settimana, analizzando i reparti visitati e le competenze acquisite. Consulta il report completo per tutti i dettagli tecnici.
            </p>
            <button 
              onClick={() => setIsReportOpen(true)}
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-12 py-5 rounded-2xl hover:bg-blue-600 transition-all duration-300 shadow-xl active:scale-95 font-bold text-lg"
            >
              Apri Report Completo
              <ArrowRight size={22} />
            </button>
          </div>
        </section>

        {/* Modal Foto */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
              onClick={() => setSelectedImage(null)}
            >
              <div className="max-w-6xl w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                <div className="relative aspect-video bg-slate-100">
                  {selectedImage.type === 'image' ? (
                    <img src={selectedImage.url} alt={selectedImage.caption} className="w-full h-full object-cover" />
                  ) : (
                    selectedImage.component
                  )}
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-6 right-6 p-4 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-all"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="p-10 space-y-4">
                  <h3 className="text-3xl font-bold text-slate-900">{selectedImage.caption}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{selectedImage.desc}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal Report */}
        <AnimatePresence>
          {isReportOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-slate-900/95 backdrop-blur-xl overflow-y-auto p-4 md:p-10"
            >
              <div className="max-w-5xl mx-auto relative">
                <div className="fixed top-6 right-6 z-[10001] flex flex-col gap-4 no-print">
                  <button onClick={() => setIsReportOpen(false)} className="p-5 bg-red-600 text-white rounded-full shadow-2xl border-4 border-white hover:scale-110 transition-all"><X size={32} strokeWidth={4} /></button>
                  <button onClick={handlePrint} className="p-4 bg-blue-600 text-white rounded-full shadow-xl border-4 border-white hover:scale-110 transition-all"><Printer size={24} /></button>
                </div>

                <div id="printable-report" className="bg-white shadow-2xl rounded-[3rem] overflow-hidden">
                  {PDF_PAGES.map((page, i) => (
                    <div key={i} className="page-break p-12 md:p-20 border-b border-slate-100 last:border-none">
                      {page.type === 'cover' ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-12 py-20">
                          <div className="w-32 h-32 bg-blue-600 text-white rounded-[2.5rem] flex items-center justify-center shadow-2xl mb-8">
                            <Briefcase size={64} />
                          </div>
                          <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-blue-600 tracking-widest uppercase">{page.title}</h2>
                            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter">PCTO 2025</h1>
                          </div>
                          <div className="w-24 h-2 bg-blue-600 rounded-full"></div>
                          <div className="space-y-2">
                            <p className="text-2xl font-bold text-slate-900">{page.student}</p>
                            <p className="text-slate-500 text-lg">{page.school} • {page.city}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-12">
                          <div className="flex justify-between items-end border-b-2 border-slate-100 pb-8">
                            <div className="space-y-2">
                              <span className="text-blue-600 font-black tracking-widest uppercase">{page.weekTitle}</span>
                              <h3 className="text-4xl font-black text-slate-900">{page.contentTitle}</h3>
                            </div>
                            <span className="text-slate-300 font-mono text-xl">0{i}</span>
                          </div>
                          <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div className="rounded-[2rem] overflow-hidden shadow-xl">
                              <img src={page.image} alt={page.contentTitle} className="w-full h-full object-cover" />
                            </div>
                            <div className="prose prose-slate prose-lg max-w-none">
                              <p className="text-slate-600 leading-relaxed whitespace-pre-line">{page.text}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Pcto;
