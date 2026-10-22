import type { Garment } from '../data/orderDetail';
import { Card } from './Card';

type GarmentsCardProps = {
  garments: Garment[];
};

export function GarmentsCard({ garments }: GarmentsCardProps) {
  return (
    <Card className="detail-card garments-card">
      <h2 className="section-title">Garments and care tags</h2>
      <div className="garments-table" role="table" aria-label="Garments and care tags">
        <div className="garments-table__row garments-table__head" role="row">
          <span role="columnheader">ITEM</span>
          <span role="columnheader">CARE TAGS</span>
          <span role="columnheader">PRICE</span>
        </div>
        <div className="garments-table__body">
          {garments.map((garment) => (
            <div className="garments-table__row" role="row" key={`${garment.item}-${garment.price}`}>
              <span role="cell">{garment.item}</span>
              <span role="cell">{garment.careTags}</span>
              <span role="cell">{garment.price}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}