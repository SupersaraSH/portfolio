'use client';

import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { PixelAlien } from '@/components/ui/PixelAlien';

export function Footer() {
  const pathname = usePathname();
  const isRigger = pathname.startsWith('/rigger');

  return (
    <footer className={`mt-auto border-t-2 transition-colors ${
      isRigger ? 'border-stroke-dark bg-deep' : 'border-navy'
    }`}>
      <div className="mx-auto max-w-6xl px-6 py-8 flex items-center gap-4 text-sm">
        <PixelAlien color="#00FF41" pixelSize={3} />
        <p className={isRigger ? 'text-warm-muted' : 'text-navy-muted'}>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
