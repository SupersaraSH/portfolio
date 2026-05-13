import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { PageWrapper } from './PageWrapper';
import { ViewToggle } from './ViewToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-navy bg-white">
      <PageWrapper className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-display text-xl font-bold text-navy hover:text-arcade-green transition-colors"
        >
          {siteConfig.name}
        </Link>
        <ViewToggle />
      </PageWrapper>
    </header>
  );
}
