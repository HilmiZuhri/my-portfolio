import React, { useState } from 'react';
import { Cpu, Terminal, Compass, Award, ExternalLink } from 'lucide-react';
import { SKILL_GROUPS } from '../data';

export default function Skills() {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');

  const getIcon = (groupId: string) => {
    switch (groupId) {
      case 'frontend-core':
        return <Cpu className="text-brand-blue" size={20} />;
      case 'tools-build':
        return <Terminal className="text-brand-cyan" size={20} />;
      case 'design-testing':
        return <Compass className="text-brand-purple" size={20} />;
      default:
        return <Cpu size={20} />;
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-slate-900/60 relative bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-4">
            <Award size={14} className="text-brand-cyan" />
            <span className="text-[11px] font-mono text-brand-cyan uppercase tracking-wider font-semibold">
              Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Technical Superpowers
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            With 2+ years of dedicated professional refinement, I have consolidated a stack of modern, pixel-perfect layout mechanisms and progressive development workflows.
          </p>

          {/* Quick tab filters to toggle focus */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              id="skill-filter-all"
              onClick={() => setSelectedGroup('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all cursor-pointer ${
                selectedGroup === 'all'
                  ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-md'
                  : 'bg-slate-900/50 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              All Skills
            </button>
            {SKILL_GROUPS.map((group) => (
              <button
                key={group.id}
                id={`skill-filter-${group.id}`}
                onClick={() => setSelectedGroup(group.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all cursor-pointer ${
                  selectedGroup === group.id
                    ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-md'
                    : 'bg-slate-900/50 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {group.title.split(' ')[0]} Focus
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group) => {
            const isVisible = selectedGroup === 'all' || selectedGroup === group.id;
            if (!isVisible) return null;

            return (
              <div
                key={group.id}
                id={`skgroup-${group.id}`}
                className="glow-card bg-slate-900/40 rounded-2xl border border-slate-800/80 p-6 md:p-8 flex flex-col justify-between transition-opacity duration-300"
              >
                <div>
                  {/* Card Section Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/50">
                    <div className="p-2.5 rounded-lg bg-slate-950">
                      {getIcon(group.id)}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {group.title}
                    </h3>
                  </div>

                  {/* Skills level items */}
                  <div className="space-y-6">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="group/item">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-sm font-semibold text-slate-200 group-hover/item:text-brand-cyan transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono font-medium text-slate-450 text-slate-400">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Meter bar container */}
                        <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800/40">
                          <div
                            className="h-full bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>

                        {/* Exp context subtitle */}
                        {skill.yearsOfExp && (
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-[10px] font-mono text-slate-500 uppercase">
                              Continuous usage
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              {skill.yearsOfExp} yrs exp
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer decor */}
                <div className="mt-8 pt-4 border-t border-slate-800/50 flex justify-between items-center text-xs text-slate-500">
                  <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    Verified Stack
                  </span>
                  <span className="font-mono text-[10px]">v4.0 spec</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-brand-blue/10 via-brand-cyan/5 to-brand-purple/10 border border-slate-800/60 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-brand-cyan shrink-0 hidden sm:block">
              <Award size={24} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                Looking for a custom integration or design system specialist?
              </h4>
              <p className="text-xs sm:text-sm text-slate-405 text-slate-400 max-w-2xl">
                I design flexible atomic web systems that follow rigorous naming standards (BEM, Tailwind tokens) and ensure seamless, fluid client transitions across modern devices.
              </p>
            </div>
          </div>
          <button
            id="skills-cta-contact"
            onClick={() => {
              const target = document.querySelector('#contact');
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-950 border border-slate-800 text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-all shrink-0 cursor-pointer"
          >
            Ask Questions
          </button>
        </div>

      </div>
    </section>
  );
}
