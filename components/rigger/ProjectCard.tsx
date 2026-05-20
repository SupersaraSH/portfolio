import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import type { RiggerProject } from '@/content/rigger/projects';

type ProjectCardProps = {
  project: RiggerProject;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="h-full border border-arcade-green/40 bg-deep-surface flex flex-col">
      {project.imageUrl && (
        project.mediaUrl ? (
          <a
            href={project.mediaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative aspect-video w-full overflow-hidden group"
            aria-label={`Ver ${project.title}`}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              priority={priority}
              className="object-cover transition-opacity duration-300 group-hover:opacity-70"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </a>
        ) : (
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              priority={priority}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )
      )}
      <div className="p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div>
            <h3 className="font-display text-xl font-bold text-warm">{project.title}</h3>
            <p className="mt-1 text-sm text-warm-muted">
              {project.studio}
              {project.distributor && (
                <span className="text-arcade-green"> · {project.distributor}</span>
              )}
              {' · '}{project.year}
            </p>
          </div>
          <p className="shrink-0 text-sm text-arcade-green">{project.role}</p>
        </div>
{project.software.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.software.map((sw) => (
              <Badge key={sw} variant="dark">
                {sw}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
