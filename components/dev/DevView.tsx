import { TechStack } from './TechStack';
import { ProjectShowcase } from './ProjectShowcase';
import { siteConfig } from '@/config/site';

export function DevView() {
  return (
    <div className="flex-1">

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <p className="mb-6 text-sm uppercase tracking-widest text-arcade-green">
          Web Developer
        </p>
        <h1 className="font-display text-6xl font-bold leading-tight text-navy md:text-8xl">
          {siteConfig.name}
        </h1>
        <p className="mt-6 max-w-2xl text-base text-navy-muted">
          {/* TODO: Sara ajusta el tagline */}
          Full Stack Developer.
        </p>
      </div>

      {/* Stack técnico */}
      <div className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-12 font-display text-3xl font-bold text-navy">Stack</h2>
          <TechStack />
        </div>
      </div>

      {/* Proyectos */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 font-display text-3xl font-bold text-navy">Proyectos</h2>
        <ProjectShowcase />
      </div>

    </div>
  );
}
