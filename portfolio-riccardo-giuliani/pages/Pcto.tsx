
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from '../components/TextReveal';
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
    image: "https://images.unsplash.com/photo-1558494949-ef2bb6db8744?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
      setIsReportOpen(true);
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
          <TextReveal className="text-xl text-slate-500 justify-center">
            Alternanza Scuola-Lavoro presso APRA
          </TextReveal>
        </div>

        {/* Intro Section */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-800">L'Esperienza in Azienda</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Ho svolto la mia esperienza di alternanza scuola-lavoro presso <strong>{PERSONAL_INFO.pctoCompany}</strong>, 
                un'importante realtà del territorio. Durante questo periodo ho potuto osservare da vicino le dinamiche aziendali 
                e comprendere come le competenze scolastiche si applicano nel mondo reale.
              </p>
              <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-blue-500">
                <p className="italic text-slate-600">
                  "Un'opportunità fondamentale per avvicinarsi al mondo del lavoro e sviluppare soft skills."
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                Cosa ho imparato
              </h3>
              <ul className="space-y-4">
                {[
                  "Competenze Digitali avanzate",
                  "Gestione delle relazioni professionali",
                  "Problem solving in ambiente lavorativo",
                  "Lavoro in team e organizzazione"
                ].map((skill, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <CheckCircle2 className="text-blue-500 flex-shrink-0" size={20} />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Galleria Fotografica */}
        <div className="space-y-8">
           <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                 <ImageIcon size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Galleria Fotografica</h2>
           </div>
           
           <div className="grid md:grid-cols-2 gap-6">
              {galleryImages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedImage(item)}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-slate-100 aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {item.type === 'image' ? (
                    <img 
                      src={item.url} 
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
                      {item.thumbnail}
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                     <h3 className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.caption}</h3>
                     <p className="text-slate-300 text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">Clicca per ingrandire</p>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Relazioni e Documenti */}
        <div className="space-y-8">
           <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                 <FileText size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Relazioni e Documenti</h2>
           </div>

           <div className="grid md:grid-cols-1 gap-4">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => handleDocumentClick(doc.id)}
                  className={`bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center gap-6 group ${doc.id === 'relazione-finale' ? 'cursor-pointer ring-2 ring-transparent hover:ring-blue-100' : ''}`}
                >
                  <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    <FileText size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{doc.title}</h3>
                      <span className="hidden md:block w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                      <span className="text-sm font-medium text-slate-400 uppercase tracking-wide">{doc.type}</span>
                    </div>
                    <p className="text-slate-500 leading-relaxed">{doc.description}</p>
                  </div>

                  <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                    <div className="text-right hidden md:block">
                       <p className="text-xs text-slate-400 font-medium uppercase">Data</p>
                       <p className="text-sm text-slate-600 font-semibold">{doc.date}</p>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(doc.id);
                      }}
                      className="p-3 bg-slate-50 text-slate-600 rounded-xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                      title="Apri Report"
                    >
                       <Download size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </motion.div>

      {/* Lightbox Modal (Images) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full z-10 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="bg-slate-900 flex-1 relative flex items-center justify-center overflow-hidden min-h-[40vh] md:min-h-[50vh]">
                {selectedImage.type === 'image' ? (
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.caption}
                    className="w-full h-full object-contain max-h-[70vh]"
                  />
                ) : (
                  <div className="w-full h-full max-h-[70vh] flex items-center justify-center bg-white p-4">
                     {selectedImage.component}
                  </div>
                )}
              </div>
              <div className="p-6 md:p-8 bg-white border-t border-slate-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-3">
                  {selectedImage.caption}
                  <span className="h-px flex-1 bg-slate-100"></span>
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {selectedImage.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PDF Visual Viewer Modal */}
      <AnimatePresence>
        {isReportOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-slate-800/95 backdrop-blur-md overflow-y-auto"
          >
            <div className="min-h-screen flex flex-col items-center justify-start p-4 md:p-8">
              
              {/* Toolbar */}
              <motion.div 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full max-w-4xl flex justify-between items-center mb-6 no-print sticky top-4 z-50 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl"
              >
                <div className="text-white">
                  <h3 className="font-bold">Relazione Finale</h3>
                  <p className="text-xs text-slate-300">Visualizzazione Documento</p>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={handlePrint}
                    className="flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <Printer size={18} />
                    <span className="hidden sm:inline">Stampa / PDF</span>
                  </button>
                  <button 
                    onClick={() => setIsReportOpen(false)}
                    className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </motion.div>

              {/* Document Pages Container */}
              <div id="printable-report" className="space-y-8 print:space-y-0">
                
                {PDF_PAGES.map((page, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="w-[210mm] h-[297mm] bg-white shadow-2xl mx-auto overflow-hidden relative page-break print:shadow-none"
                    style={{ pageBreakAfter: 'always' }}
                  >
                    {/* --- LAYOUT COPERTINA --- */}
                    {page.type === 'cover' && (
                      <div className="h-full flex">
                        {/* Sidebar Bianca con Testo Verticale */}
                        <div className="w-[30%] h-full bg-white relative flex flex-col justify-between p-8 z-10">
                          <div className="flex-1 flex items-center justify-center relative">
                             {/* Testo Verticale "REPORT FINALE" */}
                             <h1 className="text-[120px] font-bold text-rose-600 leading-none whitespace-nowrap opacity-90 transform -rotate-90 origin-center absolute">
                               REPORT FINALE
                             </h1>
                          </div>
                          
                          <div className="space-y-2 mt-auto text-left">
                            <p className="text-2xl font-bold text-slate-900">{page.student}</p>
                            <p className="text-lg text-slate-600">{page.school}</p>
                            <p className="text-lg text-slate-500">{page.city}</p>
                          </div>
                        </div>

                        {/* Immagine Piena a Destra */}
                        <div className="w-[70%] h-full relative">
                           <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10 z-10"></div>
                           <img 
                            src={page.image} 
                            alt="Cover" 
                            className="w-full h-full object-cover"
                            loading="eager"
                           />
                        </div>
                      </div>
                    )}

                    {/* --- LAYOUT PAGINA CONTENUTO --- */}
                    {page.type === 'content' && (
                      <div className="h-full flex flex-col p-12">
                        {/* Header Settimana */}
                        <div className="flex justify-between items-start mb-12">
                          <h2 className="text-5xl font-bold text-rose-500 uppercase tracking-tighter">
                            {page.weekTitle}
                          </h2>
                          <h3 className="text-2xl font-bold text-slate-800 text-right max-w-sm leading-tight">
                            {page.contentTitle}
                          </h3>
                        </div>

                        {/* Corpo Pagina con Immagine Laterale */}
                        <div className="flex flex-1 gap-12">
                           {/* Colonna Immagine (Sinistra) - Come nel PDF */}
                           <div className="w-[45%] h-full relative rounded-xl overflow-hidden shadow-inner bg-slate-100 flex flex-col gap-4">
                              <img 
                                src={page.image} 
                                alt={page.weekTitle} 
                                className="w-full h-[70%] object-cover"
                                loading="eager"
                              />
                              
                              {/* Loghi Specifici se richiesti */}
                              {page.showLogos && (
                                <div className="p-4 flex flex-col gap-4 items-center justify-center flex-1 bg-white">
                                   <div className="text-3xl font-bold text-blue-600 lowercase tracking-tighter">essenzia®</div>
                                   <div className="text-4xl font-bold text-orange-500 tracking-wide flex items-center gap-1">
                                     <span className="w-6 h-6 rounded-full bg-orange-500"></span>
                                     omnis
                                   </div>
                                </div>
                              )}
                              
                              {page.showAutocad && (
                                <div className="p-6 flex items-center justify-center flex-1 bg-rose-600 text-white">
                                   <div className="w-16 h-16 bg-white text-rose-600 flex items-center justify-center text-4xl font-bold mr-4">A</div>
                                   <span className="text-3xl font-bold">AutoCAD</span>
                                </div>
                              )}
                           </div>

                           {/* Colonna Testo (Destra) */}
                           <div className="w-[55%] pt-4">
                              <p className="text-lg text-slate-700 leading-loose text-justify font-light whitespace-pre-line">
                                {page.text}
                              </p>
                           </div>
                        </div>
                      </div>
                    )}

                  </motion.div>
                ))}

              </div>
              <div className="h-20 no-print"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Pcto;
