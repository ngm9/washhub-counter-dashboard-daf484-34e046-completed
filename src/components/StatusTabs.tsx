import type { OrderStatus } from '../data/orders';
import { cx } from '../lib/cx';

type StatusTabsProps = {
  statuses: OrderStatus[];
  activeStatus: OrderStatus;
  onChange: (status: OrderStatus) => void;
};

export function StatusTabs({ statuses, activeStatus, onChange }: StatusTabsProps) {
  return (
    <div className="status-tabs" role="tablist" aria-label="Order status">
      {statuses.map((status) => (
        <button
          key={status}
          type="button"
          role="tab"
          aria-selected={status === activeStatus}
          className={cx('status-tab', status === activeStatus && 'status-tab--active')}
          onClick={() => onChange(status)}
        >
          {status}
        </button>
      ))}
    </div>
  );
}