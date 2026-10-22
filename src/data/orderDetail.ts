export type Garment = {
  item: string;
  careTags: string;
  price: string;
};

export type TimelineEvent = {
  text: string;
};

export const detailOrder = {
  id: 'WH-1048',
  status: 'Washing',
  promisedReadyLabel: 'Promised ready today 1:00 PM',
  customer: {
    initials: 'SR',
    name: 'Sofia Ramirez',
    phone: '(312) 555-0184',
    phoneHref: 'tel:+13125550184',
    email: 'sofia.r@example.com'
  },
  summary: {
    service: 'Wash & fold',
    dropoff: 'Today 9:12 AM',
    readyBy: 'Today 1:00 PM',
    payment: 'Unpaid at pickup'
  },
  instructions: [
    'Use fragrance-free detergent. Customer requested shirts folded, not hung.',
    'Check right cuff on navy blouse before drying.'
  ],
  garments: [
    { item: '8 T-shirts', careTags: 'Cold wash, tumble low', price: '$16.00' },
    { item: '2 Oxford shirts', careTags: 'Cold wash, light starch', price: '$11.00' },
    { item: '1 Navy blouse', careTags: 'Delicate cycle, hang dry', price: '$8.50' },
    { item: '4 Jeans', careTags: 'Warm wash, medium dry', price: '$8.00' },
    { item: '3 Socks bundles', careTags: 'Cold wash, tumble low', price: '$4.00' }
  ],
  payment: {
    subtotal: '$47.50',
    tax: '$4.80',
    totalDue: '$52.30',
    status: 'Unpaid'
  },
  timeline: [
    { text: '9:12 AM · Order received · Nina' },
    { text: '9:20 AM · Payment deferred' },
    { text: '10:02 AM · Washer W10 started' },
    { text: '10:54 AM · Dryer D08 assigned' }
  ]
};