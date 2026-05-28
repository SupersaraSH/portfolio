'use client';

import { useActiveView } from '@/hooks/useActiveView';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { siteConfig } from '@/config/site';
import { cv } from '@/content/shared/cv';
import { ContactForm } from '@/components/shared/ContactForm';

type ContactRowProps = {
  label: string;
  href: string;
  text: string;
  external?: boolean;
  isRigger: boolean;
};

function ContactRow({ label, href, text, external, isRigger }: ContactRowProps) {
  return (
    <div className={`flex flex-col gap-1 border-t py-6 sm:flex-row sm:items-baseline sm:gap-16 ${isRigger ? 'border-stroke-dark' : 'border-stroke'}`}>
      <dt className={`w-32 shrink-0 text-sm uppercase tracking-widest ${isRigger ? 'text-warm-muted' : 'text-navy-muted'}`}>
        {label}
      </dt>
      <dd>
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={`text-lg transition-colors ${isRigger ? 'text-warm hover:text-arcade-green' : 'text-navy hover:text-comment'}`}
        >
          {text}
        </a>
      </dd>
    </div>
  );
}

export function ContactBlock() {
  const isRigger = useActiveView() === 'rigger';

  return (
    <div className={`flex-1 transition-colors ${isRigger ? 'bg-deep text-warm' : 'bg-surface text-navy'}`}>
      <PageWrapper className="py-20">
        <p className={`mb-6 text-sm font-bold uppercase tracking-widest ${isRigger ? 'text-arcade-green' : 'text-comment'}`}>
          {'// contacto'}
        </p>
        <h1 className={`text-4xl font-bold md:text-5xl ${isRigger ? 'text-warm' : 'text-navy'}`}>Contacto</h1>
        <dl className={`mt-12 border-b ${isRigger ? 'border-stroke-dark' : 'border-stroke'}`}>
          <ContactRow
            label="E-mail"
            href={`mailto:${siteConfig.email}`}
            text={siteConfig.email}
            isRigger={isRigger}
          />
          <ContactRow
            label="LinkedIn"
            href={siteConfig.linkedin}
            text={siteConfig.linkedin.replace('https://', '')}
            external
            isRigger={isRigger}
          />
          <ContactRow
            label="GitHub"
            href={siteConfig.github}
            text={siteConfig.github.replace('https://', '')}
            external
            isRigger={isRigger}
          />
        </dl>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={cv.path}
            download
            className={`inline-flex items-center gap-2 px-8 py-3 text-sm font-medium transition-colors ${isRigger ? 'bg-warm text-deep hover:bg-arcade-green' : 'bg-navy text-white hover:bg-comment'}`}
          >
            Descargar CV
          </a>
          <a
            href={cv.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 border-2 px-8 py-3 text-sm font-medium transition-colors ${isRigger ? 'border-warm text-warm hover:border-arcade-green hover:text-arcade-green' : 'border-navy text-navy hover:border-comment hover:text-comment'}`}
          >
            Ver CV
          </a>
        </div>

        <div className="mt-20">
          <p className={`mb-6 text-sm font-bold uppercase tracking-widest ${isRigger ? 'text-arcade-green' : 'text-comment'}`}>
            {'// o escríbeme directamente'}
          </p>
          <ContactForm isRigger={isRigger} />
        </div>
      </PageWrapper>
    </div>
  );
}
