import { devProjects } from '@/content/dev/projects';
import { DevProjectCard } from './DevProjectCard';

export function ProjectShowcase() {
  return (
    <ul className="flex flex-col gap-6" role="list">
      {devProjects.map((project) => (
        <li key={project.id}>
          <DevProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
