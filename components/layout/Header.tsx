'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { PageWrapper } from './PageWrapper';
import { ViewToggle } from './ViewToggle';

export function Header() {
  const pathname = usePathname();
  const isRigger = pathname.startsWith('/rigger');

  return (
    <header className={`sticky top-0 z-50 border-b-2 transition-colors ${
      isRigger
        ? 'border-stroke-dark bg-deep'
        : 'border-navy bg-surface'
    }`}>
      <PageWrapper className="flex items-center justify-between py-4">
        <Link
          href="/"
          className={`font-display text-xl font-bold transition-colors ${
            isRigger
              ? 'text-warm hover:text-arcade-green'
              : 'text-navy hover:text-comment'
          }`}
        >
          {siteConfig.name}
        </Link>
        <ViewToggle />
      </PageWrapper>
    </header>
  );
}
