import { Badge } from '@/components/ui/Badge';
import type { DevProject } from '@/content/dev/projects';

type DevProjectCardProps = {
  project: DevProject;
};

export function DevProjectCard({ project }: DevProjectCardProps) {
  return (
    <article className="border-2 border-navy bg-surface p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div>
          <h3 className="font-display text-xl font-bold text-navy">{project.title}</h3>
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
              className="text-sm text-arcade-green transition-colors hover:text-navy"
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
    </article>
  );
}
