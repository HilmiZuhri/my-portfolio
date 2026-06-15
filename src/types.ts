export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  tags: string[];
  role: string;
  duration: string;
  category: 'web-app' | 'landing-page' | 'tool' | 'interactive';
  imageType: 'analytics' | 'ecommerce' | 'saas' | 'code-builder';
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  techStack: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'frontend' | 'languages' | 'tools-libs' | 'design-other';
  yearsOfExp?: number;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  keyDeliveries: string[];
  skillsUsed: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl?: string;
  feedback: string;
}
