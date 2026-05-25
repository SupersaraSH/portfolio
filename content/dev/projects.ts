export type DevProject = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  year: number;
  repoUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  youtubeUrl?: string;
  gallery?: string[];
  embedUrl?: string;
};

export const devProjects: DevProject[] = [
  {
    id: 'lynve',
    title: 'Lynve Aula Musical',
    description:
      'Sistema de gestión integral para una escuela de música: registro de alumnos y tutores, asignación a clases, informes diarios y comunicación por email.', // TODO: Sara puede ampliar
    tech: [
      'React 19',
      'React Router 7',
      'TypeScript',
      'Node.js',
      'Express',
      'MySQL',
      'Zod',
      'JWT',
    ],
    year: 2025,
    repoUrl: 'https://github.com/SupersaraSH/Lynve',
    liveUrl: undefined, // TODO: Sara añade URL de demo si existe
    imageUrl: '/images/dev/lynve_portada.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=Xu-k0LDXiHI&t=907s',
    gallery: [
      '/images/dev/lynve-gallery/Macbook-Air-1559x975.png',
      '/images/dev/lynve-gallery/Macbook-Air-1559x975(1).png',
      '/images/dev/lynve-gallery/Macbook-Air-1559x975(2).png',
      '/images/dev/lynve-gallery/Macbook-Air-1559x975(3).png',
      '/images/dev/lynve-gallery/Macbook-Air-1559x975(4).png',
      '/images/dev/lynve-gallery/Macbook-Air-1559x975(5).png',
      '/images/dev/lynve-gallery/Macbook-Air-1559x975(6).png',
      '/images/dev/lynve-gallery/Macbook-Air-1559x975(7).png',
      '/images/dev/lynve-gallery/Macbook-Air-1559x975(8).png',
      '/images/dev/lynve-gallery/Macbook-Air-1559x975(9).png',
      '/images/dev/lynve-gallery/Macbook-Air-1559x975(10).png',
      '/images/dev/lynve-gallery/Macbook-Air-1559x975(11).png',
      '/images/dev/lynve-gallery/Macbook-Air-1559x975(12).png',
      '/images/dev/lynve-gallery/Macbook-Air-1559x975(13).png',
      '/images/dev/lynve-gallery/Macbook-Air-1559x975(14).png',
      '/images/dev/lynve-gallery/Macbook-Air-1559x975(15).png',
      '/images/dev/lynve-gallery/Macbook-Air-155cv9x975.png',
      '/images/dev/lynve-gallery/mail.jpg',
    ],
  },
  {
    id: 'film-buff',
    title: 'Film Buff',
    description:
      'Film Buff es una red social para cinéfilos construida con Node.js y Express siguiendo una arquitectura MVC. Las vistas se renderizan en servidor con EJS y los datos persisten en MySQL con borrado lógico.La autenticación se gestiona con JWT almacenado en cookie httpOnly y las contraseñas se encriptan con bcrypt. Los formularios se validan con Zod y la subida de imágenes con Multer. Desplegada en Railway con el servidor Node.js y una base de datos MySQL como servicios independientes, con las variables de conexión inyectadas automáticamente por la plataforma.',
    tech: [
      'Node.js',
      'Express',
      'EJS',
      'MySQL',
      'Bootstrap 5',
      'JWT',
      'bcrypt',
      'multer',
      'nodemailer',
      'Zod',
    ],
    year: 2025,
    repoUrl: 'https://github.com/SupersaraSH/Film-Buff',
    imageUrl: '/images/dev/film-buff-portada.png',
    liveUrl: 'https://film-buff-production.up.railway.app',
  },
  {
    id: 'calculadora',
    title: 'Space Calculator',
    description:
      'Calculadora temática de Space Invaders construida en HTML, CSS y JavaScript vanilla, sin frameworks. El alienígena está construido con pixel art puro en CSS. Reacciona a cada operación: sus extremidades se mueven al calcular, se vuelve rojo con "GAME OVER" en caso de error, y reproduce sonidos arcade. Incluye música de fondo con toggle de play/pausa.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    year: 2025,
    imageUrl: '/images/dev/calculadora_portada.jpg',
    repoUrl: 'https://github.com/SupersaraSH/Space-Calculator',
    embedUrl: 'https://supersarash.github.io/Space-Calculator/',
  },
  {
    id: 'portfolio',
    title: 'Portfolio personal',
    description:
      'Esta misma web: portfolio de doble modo (rigger / developer) para mostrar mi trabajo en ambos campos.',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'Vercel'],
    year: 2025,
    repoUrl: 'https://github.com/SupersaraSH/portfolio',
    liveUrl: undefined, // TODO: Sara añade URL de Vercel
    imageUrl: '/images/dev/portfolio_portada.jpg',
  },
];
