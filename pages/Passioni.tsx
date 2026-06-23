import React from 'react';
import { motion } from 'framer-motion';
import { Music, Soccer, Hammer, Trophy } from 'lucide-react';

/**
 * Sezione Passioni.
 * Presenta gli interessi personali e le passioni extra-scolastiche con un layout moderno e coinvolgente.
 */
const Passioni: React.FC = () => {
  const passioni = [
    {
      id: 'calcio',
      title: 'Calcio - Una Passione di Famiglia',
      description: 'Il calcio non è solo uno sport per me, ma un legame profondo con le mie radici. È una passione che mi è stata trasmessa da mio nonno e mio padre, rendendo ogni partita un momento di condivisione familiare. Amo la tattica, l\'adrenalina della competizione e lo spirito di squadra che solo il rettangolo verde sa trasmettere.',
      icon: Soccer,
      color: 'from-green-500 to-emerald-600',
      lightColor: 'bg-green-50'
    },
    {
      id: 'sport',
      title: 'Lo Sport in Tutte le Sue Facce',
      description: 'Amo lo sport in ogni sua forma e sfaccettatura. Che si tratti di atletica, sport di squadra o discipline individuali, ne apprezzo la capacità di forgiare il carattere. Per me lo sport è sinonimo di disciplina, resilienza e costante ricerca del miglioramento personale, valori che cerco di applicare anche nello studio e nella vita.',
      icon: Trophy,
      color: 'from-orange-500 to-red-600',
      lightColor: 'bg-orange-50'
    },
    {
      id: 'music',
      title: 'La Mia Colonna Sonora',
      description: 'Ascoltare musica è una parte essenziale della mia giornata. Non è solo un passatempo, ma uno strumento che accompagna i miei stati d\'animo: mi aiuta a trovare la massima concentrazione durante le sessioni di studio più intense e mi regala momenti di puro relax e ispirazione quando ne ho più bisogno.',
      icon: Music,
      color: 'from-cyan-500 to-blue-600',
      lightColor: 'bg-cyan-50'
    },
    {
      id: 'fai-da-te',
      title: 'Creatività e Fai da Te',
      description: 'Una delle mie passioni più concrete è dedicarmi ai lavoretti in casa. Amo la sfida di riparare qualcosa o creare piccoli oggetti con le mie mani. Questa passione per il "fai da te" riflette il mio approccio pratico al problem solving: non mi fermo davanti a un guasto, ma cerco di capire come funziona per risolverlo.',
      icon: Hammer,
      color: 'from-amber-500 to-orange-600',
      lightColor: 'bg-amber-50'
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

      {/* Griglia Passioni */}
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
              className={`group relative overflow-hidden rounded-[2.5rem] p-8 md:p-10 ${passione.lightColor} border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500`}
            >
              {/* Sfondo Decorativo Animato */}
              <div className={`absolute inset-0 bg-gradient-to-br ${passione.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Contenuto */}
              <div className="relative z-10 space-y-6">
                {/* Icona */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${passione.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon size={32} className="text-white" />
                </motion.div>

                {/* Titolo */}
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                  {passione.title}
                </h3>

                {/* Descrizione */}
                <p className="text-slate-600 leading-relaxed text-lg font-light">
                  {passione.description}
                </p>

                {/* Indicatore Hover */}
                <div className={`h-1 w-12 bg-gradient-to-r ${passione.color} rounded-full group-hover:w-full transition-all duration-500`}></div>
              </div>

              {/* Elemento Decorativo Angolo */}
              <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${passione.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}></div>
            </motion.div>
          );
        })}
      </section>

      {/* Sezione Aggiuntiva - Citazione Motivazionale */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-20 gradient-primary rounded-[3rem] p-12 md:p-16 text-white text-center space-y-6 shadow-large"
      >
        <p className="text-2xl md:text-3xl font-light italic leading-relaxed">
          "La passione è ciò che rende straordinario l'ordinario. È il motore che mi spinge a imparare e a fare sempre meglio, ogni giorno."
        </p>
        <p className="text-indigo-100 font-semibold">— Riccardo Giuliani</p>
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
          className="inline-flex items-center gap-3 gradient-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-glow transition-all duration-300 active:scale-95"
        >
          Parliamone
          <span className="text-xl">→</span>
        </a>
      </motion.section>
    </motion.div>
  );
};

export default Passioni;
// update: Tue Jun 23 13:50:34 UTC 2026
