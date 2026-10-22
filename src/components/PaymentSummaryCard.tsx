import { detailOrder } from '../data/orderDetail';
import { Card } from './Card';

type Payment = typeof detailOrder.payment;

type PaymentSummaryCardProps = {
  payment: Payment;
};

export function PaymentSummaryCard({ payment }: PaymentSummaryCardProps) {
  return (
    <Card className="detail-card payment-card">
      <h2 className="section-title">Payment summary</h2>
      <ul className="payment-list">
        <li>Subtotal {payment.subtotal}</li>
        <li>Tax {payment.tax}</li>
        <li className="payment-list__total">Total due {payment.totalDue}</li>
        <li>Payment status: {payment.status}</li>
      </ul>
    </Card>
  );
}