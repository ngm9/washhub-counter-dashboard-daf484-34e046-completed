import { useMemo, useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../components/Button';
import { OrderFilters } from '../components/OrderFilters';
import { OrdersTable } from '../components/OrdersTable';
import { StatusTabs } from '../components/StatusTabs';
import { TopBar } from '../components/TopBar';
import { orderStatuses, queueOrders, serviceFilters, type OrderStatus } from '../data/orders';

type OrderQueueScreenProps = {
  onOpenOrder: (orderId: string) => void;
};

export function OrderQueueScreen({ onOpenOrder }: OrderQueueScreenProps) {
  const [activeStatus, setActiveStatus] = useState<OrderStatus>('Received');
  const [search, setSearch] = useState('');
  const [selectedService, setSelectedService] = useState('All services');

  const visibleOrders = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return queueOrders.filter((order) => {
      const matchesStatus = order.status === activeStatus;
      const matchesService = selectedService === 'All services' || order.service === selectedService;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        order.id.toLowerCase().includes(normalizedSearch) ||
        order.customer.toLowerCase().includes(normalizedSearch);

      return matchesStatus && matchesService && matchesSearch;
    });
  }, [activeStatus, search, selectedService]);

  return (
    <>
      <TopBar title="Order queue" subtitle="Filter and manage active counter orders">
        <Button variant="primary" className="button--topbar" icon={<Plus size={20} aria-hidden="true" />}>
          New order
        </Button>
      </TopBar>

      <div className="screen-content queue-screen">
        <StatusTabs statuses={orderStatuses} activeStatus={activeStatus} onChange={setActiveStatus} />
        <OrderFilters
          search={search}
          onSearchChange={setSearch}
          selectedService={selectedService}
          services={serviceFilters}
          onServiceChange={setSelectedService}
        />
        <OrdersTable orders={visibleOrders} onOpenOrder={onOpenOrder} />
      </div>
    </>
  );
}