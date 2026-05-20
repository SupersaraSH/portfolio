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
        <Link href={href} tabIndex={-1} aria-hidden="true">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              priority={priority}
              className="object-cover transition-opacity group-hover:opacity-90"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Link>
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
                className="text-sm text-navy-muted transition-colors hover:text-navy"
              >
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-comment transition-colors hover:opacity-70"
              >
                Ver demo
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
