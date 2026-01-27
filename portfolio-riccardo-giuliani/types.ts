import { LucideIcon } from 'lucide-react';

export interface RouteConfig {
  path: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

export interface PageProps {
  id: string;
}
