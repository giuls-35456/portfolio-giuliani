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
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop'
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
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop'
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
                <img 
                  src={passione.image} 
                  alt={passione.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${passione.color} opacity-75 group-hover:opacity-60 transition-opacity duration-500`}></div>
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
                  <div className={`h-1 w-12 bg-white rounded-full group-hover:w-full transition-all duration-500`}></div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Sezione Citazione Motivazionale di Alex Zanardi */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-12 md:p-20 text-white text-center space-y-8 shadow-2xl border border-slate-700"
      >
        <div className="space-y-6">
          <p className="text-3xl md:text-4xl font-bold italic leading-relaxed">
            "La disabilità è una caratteristica, non una sentenza. Quello che conta è come reagisci."
          </p>
          <p className="text-2xl md:text-3xl font-light italic leading-relaxed text-slate-300">
            "Non è importante dove sei partito, ma dove vuoi arrivare."
          </p>
        </div>
        <div className="pt-6 border-t border-slate-600">
          <p className="text-slate-400 font-semibold text-lg">— Alex Zanardi</p>
          <p className="text-slate-500 text-sm mt-2">Campione di vita, ispiratore di passioni e determinazione</p>
        </div>
      </motion.section>

      {/* Sezione Motivazionale Personale */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-[3rem] p-12 md:p-16 text-center space-y-6 border border-purple-200 shadow-lg"
      >
        <p className="text-2xl md:text-3xl font-light italic leading-relaxed text-slate-800">
          "La passione è ciò che rende straordinario l'ordinario. È il motore che mi spinge a imparare e a fare sempre meglio, ogni giorno."
        </p>
        <p className="text-purple-600 font-semibold text-lg">— Riccardo Giuliani</p>
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
