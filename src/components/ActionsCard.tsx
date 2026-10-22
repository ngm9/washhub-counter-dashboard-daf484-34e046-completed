import { Button } from './Button';
import { Card } from './Card';

export function ActionsCard() {
  return (
    <Card className="detail-card actions-card">
      <h2 className="section-title">Actions</h2>
      <div className="actions-card__buttons">
        <Button>Mark ready</Button>
        <Button>Notify</Button>
        <Button>Print ticket</Button>
      </div>
    </Card>
  );
}