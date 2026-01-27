import { LucideIcon } from 'lucide-react';

export interface PersonalInfo {
  nome: string;
  cognome: string;
  scuola: string;
  indirizzo: string;
  email: string;
  telefono: string;
  aziendaPcto: string;
  descrizione: string;
  pctoCompany?: string;
}

export interface RouteConfig {
  path: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
}

export interface DocumentPage {
  type: 'cover' | 'text';
  title: string;
  subtitle?: string;
  author?: string;
  content?: string;
}

export interface Document {
  id: string;
  title: string;
  tag: string;
  image: string;
  description: string;
  pages: DocumentPage[];
  pdfUrl?: string;
}
