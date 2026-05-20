import { riggerProjects } from '@/content/rigger/projects';
import { ProjectCard } from './ProjectCard';

export function FilmList() {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2" role="list">
      {riggerProjects.map((project, index) => (
        <li key={project.id} className="flex flex-col">
          <ProjectCard project={project} priority={index < 4} />
        </li>
      ))}
    </ul>
  );
}
