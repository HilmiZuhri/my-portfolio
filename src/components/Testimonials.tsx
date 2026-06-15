import React from 'react';
import { Quote, MessageSquare, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 border-t border-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-4 animate-pulse">
            <MessageSquare size={14} className="text-brand-cyan" />
            <span className="text-[11px] font-mono text-brand-cyan uppercase tracking-wider font-semibold">
              Recommendations
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Colleague Endorsements
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            What engineering leaders and design partners say about collaborating together on visual engines, layout templates, and clean state integrations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              id={`testi-${test.id}`}
              className="relative p-6 sm:p-8 rounded-2xl bg-slate-900/45 border border-slate-800/80 hover:border-slate-700/60 transition-all flex flex-col justify-between group overflow-hidden shadow-md"
            >
              {/* Backside giant quotation icon decoration */}
              <div className="absolute right-4 bottom-4 text-slate-800/10 -z-10 group-hover:text-brand-cyan/5 transition-colors">
                <Quote size={120} strokeWidth={1} />
              </div>

              <div>
                {/* Visual rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Feedback statement content */}
                <p className="text-slate-300 italic text-sm sm:text-base leading-relaxed mb-6 font-medium relative z-10">
                  "{test.feedback}"
                </p>
              </div>

              {/* Author profile metrics info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-800/50">
                <div className="w-11 h-11 rounded-xl bg-slate-950 flex items-center justify-center font-bold text-sm text-brand-cyan border border-slate-800 shrink-0">
                  {test.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    {test.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-mono">
                    {test.role} @ <span className="text-brand-blue font-semibold">{test.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
