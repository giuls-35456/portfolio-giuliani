import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap, Gamepad2, Music, Code, Lightbulb, Trophy } from 'lucide-react';

/**
 * Sezione Passioni.
 * Presenta gli interessi personali e le passioni extra-scolastiche con un layout moderno e coinvolgente.
 */
const Passioni: React.FC = () => {
  const passioni = [
    {
      id: 'tech',
      title: 'Tecnologia e Innovazione',
      description: 'Appassionato di nuove tecnologie, programmazione e innovazione digitale. Amo esplorare framework moderni e sviluppare soluzioni creative.',
      icon: Code,
      color: 'from-indigo-500 to-purple-600',
      lightColor: 'bg-indigo-50'
    },
    {
      id: 'gaming',
      title: 'Gaming e Esports',
      description: 'Gamer appassionato con interesse per gli esports e il game design. Mi piace sia giocare che analizzare la strategia dietro i videogiochi.',
      icon: Gamepad2,
      color: 'from-pink-500 to-rose-600',
      lightColor: 'bg-pink-50'
    },
    {
      id: 'music',
      title: 'Musica',
      description: 'Amo ascoltare la musica in ogni momento della giornata. È la mia colonna sonora mentre studio, lavoro o mi rilasso, aiutandomi a mantenere la concentrazione e la creatività.',
      icon: Music,
      color: 'from-cyan-500 to-blue-600',
      lightColor: 'bg-cyan-50'
    },
    {
      id: 'sport',
      title: 'Sport',
      description: 'Appassionato del mondo dello sport. Credo fermamente nei valori della disciplina, del lavoro di squadra e del superamento dei propri limiti, sia in campo che nella vita.',
      icon: Trophy,
      color: 'from-orange-500 to-red-600',
      lightColor: 'bg-orange-50'
    },
    {
      id: 'problem-solving',
      title: 'Problem Solving',
      description: 'Mi piace affrontare sfide complesse e trovare soluzioni innovative. Amo i puzzle, gli enigmi e le competizioni di programmazione.',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-600',
      lightColor: 'bg-yellow-50'
    },
    {
      id: 'networking',
      title: 'Networking e Comunità',
      description: 'Appassionato di conoscere persone, condividere idee e collaborare su progetti interessanti. Credo nel potere della comunità tech.',
      icon: Zap,
      color: 'from-green-500 to-emerald-600',
      lightColor: 'bg-green-50'
    },
    {
      id: 'learning',
      title: 'Apprendimento Continuo',
      description: 'Sempre alla ricerca di nuove conoscenze e competenze. Seguo corsi online, leggo articoli tecnici e partecipo a workshop e seminari.',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      lightColor: 'bg-red-50'
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
            Al di là dello studio, ci sono tante cose che mi appassionano e che guidano la mia crescita personale e professionale. Scopri i miei interessi e le mie passioni.
          </p>
        </motion.div>
      </header>

      {/* Griglia Passioni */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          "La passione è il carburante che alimenta l'innovazione. Quando ami quello che fai, il lavoro non è mai una fatica."
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
          Condividiamo le stesse passioni?
        </h3>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Se condividi alcuni dei miei interessi, mi piacerebbe conoscerti e collaborare su progetti interessanti.
        </p>
        <a 
          href="/#/contatti"
          className="inline-flex items-center gap-3 gradient-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-glow transition-all duration-300 active:scale-95"
        >
          Contattami
          <span className="text-xl">→</span>
        </a>
      </motion.section>
    </motion.div>
  );
};

export default Passioni;
