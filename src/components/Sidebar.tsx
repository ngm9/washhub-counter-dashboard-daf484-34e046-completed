import type { LucideIcon } from 'lucide-react';
import { ChartColumn, Droplets, LayoutGrid, Receipt, Settings, Users, WashingMachine } from 'lucide-react';
import { navigationItems, type NavigationItemId } from '../data/navigation';
import { cx } from '../lib/cx';
import type { NavTarget } from '../types';

const navIcons: Record<NavigationItemId, LucideIcon> = {
  overview: LayoutGrid,
  orders: Receipt,
  machines: WashingMachine,
  customers: Users,
  reports: ChartColumn,
  settings: Settings
};

type SidebarProps = {
  activeNav: NavTarget;
  onNavigate: (target: NavTarget) => void;
};

export function Sidebar({ activeNav, onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo" aria-label="WashHub">
        <div className="sidebar__logo-tile">
          <Droplets size={20} aria-hidden="true" />
        </div>
        <div className="sidebar__brand">WashHub</div>
      </div>

      <nav className="sidebar-nav" aria-label="Primary navigation">
        {navigationItems.map((item) => {
          const Icon = navIcons[item.id];
          const isActive = item.target === activeNav;

          return (
            <button
              key={item.id}
              type="button"
              className={cx('sidebar-nav__item', isActive && 'sidebar-nav__item--active')}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => item.target && onNavigate(item.target)}
            >
              <Icon size={20} aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}