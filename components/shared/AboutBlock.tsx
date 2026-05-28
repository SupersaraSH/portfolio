'use client';

import Image from 'next/image';
import { useActiveView } from '@/hooks/useActiveView';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { about } from '@/content/shared/about';

export function AboutBlock() {
  const isRigger = useActiveView() === 'rigger';

  const borderColor = isRigger ? 'border-warm' : 'border-navy';
  const textColor = isRigger ? 'text-warm' : 'text-navy';

  return (
    <div
      className={`flex-1 transition-colors ${isRigger ? 'bg-deep text-warm' : 'bg-surface text-navy'}`}
    >
      <PageWrapper className="py-20">
        <p
          className={`mb-6 text-sm font-bold uppercase tracking-widest ${isRigger ? 'text-arcade-green' : 'text-comment'}`}
        >
          {'// sobre mí'}
        </p>

        {/* Foto flotada a la derecha — el texto fluye a su lado y debajo */}
        <div
          className={`float-right mb-10 ml-10 border-2 w-full md:w-72 ${borderColor}`}
        >
          <div
            className={`flex items-center justify-between border-b-2 px-3 py-1.5 ${isRigger ? 'bg-warm' : 'border-navy'}`}
          >
            <span
              className={`font-mono text-xs ${isRigger ? 'text-deep' : 'text-navy'}`}
            >
              sara_hoces.jpg
            </span>
            <div className="flex items-center gap-1">
              <span
                className={`flex h-4 w-5 items-center justify-center border font-mono text-[10px] leading-none ${isRigger ? 'border-deep text-deep' : 'border-navy text-navy'}`}
              >
                ─
              </span>
              <span
                className={`flex h-4 w-5 items-center justify-center border font-mono text-[10px] leading-none ${isRigger ? 'border-deep text-deep' : 'border-navy text-navy'}`}
              >
                □
              </span>
              <span
                className={`flex h-4 w-5 items-center justify-center border font-mono text-[10px] leading-none ${isRigger ? 'border-deep text-deep' : 'border-navy text-navy'}`}
              >
                ✕
              </span>
            </div>
          </div>
          <Image
            src="/images/yo_minimo02.jpg"
            alt="Sara Hoces"
            width={288}
            height={360}
            className="block w-full object-cover"
            priority
          />
        </div>

        <h1
          className={`text-4xl font-bold leading-tight md:text-5xl ${textColor}`}
        >
          {about.headline}
        </h1>
        <div className="mt-12 space-y-6">
          {about.bio.map((paragraph, i) => (
            <p
              key={i}
              className={`text-lg leading-relaxed ${isRigger ? 'text-warm-muted' : 'text-navy-muted'}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="clear-both" />
      </PageWrapper>
    </div>
  );
}
