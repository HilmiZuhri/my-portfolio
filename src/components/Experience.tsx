import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Milestone } from 'lucide-react';
import { EXPERIENCE_HISTORY } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-slate-900/60 relative bg-slate-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-4">
            <Milestone size={14} className="text-brand-purple" />
            <span className="text-[11px] font-mono text-brand-purple uppercase tracking-wider font-semibold">
              Career Path
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Over the past 2+ years, I have collaborated with talented product designers, QA testers, and managers to deploy polished front-end environments that convert and scale.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative pl-4 sm:pl-8">
          
          {/* Vertical connecting line */}
          <div className="absolute left-[23px] sm:left-[39px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-blue via-brand-purple to-slate-800" />

          {/* Experience list mapping */}
          <div className="space-y-12">
            {EXPERIENCE_HISTORY.map((exp, index) => (
              <div
                key={exp.id}
                id={`exp-block-${exp.id}`}
                className="relative flex gap-6 sm:gap-10 flex-col sm:flex-row items-start group"
              >
                {/* Timeline node icon placeholder */}
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-900 border-2 border-slate-800 text-brand-blue shrink-0 group-hover:border-brand-cyan transition-colors shadow-lg">
                  <Briefcase size={18} />
                </div>

                {/* Main Content card */}
                <div className="flex-1 bg-slate-900/35 border border-slate-800/80 hover:border-slate-700/60 p-6 sm:p-8 rounded-2xl relative shadow-md transition-all">
                  {/* Floating date badge */}
                  <span className="absolute top-6 right-6 inline-flex items-center gap-1.5 text-xs text-slate-450 font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800/60">
                    <Calendar size={12} className="text-brand-cyan" />
                    {exp.period}
                  </span>

                  {/* Role Title and Company */}
                  <div className="mb-4 pr-32">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-brand-blue font-semibold text-sm inline-flex items-center gap-2">
                      {exp.company}
                      <span className="w-1 h-1 rounded-full bg-slate-700" />
                      <span className="text-xs text-slate-500 font-normal inline-flex items-center gap-1">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </p>
                  </div>

                  {/* Bullet description text */}
                  <div className="space-y-3.5 mb-6 text-slate-400 text-sm leading-relaxed">
                    {exp.description.map((desc, dIdx) => (
                      <p key={dIdx}>&bull; {desc}</p>
                    ))}
                  </div>

                  {/* Specific milestones or key deliveries */}
                  <div className="mb-6 p-4 rounded-xl bg-slate-950/40 border border-slate-800/40">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-brand-cyan" />
                      Key Business Impact
                    </h4>
                    <ul className="space-y-2.5 pl-1.5">
                      {exp.keyDeliveries.map((del, delIdx) => (
                        <li key={delIdx} className="text-xs text-slate-300 flex items-start gap-2.5">
                          <span className="text-brand-cyan font-bold mt-0.5">&rsaquo;</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills tags footer list */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/40">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-500 tracking-wider mr-2">
                      Utilized Tech:
                    </span>
                    {exp.skillsUsed.map((util) => (
                      <span
                        key={util}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-350 border border-slate-850 border-slate-800/50"
                      >
                        {util}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
