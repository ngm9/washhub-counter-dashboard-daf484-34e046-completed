import { Mail, Phone } from 'lucide-react';
import { detailOrder } from '../data/orderDetail';
import { Avatar } from './Avatar';
import { Card } from './Card';

type Customer = typeof detailOrder.customer;

type CustomerCardProps = {
  customer: Customer;
};

export function CustomerCard({ customer }: CustomerCardProps) {
  return (
    <Card className="detail-card customer-card">
      <h2 className="section-title">Customer</h2>
      <div className="customer-card__profile">
        <Avatar initials={customer.initials} />
        <p className="customer-card__name">{customer.name}</p>
      </div>
      <div className="customer-card__contacts">
        <div className="contact-row">
          <Phone size={18} aria-hidden="true" />
          <a href={customer.phoneHref}>{customer.phone}</a>
        </div>
        <div className="contact-row">
          <Mail size={18} aria-hidden="true" />
          <a href={`mailto:${customer.email}`}>{customer.email}</a>
        </div>
      </div>
    </Card>
  );
}