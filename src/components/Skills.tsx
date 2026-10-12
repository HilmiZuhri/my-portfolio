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
      case 'other-skills':
        return <Compass className="text-brand-purple" size={20} />;
      default:
        return <Cpu size={20} />;
    }
  };

  return (
    <section
  id="skills"
  className="relative border-t border-slate-800/70 bg-slate-950/20 py-24"
>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Section Header */}
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-4">
            <Award size={14} className="text-brand-cyan" />
            <span className="text-[11px] font-mono text-brand-cyan uppercase tracking-wider font-semibold">
              Capabilities
            </span>
          </div>

      <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Technical Skills
      </h2>

      <p className="text-sm leading-7 text-slate-400 sm:text-base">
       Technologies I use to build modern, responsive, and maintainable web applications.
      </p>
    </div>

    {/* Skill Filters */}
    <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
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
                {group.title.split(' ')[0]} 
              </button>
            ))}
    </div>

    {/* Skill Groups */}
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {SKILL_GROUPS.map((group) => {
        const isVisible =
          selectedGroup === "all" || selectedGroup === group.id;

        if (!isVisible) return null;

        return (
          <article
            key={group.id}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6 transition-colors duration-300 hover:border-slate-700 hover:bg-slate-900/50"
          >
            {/* Group Header */}
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-brand-cyan">
                {getIcon(group.id)}
              </div>

              <h3 className="text-base font-semibold text-white">
                {group.title}
              </h3>
            </div>

            {/* Technology List */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-lg border border-slate-800/80 bg-slate-950/60 px-3 py-2 text-sm text-slate-300 transition-colors hover:border-brand-cyan/30 hover:text-white"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  </div>
</section>
  );
}
