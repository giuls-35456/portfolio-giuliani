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
                 size={isThumbnail ? 20 : 48} 
                 className="text-slate-400 group-hover:text-blue-600 transition-colors" 
               />
             </div>
             {!isThumbnail && <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter leading-tight">{item.label}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

const Pcto: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [isReportOpen, setIsReportOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style>
        {`
          /* Nasconde la navbar quando un modal (foto o report) è aperto */
          ${(isReportOpen || selectedImage) ? 'nav { display: none !important; }' : ''}
          
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
              height: auto !important;
              overflow: visible !important;
            }
            .no-print {
              display: none !important;
            }
            .page-break {
              page-break-after: always;
              height: 297mm;
              padding: 20mm !important;
            }
          }
        `}
      </style>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto space-y-20 py-10"
      >
        {/* Header Sezione */}
        <header className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase tracking-widest">
              <Briefcase size={18} /> Esperienza Professionale
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
              Percorsi per le <br/>
              <span className="text-blue-600">Competenze Trasversali</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-light max-w-2xl">
              Un'immersione nel mondo del lavoro presso <span className="font-bold text-slate-900">Apra S.p.a.</span>, 
              dove ho potuto applicare le mie conoscenze informatiche in un contesto aziendale reale e dinamico.
            </p>
          </div>
          <div className="w-full md:w-1/3 aspect-square bg-slate-100 rounded-[3rem] overflow-hidden relative group shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Ufficio Apra" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors"></div>
          </div>
        </header>

        {/* Sezione Report Finale */}
        <section className="bg-slate-900 rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Relazione Finale <br/>
                <span className="text-blue-400">PCTO 2024/25</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Documento completo che riassume le 5 settimane di attività, le competenze acquisite 
                e i reparti aziendali esplorati durante lo stage.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setIsReportOpen(true)}
                  className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/20"
                >
                  <FileText size={24} /> Sfoglia Relazione
                </button>
                <button 
                  onClick={() => setIsReportOpen(true)}
                  className="bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-700 transition-all border border-slate-700"
                >
                  <Download size={24} /> Scarica PDF
                </button>
              </div>
            </div>
            
            <div 
              onClick={() => setIsReportOpen(true)}
              className="w-full md:w-80 aspect-[3/4] bg-white rounded-2xl shadow-2xl cursor-pointer group relative overflow-hidden border-8 border-slate-800"
            >
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-all z-10"></div>
              <div className="p-8 h-full flex flex-col items-center justify-center text-center space-y-6 text-slate-900">
                <div className="w-16 h-1 bg-blue-600"></div>
                <h3 className="text-2xl font-black uppercase tracking-tighter">Report<br/>Finale</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Riccardo Giuliani</p>
                <div className="pt-10">
                   <FileText size={48} className="text-blue-600 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galleria Attività */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-900">Momenti e Attività</h2>
              <p className="text-slate-500 text-lg">Una selezione visiva dei reparti e delle tecnologie utilizzate.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
                caption: "Infrastruttura di Rete", 
                desc: "Analisi dei server e della gestione sistemistica aziendale.",
                type: 'image'
              },
              { 
                url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
                caption: "Business Intelligence", 
                desc: "Utilizzo di Power BI per l'analisi e la visualizzazione dei dati.",
                type: 'image'
              },
              { 
                url: "graphic", 
                caption: "Settori Aziendali", 
                desc: "I 12 settori principali in cui opera Apra S.p.a.",
                type: 'component',
                component: <SectorsGraphic isThumbnail={false} />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedImage(item)}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="aspect-video overflow-hidden relative bg-slate-50">
                  {item.type === 'image' ? (
                    <img src={item.url} alt={item.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                      <SectorsGraphic isThumbnail={true} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors"></div>
                  <div className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-2xl text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ImageIcon size={20} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.caption}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Modal Immagine - Ripristinato layout originale */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
              onClick={() => setSelectedImage(null)}
            >
              <div className="max-w-5xl w-full relative z-[10000]" onClick={e => e.stopPropagation()}>
                <button 
                  onClick={() => setSelectedImage(null)} 
                  className="absolute -top-16 right-0 text-white hover:text-blue-400 transition-colors"
                >
                  <X size={40} />
                </button>
                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
                  {selectedImage.type === 'image' ? (
                    <img src={selectedImage.url} alt={selectedImage.caption} className="w-full h-full object-cover" />
                  ) : (
                    selectedImage.component
                  )}
                </div>
                <div className="mt-6 text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.caption}</h3>
                  <p className="text-slate-400">{selectedImage.desc}</p>
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
              className="fixed inset-0 z-[9999] bg-slate-900/95 backdrop-blur-xl overflow-y-auto p-4 md:p-10"
            >
              <div className="max-w-4xl mx-auto relative z-[10000]">
                {/* Pulsanti di controllo - Posizionati in modo fisso ma con padding di sicurezza dai bordi */}
                <div className="fixed top-4 right-4 md:top-8 md:right-8 z-[10001] flex flex-col gap-4 no-print">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsReportOpen(false);
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

                <div id="printable-report" className="space-y-0 bg-white shadow-2xl rounded-xl h-[90vh] overflow-y-auto mt-4">
                  {/* Visualizzatore Relazione PCTO - Fallback integrato per massima compatibilità */}
                  <div className="bg-white">
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Pcto;
