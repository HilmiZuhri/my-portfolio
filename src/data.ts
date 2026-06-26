import image from "../assets/image.png";
import { Project, SkillGroup, ExperienceItem, Testimonial } from './types';

export const PERSONAL_INFO = {
  name: 'Hilmi Zuhri',
  title: 'Web Developer',
  bio: 'A passionate developer specializing in crafting premium, performant, and responsive web user interfaces. With 2+ years of professional front-end experience, I bridge the gap between design systems and semantic, maintainable code using React, TypeScript, and modern styling solutions.',
  location: 'Jakarta, Indonesia (Available for Remote Work)',
  email: 'zuhri.hilmi@gmail.com',
  github: 'https://github.com/hilmizuhri',
  linkedin: 'https://www.linkedin.com/in/hilmi-zuhri-96b9a62b8',
  avatarInitials: 'HZ',
  experienceYears: 2,
  completedProjects: 14,
  coffeeConsumed: '1,200+',
};

export const PROJECTS: Project[] = [
  {
    id: 'TaskFlow',
    title: 'TaskFlow',
    shortDescription: 'A to-do list app designed to help you capture, organize, prioritize, and track your daily tasks and deadlines so you can manage your work and personal life more efficiently',
    detailedDescription: 'TaskFlow is a highly polished, interactive task and workflow manager designed with a modern, responsive interface. It offers live status statistics, collapsible advanced search and filters, and a seamless dual-layout workspace (List View and Board View). Key highlight features include automatic deadline reminders and intuitive drag-and-drop mechanics to adjust task status or re-prioritize items in real-time.',
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
    techStack: ['React 19', 'TypeScript 5', 'Tailwind CSS v4', 'lucide-react', 'framer Motion', 'localStorage Persistence']
  },
  {
    id: 'aura-ui-sandbox',
    title: 'Aura UI Sandbox',
    shortDescription: 'A dynamic visual playground for inspecting and generating semantic, standard-compliant Tailwind CSS design variables.',
    detailedDescription: 'Aura UI Sandbox is an expert developer playground built to streamline UI prototyping. It provides direct, interactive knobs to tweak component typography, borders, shadows, and interactive state modifiers, instantly rendering standard CSS tailwind code snippets.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Canvas Renderer'],
    role: 'Frontend Architect',
    duration: '1 Month',
    category: 'tool',
    imageType: 'code-builder',
    githubUrl: 'https://github.com/hilmizuhri/aura-ui-canvas',
    liveUrl: '#',
    features: [
      'Real-time component generator showing interactive buttons, inputs, and cards.',
      'Dynamic variable control panel mimicking popular utility systems.',
      'Instant copy-to-clipboard system generating responsive, access-compliant HTML/Tailwind templates.',
      'Theme sandbox support (simulated high-contrast, emerald accents, neon glow, and pastel layouts).'
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'lucide-react', 'HTML5 Clipboard Web API']
  },
  {
    id: 'docucraft-editor',
    title: 'DocuCraft Workspace',
    shortDescription: 'A modern, split-view markdown editor and parser tailored for minimalist documentation workflows.',
    detailedDescription: 'DocuCraft is an organic, high-performance editor that allows technical authors to format docs on the fly. Built with client-side state managers, it guarantees instant previews, structural document outline generation, and seamless local autosaving.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Local Forage'],
    role: 'Lead Developer',
    duration: '3 Weeks',
    category: 'web-app',
    imageType: 'saas',
    githubUrl: 'https://github.com/hilmizuhri/docucraft',
    liveUrl: '#',
    features: [
      'Live markdown parser translating Markdown tags to modular, semantic HTML structures instantly.',
      'Autosave engine synchronizing draft snapshots locally using browser storage APIs.',
      'Word count, reading time calculator, and instant full-screen distraction-free mode.',
      'Outline visualizer dynamically compiling hierarchical sub-headers from active document lines.'
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'localStorage Persistence', 'lucide-react']
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
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend-core',
    title: 'Core Front-End Development',
    skills: [
      { name: 'React.js (v18-19)', level: 90, category: 'frontend', yearsOfExp: 2 },
      { name: 'TypeScript', level: 85, category: 'frontend', yearsOfExp: 2 },
      { name: 'Tailwind CSS (v3-v4)', level: 95, category: 'frontend', yearsOfExp: 2 },
      { name: 'HTML5 & Semantic SEO', level: 92, category: 'frontend', yearsOfExp: 2 },
      { name: 'CSS3 / Modern Layouts (Grid/Flex)', level: 90, category: 'frontend', yearsOfExp: 2 },
    ]
  },
  {
    id: 'tools-build',
    title: 'Frameworks Tools & Building',
    skills: [
      { name: 'Next.js (App Router)', level: 80, category: 'tools-libs', yearsOfExp: 1 },
      { name: 'Vite & esbuild', level: 88, category: 'tools-libs', yearsOfExp: 2 },
      { name: 'Git & GitHub Collaboration', level: 86, category: 'tools-libs', yearsOfExp: 2 },
      { name: 'Motion / Framer Motion', level: 85, category: 'tools-libs', yearsOfExp: 1 },
      { name: 'ShadCN UI', level: 90, category: 'tools-libs', yearsOfExp: 2 },
    ]
  },
  {
    id: 'other-skills',
    title: 'Other Skills',
    skills: [
      { name: 'Machine Learning Fundamentals', level: 82, category: 'design-other', yearsOfExp: 2 },
      { name: 'Java', level: 88, category: 'design-other', yearsOfExp: 2 },
      { name: 'Python', level: 95, category: 'design-other', yearsOfExp: 2 },
      { name: 'RESTful API Integration', level: 85, category: 'design-other', yearsOfExp: 2 },
      { name: 'Sanity Studio', level: 78, category: 'design-other', yearsOfExp: 1.5 },
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
