import { Sidebar } from './Sidebar';
import type { NavTarget } from '../types';
import type { ReactNode } from 'react';

type AppLayoutProps = {
  activeNav: NavTarget;
  onNavigate: (target: NavTarget) => void;
  children: ReactNode;
};

export function AppLayout({ activeNav, onNavigate, children }: AppLayoutProps) {
  return (
    <div className="app-shell">
      <Sidebar activeNav={activeNav} onNavigate={onNavigate} />
      <main className="app-main">{children}</main>
    </div>
  );
}