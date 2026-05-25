import { TechStack } from './TechStack';
import { ProjectShowcase } from './ProjectShowcase';
import { siteConfig } from '@/config/site';

export function DevView() {
  return (
    <div className="flex-1">

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-4 md:px-6 pb-10 pt-12 md:pb-16 md:pt-20">
        <p className="mb-6 text-sm font-bold uppercase tracking-widest text-comment">
          {'// web developer'}
        </p>
        <h1 className="text-6xl font-bold leading-none text-navy md:text-8xl">
          {siteConfig.name}
        </h1>
        <p className="mt-8 text-base text-navy">
          <span className="mr-2 text-comment">{'>'}</span>
          {/* TODO: Sara ajusta el tagline */}
          Full Stack Developer
          <span className="ml-0.5 inline-block text-comment animate-[blink_1s_step-end_infinite]">_</span>
        </p>
      </div>

      <div className="border-t border-stroke" />

      {/* Stack técnico */}
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-20">
        <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-comment">{'// stack'}</h2>
        <TechStack />
      </div>

      <div className="border-t border-stroke" />

      {/* Proyectos */}
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-20">
        <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-comment">{'// proyectos'}</h2>
        <ProjectShowcase />
      </div>

    </div>
  );
}
