import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import type { DevProject } from '@/content/dev/projects';

type DevProjectCardProps = {
  project: DevProject;
  priority?: boolean;
};

export function DevProjectCard({ project, priority = false }: DevProjectCardProps) {
  const href = `/dev/projects/${project.id}`;

  return (
    <article className="group border-2 border-navy bg-surface transition-colors hover:border-comment">
      {project.imageUrl && (
        project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block overflow-hidden group/demo"
            aria-label={`Ver demo de ${project.title}`}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={priority}
              className="w-full h-auto transition-transform duration-300 group-hover/demo:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-navy/75 flex flex-col items-center justify-center gap-2 opacity-0 group-hover/demo:opacity-100 transition-opacity duration-300">
              <span className="font-mono text-xl font-bold tracking-widest text-arcade-green uppercase">
                // VER DEMO
              </span>
              <span className="font-mono text-sm text-arcade-green/70 tracking-widest">
                ↗ abre en nueva pestaña
              </span>
            </div>
          </a>
        ) : (
          <Link href={href} tabIndex={-1} aria-hidden="true" className="block overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={priority}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-[0.99]"
            />
          </Link>
        )
      )}
      <div className="p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div>
            <Link href={href} className="transition-colors hover:text-comment">
              <h3 className="font-display text-xl font-bold text-navy">{project.title}</h3>
            </Link>
            <p className="mt-1 text-sm text-navy-muted">{project.year}</p>
          </div>
          <div className="flex shrink-0 gap-4">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-2 border-navy px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-navy transition-all hover:bg-navy hover:text-white"
              >
                {'// GitHub'}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            )}
          </div>
        </div>
        <p className="mt-4 leading-relaxed text-navy-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-comment transition-opacity hover:opacity-70"
        >
          {'// ver proyecto'} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
