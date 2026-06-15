import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="site-footer" className="bg-[#070b13] border-t border-slate-900/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright description */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-white">
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
            </p>
            <p className="text-xs text-slate-500 font-mono mt-1">
              Hand-coded with React 19, TypeScript, and Tailwind CSS v4.
            </p>
          </div>

          {/* Connect profiles / Scroll layout */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a
                id="footer-github"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                id="footer-linkedin"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                id="footer-email"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="Email Direct"
              >
                <Mail size={18} />
              </a>
            </div>

            <div className="h-4 w-px bg-slate-800" />

            <button
              id="footer-totop"
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all shadow-md cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} className="animate-pulse" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
