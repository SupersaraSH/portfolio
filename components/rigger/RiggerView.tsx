import { VimeoEmbed } from './VimeoEmbed';
import { FilmList } from './FilmList';
import { reel } from '@/content/rigger/reel';
import { siteConfig } from '@/config/site';

export function RiggerView() {
  return (
    <div className="flex-1 bg-deep text-warm">
      {/* Hero */}
      <div className="mx-auto max-w-6xl px-4 md:px-6 pb-8 pt-12 md:pt-20">
        <p className="mb-6 text-sm font-bold uppercase tracking-widest text-arcade-green">
          {'// character rigger'}
        </p>
        <h1 className="text-6xl font-bold leading-none text-warm md:text-8xl">
          {siteConfig.name}
        </h1>
        <p className="mt-8 text-base text-warm-muted">
          <span className="mr-2 text-arcade-green">{'>'}</span>
          {/* TODO: Sara ajusta el tagline */}
          Lead Rigging TD
          <span className="ml-0.5 inline-block text-arcade-green animate-[blink_1s_step-end_infinite]">
            _
          </span>
        </p>
      </div>

      {/* Reel */}
      <div className="mx-auto max-w-6xl px-4 md:px-6 pb-10 pt-8 md:pb-16 md:pt-10">
        <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-warm">
          {'// reel'}
        </h2>
        <div className="max-w-2xl">
          <VimeoEmbed url={reel.videoUrl} caption={reel.caption} />
        </div>
      </div>

      {/* Créditos */}
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-20">
        <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-warm">
          {'// créditos'}
        </h2>
        <FilmList />
      </div>
    </div>
  );
}
