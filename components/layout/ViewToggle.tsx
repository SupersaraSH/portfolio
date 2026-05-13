'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';

type View = 'rigger' | 'dev';

const STORAGE_KEY = 'sara-view';

// useLayoutEffect runs before the browser paints, preventing visible state flashes.
// On the server it doesn't run, so we fall back to useEffect to avoid SSR warnings.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function getViewFromPathname(pathname: string): View | null {
  if (pathname.startsWith('/rigger')) return 'rigger';
  if (pathname.startsWith('/dev')) return 'dev';
  if (pathname === '/') return siteConfig.primaryView;
  return null; // /about, /contact — usar localStorage
}

function getEquivalentPath(currentPath: string, targetView: View): string {
  if (targetView === 'dev') {
    return currentPath.startsWith('/rigger')
      ? currentPath.replace('/rigger', '/dev')
      : '/dev';
  }
  return currentPath.startsWith('/dev')
    ? currentPath.replace('/dev', '/rigger')
    : '/rigger';
}

export function ViewToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeView, setActiveView] = useState<View>(siteConfig.primaryView);

  useIsomorphicLayoutEffect(() => {
    const pathView = getViewFromPathname(pathname);
    if (pathView) {
      setActiveView(pathView);
    } else {
      // Páginas compartidas (/about, /contact): respetar preferencia del usuario
      const stored = localStorage.getItem(STORAGE_KEY) as View | null;
      if (stored === 'rigger' || stored === 'dev') {
        setActiveView(stored);
      }
    }
  }, [pathname]);

  function handleToggle(view: View) {
    if (view === activeView) return;
    localStorage.setItem(STORAGE_KEY, view);
    setActiveView(view);
    router.push(getEquivalentPath(pathname, view));
  }

  return (
    <nav aria-label="Modo de visualización">
      <div className="flex items-center gap-0 border-2 border-navy bg-white">
        <button
          onClick={() => handleToggle('rigger')}
          aria-pressed={activeView === 'rigger'}
          className={`px-4 py-2 text-xs font-medium transition-colors ${
            activeView === 'rigger'
              ? 'bg-arcade-green text-deep'
              : 'text-navy-muted hover:text-navy hover:bg-surface'
          }`}
        >
          Rigger
        </button>
        <div className="w-0.5 self-stretch bg-navy" aria-hidden />
        <button
          onClick={() => handleToggle('dev')}
          aria-pressed={activeView === 'dev'}
          className={`px-4 py-2 text-xs font-medium transition-colors ${
            activeView === 'dev'
              ? 'bg-arcade-green text-deep'
              : 'text-navy-muted hover:text-navy hover:bg-surface'
          }`}
        >
          Developer
        </button>
      </div>
    </nav>
  );
}
