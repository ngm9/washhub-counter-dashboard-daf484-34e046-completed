import { Card } from './Card';

type InstructionsCardProps = {
  instructions: string[];
};

export function InstructionsCard({ instructions }: InstructionsCardProps) {
  return (
    <Card className="detail-card instructions-card">
      <h2 className="section-title">Special instructions</h2>
      <div className="instructions-card__body">
        {instructions.map((instruction) => (
          <p key={instruction}>{instruction}</p>
        ))}
      </div>
    </Card>
  );
}