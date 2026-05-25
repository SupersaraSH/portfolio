'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { PixelAlien } from '@/components/ui/PixelAlien';

export function Footer() {
  const pathname = usePathname();
  const isRigger = pathname.startsWith('/rigger');

  const linkClass = `font-mono text-xs uppercase tracking-widest transition-colors ${
    isRigger ? 'text-warm-muted hover:text-warm' : 'text-navy-muted hover:text-navy'
  }`;

  return (
    <footer className={`mt-auto border-t-2 transition-colors ${
      isRigger ? 'border-stroke-dark bg-deep' : 'border-navy'
    }`}>
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4 text-sm">
          <PixelAlien color="#00FF41" pixelSize={3} />
          <p className={isRigger ? 'text-warm-muted' : 'text-navy-muted'}>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
        <nav className="flex items-center gap-6 sm:hidden" aria-label="Navegación">
          <Link href="/about" className={linkClass}>// about</Link>
          <Link href="/contact" className={linkClass}>// contact</Link>
        </nav>
      </div>
    </footer>
  );
}
