import type { TimelineEvent } from '../data/orderDetail';
import { Card } from './Card';

type ActivityTimelineProps = {
  events: TimelineEvent[];
};

export function ActivityTimeline({ events }: ActivityTimelineProps) {
  return (
    <Card className="detail-card timeline-card">
      <h2 className="section-title">Activity timeline</h2>
      <ol className="timeline-list">
        {events.map((event, index) => (
          <li key={event.text} className="timeline-item">
            <div className="timeline-marker" aria-hidden="true">
              <span className="timeline-dot" />
              {index < events.length - 1 && <span className="timeline-segment" />}
            </div>
            <p className="timeline-text">{event.text}</p>
          </li>
        ))}
      </ol>
    </Card>
  );
}