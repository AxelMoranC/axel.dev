// Single source of truth for personal details. Replace placeholders here
// before launch; every page reads from this file.
export const site = {
  name: 'Axel Moran Caballero',
  role: 'Software Engineer',
  description:
    'Software engineer building fast, thoughtful products for the web. Projects, experience and writing.',
  greeting: "Hi, I'm Axel.",
  headline: 'Software engineer building fast, thoughtful products for the web.',
  headlineAccent: 'thoughtful',
  intro: 'Placeholder intro. One or two sentences on what you build, who it is for, and what you care about.',
  email: 'hello@example.com',
  resumeUrl: '', // e.g. '/resume.pdf' once the file is in public/
  portrait: {
    src: 'https://picsum.photos/seed/axel-portrait/960/1200?grayscale',
    alt: 'Portrait placeholder',
  },
  socials: [
    { label: 'GitHub', href: 'https://github.com/AxelMoranC', icon: 'ph:github-logo' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/axel-moran-caballero-9324ab263/',
      icon: 'ph:linkedin-logo',
    },
  ],
} as const;

export const editor = {
  filename: 'axel.ts',
  code: `const axel = {
  role: 'Software Engineer',
  focus: ['web apps', 'performance'],
  stack: [
    'TypeScript', 'React', 'Python',
  ],
  currently: 'Placeholder.',
  learning: 'Placeholder.',
  openTo: ['interesting problems'],
};

export default axel;`,
  summary:
    'Axel is a software engineer focused on web apps and performance. His stack includes TypeScript, React and Python. Current work: Placeholder. Learning topic: Placeholder. He is open to interesting problems.',
} as const;

export const nav = [
  { label: 'Work', href: '/work' },
  { label: 'Projects', href: '/projects' },
  { label: 'Writing', href: '/writing' },
  { label: 'About', href: '/about' },
] as const;

export const education = [
  {
    school: 'Concordia University',
    degree: 'Bachelor of Computer Science',
    years: '20XX - 20XX',
    note: 'Placeholder. Add a concentration, honours, or relevant coursework.',
  },
];

export const skills = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C', 'C++', 'SQL'] },
  { group: 'Frameworks', items: ['React', 'Node.js', 'Spring Boot'] },
  { group: 'Tools', items: ['Firebase', 'Docker', 'Git'] },
];
