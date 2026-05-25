'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

type Props = {
  images: string[];
  title: string;
  liveUrl?: string;
};

type Dims = { w: number; h: number };

export function ProjectImageViewer({ images, title, liveUrl }: Props) {
  const [current, setCurrent] = useState(0);
  const [dims, setDims] = useState<Record<string, Dims>>({});
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Carga las dimensiones naturales de todas las imágenes una sola vez
  useEffect(() => {
    images.forEach((src) => {
      if (dims[src]) return;
      const img = new window.Image();
      img.onload = () =>
        setDims((prev) => ({ ...prev, [src]: { w: img.naturalWidth, h: img.naturalHeight } }));
      img.src = src;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  useEffect(() => {
    thumbRefs.current[current]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [current]);

  function prev() { setCurrent((c) => (c - 1 + images.length) % images.length); }
  function next() { setCurrent((c) => (c + 1) % images.length); }
  const pad = (n: number) => String(n).padStart(2, '0');

  const cur = dims[images[current]];

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-start">

      {/* Imagen principal + controles */}
      <div className="min-w-0 flex-1">

        {/* Marco terminal Windows */}
        <div className="border-2 border-navy">
          <div className="flex items-center justify-between border-b-2 border-navy px-3 py-1.5">
            <span className="font-mono text-xs text-navy">{title}</span>
            <div className="flex items-center gap-1">
              <span className="flex h-4 w-5 items-center justify-center border border-navy font-mono text-[10px] leading-none text-navy">─</span>
              <span className="flex h-4 w-5 items-center justify-center border border-navy font-mono text-[10px] leading-none text-navy">□</span>
              <span className="flex h-4 w-5 items-center justify-center border border-navy font-mono text-[10px] leading-none text-navy">✕</span>
            </div>
          </div>

          {/*
            Alto fijo vía aspect-ratio: 1559/975 (los MacBook, que son la mayoría).
            Esos llenan el marco exacto. Imágenes con otras proporciones se centran
            con algo de espacio vertical — inevitable al mezclar ratios distintos.
          */}
          {liveUrl && current === 0 ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver demo de ${title}`}
              className="group/demo relative flex w-full items-center justify-center overflow-hidden bg-surface"
              style={{ aspectRatio: '1559/975' }}
            >
              {cur && (
                <div style={{ width: `min(${cur.w}px, 100%)` }}>
                  <Image
                    key={images[current]}
                    src={images[current]}
                    alt={`${title} — captura ${current + 1}`}
                    width={cur.w}
                    height={cur.h}
                    sizes="(max-width: 1280px) 75vw, 900px"
                    priority
                    className="block h-auto w-full transition-transform duration-300 group-hover/demo:scale-[1.02]"
                  />
                </div>
              )}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-navy/75 opacity-0 transition-opacity duration-300 group-hover/demo:opacity-100">
                <span className="font-mono text-xl font-bold uppercase tracking-widest text-arcade-green">
                  // VER DEMO
                </span>
                <span className="font-mono text-sm tracking-widest text-arcade-green/70">
                  ↗ abre en nueva pestaña
                </span>
              </div>
            </a>
          ) : (
            <div
              className="relative flex w-full items-center justify-center bg-surface"
              style={{ aspectRatio: '1559/975' }}
            >
              {cur && (
                <div style={{ width: `min(${cur.w}px, 100%)` }}>
                  <Image
                    key={images[current]}
                    src={images[current]}
                    alt={`${title} — captura ${current + 1}`}
                    width={cur.w}
                    height={cur.h}
                    sizes="(max-width: 1280px) 75vw, 900px"
                    priority={current === 0}
                    className="block h-auto w-full"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Controles de navegación */}
        {images.length > 1 && (
          <div className="mt-3 flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Imagen anterior"
              className="flex h-8 w-14 items-center justify-center border-2 border-navy font-mono text-sm text-navy transition-opacity hover:opacity-60"
            >
              ◄◄
            </button>
            <span className="font-mono text-xs text-navy-muted">
              {pad(current + 1)} / {pad(images.length)}
            </span>
            <button
              onClick={next}
              aria-label="Imagen siguiente"
              className="flex h-8 w-14 items-center justify-center border-2 border-navy font-mono text-sm text-navy transition-opacity hover:opacity-60"
            >
              ►►
            </button>
          </div>
        )}
      </div>

      {/* Tira de miniaturas — fila en mobile, columna en md+ */}
      {images.length > 1 && (
        <div className="flex flex-row gap-2 overflow-x-auto md:w-28 md:shrink-0 md:flex-col md:overflow-x-hidden md:overflow-y-auto md:max-h-152 [&::-webkit-scrollbar]:hidden">
          {images.map((img, i) => {
            const d = dims[img];
            return (
              <button
                key={i}
                ref={(el) => { thumbRefs.current[i] = el; }}
                onClick={() => setCurrent(i)}
                aria-label={`Ver captura ${i + 1}`}
                className={`block w-20 shrink-0 cursor-pointer border-2 transition-all md:w-full ${
                  i === current
                    ? 'border-navy opacity-100'
                    : 'border-transparent opacity-40 hover:border-navy/40 hover:opacity-90'
                }`}
              >
                {d ? (
                  <Image
                    src={img}
                    alt={`Captura ${i + 1}`}
                    width={d.w}
                    height={d.h}
                    sizes="(max-width: 768px) 80px, 112px"
                    className="block h-auto w-full"
                  />
                ) : (
                  <div className="aspect-video w-full bg-stroke" />
                )}
              </button>
            );
          })}
        </div>
      )}

    </div>
  );
}
