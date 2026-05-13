import { riggerProjects } from '@/content/rigger/projects';
import { ProjectCard } from './ProjectCard';

export function FilmList() {
  return (
    <ul className="flex flex-col gap-6" role="list">
      {riggerProjects.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
