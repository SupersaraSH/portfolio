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
    id: 'portfolio',
    title: 'Portfolio personal',
    description:
      'Experimento para explorar el maravilloso mundo del desarrollo web asistido por IA, tema que me apasiona. Para ello he usado a Claude como agente en VS Code para crear esta web en la que poder mostrar tanto mi trabajo como rigger como mis primeros proyectos en desarrollo web mientras satisfacía mi curiosidad por los flujos de trabajo con IA generativa. Claude no solo me ha ayudado con el desarrollo sino que me ha ido enseñando todo el proceso, desde la elección de tecnologías hasta la implementación de funcionalidades específicas, lo que me ha permitido desarrollar criterio para formular prompts precisos y evaluar críticamente las propuestas del modelo.',
    tech: [
      'Next.js 16',
      'TypeScript',
      'Tailwind CSS 4',
      'AWS S3',
      'CloudFront',
      'Lambda',
      'SES',
      'Terraform',
      'Claude Code',
    ],
    year: 2025,
    repoUrl: 'https://github.com/SupersaraSH/portfolio',
    liveUrl: undefined, // TODO: añadir URL de CloudFront tras el deploy
    imageUrl: '/images/dev/portfolio_portada.jpg',
  },
  {
    id: 'lynve',
    title: 'Lynve Aula Musical',
    description:
      'Sistema de gestión integral para una escuela de música: registro de alumnos y tutores, asignación a clases, informes diarios y comunicación por email. Esta web es el resultado del proyecto final del bootcamp "Full Stack Web Developer" en Socratech. Fue realizada en equipo con el resto de compañeros del curso. No se nos permitió el uso de inteligencia artificial, por eso, al finalizar el curso cloné el proyecto y lo he estado usando como conejillo de indias para empezar a explorar las posibilidades que la IA ofrece. Depuré errores, implementé funcionalidades que se habían quedado pendientes (como un calendario con los horarios de las clases de cada profesor) y empecé a aprender cómo comunicarme con la IA y a hacer prompts válidos.',
    tech: [
      'React 19',
      'React Router 7',
      'JavaScript',
      'Vite',
      'Node.js',
      'Express',
      'MySQL',
      'Bootstrap 5',
      'JWT',
      'bcrypt',
      'Multer',
      'Nodemailer',
      'Zod',
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
      'Film Buff es una red social para cinéfilos, una web muy sencilla, con la que aprendí mucho en su momento (aunque ahora vea todas las cosas que le faltan...). Lo que la hace especial para mí es que fue la primera web que pude subir y compartir con mi familia y amigos a través de una url. En el hero puede verse una imagen de Jurassic Park, película muy especial para mí ya que marcó un antes y un después en el mundo de los VFX y la animación 3D. Está construida con Node.js y Express siguiendo una arquitectura MVC. Las vistas se renderizan en servidor con EJS y los datos persisten en MySQL con borrado lógico. La autenticación se gestiona con JWT almacenado en cookie httpOnly y las contraseñas se encriptan con bcrypt. Los formularios se validan con Zod y la subida de imágenes con Multer. Desplegada en Railway con el servidor Node.js y una base de datos MySQL como servicios independientes, con las variables de conexión inyectadas automáticamente por la plataforma.',
    tech: [
      'Node.js',
      'Express',
      'EJS',
      'MySQL',
      'Bootstrap 5',
      'JWT',
      'bcrypt',
      'Multer',
      'Cloudinary',
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
      'Calculadora temática de Space Invaders construida en HTML, CSS y JavaScript vanilla, sin frameworks (y sin nada más porque en el momento que la hice era lo que sabía). El alienígena está construido con pixel art puro en CSS. Reacciona a cada operación: sus extremidades se mueven al calcular, se vuelve rojo con "GAME OVER" en caso de error, y reproduce sonidos arcade. Incluye música de fondo con toggle de play/pausa. Está desplegada en GitHub Pages para que todo el mundo pueda probarla y... romperla!!!, así podré seguir mejorándola!!',
    tech: ['HTML', 'CSS', 'JavaScript'],
    year: 2025,
    imageUrl: '/images/dev/calculadora_portada.jpg',
    repoUrl: 'https://github.com/SupersaraSH/Space-Calculator',
    embedUrl: 'https://supersarash.github.io/Space-Calculator/',
  },
];
