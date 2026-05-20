import { skillCategories } from '@/content/dev/skills';

export function TechStack() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {skillCategories.map((cat) => (
        <div key={cat.category}>
          <h3 className="mb-3 text-2xl font-bold tracking-tight text-navy">
            {cat.category.toUpperCase()}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span
                key={skill}
                className="border border-navy/25 px-2.5 py-1 text-xs text-navy-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
