import type { NavTarget } from '../types';

export type NavigationItemId = 'overview' | 'orders' | 'machines' | 'customers' | 'reports' | 'settings';

export type NavigationItem = {
  id: NavigationItemId;
  label: string;
  target?: NavTarget;
};

export const navigationItems: NavigationItem[] = [
  { id: 'overview', label: 'Overview', target: 'overview' },
  { id: 'orders', label: 'Orders', target: 'orders' },
  { id: 'machines', label: 'Machines' },
  { id: 'customers', label: 'Customers' },
  { id: 'reports', label: 'Reports' },
  { id: 'settings', label: 'Settings' }
];