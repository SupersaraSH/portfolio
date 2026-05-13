import { skillCategories } from '@/content/dev/skills';
import { Badge } from '@/components/ui/Badge';

export function TechStack() {
  return (
    <div className="grid gap-10 sm:grid-cols-2">
      {skillCategories.map((cat) => (
        <div key={cat.category}>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-navy-muted">
            {cat.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
