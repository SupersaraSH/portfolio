import { PageWrapper } from '@/components/layout/PageWrapper';
import { siteConfig } from '@/config/site';
import { cv } from '@/content/shared/cv';

type ContactRowProps = {
  label: string;
  href: string;
  text: string;
  external?: boolean;
};

function ContactRow({ label, href, text, external }: ContactRowProps) {
  return (
    <div className="flex flex-col gap-1 border-t border-stroke py-6 sm:flex-row sm:items-baseline sm:gap-16">
      <dt className="w-32 shrink-0 text-sm uppercase tracking-widest text-navy-muted">
        {label}
      </dt>
      <dd>
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="text-lg text-navy transition-colors hover:text-comment"
        >
          {text}
        </a>
      </dd>
    </div>
  );
}

export function ContactBlock() {
  return (
    <PageWrapper className="py-20">
      <p className="mb-6 text-sm font-bold uppercase tracking-widest text-comment">
        {'// contacto'}
      </p>
      <h1 className="text-4xl font-bold text-navy md:text-5xl">Contacto</h1>
      <dl className="mt-12 border-b border-stroke">
        <ContactRow
          label="E-mail"
          href={`mailto:${siteConfig.email}`}
          text={siteConfig.email}
        />
        <ContactRow
          label="LinkedIn"
          href={siteConfig.linkedin}
          text={siteConfig.linkedin.replace('https://', '')}
          external
        />
        <ContactRow
          label="GitHub"
          href={siteConfig.github}
          text={siteConfig.github.replace('https://', '')}
          external
        />
      </dl>
      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href={cv.path}
          download
          className="inline-flex items-center gap-2 bg-navy px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-comment"
        >
          Descargar CV
        </a>
        <a
          href={cv.path}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-2 border-navy px-8 py-3 text-sm font-medium text-navy transition-colors hover:border-comment hover:text-comment"
        >
          Ver CV
        </a>
      </div>
    </PageWrapper>
  );
}
