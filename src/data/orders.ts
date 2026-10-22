export type OrderStatus = 'Received' | 'Washing' | 'Ready' | 'Collected';
export type PaymentStatus = 'Paid' | 'Unpaid';

export type QueueOrder = {
  id: string;
  customer: string;
  service: string;
  itemsWeight: string;
  dropoff: string;
  promised: string;
  status: OrderStatus;
  payment: PaymentStatus;
};

export const orderStatuses: OrderStatus[] = ['Received', 'Washing', 'Ready', 'Collected'];

export const serviceFilters = ['All services', 'Wash & fold', 'Dry clean', 'Wash & press', 'Comforter'];

export const queueOrders: QueueOrder[] = [
  {
    id: 'WH-1048',
    customer: 'Sofia Ramirez',
    service: 'Wash & fold',
    itemsWeight: '18 items · 12.4 lb',
    dropoff: '9:12 AM',
    promised: 'Today 1:00 PM',
    status: 'Received',
    payment: 'Unpaid'
  },
  {
    id: 'WH-1049',
    customer: 'Kim Tran',
    service: 'Dry clean',
    itemsWeight: '5 items · 3.8 lb',
    dropoff: '9:40 AM',
    promised: 'Today 2:30 PM',
    status: 'Received',
    payment: 'Paid'
  },
  {
    id: 'WH-1050',
    customer: 'Omar Jones',
    service: 'Wash & press',
    itemsWeight: '9 items · 7.1 lb',
    dropoff: '10:05 AM',
    promised: 'Today 3:15 PM',
    status: 'Received',
    payment: 'Unpaid'
  },
  {
    id: 'WH-1051',
    customer: 'Priya Shah',
    service: 'Wash & fold',
    itemsWeight: '24 items · 16.6 lb',
    dropoff: '10:28 AM',
    promised: 'Today 5:00 PM',
    status: 'Received',
    payment: 'Paid'
  },
  {
    id: 'WH-1052',
    customer: 'Ethan Green',
    service: 'Comforter',
    itemsWeight: '2 items · 8.5 lb',
    dropoff: '10:44 AM',
    promised: 'Today 6:30 PM',
    status: 'Received',
    payment: 'Unpaid'
  }
];