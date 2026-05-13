type VimeoEmbedProps = {
  url: string;
  caption?: string;
};

function getVimeoId(url: string): string {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : '';
}

export function VimeoEmbed({ url, caption }: VimeoEmbedProps) {
  const id = getVimeoId(url);

  if (!id || id === '000000000') {
    return (
      <figure className="w-full">
        <div className="aspect-video w-full rounded-lg border border-stroke-dark bg-deep-surface flex items-center justify-center">
          <p className="text-sm text-warm-muted">
            {/* TODO: Sara rellena con URL real en content/rigger/reel.ts */}
            Reel — pendiente de añadir URL de Vimeo
          </p>
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
          src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&color=E8B620`}
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
