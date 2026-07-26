'use client';

import { useRef, useState } from 'react';

type VideoPlayerProps = {
  src: string;
  caption?: string;
};

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <polygon points="2,1 13,7 2,13" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <rect x="2" y="1" width="4" height="12" fill="currentColor" />
      <rect x="8" y="1" width="4" height="12" fill="currentColor" />
    </svg>
  );
}

function VolumeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M1 5v4h3l4 4V1L4 5H1z" fill="currentColor" />
      <path d="M10.5 7a3.5 3.5 0 0 0-2-3.14v6.28A3.5 3.5 0 0 0 10.5 7z" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function MutedIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M1 5v4h3l4 4V1L4 5H1z" fill="currentColor" />
      <path d="M9 5l4 4M13 5l-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function VideoPlayer({ src, caption }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => setHasError(true));
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  if (hasError) {
    return (
      <figure className="mx-auto w-full max-w-3xl">
        <div className="aspect-video w-full rounded-lg border border-stroke-dark bg-deep-surface flex items-center justify-center">
          <p className="text-sm text-warm-muted">Reel — vídeo no disponible ahora mismo</p>
        </div>
        {caption && (
          <figcaption className="mt-3 text-center text-sm text-warm-muted">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="w-full">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-deep">
        <video
          ref={videoRef}
          src={src}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setHasError(true)}
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-1 bg-linear-to-t from-deep/80 to-transparent px-4 pb-2 pt-10">
          <button
            onClick={togglePlay}
            className="flex items-center gap-2 text-arcade-green transition-opacity hover:opacity-70"
            aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
            <span className="font-mono text-sm uppercase tracking-widest">
              {isPlaying ? '// pause' : '// play'}
            </span>
          </button>
          <button
            onClick={toggleMute}
            className="flex items-center gap-2 text-arcade-green transition-opacity hover:opacity-70"
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            {isMuted ? <MutedIcon /> : <VolumeIcon />}
            <span className="font-mono text-sm uppercase tracking-widest">
              {isMuted ? '// sin sonido' : '// con sonido'}
            </span>
          </button>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-warm-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
