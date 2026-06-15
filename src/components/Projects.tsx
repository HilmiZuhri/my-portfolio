import React, { useState } from 'react';
import { FolderKanban, Github, ExternalLink, X, Check, Code, Sparkles, Heart } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  // Render a custom high-fidelity SVG graphic representation for each project type
  const renderProjectGraphic = (imageType: Project['imageType']) => {
    switch (imageType) {
      case 'analytics':
        return (
          <div className="w-full h-44 bg-slate-950 relative overflow-hidden flex items-center justify-center border-b border-slate-800/60 p-4">
            <div className="absolute inset-0 opacity-[0.03] bg-grid" />
            <svg viewBox="0 0 400 180" className="w-full h-full text-brand-blue" xmlns="http://www.w3.org/2000/svg">
              {/* Grid Lines */}
              <line x1="50" y1="20" x2="350" y2="20" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
              <line x1="50" y1="60" x2="350" y2="60" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
              <line x1="50" y1="100" x2="350" y2="100" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
              <line x1="50" y1="140" x2="350" y2="140" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
              <line x1="50" y1="20" x2="50" y2="140" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
              <line x1="150" y1="20" x2="150" y2="140" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
              <line x1="250" y1="20" x2="250" y2="140" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
              <line x1="350" y1="20" x2="350" y2="140" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
              
              {/* Chart Line - gradient */}
              <path
                d="M 50 120 Q 100 60 150 90 T 255 40 T 350 70"
                fill="none"
                stroke="url(#blue-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                className="animate-pulse"
                style={{ animationDuration: '4s' }}
              />
              
              {/* Under-shadow fill */}
              <path
                d="M 50 120 Q 100 60 150 90 T 255 40 T 350 70 L 350 140 L 50 140 Z"
                fill="url(#blue-area)"
                opacity="0.1"
              />

              {/* Data points */}
              <circle cx="150" cy="90" r="5" fill="#3B82F6" stroke="#fff" strokeWidth="1.5" />
              <circle cx="255" cy="40" r="5" fill="#06B6D4" stroke="#fff" strokeWidth="1.5" />
              <circle cx="350" cy="70" r="5" fill="#3B82F6" stroke="#fff" strokeWidth="1.5" />

              <defs>
                <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="blue-area" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute top-3 left-3 bg-brand-blue/15 text-brand-blue font-mono text-[9px] px-2 py-0.5 rounded border border-brand-blue/20">
              charts.tsx
            </div>
          </div>
        );
      case 'code-builder':
        return (
          <div className="w-full h-44 bg-slate-950 relative overflow-hidden flex items-center justify-center border-b border-slate-800/60 p-4 font-mono text-[10px]">
            <div className="w-full space-y-1.5 opacity-90">
              <div className="flex gap-2 text-slate-500">
                <span>01</span>
                <span><span className="text-purple-400">import</span> &#123; <span className="text-blue-300">Aura</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">"aura-ui"</span>;</span>
              </div>
              <div className="flex gap-2 text-slate-500">
                <span>02</span>
                <span><span className="text-amber-400">export default function</span> <span className="text-blue-400">Sandbox</span>() &#123;</span>
              </div>
              <div className="flex gap-2 text-slate-500">
                <span>03</span>
                <span className="pl-4">return &lt;<span className="text-teal-400 font-bold">Button</span> <span className="text-amber-300">variant</span>=<span className="text-emerald-400">"neon"</span>&gt;</span>
              </div>
              <div className="flex gap-2 text-slate-500">
                <span>04</span>
                <span className="pl-8 text-neutral-300 font-bold">Build Aura</span>
              </div>
              <div className="flex gap-2 text-slate-500">
                <span>05</span>
                <span className="pl-4">&lt;/<span className="text-teal-400">Button</span>&gt;;</span>
              </div>
              <div className="flex gap-2 text-slate-500">
                <span>06</span>
                <span>&#125;</span>
              </div>
            </div>
            
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-brand-cyan/15 text-brand-cyan font-mono text-[9px] px-2 py-0.5 rounded border border-brand-cyan/20">
              <span>Preview</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
            </div>
          </div>
        );
      case 'saas':
        return (
          <div className="w-full h-44 bg-slate-950 relative overflow-hidden flex items-center justify-center border-b border-slate-800/60 p-4">
            <svg viewBox="0 0 400 180" className="w-full h-full text-slate-700" xmlns="http://www.w3.org/2000/svg">
              {/* Document/Editor Outline */}
              <rect x="60" y="20" width="280" height="140" rx="8" fill="#090d16" stroke="#1e293b" strokeWidth="2" />
              
              {/* Left text editor lines */}
              <line x1="85" y1="45" x2="210" y2="45" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
              <line x1="85" y1="65" x2="180" y2="65" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
              <line x1="85" y1="85" x2="230" y2="85" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
              <line x1="85" y1="105" x2="140" y2="105" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
              <line x1="85" y1="125" x2="200" y2="125" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
              
              {/* Right Outline Sidebar panel */}
              <rect x="250" y="35" width="75" height="110" rx="4" fill="#0c1222" stroke="#1e293b" />
              <circle cx="265" cy="50" r="4" fill="#3B82F6" />
              <line x1="275" y1="50" x2="310" y2="50" stroke="#475569" strokeWidth="2.5" />
              
              <circle cx="265" cy="70" r="4" fill="#06B6D4" />
              <line x1="275" y1="70" x2="315" y2="70" stroke="#475569" strokeWidth="2.5" />

              <circle cx="265" cy="90" r="4" fill="#8B5CF6" />
              <line x1="275" y1="90" x2="305" y2="90" stroke="#334155" strokeWidth="2.5" />
            </svg>
            <div className="absolute top-3 left-3 bg-brand-purple/15 text-brand-purple font-mono text-[9px] px-2 py-0.5 rounded border border-brand-purple/20">
              markdown.ts
            </div>
          </div>
        );
      case 'ecommerce':
        return (
          <div className="w-full h-44 bg-slate-950 relative overflow-hidden flex items-center justify-center border-b border-slate-800/60 p-4">
            <svg viewBox="0 0 400 180" className="w-full h-full text-slate-700" xmlns="http://www.w3.org/2000/svg">
              {/* Product Store layout cards list */}
              <rect x="40" y="30" width="80" height="120" rx="6" fill="#0c1222" stroke="#1e293b" />
              <rect x="50" y="40" width="60" height="60" rx="3" fill="#1e293b" />
              <line x1="50" y1="110" x2="90" y2="110" stroke="#475569" strokeWidth="3" />
              <line x1="50" y1="125" x2="70" y2="125" stroke="#8b5cf6" strokeWidth="3" />

              <rect x="140" y="30" width="120" height="120" rx="6" fill="#0c1222" stroke="#3b82f6" strokeWidth="1.5" />
              {/* Featured poster card illustration */}
              <rect x="150" y="40" width="100" height="60" rx="3" fill="#090d16" stroke="#1e293b" />
              {/* Typography lines inside poster */}
              <line x1="165" y1="55" x2="235" y2="55" stroke="#06b6d4" strokeWidth="4" />
              <line x1="180" y1="70" x2="220" y2="70" stroke="#fff" strokeWidth="3" />
              <line x1="160" y1="85" x2="240" y2="85" stroke="#3b82f6" strokeWidth="2" />
              <line x1="150" y1="110" x2="200" y2="110" stroke="#fff" strokeWidth="3.5" />
              <line x1="150" y1="125" x2="185" y2="125" stroke="#475569" strokeWidth="3" />
              
              {/* Buy badge */}
              <rect x="210" y="120" width="40" height="18" rx="4" fill="#3B82F6" />
              <circle cx="230" cy="129" r="2.5" fill="#fff" />

              <rect x="280" y="30" width="80" height="120" rx="6" fill="#0c1222" stroke="#1e293b" />
              <rect x="290" y="40" width="60" height="60" rx="3" fill="#1e293b" />
              <line x1="290" y1="110" x2="330" y2="110" stroke="#475569" strokeWidth="3" />
              <line x1="290" y1="125" x2="310" y2="125" stroke="#06b6d4" strokeWidth="3" />
            </svg>
            <div className="absolute top-3 left-3 bg-brand-cyan/15 text-brand-cyan font-mono text-[9px] px-2 py-0.5 rounded border border-brand-cyan/20">
              catalog.tsx
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 border-t border-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-4">
              <FolderKanban size={14} className="text-brand-blue" />
              <span className="text-[11px] font-mono text-brand-blue uppercase tracking-wider font-semibold">
                Work Catalog
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
              Featured Case Studies
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              A curated look into modern web-based products I developed. Click any card to review features, tech choices, and visual specs.
            </p>
          </div>

          {/* Categories select options */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'web-app', label: 'Web Apps' },
              { id: 'tool', label: 'Developer Tools' },
              { id: 'landing-page', label: 'E-Comm / Landing' }
            ].map((cat) => (
              <button
                key={cat.id}
                id={`proj-filter-${cat.id}`}
                onClick={() => setFilter(cat.id)}
                className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filter === cat.id
                    ? 'bg-slate-800 text-white border border-slate-700/80'
                    : 'bg-transparent text-slate-400 hover:text-white hover:bg-slate-900/40 border border-transparent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`proj-card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-slate-900/35 hover:bg-slate-900/60 border border-slate-800/70 hover:border-slate-700/80 shadow-lg hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div>
                {/* SVG Mockup illustration header */}
                {renderProjectGraphic(project.imageType)}

                {/* Card Content Text */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-xs font-mono font-medium px-2.5 py-0.5 rounded bg-slate-950/40 text-slate-400 border border-slate-800/50"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] sm:text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-950/40 text-slate-500">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              {/* Card Footer action button */}
              <div className="px-6 md:px-8 pb-6 pt-2 border-t border-slate-800/20 flex justify-between items-center text-xs text-slate-500">
                <span className="font-mono text-[10px]">ROLE: {project.role.toUpperCase()}</span>
                <span className="text-brand-cyan font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Case Study &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal Overlay popup block */}
        {selectedProject && (
          <div
            id="project-detail-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090d16]/90 backdrop-blur-sm"
          >
            <div
              className="bg-slate-900 border border-slate-800/90 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
            >
              {/* Scrollable Container */}
              <div className="overflow-y-auto flex-1">
                {/* Visual Cover Header */}
                <div className="relative">
                  {renderProjectGraphic(selectedProject.imageType)}
                  <button
                    id="modal-close"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(null);
                    }}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-800 shadow-md transition-all cursor-pointer"
                    aria-label="Close Modal"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8 md:p-10">
                  {/* Category Pill and Title */}
                  <div className="flex flex-wrap items-center gap-3.5 mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-blue/15 text-brand-blue border border-brand-blue/20">
                      {selectedProject.category.replace('-', ' ')}
                    </span>
                    <span className="text-xs text-slate-550 font-mono text-slate-500">
                      Duration: {selectedProject.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                    {selectedProject.title}
                  </h3>

                  {/* Core layout info overview bar */}
                  <div className="grid grid-cols-2 gap-4 p-4.5 rounded-xl bg-slate-950/50 border border-slate-850 border-slate-800/40 mb-6 text-sm font-mono text-slate-400">
                    <div>
                      <span className="text-slate-500 text-xs uppercase block">MY ROLE:</span>
                      <span className="text-white font-semibold">{selectedProject.role}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-xs uppercase block">PROJECT LENGTH:</span>
                      <span className="text-white font-semibold">{selectedProject.duration}</span>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div className="space-y-4 text-slate-310 text-slate-300 leading-relaxed mb-8 text-sm sm:text-base">
                    <p>{selectedProject.detailedDescription}</p>
                  </div>

                  {/* Built-in high value checklist bullet lists */}
                  <div className="mb-8">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-4">
                      <Sparkles size={16} className="text-brand-cyan" />
                      Critical Deliverables & Features
                    </h4>
                    <ul className="space-y-3.5 pl-1">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="p-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                            <Check size={12} strokeWidth={2.5} />
                          </span>
                          <span className="text-sm text-slate-300 font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack buttons label links */}
                  <div className="mb-8">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-4">
                      <Code size={16} className="text-brand-blue" />
                      Comprehensive Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono font-medium px-3 py-1 rounded-xl bg-slate-950 text-slate-350 text-slate-300 border border-slate-850 border-slate-800/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quick Action links inside modal footer */}
                  <div className="flex flex-wrap items-center justify-between pt-6 border-t border-slate-800/40 gap-4">
                    <span className="text-xs font-mono text-slate-500">
                      HILMI ZUHRI &bull; CASE STUDY
                    </span>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      {selectedProject.githubUrl && (
                        <a
                          id={`modal-github-${selectedProject.id}`}
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white text-xs font-semibold transition-all"
                        >
                          <Github size={14} />
                          View Code
                        </a>
                      )}
                      <a
                        id={`modal-demolink-${selectedProject.id}`}
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedProject(null);
                          setTimeout(() => {
                            const target = document.querySelector('#contact');
                            if (target) target.scrollIntoView({ behavior: 'smooth' });
                          }, 300);
                        }}
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan hover:scale-[1.02] text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
                      >
                        <ExternalLink size={14} />
                        Request Demo Setup
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
