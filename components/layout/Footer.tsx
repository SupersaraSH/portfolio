import { siteConfig } from '@/config/site';
import { PixelAlien } from '@/components/ui/PixelAlien';

export function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-navy">
      <div className="mx-auto max-w-6xl px-6 py-8 flex items-center gap-4 text-sm text-navy-muted">
        <PixelAlien color="#00FF41" pixelSize={3} />
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
      </div>
    </footer>
  );
}
