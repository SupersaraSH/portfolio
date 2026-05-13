export type RiggerProject = {
  id: string;
  title: string;
  studio: string;
  year: number;
  role: string;
  software: string[];
  description: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
};

// TODO: Sara rellena con sus créditos reales
export const riggerProjects: RiggerProject[] = [
  {
    id: "proyecto-1",
    title: "Título de la película / serie", // TODO: Sara rellena
    studio: "Nombre del estudio", // TODO: Sara rellena
    year: 2024, // TODO: Sara rellena
    role: "Character Rigger", // TODO: Sara rellena (Lead, Senior…)
    software: ["Maya", "Python"], // TODO: Sara rellena
    description:
      "Descripción breve del trabajo realizado y los retos técnicos afrontados.", // TODO: Sara rellena
    mediaUrl: undefined, // TODO: URL de Vimeo o imagen si aplica
    thumbnailUrl: undefined, // TODO: Sara rellena
  },
  {
    id: "proyecto-2",
    title: "Título de la película / serie", // TODO: Sara rellena
    studio: "Nombre del estudio", // TODO: Sara rellena
    year: 2022, // TODO: Sara rellena
    role: "Character Rigger", // TODO: Sara rellena
    software: ["Maya", "Python"], // TODO: Sara rellena
    description:
      "Descripción breve del trabajo realizado y los retos técnicos afrontados.", // TODO: Sara rellena
    mediaUrl: undefined,
    thumbnailUrl: undefined,
  },
];
