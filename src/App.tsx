import { useState } from 'react';
import { AppLayout } from './components/AppLayout';
import { OrderDetailScreen } from './screens/OrderDetailScreen';
import { OrderQueueScreen } from './screens/OrderQueueScreen';
import { StoreOverviewScreen } from './screens/StoreOverviewScreen';
import type { NavTarget, ScreenId } from './types';

export default function App() {
  const [screen, setScreen] = useState<ScreenId>('overview');

  const activeNav: NavTarget = screen === 'overview' ? 'overview' : 'orders';

  const handleNavigate = (target: NavTarget) => {
    setScreen(target);
  };

  return (
    <AppLayout activeNav={activeNav} onNavigate={handleNavigate}>
      {screen === 'overview' && <StoreOverviewScreen />}
      {screen === 'orders' && <OrderQueueScreen onOpenOrder={() => setScreen('detail')} />}
      {screen === 'detail' && <OrderDetailScreen onBack={() => setScreen('orders')} />}
    </AppLayout>
  );
}