'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';

type View = 'rigger' | 'dev';
const STORAGE_KEY = 'sara-view';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function useActiveView(): View {
  const pathname = usePathname();
  const [activeView, setActiveView] = useState<View>(siteConfig.primaryView);

  useIsomorphicLayoutEffect(() => {
    if (pathname.startsWith('/rigger')) {
      setActiveView('rigger');
    } else if (pathname.startsWith('/dev')) {
      setActiveView('dev');
    } else if (pathname === '/') {
      setActiveView(siteConfig.primaryView);
    } else {
      // /about, /contact — respetar preferencia del usuario
      const stored = localStorage.getItem(STORAGE_KEY) as View | null;
      if (stored === 'rigger' || stored === 'dev') {
        setActiveView(stored);
      }
    }
  }, [pathname]);

  return activeView;
}
