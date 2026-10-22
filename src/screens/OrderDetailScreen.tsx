import { ActionsCard } from '../components/ActionsCard';
import { ActivityTimeline } from '../components/ActivityTimeline';
import { CustomerCard } from '../components/CustomerCard';
import { GarmentsCard } from '../components/GarmentsCard';
import { InstructionsCard } from '../components/InstructionsCard';
import { OrderSummaryCard } from '../components/OrderSummaryCard';
import { PaymentSummaryCard } from '../components/PaymentSummaryCard';
import { TopBar } from '../components/TopBar';
import { detailOrder } from '../data/orderDetail';

type OrderDetailScreenProps = {
  onBack: () => void;
};

export function OrderDetailScreen({ onBack }: OrderDetailScreenProps) {
  return (
    <>
      <TopBar title={`Order ${detailOrder.id}`} subtitle={detailOrder.promisedReadyLabel} onBack={onBack}>
        <span className="status-badge">{detailOrder.status}</span>
      </TopBar>

      <div className="screen-content detail-layout">
        <div className="detail-left">
          <div className="detail-card-grid">
            <CustomerCard customer={detailOrder.customer} />
            <OrderSummaryCard orderId={detailOrder.id} summary={detailOrder.summary} />
          </div>
          <InstructionsCard instructions={detailOrder.instructions} />
          <GarmentsCard garments={detailOrder.garments} />
        </div>

        <div className="detail-right">
          <ActionsCard />
          <PaymentSummaryCard payment={detailOrder.payment} />
          <ActivityTimeline events={detailOrder.timeline} />
        </div>
      </div>
    </>
  );
}