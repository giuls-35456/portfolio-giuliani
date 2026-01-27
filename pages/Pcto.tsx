import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { 
  Briefcase, CheckCircle2, FileText, Image as ImageIcon, Download, X, Printer,
  Wine, Utensils, Armchair, Shirt, Flame, Factory, Store, CarFront, Stethoscope, Globe, Landmark, Ship 
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
                 className="text-slate-800 transition-colors group-hover:text-blue-600" 
                 size={isThumbnail ? 22 : 56} 
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

  // Dati della galleria fotografica
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

  // Dati per le relazioni
  const documents = [
    { 
      id: 'relazione-finale',
      title: "Relazione Finale PCTO", 
      type: "PDF Document", 
      date: "Giugno 2024",
      description: "Documento completo con il report settimanale delle attività svolte in azienda.",
    }
  ];

  const handleDocumentClick = (docId: string) => {
    if (docId === 'relazione-finale') {
      setIsReportOpen(true);
    }
  };

  const handleDownload = (docId: string) => {
    if (docId === 'relazione-finale') {
      // Per simulare il download di un PDF generato dinamicamente, usiamo la funzione di stampa del browser
      // che permette di salvare come PDF. In alternativa, attiviamo la visualizzazione per permettere all'utente di stampare.
      setIsReportOpen(true);
      setTimeout(() => {
        window.print();
      }, 500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            #printable-report, #printable-report * {
              visibility: visible;
            }
            #printable-report {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              background: white;
              color: black;
              padding: 0;
              margin: 0;
            }
            .page-break {
              page-break-after: always;
            }
            .no-print {
              display: none !important;
            }
          }
        `}
      </style>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="space-y-16"
      >
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-2xl mb-4">
            <Briefcase size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">Percorso PCTO</h1>
          <p className="text-xl text-slate-500 text-center max-w-3xl mx-auto">
            Alternanza Scuola-Lavoro presso APRA
          </p>
        </div>

        {/* Intro Section */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-800">L'Esperienza in Azienda</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Ho svolto la mia esperienza di alternanza scuola-lavoro presso <strong>{PERSONAL_INFO.pctoCompany}</strong>, 
                un'azienda leader nel settore della consulenza informatica e dello sviluppo software. 
                Durante questo periodo ho avuto l'opportunità di conoscere da vicino le dinamiche aziendali 
                e di approfondire le mie competenze tecniche in un ambiente professionale stimolante.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold">
                  <CheckCircle2 size={16} /> Sistemistica
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold">
                  <CheckCircle2 size={16} /> Help Desk
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold">
                  <CheckCircle2 size={16} /> Business Intelligence
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((img, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-50 border border-slate-100"
                  onClick={() => setSelectedImage(img)}
                >
                  {img.type === 'image' ? (
                    <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                  ) : (
                    img.thumbnail
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
            <FileText className="text-blue-600" /> Documentazione
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {documents.map((doc) => (
              <div 
                key={doc.id}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FileText size={24} />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{doc.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{doc.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{doc.description}</p>
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleDocumentClick(doc.id)}
                    className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors"
                  >
                    Visualizza
                  </button>
                  <button 
                    onClick={() => handleDownload(doc.id)}
                    className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors"
                  >
                    <Download size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
              onClick={() => setSelectedImage(null)}
            >
              <div className="max-w-5xl w-full space-y-6" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center text-white">
                  <div>
                    <h3 className="text-2xl font-bold">{selectedImage.caption}</h3>
                    <p className="text-slate-400">{selectedImage.desc}</p>
                  </div>
                  <button onClick={() => setSelectedImage(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <X size={32} />
                  </button>
                </div>
                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
                  {selectedImage.type === 'image' ? (
                    <img src={selectedImage.url} alt={selectedImage.caption} className="w-full h-full object-cover" />
                  ) : (
                    selectedImage.component
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Report Modal (PDF Viewer) */}
        <AnimatePresence>
          {isReportOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-xl overflow-y-auto p-4 md:p-10"
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8 no-print sticky top-0 bg-slate-900/80 p-4 rounded-xl z-10">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">Relazione Finale PCTO</h3>
                    <p className="text-xs text-slate-400 italic">Anteprima Documento</p>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={handlePrint} className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-500 transition-colors">
                      <Printer size={20} /> Stampa / PDF
                    </button>
                    <button 
                      onClick={() => setIsReportOpen(false)} 
                      className="p-3 bg-white/10 text-white hover:bg-red-500 transition-all duration-300 rounded-xl flex items-center justify-center shadow-lg border border-white/20"
                      title="Chiudi"
                    >
                      <X size={28} />
                    </button>
                  </div>
                </div>

                <div id="printable-report" className="space-y-0 bg-white shadow-2xl rounded-sm">
                  {PDF_PAGES.map((page, i) => (
                    <div key={i} className="page-break min-h-[297mm] p-16 md:p-24 flex flex-col relative overflow-hidden">
                      {page.type === 'cover' ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-12 border-[12px] border-slate-900 p-12">
                          <div className="space-y-4">
                            <p className="text-xl font-bold tracking-[0.3em] text-blue-600 uppercase">{page.school}</p>
                            <h1 className="text-7xl font-black text-slate-900 leading-none uppercase tracking-tighter">{page.title}</h1>
                          </div>
                          <div className="w-24 h-2 bg-blue-600"></div>
                          <div className="space-y-2">
                            <p className="text-2xl font-serif italic">Presentata da:</p>
                            <p className="text-4xl font-bold text-slate-900">{page.student}</p>
                          </div>
                          <p className="text-lg font-medium text-slate-400 uppercase tracking-widest pt-20">Jesi, 2025</p>
                        </div>
                      ) : (
                        <div className="space-y-12">
                          <div className="flex justify-between items-end border-b-2 border-slate-100 pb-6">
                            <div>
                              <p className="text-blue-600 font-black text-sm tracking-widest uppercase mb-1">{page.weekTitle}</p>
                              <h2 className="text-3xl font-bold text-slate-900">{page.contentTitle}</h2>
                            </div>
                            <p className="text-slate-300 font-mono text-sm">PAG. {i + 1}</p>
                          </div>
                          
                          <div className="grid md:grid-cols-1 gap-10">
                            <div className="prose prose-slate max-w-none">
                              <p className="text-xl leading-relaxed text-slate-700 font-serif whitespace-pre-line">
                                {page.text}
                              </p>
                            </div>
                            
                            {page.image && (
                              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 aspect-video">
                                <img src={page.image} alt="Attività" className="w-full h-full object-cover" />
                              </div>
                            )}

                            {page.showLogos && (
                              <div className="pt-10 border-t border-slate-100">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Settori di riferimento Apra:</p>
                                <div className="bg-slate-50 rounded-3xl p-8">
                                  <SectorsGraphic isThumbnail={false} />
                                </div>
                              </div>
                            )}

                            {page.showAutocad && (
                              <div className="pt-10 border-t border-slate-100 flex justify-center gap-12">
                                <div className="flex flex-col items-center gap-2">
                                  <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 font-black text-2xl">A</div>
                                  <span className="text-xs font-bold text-slate-400">AutoCAD</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                  <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 font-black text-2xl">3</div>
                                  <span className="text-xs font-bold text-slate-400">3CAD</span>
                                </div>
                              </div>
                            )}
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
