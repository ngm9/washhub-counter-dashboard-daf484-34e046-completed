export type Kpi = {
  label: string;
  value: string;
};

export type MachineStatus = 'running' | 'available' | 'done' | 'outOfOrder';

export type Machine = {
  id: string;
  summary: string;
  status: MachineStatus;
};

export const overviewKpis: Kpi[] = [
  { label: 'Orders today', value: '86' },
  { label: 'Revenue', value: '$2,418' },
  { label: 'Machines in use', value: '15 / 20' },
  { label: 'Avg turnaround', value: '2h 48m' }
];

export const washers: Machine[] = [
  { id: 'W01', summary: '#W01 Run 24m Maya C.', status: 'running' },
  { id: 'W02', summary: '#W02 Available —', status: 'available' },
  { id: 'W03', summary: '#W03 Run 41m Noah P.', status: 'running' },
  { id: 'W04', summary: '#W04 Done Aaron P.', status: 'done' },
  { id: 'W05', summary: '#W05 Run 08m Priya S.', status: 'running' },
  { id: 'W06', summary: '#W06 Available —', status: 'available' },
  { id: 'W07', summary: '#W07 Done Rosa L.', status: 'done' },
  { id: 'W08', summary: '#W08 Run 32m Ethan G.', status: 'running' },
  { id: 'W09', summary: '#W09 Out of order —', status: 'outOfOrder' },
  { id: 'W10', summary: '#W10 Run 19m Sofia R.', status: 'running' },
  { id: 'W11', summary: '#W11 Run 52m Kim T.', status: 'running' },
  { id: 'W12', summary: '#W12 Available —', status: 'available' }
];

export const dryers: Machine[] = [
  { id: 'D01', summary: '#D01 Run 18m Aaron P.', status: 'running' },
  { id: 'D02', summary: '#D02 Run 29m Maya C.', status: 'running' },
  { id: 'D03', summary: '#D03 Done Lee K.', status: 'done' },
  { id: 'D04', summary: '#D04 Available —', status: 'available' },
  { id: 'D05', summary: '#D05 Run 44m Priya S.', status: 'running' },
  { id: 'D06', summary: '#D06 Run 06m Kim T.', status: 'running' },
  { id: 'D07', summary: '#D07 Out of order —', status: 'outOfOrder' },
  { id: 'D08', summary: '#D08 Run 12m Omar J.', status: 'running' }
];

export const collectionOrders = [
  'WH-1042 · Aaron Patel · Ready 3:30 PM',
  'WH-1045 · Rosa Lee · Ready 4:00 PM',
  'WH-1048 · Sofia Ramirez · 1:00 PM',
  'WH-1050 · Omar Jones · Ready 5:15 PM',
  'WH-1054 · Priya Shah · Ready 6:00 PM'
];