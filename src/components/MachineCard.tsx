import type { Machine } from '../data/overview';
import { cx } from '../lib/cx';

type MachineCardProps = {
  machine: Machine;
};

export function MachineCard({ machine }: MachineCardProps) {
  return (
    <article className={cx('machine-card', `machine-card--${machine.status}`)} aria-label={machine.summary}>
      <p className="machine-card__summary">{machine.summary}</p>
    </article>
  );
}