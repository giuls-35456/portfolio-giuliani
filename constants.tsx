import { User, Briefcase, BookOpen, Cpu, Scale, Mail } from 'lucide-react';
import { PersonalInfo, RouteConfig } from './types';

/**
 * Informazioni personali principali
 */
export const INFO: PersonalInfo = {
  nome: "Riccardo",
  cognome: "Giuliani",
  scuola: "IIS Marconi Pieralisi",
  indirizzo: "Informatica e Telecomunicazioni",
  email: "giulianir536@gmail.com",
  telefono: "3533603947",
  aziendaPcto: "APRA S.p.A.",
  descrizione: "Studente appassionato di tecnologia e sistemi di rete. Questo portfolio raccoglie il mio percorso formativo, le competenze acquisite e l'esperienza nel mondo del lavoro."
};

/**
 * Alias per le informazioni personali per i componenti che si aspettano PERSONAL_INFO
 */
export const PERSONAL_INFO: PersonalInfo = {
  ...INFO,
  pctoCompany: INFO.aziendaPcto
};

/**
 * Configurazione dei percorsi di navigazione
 */
export const ROUTES: RouteConfig[] = [
  { path: '/', label: 'Home', icon: User, color: 'text-teal-500' },
  { path: '/pcto', label: 'PCTO', icon: Briefcase, color: 'text-blue-500' },
  { path: '/umanistica', label: 'Area Umanistica', icon: BookOpen, color: 'text-rose-500' },
  { path: '/professionale', label: 'Area Scientifica', icon: Cpu, color: 'text-indigo-500' },
  { path: '/civica', label: 'Ed. Civica', icon: Scale, color: 'text-emerald-500' },
  { path: '/contatti', label: 'Contatti', icon: Mail, color: 'text-slate-600' },
];

/**
 * Testi per il componente NextPageLink che guida la navigazione tra le sezioni
 */
export const NEXT_PAGE_TEXTS: Record<string, string> = {
  '/': 'Scopri il mio percorso PCTO',
  '/pcto': 'Passa all\'Area Umanistica',
  '/umanistica': 'Guarda l\'Area Scientifica',
  '/professionale': 'Educazione Civica',
  '/civica': 'Contattami',
};
