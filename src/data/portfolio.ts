import type { NavItem, SocialLink, Skill, Project, ContactInfo, PersonalInfo, Experience, Achievement } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Iaan Mesquita',
  title: 'Full-Stack Developer',
  tagline: 'FULL-STACK DEVELOPER',
  description: 'Passionate full-stack developer specializing in building exceptional digital experiences. I create responsive web applications with clean code and modern technologies.',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  bio: 'With over 5 years of experience in web development, I specialize in creating scalable and performant applications. My expertise spans across frontend frameworks like React and Vue.js, backend technologies including Node.js and Express, and cloud platforms such as AWS. I am passionate about writing clean, maintainable code and staying up-to-date with the latest industry trends.',
  resumeUrl: '/resume.pdf',
};

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:iaan@example.com',
    icon: 'mail',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/iaanmesquita',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/iaanmesquita',
    icon: 'linkedin',
  },
];

export const skills: Skill[] = [
  { name: 'React', category: 'Frontend', level: 90 },
  { name: 'TypeScript', category: 'Frontend', level: 85 },
  { name: 'Next.js', category: 'Frontend', level: 88 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 92 },
  { name: 'Node.js', category: 'Backend', level: 85 },
  { name: 'Express', category: 'Backend', level: 80 },
  { name: 'PostgreSQL', category: 'Backend', level: 75 },
  { name: 'MongoDB', category: 'Backend', level: 78 },
  { name: 'Docker', category: 'DevOps', level: 70 },
  { name: 'AWS', category: 'DevOps', level: 72 },
  { name: 'Git', category: 'Tools', level: 88 },
  { name: 'Figma', category: 'Design', level: 75 },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration, product management, and user authentication.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/iaanmesquita/ecommerce',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/iaanmesquita/taskmanager',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with real-time data, forecasts, and location-based weather information.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
    technologies: ['React', 'TypeScript', 'Weather API', 'Charts.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/iaanmesquita/weather',
  },
  {
    id: '4',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics with interactive charts and data visualization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    technologies: ['Vue.js', 'D3.js', 'Express', 'MySQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/iaanmesquita/socialdash',
  },
  {
    id: '5',
    title: 'Fitness Tracking App',
    description: 'Mobile-first fitness application for tracking workouts, nutrition, and progress over time.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop',
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/iaanmesquita/fitness',
  },
  {
    id: '6',
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support, SEO optimization, and content management.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'MDX', 'Tailwind', 'Vercel'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/iaanmesquita/blog',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Innovators Inc.',
    position: 'Senior Full-Stack Developer',
    location: 'São Paulo, Brazil',
    startDate: '2022-01',
    endDate: '',
    current: true,
    description: 'Leading development of enterprise-level web applications and mentoring junior developers.',
    responsibilities: [
      'Architected and developed scalable microservices using Node.js and React',
      'Led a team of 5 developers in agile environment',
      'Reduced application load time by 60% through optimization',
      'Implemented CI/CD pipelines reducing deployment time by 80%',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL'],
    logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop',
    companyUrl: 'https://example.com',
  },
  {
    id: '2',
    company: 'Digital Solutions Co.',
    position: 'Full-Stack Developer',
    location: 'Remote',
    startDate: '2020-03',
    endDate: '2021-12',
    current: false,
    description: 'Developed and maintained multiple client-facing web applications.',
    responsibilities: [
      'Built responsive web applications using React and Vue.js',
      'Developed RESTful APIs with Node.js and Express',
      'Collaborated with designers to implement pixel-perfect UIs',
      'Integrated third-party services and payment gateways',
    ],
    technologies: ['React', 'Vue.js', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=200&fit=crop',
    companyUrl: 'https://example.com',
  },
  {
    id: '3',
    company: 'StartUp Ventures',
    position: 'Frontend Developer',
    location: 'São Paulo, Brazil',
    startDate: '2018-06',
    endDate: '2020-02',
    current: false,
    description: 'Focused on creating modern and responsive user interfaces for startup products.',
    responsibilities: [
      'Developed single-page applications using React',
      'Implemented responsive designs with CSS3 and Sass',
      'Optimized web applications for maximum speed and scalability',
      'Worked closely with UX designers to implement user-friendly interfaces',
    ],
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'Redux'],
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop',
    companyUrl: 'https://example.com',
  },
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Best Web Application Award',
    description: 'Received recognition for developing the most innovative web application at Tech Summit 2023.',
    date: '2023-11',
    category: 'Awards',
    icon: '🏆',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&h=400&fit=crop',
    link: 'https://example.com/award',
  },
  {
    id: '2',
    title: 'Published Tech Article on Medium',
    description: 'Wrote an in-depth article about React performance optimization that gained over 10K views.',
    date: '2023-09',
    category: 'Publications',
    icon: '📝',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
    link: 'https://medium.com/@example',
  },
  {
    id: '3',
    title: 'Open Source Contributor',
    description: 'Made significant contributions to popular open-source projects with over 500+ commits.',
    date: '2023-08',
    category: 'Open Source',
    icon: '💻',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop',
    link: 'https://github.com/iaanmesquita',
  },
  {
    id: '4',
    title: 'AWS Certified Solutions Architect',
    description: 'Successfully obtained AWS Solutions Architect Associate certification.',
    date: '2023-06',
    category: 'Certifications',
    icon: '🎓',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
  },
  {
    id: '5',
    title: 'Hackathon Winner',
    description: 'Led a team to victory at the National Coding Hackathon 2023 with an AI-powered solution.',
    date: '2023-03',
    category: 'Competition',
    icon: '🥇',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
  },
  {
    id: '6',
    title: 'Tech Speaker at DevConf',
    description: 'Delivered a keynote speech on modern web development practices to an audience of 500+ developers.',
    date: '2022-12',
    category: 'Speaking',
    icon: '🎤',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop',
  },
];

export const contactInfo: ContactInfo = {
  email: 'iaan@example.com',
  phone: '+55 11 98765-4321',
  location: 'São Paulo, Brazil',
};

