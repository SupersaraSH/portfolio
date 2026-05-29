export type RiggerProject = {
  id: string;
  title: string;
  studio: string;
  distributor?: string;
  year: number;
  role: string;
  software: string[];
  description: string;
  mediaUrl?: string;
  imageUrl?: string;
};

// TODO: Sara rellena con sus créditos reales
export const riggerProjects: RiggerProject[] = [
  {
    id: 'proyecto-1',
    title: 'The Twits',
    distributor: 'Netflix',
    studio: 'MinimoVFX',
    year: 2023,
    role: 'Character Rigger',
    software: ['Maya', 'Python', 'Git', 'Github', 'Pycharm'],
    description:
      'Descripción breve del trabajo realizado y los retos técnicos afrontados.',
    mediaUrl: 'https://www.netflix.com/es/title/81612165',
    imageUrl: '/images/twits04.jpg',
  },
  {
    id: 'proyecto-2',
    title: 'Erste Group "Believe in Tomorrow"',
    distributor: 'Passion Pictures',
    studio: 'MinimoVFX',
    year: 2021,
    role: 'Character Rigger',
    software: ['Maya', 'Python', 'Git', 'Github', 'Pycharm'],
    description:
      'Descripción breve del trabajo realizado y los retos técnicos afrontados.',
    mediaUrl:
      'https://www.passion-animation.com/project/erste-group-believe-in-tomorrow/',
    imageUrl: '/images/erste01.jpg',
  },
  {
    id: 'proyecto-3',
    title: 'Diablo Immortal Cinematic Trailer',
    distributor: 'Blizzard Entertainment',
    studio: 'MinimoVFX',
    year: 2022,
    role: 'Character Rigger',
    software: ['Maya', 'Python', 'Git', 'Github', 'Pycharm'],
    description:
      'Descripción breve del trabajo realizado y los retos técnicos afrontados.',
    mediaUrl: 'https://www.youtube.com/watch?v=mfm0VHQJZxE',
    imageUrl: '/images/diablo01.jpg',
  },
  {
    id: 'proyecto-4',
    title: 'Star Atlas Cinematic Trailer',
    distributor: 'ATMTA',
    studio: 'MinimoVFX',
    year: 2021,
    role: 'Character Rigger',
    software: ['Maya', 'Python', 'Git', 'Github', 'Pycharm'],
    description:
      'Descripción breve del trabajo realizado y los retos técnicos afrontados.',
    mediaUrl: 'https://staratlas.com/',
    imageUrl: '/images/star-atlas01.jpg',
  },
  {
    id: 'proyecto-5',
    title: 'Spirit: Untamed',
    distributor: 'Jellyfish Pictures',
    studio: 'MinimoVFX',
    year: 2020,
    role: 'Character Rigger',
    software: ['Maya', 'Python', 'Git', 'Github', 'Pycharm'],
    description:
      'Descripción breve del trabajo realizado y los retos técnicos afrontados.',
    mediaUrl: 'https://www.imdb.com/es-es/title/tt11084896/',
    imageUrl: '/images/spirit.jpg',
  },
  {
    id: 'proyecto-6',
    title: 'The Addams Family',
    distributor: 'Cinesite',
    studio: 'MinimoVFX',
    year: 2019,
    role: 'Character Rigger',
    software: ['Maya', 'Python', 'Git', 'Github', 'Pycharm'],
    description:
      'Descripción breve del trabajo realizado y los retos técnicos afrontados.',
    mediaUrl: 'https://cinesite.com/the-addams-family/',
    imageUrl: '/images/addams.jpg',
  },
  {
    id: 'proyecto-7',
    title: 'Little Ox',
    distributor: 'Wenneker',
    studio: 'MinimoVFX',
    year: 2021,
    role: 'Character Rigger',
    software: ['Blender', 'Python'],
    description:
      'Descripción breve del trabajo realizado y los retos técnicos afrontados.',
    mediaUrl: 'https://www.imdb.com/es-es/title/tt15387434/?ref_=mv_sm',
    imageUrl: '/images/littleOx.jpg',
  },
  {
    id: 'proyecto-8',
    title: 'Gormiti',
    distributor: 'Giochi Preziosi',
    studio: 'Kotoc',
    year: 2018,
    role: 'Character Rigger',
    software: ['Maya', 'Python'],
    description:
      'Descripción breve del trabajo realizado y los retos técnicos afrontados.',
    mediaUrl: 'https://www.kotoc.cat/project/gormiti/',
    imageUrl: '/images/gormiti.jpg',
  },
  {
    id: 'proyecto-9',
    title: 'Mutant Busters',
    distributor: 'Netflix',
    studio: 'Kotoc',
    year: 2015,
    role: 'Character Rigger',
    software: ['Maya'],
    description:
      'Descripción breve del trabajo realizado y los retos técnicos afrontados.',
    mediaUrl: 'https://www.kotoc.cat/project/mutant-busters/',
    imageUrl: '/images/mutant.jpg',
  },
  {
    id: 'proyecto-10',
    title: 'Compare the Market',
    distributor: 'Passion Pictures',
    studio: 'MinimoVFX',
    year: 2022,
    role: 'Character Rigger',
    software: ['Maya', 'Python', 'Git', 'Github', 'Pycharm'],
    description:
      'Descripción breve del trabajo realizado y los retos técnicos afrontados.',
    mediaUrl: 'https://www.passion-pictures.com/project/compare-the-market',
    imageUrl: '/images/compare01.jpg',
  },
  {
    id: 'proyecto-11',
    title: 'Shangrila',
    distributor: 'Jellyfish Pictures',
    studio: 'MinimoVFX',
    year: 2019,
    role: 'Character Rigger',
    software: ['Maya', 'Python', 'Git', 'Github', 'Pycharm'],
    description:
      'Descripción breve del trabajo realizado y los retos técnicos afrontados.',
    mediaUrl: 'https://staratlas.com/',
    imageUrl: '/images/shangrila.jpg',
  },
  {
    id: 'proyecto-12',
    title: 'Nickelodeon Hype Train',
    distributor: 'Blue Zoo Animation Studio',
    studio: 'MinimoVFX',
    year: 2020,
    role: 'Character Rigger',
    software: ['Blender', 'Python'],
    description:
      'Descripción breve del trabajo realizado y los retos técnicos afrontados.',
    mediaUrl: 'https://staratlas.com/',
    imageUrl: '/images/train.jpg',
  },
];
