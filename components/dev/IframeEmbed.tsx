'use client';

import { useState, useEffect } from 'react';

type IframeEmbedProps = {
  url: string;
  title: string;
};

export function IframeEmbed({ url, title }: IframeEmbedProps) {
  const [height, setHeight] = useState(400);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data?.iframeHeight && typeof e.data.iframeHeight === 'number') {
        setHeight(e.data.iframeHeight);
      }
    }
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  function handleLoad(e: React.SyntheticEvent<HTMLIFrameElement>) {
    const doc = e.currentTarget.contentDocument;
    if (doc) {
      setHeight(Math.max(doc.documentElement.scrollHeight, doc.body.scrollHeight));
    }
  }

  return (
    <figure className="w-full">
      <div className="w-full overflow-hidden border-2 border-navy">
        <iframe
          src={url}
          title={title}
          style={{ height: `${height}px` }}
          className="w-full"
          sandbox="allow-forms allow-modals allow-scripts allow-same-origin allow-popups"
          onLoad={handleLoad}
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
