import React, { useState } from 'react';
import { ArrowDown, Copy, Check, MousePointerClick, MessageSquareCode, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden tech-grid"
    >
      {/* Decorative gradient glowing blurs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy - 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/65 border border-slate-700/50 w-fit mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span className="text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
                Available for Work
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Hey, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Sub-Headline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-6">
              {PERSONAL_INFO.title}
            </h2>

            {/* Bio description */}
            <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* Quick interactive buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                id="hero-explore-work"
                onClick={() => scrollToSection('#projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blue/90 text-white font-medium text-sm tracking-wide transition-all scale-100 hover:scale-[1.02] active:scale-95 shadow-lg shadow-brand-blue/20 cursor-pointer"
              >
                <MessageSquareCode size={16} />
                Explore Portfolio
              </button>

              <button
                id="hero-copy-email"
                onClick={copyEmail}
                className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border font-medium text-sm tracking-wide transition-all cursor-pointer ${
                  copied
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                    : 'bg-slate-800/50 hover:bg-slate-800/90 border-slate-700/60 text-slate-200'
                }`}
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    Email Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy Email Address
                  </>
                )}
              </button>
            </div>

            {/* Professional Numbers Grid */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-slate-800/80 max-w-lg">
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-white">
                  {PERSONAL_INFO.experienceYears}+
                </p>
                <p className="text-xs sm:text-sm font-medium font-mono text-slate-500 uppercase mt-1">
                  Years Exp
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-white">
                  {PERSONAL_INFO.completedProjects}+
                </p>
                <p className="text-xs sm:text-sm font-medium font-mono text-slate-500 uppercase mt-1">
                  Projects Done
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-white">
                  {PERSONAL_INFO.coffeeConsumed}
                </p>
                <p className="text-xs sm:text-sm font-medium font-mono text-slate-500 uppercase mt-1">
                  Coffees Had
                </p>
              </div>
            </div>
          </div>

          {/* IDE/Visual Layout Preview Mockup - 5 cols */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-slate-900/.85 border border-slate-800/90 shadow-2xl p-6 md:p-8 font-mono text-xs text-slate-350 overflow-hidden leading-relaxed max-w-md mx-auto">
              {/* Header icons */}
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-800/85">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#eab308]" />
                  <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
                </div>
                <div className="text-[10px] text-slate-500 px-2 py-0.5 rounded bg-slate-950 font-medium">
                  hilmi-zuhri.ts
                </div>
              </div>

              {/* Simulated developer profile schema */}
              <div className="space-y-1.5 text-slate-300">
                <div>
                  <span className="text-amber-400">const</span>{' '}
                  <span className="text-blue-400">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-500">name:</span>{' '}
                  <span className="text-teal-300">'{PERSONAL_INFO.name}'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500">role:</span>{' '}
                  <span className="text-teal-300">'{PERSONAL_INFO.title}'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500">experience:</span>{' '}
                  <span className="text-amber-300">'{PERSONAL_INFO.experienceYears}+ Years'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500">focus:</span> [
                  <span className="text-teal-300">'UI Kit Dev'</span>,{' '}
                  <span className="text-teal-300">'Single Page Apps'</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-slate-500">favoriteStack:</span> &#123;
                </div>
                <div className="pl-8">
                  <span className="text-slate-500">core:</span>{' '}
                  <span className="text-teal-300">'React 19 & TypeScript'</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-500">styling:</span>{' '}
                  <span className="text-teal-300">'Tailwind CSS'</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-500">build:</span>{' '}
                  <span className="text-teal-300">'Vite'</span>
                </div>
                <div className="pl-4">&#125;,</div>
                <div className="pl-4">
                  <span className="text-slate-500">status:</span>{' '}
                  <span className="text-teal-300">'Ready for opportunities'</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Floating subtle overlay tag */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Local Environment OK
                </span>
                <span className="text-[10px] text-slate-500">UTF-8</span>
              </div>
            </div>

            {/* Absolute element decoration */}
            <div className="absolute -bottom-6 -right-4 w-28 h-28 bg-brand-cyan/25 rounded-2xl blur-xl -z-10 animate-bounce" style={{ animationDuration: '6s' }} />
          </div>
        </div>

        {/* Scroll action prompt */}
        <div className="flex justify-center mt-20">
          <button
            id="hero-scroll-trigger"
            onClick={() => scrollToSection('#skills')}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors group cursor-pointer"
          >
            <span className="text-xs font-mono font-medium uppercase tracking-widest group-hover:translate-y-0.5 transition-transform">
              Scroll to explore
            </span>
            <ArrowDown size={14} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
