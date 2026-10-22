import { detailOrder } from '../data/orderDetail';
import { Card } from './Card';

type OrderSummary = typeof detailOrder.summary;

type OrderSummaryCardProps = {
  orderId: string;
  summary: OrderSummary;
};

export function OrderSummaryCard({ orderId, summary }: OrderSummaryCardProps) {
  return (
    <Card className="detail-card order-summary-card">
      <h2 className="section-title">Order summary</h2>
      <ul className="order-summary-list">
        <li>Order ID: {orderId}</li>
        <li>Service: {summary.service}</li>
        <li>Drop-off: {summary.dropoff}</li>
        <li>Ready by: {summary.readyBy}</li>
        <li>Payment: {summary.payment}</li>
      </ul>
    </Card>
  );
}