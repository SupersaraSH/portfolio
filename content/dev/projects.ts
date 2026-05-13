export type DevProject = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  year: number;
  repoUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
};

export const devProjects: DevProject[] = [
  {
    id: "lynve",
    title: "Lynve Aula Musical",
    description:
      "Sistema de gestión integral para una escuela de música: registro de alumnos y tutores, asignación a clases, informes diarios y comunicación por email.", // TODO: Sara puede ampliar
    tech: [
      "React 19",
      "React Router 7",
      "TypeScript",
      "Node.js",
      "Express",
      "MySQL",
      "Zod",
      "JWT",
    ],
    year: 2025,
    repoUrl: undefined, // TODO: Sara añade URL del repo si es público
    liveUrl: undefined, // TODO: Sara añade URL de demo si existe
    imageUrl: undefined, // TODO: Sara añade captura de pantalla
  },
  {
    id: "portfolio",
    title: "Portfolio personal",
    description:
      "Esta misma web: portfolio de doble modo (rigger / developer) con toggle persistente, temas claro y oscuro, y contenido en TypeScript.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Vercel"],
    year: 2025,
    repoUrl: undefined, // TODO: Sara añade URL del repo si es público
    liveUrl: undefined, // TODO: Sara añade URL de Vercel
    imageUrl: undefined,
  },
];
