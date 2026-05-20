import { devProjects } from '@/content/dev/projects';
import { DevProjectCard } from './DevProjectCard';

export function ProjectShowcase() {
  return (
    <ul className="flex flex-col gap-12" role="list">
      {devProjects.map((project, index) => (
        <li key={project.id}>
          <DevProjectCard project={project} priority={index === 0} />
        </li>
      ))}
    </ul>
  );
}
