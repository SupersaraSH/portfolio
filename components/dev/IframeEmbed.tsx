type IframeEmbedProps = {
  url: string;
  title: string;
};

export function IframeEmbed({ url, title }: IframeEmbedProps) {
  return (
    <figure className="w-full">
      <div className="w-full overflow-hidden border-2 border-navy">
        <iframe
          src={url}
          title={title}
          className="h-[700px] w-full"
          sandbox="allow-forms allow-modals allow-scripts allow-same-origin allow-popups"
        />
      </div>
      <figcaption className="mt-3 flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-widest text-navy-muted">
          {'// demo interactiva en vivo'}
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs uppercase tracking-widest text-comment transition-opacity hover:opacity-70"
        >
          {'abrir en nueva pestaña →'}
        </a>
      </figcaption>
    </figure>
  );
}
