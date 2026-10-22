import { Card } from './Card';

type CollectionPanelProps = {
  orders: string[];
};

export function CollectionPanel({ orders }: CollectionPanelProps) {
  return (
    <Card className="collection-panel">
      <h2 className="panel-heading__title">Due for collection today</h2>
      <ul className="collection-list">
        {orders.map((order) => (
          <li key={order} className="collection-list__item">
            {order}
          </li>
        ))}
      </ul>
    </Card>
  );
}