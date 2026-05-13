import { VimeoEmbed } from './VimeoEmbed';
import { FilmList } from './FilmList';
import { reel } from '@/content/rigger/reel';
import { siteConfig } from '@/config/site';

export function RiggerView() {
  return (
    <div className="flex-1 bg-deep text-warm">

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <p className="mb-6 text-sm uppercase tracking-widest text-arcade-green">
          Character Rigger
        </p>
        <h1 className="font-display text-6xl font-bold leading-tight text-warm md:text-8xl">
          {siteConfig.name}
        </h1>
        <p className="mt-6 max-w-2xl text-base text-warm-muted">
          {/* TODO: Sara ajusta el tagline */}
          Más de 10 años construyendo personajes en animación 3D, películas, series y VFX.
        </p>
      </div>

      {/* Reel */}
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <VimeoEmbed url={reel.vimeoUrl} caption={reel.caption} />
      </div>

      {/* Créditos */}
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-12 font-display text-3xl font-bold text-warm">Créditos</h2>
        <FilmList />
      </div>

    </div>
  );
}
