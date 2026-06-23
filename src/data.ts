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
    id: 'devflow-dashboard',
    title: 'DevFlow Dashboard',
    shortDescription: 'An interactive productivity workspace for developers, featuring real-time telemetry, visual work logs, and performance metrics.',
    detailedDescription: 'DevFlow is a developer-centric command dashboard with beautiful visualizations, rich widget workspaces, and task timers. It enables users to audit their coding intervals, manage active sprints, and view local server health telemetry within an elegant, performance-tuned environment.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Motion'],
    role: 'Lead Creator',
    duration: '2 Months (Current Iteration)',
    category: 'web-app',
    imageType: 'analytics',
    githubUrl: 'https://github.com/hilmizuhri/devflow-board',
    liveUrl: '#',
    features: [
      'Interactive Git commit log parser and time-series productivity graph.',
      'Custom Pomodoro focus routine block with built-in ambient workspace sounds simulated state.',
      'Active developer checklist and drag-reorder sprint columns.',
      'Local CPU and RAM load visualization simulator using standard Web APIs.'
    ],
    techStack: ['React 19', 'TypeScript 5', 'Tailwind CSS v4', 'Recharts', 'lucide-react', 'motion/react']
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
    id: 'zenith-print-shop',
    title: 'Zenith Fine Print Shop',
    shortDescription: 'An immersive digital retail catalog featuring advanced grid positioning and visual cart mechanics.',
    detailedDescription: 'Zenith is a conceptual shopping platform specializing in high-contrast typographic posters and art prints. Built to demonstrate advanced masonry layouts, custom sorting queries, clean cart animations, and cohesive aesthetic alignments.',
    tags: ['React', 'Tailwind CSS', 'E-Commerce State'],
    role: 'Core Designer & Developer',
    duration: '4 Weeks',
    category: 'landing-page',
    imageType: 'ecommerce',
    githubUrl: 'https://github.com/hilmizuhri/zenith-shop',
    liveUrl: '#',
    features: [
      'Fluid visual filter pipeline based on pricing, orientation, and color spectrums.',
      'Full stateful slide-out cart supporting items quantity updates and interactive price tallies.',
      'Form-validated step-by-step dummy shipping checkout simulation.',
      'Staggered masonry graphic cards with high-contrast animations and responsive columns.'
    ],
    techStack: ['React 19', 'Tailwind CSS v4', 'lucide-react', 'motion/react Client State']
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
      { name: 'Web Vitals Performance Audit', level: 78, category: 'design-other', yearsOfExp: 1.5 },
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
