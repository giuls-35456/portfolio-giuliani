import React from 'react';
import { motion } from 'framer-motion';
import { Music, Target, Hammer, Trophy } from 'lucide-react';

/**
 * Sezione Passioni.
 * Presenta gli interessi personali e le passioni extra-scolastiche con un layout moderno, coinvolgente e con immagini.
 */
const Passioni: React.FC = () => {
  const passioni = [
    {
      id: 'calcio',
      title: 'Calcio - Una Passione di Famiglia',
      description: 'Il calcio non è solo uno sport per me, ma un legame profondo con le mie radici. È una passione che mi è stata trasmessa da mio nonno e mio padre, rendendo ogni partita un momento di condivisione familiare. Amo la tattica, l\'adrenalina della competizione e lo spirito di squadra che solo il rettangolo verde sa trasmettere.',
      icon: Target,
      color: 'from-green-500 to-emerald-600',
      lightColor: 'bg-green-50',
      image: '/foto-progetti/area-scientifica/calcio-campo.jpg'
    },
    {
      id: 'sport',
      title: 'Lo Sport in Tutte le Sue Facce',
      description: 'Amo lo sport in ogni sua forma e sfaccettatura. Che si tratti di atletica, sport di squadra o discipline individuali, ne apprezzo la capacità di forgiare il carattere. Per me lo sport è sinonimo di disciplina, resilienza e costante ricerca del miglioramento personale, valori che cerco di applicare anche nello studio e nella vita.',
      icon: Trophy,
      color: 'from-orange-500 to-red-600',
      lightColor: 'bg-orange-50',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'music',
      title: 'La Mia Colonna Sonora',
      description: 'Ascoltare musica è una parte essenziale della mia giornata. Non è solo un passatempo, ma uno strumento che accompagna i miei stati d\'animo: mi aiuta a trovare la massima concentrazione durante le sessioni di studio più intense e mi regala momenti di puro relax e ispirazione quando ne ho più bisogno.',
      icon: Music,
      color: 'from-cyan-500 to-blue-600',
      lightColor: 'bg-cyan-50',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'fai-da-te',
      title: 'Creatività e Fai da Te',
      description: 'Una delle mie passioni più concrete è dedicarmi ai lavoretti in casa. Amo la sfida di riparare qualcosa o creare piccoli oggetti con le mie mani. Questa passione per il "fai da te" riflette il mio approccio pratico al problem solving: non mi fermo davanti a un guasto, ma cerco di capire come funziona per risolverlo.',
      icon: Hammer,
      color: 'from-amber-500 to-orange-600',
      lightColor: 'bg-amber-50',
      image: null
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-20 py-10"
    >
      {/* Header Sezione */}
      <header className="text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <span className="text-purple-600 font-bold uppercase tracking-widest text-sm inline-block">Le Mie Passioni</span>
          <h2 className="text-6xl md:text-7xl font-bold text-slate-900 leading-tight">
            Quello che mi <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Appassiona</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            Al di là dello studio e della tecnologia, ci sono interessi che coltivo con dedizione e che definiscono chi sono. Ecco cosa mi appassiona veramente.
          </p>
        </motion.div>
      </header>

      {/* Griglia Passioni con Immagini */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {passioni.map((passione, index) => {
          const Icon = passione.icon;
          return (
            <motion.div
              key={passione.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative overflow-hidden rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500`}
            >
              {/* Immagine di Sfondo */}
              <div className="absolute inset-0 overflow-hidden">
                {passione.image ? (
                  <>
                    <img 
                      src={passione.image} 
                      alt={passione.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${passione.color} opacity-75 group-hover:opacity-60 transition-opacity duration-500`}></div>
                  </>
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${passione.color} opacity-75 group-hover:opacity-60 transition-opacity duration-500`}></div>
                )}
              </div>

              {/* Contenuto Sovrapposto */}
              <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between min-h-[400px]">
                {/* Icona */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/30`}
                >
                  <Icon size={32} className="text-white" />
                </motion.div>

                {/* Titolo e Descrizione */}
                <div className="space-y-4 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    {passione.title}
                  </h3>

                  <p className="text-white/90 leading-relaxed text-lg font-light">
                    {passione.description}
                  </p>

                  {/* Indicatore Hover */}
                {passione.image && (
                  <div className={`h-1 w-12 bg-white rounded-full group-hover:w-full transition-all duration-500`}></div>
                )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Sezione Citazione Motivazionale di Alex Zanardi */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-20 relative"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-[3rem] blur-2xl opacity-30 animate-pulse"></div>
        <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-12 md:p-20 text-white text-center space-y-8 shadow-2xl border-2 border-emerald-500/50">
            <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-emerald-400">Ispirazione da Alex Zanardi</p>
              <p className="text-3xl md:text-4xl font-black italic leading-tight bg-gradient-to-r from-emerald-300 via-white to-emerald-300 bg-clip-text text-transparent">
                "Quando mi sono svegliato senza gambe, ho guardato la metà che era rimasta, non quella che era andata persa."
              </p>
            </div>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl font-bold italic leading-relaxed text-slate-200">
                "Quando pensi di aver dato tutto, tieni duro ancora cinque secondi."
              </p>
              <p className="text-xl md:text-2xl font-light italic leading-relaxed text-emerald-300">
                "Se non avessi avuto l'incidente, non avrei scoperto di che cosa sono capace."
              </p>
            </div>
          </div>
          <div className="pt-8 border-t-2 border-emerald-500/30 flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-400 shadow-lg">
              <img 
                src="/foto-progetti/area-scientifica/alex-zanardi.webp" 
                alt="Alex Zanardi"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-emerald-300 font-black text-xl">— ALEX ZANARDI</p>
              <p className="text-slate-400 text-sm mt-2 font-semibold tracking-wide">Campione di vita, ispiratore di passioni e determinazione</p>
            </div>
          </div>
        </div>
      </motion.section>



      {/* Sezione Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center space-y-6 py-10"
      >
        <h3 className="text-3xl font-bold text-slate-900">
          Ti interessano questi argomenti?
        </h3>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Mi piace sempre confrontarmi con persone che condividono i miei interessi o che hanno passioni diverse da raccontare.
        </p>
        <a 
          href="/#/contatti"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 active:scale-95"
        >
          Parliamone
          <span className="text-xl">→</span>
        </a>
      </motion.section>
    </motion.div>
  );
};

export default Passioni;
