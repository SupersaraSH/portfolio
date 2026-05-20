import { VideoPlayer } from './VideoPlayer';

type VideoEmbedProps = {
  url: string;
  caption?: string;
};

function getVimeoId(url: string): string {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : '';
}

function isMp4(url: string): boolean {
  return url.endsWith('.mp4') || url.includes('.mp4?');
}

export function VimeoEmbed({ url, caption }: VideoEmbedProps) {
  if (isMp4(url)) {
    return <VideoPlayer src={url} caption={caption} />;
  }

  const id = getVimeoId(url);

  if (!id) {
    return (
      <figure className="mx-auto w-full max-w-3xl">
        <div className="aspect-video w-full rounded-lg border border-stroke-dark bg-deep-surface flex items-center justify-center">
          <p className="text-sm text-warm-muted">Reel — pendiente de añadir URL</p>
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
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&color=00FF41`}
          className="h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={caption ?? 'Demo reel — Sara Hoces'}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-warm-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
