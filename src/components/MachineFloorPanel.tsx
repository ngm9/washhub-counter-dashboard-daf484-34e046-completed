import type { Machine } from '../data/overview';
import { Card } from './Card';
import { MachineCard } from './MachineCard';

type MachineFloorPanelProps = {
  washers: Machine[];
  dryers: Machine[];
};

type MachineSectionProps = {
  title: string;
  machines: Machine[];
  variant: 'washers' | 'dryers';
};

function MachineSection({ title, machines, variant }: MachineSectionProps) {
  return (
    <section className={`machine-section machine-section--${variant}`} aria-label={title}>
      <h3 className="machine-section__label">{title}</h3>
      <div className="machine-grid">
        {machines.map((machine) => (
          <MachineCard key={machine.id} machine={machine} />
        ))}
      </div>
    </section>
  );
}

export function MachineFloorPanel({ washers, dryers }: MachineFloorPanelProps) {
  return (
    <Card className="machine-panel">
      <div className="panel-heading">
        <h2 className="panel-heading__title">Machine floor</h2>
        <p className="panel-heading__subtitle">Live status from the counter tablet</p>
      </div>
      <MachineSection title="Washers" machines={washers} variant="washers" />
      <MachineSection title="Dryers" machines={dryers} variant="dryers" />
    </Card>
  );
}