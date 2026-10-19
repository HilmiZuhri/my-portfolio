import image from "../assets/image.png";
import { Project, SkillGroup, ExperienceItem, Testimonial } from './types';

export const PERSONAL_INFO = {
  name: 'Hilmi Zuhri',
  title: 'Web Developer',
  bio: 'A passionate developer focused on building performant, responsive, and user-friendly web experiences. I turn ideas into clean, maintainable interfaces using React, TypeScript, and modern web technologies, with a strong interest in full-stack development.',
  location: 'Malang, Indonesia (Available for Remote Work)',
  email: 'zuhri.hilmi@gmail.com',
  github: 'https://github.com/hilmizuhri',
  linkedin: 'https://www.linkedin.com/in/hilmi-zuhri-96b9a62b8',
  avatarInitials: 'HZ',
  experienceYears: 'WEB DEVELOPMENT',
  completedProjects: 'PROJECTS',
  coffeeConsumed: 'BASED IN',
};

export const PROJECTS: Project[] = [
  {
    id: 'TaskFlow',
    title: 'TaskFlow',
    shortDescription: 'A to-do list app designed to help you capture, organize, prioritize, and track your daily tasks and deadlines so you can manage your work and personal life more efficiently',
    detailedDescription: 'TaskFlow is a responsive task management application built to help users organize daily tasks, manage priorities, and track deadlines. Developed as a standalone frontend project, it features multiple task views, interactive task controls, and local data persistence for a streamlined task management experience.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'localstorage persistence', 'Motion/framer Motion'],
    role: 'Solo Project',
    duration: '2 Weeks (Current Iteration)',
    category: 'web-app',
    imageType: 'analytics',
    image: '/assets/image1.png',
    githubUrl: 'https://github.com/HilmiZuhri/Advanced-Todolist-App-v2',
    liveUrl: 'https://advanced-todolist-app-v2.vercel.app/',
    features: [
      'Adaptive User Interface & Aesthetic Design: responsive layouts, dark/light mode toggle, and smooth animations.',
      'Interactive Workspace Views: dual layout system with List View and Board View for task management.',
      'Task Reminders & Notification Engine: automatic deadline alerts and real-time status updates.',
      'Fully-Featured Task Creation & Editing: add, edit, delete, and prioritize tasks with intuitive drag-and-drop functionality.',
      'Advanced Search & Filter System: search tasks by keywords, filter by status, priority, or due date, and save custom views for quick access.'
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS 4', ':ucide React', 'Framer Motion', 'Local Storage']
  },
  {
    id: 'laptop-recommender-system',
    title: 'Laptop Recommendation System',
    shortDescription: 'An NLP-powered web application that predicts laptop categories from user requirements and displays relevant laptop options.',
    detailedDescription: 'Developed as an undergraduate thesis project, this web application combines FastText and Random Forest to process natural language input and predict suitable laptop categories. The system integrates a Flask API with a PHP-based web interface and retrieves matching laptop options from a JSON dataset based on the predicted category.',
    
    tags: ['Natural Language Processing', 'Web Development', 'Machine Learning'],
    role: 'Machine Learning & Web Developer',
    duration: '3 Months',
    category: 'tool',
    imageType: 'code-builder',
    image: '/assets/skripsi.png',
    githubUrl: 'https://github.com/HilmiZuhri/Laptop-recommender-system-using-FastText-and-Random-Forest',
    liveUrl: '#',
    features: [
    'Natural language input for describing laptop requirements.',
    'Text preprocessing to prepare user input for model inference.',
    'FastText sentence embeddings for numerical text representation.',
    'Random Forest classification to predict laptop categories.',
    'Flask REST API integration with a PHP-based web interface.',
    'Dynamic laptop listings retrieved from a JSON dataset based on the predicted category.'
  ],
    techStack: ['Python', 'JavaScript', 'CSS', 'FastText', 'Scikit-learn', 'Flask', 'PHP', 'HTML', 'JSON']
  },
  {
    id: 'zakiah-shop',
    title: 'Zakiah Shop',
    shortDescription: 'A POS cashier system with cloud-based transaction.',
    detailedDescription: 'This is a web-based Point of Sale (POS) cashier system that has cloud-based transaction and inventory management system that can be accessed anytime and anywhere thru a browser.',
    tags: ['React', 'Tailwind CSS', 'TypeScript', 'shadcn/ui'],
    role: 'Core Designer & Developer',
    duration: '4 Weeks',
    category: 'landing-page',
    imageType: 'ecommerce',
    image: '/assets/image.png',
    githubUrl: 'https://github.com/hilmizuhri/POS-Cashier',
    liveUrl: 'https://pos-cashier-one.vercel.app',
    features: [
      'Core Transaction Sales: product selection, cart management, and receipt generation.',
      'Inventory & Stock Management: add, edit, and remove products with real-time stock updates.',
      'Customer & Loyalty Management: track customer purchases and offer discounts or promotions.',
      'Employee Management: manage employee accounts and permissions for secure access to the system.',
      'Reporting & Analytics: generate sales reports, track revenue, and analyze business performance with visual charts and graphs.'
    ],
    techStack: ['React 19', 'Tailwind CSS v4', 'shadcn/ui', 'TypeScript']
  },
  {
    id: 'profile-website',
    title: 'Profile Website',
    shortDescription: 'A personal profile website showcasing skills and projects.',
    detailedDescription: 'A responsive personal profile website built with modern web technologies, featuring a clean design, CMS integration, and smooth user experience.',
    tags: ['React', 'Tailwind CSS', 'TypeScript', 'framer Motion', 'sanity.io'],
    role: 'Solo Project',
    duration: '1 Weeks',
    category: 'landing-page',
    imageType: 'ecommerce',
    image: '/assets/image0.png',
    githubUrl: 'https://github.com/hilmizuhri/Portfolio-zaidah',
    liveUrl: 'https://zaidah-izzawati.vercel.app',
    features: [
      'Dynamic Headless CMS Integration (Sanity.io): manage content and projects easily with a user-friendly interface.',
      'Interactive Case Studies & Deep-Dive Modals: showcase project details with smooth animations and transitions.',
      'Responsive Styling & Fluid Animations: ensure optimal viewing experience across devices with modern CSS techniques.'
    ],
    techStack: ['React 19', 'Tailwind CSS v4', 'framer Motion','sanity.io', 'TypeScript']
  },
  {
    id: 'company-profile',
    title: 'Company Profile Website',
    shortDescription: 'A responsive company profile website developed during an internship at PT Mutiara Alam Gumelar.',
    detailedDescription: 'A company profile website developed during a web development internship at PT Mutiara Alam Gumelar. The project involved building a responsive user interface using Bootstrap, implementing interactive elements with javasscript, and deploying the website to a hosting environtment.',
    tags: ['Bootstrap', 'Javascript', 'Web Development', 'Deployment'],
    role: 'Web Developer Intern',
    duration: '1 Months',
    category: 'landing-page',
    imageType: 'ecommerce',
    image: '/assets/intern.png',
    githubUrl: 'https://github.com/HilmiZuhri/PKL-Indirisma.git',
    liveUrl: 'https://hilmizuhri.github.io/PKL-Indirisma/',
    features: [
      'Responsive Website Design: built a responsive layout using Bootstrap to provide a consistent user experience across devices.',
      'Interactive User Interface: implemented interactive elements using JavaScript to enhance user engagement.',
      'Website Deployment: handled the deployment and hosting process to make the company website accessible online.'
    ],
    techStack: ['Bootstrap', 'Javascript']
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend-core',
    title: 'Front-End Development',
    skills: [
      { name: 'React', level: 90, category: 'frontend', yearsOfExp: 2 },
      { name: 'TypeScript', level: 85, category: 'frontend', yearsOfExp: 2 },
      { name: 'Javascript', level: 95, category: 'frontend', yearsOfExp: 2 },
      { name: 'Tailwind CSS', level: 92, category: 'frontend', yearsOfExp: 2 },
      { name: 'HTML5', level: 92, category: 'frontend', yearsOfExp: 2 },
      { name: 'CSS3', level: 90, category: 'frontend', yearsOfExp: 2 },
    ]
  },
  {
    id: 'tools-build',
    title: 'Backend & Development Tools',
    skills: [
      { name: 'Next.js', level: 80, category: 'tools-libs', yearsOfExp: 1 },
      { name: 'Node.js', level: 88, category: 'tools-libs', yearsOfExp: 2 },
      { name: 'Git & GitHub', level: 86, category: 'tools-libs', yearsOfExp: 2 },
      { name: 'Laravel', level: 85, category: 'tools-libs', yearsOfExp: 1 },
      { name: 'REST API', level: 90, category: 'tools-libs', yearsOfExp: 2 },
      { name: 'MySQL', level: 80, category: 'tools-libs', yearsOfExp: 1 },
    ]
  },
  {
    id: 'other-skills',
    title: 'Additional',
    skills: [
      { name: 'Machine Learning', level: 82, category: 'design-other', yearsOfExp: 2 },
      { name: 'Java', level: 88, category: 'design-other', yearsOfExp: 2 },
      { name: 'Python', level: 95, category: 'design-other', yearsOfExp: 2 },
      { name: 'Vite', level: 85, category: 'design-other', yearsOfExp: 2 },
      { name: 'Shad CN UI', level: 78, category: 'design-other', yearsOfExp: 1.5 },
      { name: 'Sanity CMS', level: 80, category: 'design-other', yearsOfExp: 1.5 },
    ]
  }
];

export const EXPERIENCE_HISTORY: ExperienceItem[] = [
  {
    id: 'exp-nexadigital',
    role: 'Front-End Engineer',
    company: 'NexaDigital Solutions',
    location: 'Jakarta, ID (Remote)',
    period: 'Mar 2024 - Present',
    description: [
      'Engineered and polished highly modular dashboard dashboards and CRM client hubs using React, TypeScript, and Tailwind, accelerating client dashboard speeds by 24%.',
      'Refactored legacy vanilla CSS components into single-file utility-driven classes, resulting in 40% smaller final bundle assets & clean design alignment.',
      'Partnered closely with product designers to assemble reusable interface patterns, achieving pixel-perfect implementation for interactive charts, complex lists, and interactive modals.'
    ],
    keyDeliveries: [
      'Developed and published a unified UI kit containing 30+ fully accessible states, now used across three key corporate products.',
      'Integrated real-time WebSocket messaging and analytical telemetry charts using Recharts for visual client reports.'
    ],
    skillsUsed: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Git', 'Figma']
  },
  {
    id: 'exp-innospark',
    role: 'Front-End Web Developer',
    company: 'InnoSpark Labs',
    location: 'Jakarta, ID (Hybrid)',
    period: 'Jul 2023 - Feb 2024',
    description: [
      'Designed, crafted, and animated high-conversion promo canvases, SaaS landing directories, and detailed technical documentation panels.',
      'Optimized browser rendering performance through asset lazy loading, image layout constraint setups, and responsive SVG sprites.',
      'Collaborated effectively within a 6-developer Scrum team, participating in sprint planners, pull request reviews, and system integration calls.'
    ],
    keyDeliveries: [
      'Successfully delivered a premium interactive landing ecosystem that grew active product sign-ups by 18% during an autumn catalog campaign.',
      'Implemented full keyboard accessibility (WCAG AA standard) for high-traffic public sign-up layouts.'
    ],
    skillsUsed: ['JavaScript (ES6)', 'React', 'HTML5 & CSS3', 'Tailwind CSS', 'Figma', 'Git']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'Lead UX Designer',
    company: 'NexaDigital Solutions',
    feedback: 'Hilmi possesses an extraordinary talent for translating high-fidelity static layouts into fluid, interactive, and beautifully clean React applications. His code is highly semantic and organized. He is always willing to push the boundaries of visual design.'
  },
  {
    id: 'test-2',
    name: 'Ahmad Faisal',
    role: 'Engineering Manager',
    company: 'InnoSpark Labs',
    feedback: 'During his tenure, Hilmi impressed the whole team with his commitment to high-quality code and lightning-fast developer velocity. His responsive templates are robust, and he takes visual testing seriously. He is a stellar addition to any engineering group.'
  }
];
