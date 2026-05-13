import { Badge } from '@/components/ui/Badge';
import type { RiggerProject } from '@/content/rigger/projects';

type ProjectCardProps = {
  project: RiggerProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border border-arcade-green/40 bg-deep-surface p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div>
          <h3 className="font-display text-xl font-bold text-warm">{project.title}</h3>
          <p className="mt-1 text-sm text-warm-muted">
            {project.studio} · {project.year}
          </p>
        </div>
        <p className="shrink-0 text-sm text-arcade-green">{project.role}</p>
      </div>
      <p className="mt-4 leading-relaxed text-warm-muted">{project.description}</p>
      {project.software.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.software.map((sw) => (
            <Badge key={sw} variant="dark">
              {sw}
            </Badge>
          ))}
        </div>
      )}
    </article>
  );
}
