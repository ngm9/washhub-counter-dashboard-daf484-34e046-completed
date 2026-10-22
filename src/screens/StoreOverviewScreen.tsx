import { useState } from 'react';
import { Bell } from 'lucide-react';
import { CollectionPanel } from '../components/CollectionPanel';
import { KpiCard } from '../components/KpiCard';
import { MachineFloorPanel } from '../components/MachineFloorPanel';
import { SearchInput } from '../components/SearchInput';
import { TopBar } from '../components/TopBar';
import { collectionOrders, dryers, overviewKpis, washers } from '../data/overview';

export function StoreOverviewScreen() {
  const [search, setSearch] = useState('');

  return (
    <>
      <TopBar title="Store overview" subtitle="Downtown branch · Tue, Oct 19">
        <SearchInput
          label="Search orders or customers"
          placeholder="Search orders or customers"
          value={search}
          onChange={setSearch}
          variant="topbar"
        />
        <button type="button" className="notification-button" aria-label="Notifications">
          <Bell size={24} aria-hidden="true" />
        </button>
      </TopBar>

      <div className="screen-content overview-screen">
        <section className="kpi-grid" aria-label="Store KPIs">
          {overviewKpis.map((kpi) => (
            <KpiCard key={kpi.label} label={kpi.label} value={kpi.value} />
          ))}
        </section>

        <div className="overview-lower">
          <MachineFloorPanel washers={washers} dryers={dryers} />
          <CollectionPanel orders={collectionOrders} />
        </div>
      </div>
    </>
  );
}