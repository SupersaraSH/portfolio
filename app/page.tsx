import { siteConfig } from '@/config/site';
import { RiggerView } from '@/components/rigger/RiggerView';
import { DevView } from '@/components/dev/DevView';

export default function Home() {
  return siteConfig.primaryView === 'rigger' ? <RiggerView /> : <DevView />;
}
