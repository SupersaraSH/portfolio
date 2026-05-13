export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React 19",
      "Next.js 16",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS 4",
      "Bootstrap 5",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST API", "JWT", "Nodemailer", "Multer"],
  },
  {
    category: "Base de datos",
    skills: ["MySQL", "SQL"],
  },
  {
    category: "Herramientas",
    skills: ["Git", "GitHub", "Vite", "Zod", "Vercel"],
  },
];
