import type { KeyboardEvent } from 'react';
import type { QueueOrder } from '../data/orders';
import { Card } from './Card';

type OrdersTableProps = {
  orders: QueueOrder[];
  onOpenOrder: (orderId: string) => void;
};

const columns = [
  { key: 'id', label: 'ORDER ID', width: '86px' },
  { key: 'customer', label: 'CUSTOMER', width: '146px' },
  { key: 'service', label: 'SERVICE', width: '138px' },
  { key: 'items', label: 'ITEMS / WEIGHT', width: '142px' },
  { key: 'dropoff', label: 'DROP-OFF', width: '96px' },
  { key: 'promised', label: 'PROMISED', width: '132px' },
  { key: 'status', label: 'STATUS', width: '96px' },
  { key: 'payment', label: 'PAYMENT', width: '116px' }
];

export function OrdersTable({ orders, onOpenOrder }: OrdersTableProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLTableRowElement>, orderId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpenOrder(orderId);
    }
  };

  return (
    <Card className="order-table-card">
      <table className="orders-table" aria-label="Orders table">
        <colgroup>
          {columns.map((column) => (
            <col key={column.key} style={{ width: column.width }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              tabIndex={0}
              role="button"
              aria-label={`Open order ${order.id}`}
              onClick={() => onOpenOrder(order.id)}
              onKeyDown={(event) => handleKeyDown(event, order.id)}
            >
              <td className="orders-table__id">{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.service}</td>
              <td>{order.itemsWeight}</td>
              <td>{order.dropoff}</td>
              <td>{order.promised}</td>
              <td>{order.status}</td>
              <td>{order.payment}</td>
            </tr>
          ))}
          {orders.length === 0 && (
            <tr>
              <td colSpan={8} className="orders-table__empty">
                No orders match these filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  );
}