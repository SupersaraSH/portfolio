export type About = {
  headline: string;
  bio: string[]; // cada string es un párrafo
};

export const about: About = {
  headline: 'Entre Rigger y Developer.',
  bio: [
    "No me voy a centrar en cómo una licenciada en Bellas Artes de Granada acaba en Barcelona de rigger (la parte más técnica de la animación 3D), por no hacer esto muy largo... Pero así fue y ahora llevo más de 10 años 'moviendo esqueletos' y trabajando en los proyectos más increíbles que hubiera soñado nunca. Creo que estos años me han dado mucha experiencia, no solo como profesional técnico, sino como parte de un equipo en el que todos debemos ir de la mano para que el proyecto salga adelante.",
    'En mi flujo normal de trabajo como rigger uso Maya o Blender, Python, Git, Github y Pycharm. Programar me encanta y necesitaba probarlo también en otros contextos, por eso decidí hacer un bootcamp de desarrollo web full stack en Socratech, que terminé en Marzo de este año, 2026.',
    "El bootcamp me permitió abrir horizontes y, en este proceso de cambio, la llegada de la IA me ha acabado de romper todos los esquemas. Antes de empezar tenía clarísimo que 'yo era de back' — la lógica pura es lo que más me atrae. Pero una vez dentro descubrí que el front también me engancha, así que aquí estoy, dispuesta a todo!!.",
    'Lo que sí tengo claro es cómo quiero trabajar: con la IA como herramienta real, no como atajo. Este portfolio lo construí con Claude Code y el proceso me enseñó algo que no esperaba: que saber programar bien no es menos importante cuando tienes un agente al lado, sino más. Para dirigirlo, para evaluar lo que propone, para saber cuándo tiene razón y cuándo no. Eso es lo que me interesa aprender: no solo el stack, sino cómo razonar con estas herramientas. Sin duda, aún nos queda mucho por descubrir, pero estoy emocionada por el camino que tenemos por delante.',
  ],
};
