type YouTubeEmbedProps = {
  url: string;
  caption?: string;
};

function getYouTubeId(url: string): string {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/);
  return match ? match[1] : '';
}

export function YouTubeEmbed({ url, caption }: YouTubeEmbedProps) {
  const id = getYouTubeId(url);

  if (!id) return null;

  return (
    <figure className="w-full">
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={caption ?? 'Demo del proyecto'}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-navy-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
