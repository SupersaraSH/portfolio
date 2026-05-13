import { PageWrapper } from '@/components/layout/PageWrapper';
import { about } from '@/content/shared/about';

export function AboutBlock() {
  return (
    <PageWrapper className="py-20">
      <h1 className="font-display text-4xl font-bold leading-tight text-navy md:text-5xl">
        {about.headline}
      </h1>
      <div className="mt-12 max-w-2xl space-y-6">
        {about.bio.map((paragraph, i) => (
          <p key={i} className="text-lg leading-relaxed text-navy-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </PageWrapper>
  );
}
