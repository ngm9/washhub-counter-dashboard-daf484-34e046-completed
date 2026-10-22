import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';

type TopBarProps = {
  title: string;
  subtitle: string;
  children?: ReactNode;
  onBack?: () => void;
};

export function TopBar({ title, subtitle, children, onBack }: TopBarProps) {
  return (
    <header className="topbar">
      <div className="topbar__leading">
        {onBack && (
          <button type="button" className="topbar__back" aria-label="Back to order queue" onClick={onBack}>
            <ArrowLeft size={24} aria-hidden="true" />
          </button>
        )}
        <div className="topbar__text">
          <h1 className="topbar__title">{title}</h1>
          <p className="topbar__subtitle">{subtitle}</p>
        </div>
      </div>
      {children && <div className="topbar__actions">{children}</div>}
    </header>
  );
}