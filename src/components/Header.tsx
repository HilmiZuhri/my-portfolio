import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    // { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
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
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f19]/85 backdrop-blur-md border-b border-slate-800/60 py-4 shadow-lg shadow-black/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center font-bold text-slate-900 group-hover:scale-105 transition-transform">
              {PERSONAL_INFO.avatarInitials}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-brand-cyan transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                WEB DEVS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    id={`nav-link-${item.id}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-sm font-medium tracking-wide transition-colors relative py-1.5 ${
                      activeSection === item.id
                        ? 'text-brand-cyan'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-cyan rounded-full" />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <div className="h-4 w-px bg-slate-800" />

            <div className="flex items-center gap-4">
              <a
                id="header-github"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                id="header-linkedin"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                id="header-hire-btn"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-brand-cyan/20 bg-brand-cyan/10 hover:bg-brand-cyan/20 text-brand-cyan text-xs font-semibold tracking-wide uppercase transition-all"
              >
                Hire Me
                <ArrowUpRight size={14} />
              </a>
            </div>
          </nav>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/40 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden fixed inset-x-0 top-[73px] bg-[#0c1222] border-b border-slate-800 shadow-2xl p-6 flex flex-col gap-6"
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  id={`mobile-link-${item.id}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block text-base font-semibold py-2 transition-colors ${
                    activeSection === item.id ? 'text-brand-cyan' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-px bg-slate-800" />

          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">CONNECT</span>
            <div className="flex gap-4">
              <a
                id="mobile-github"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800/55 text-slate-300 hover:text-white"
              >
                <Github size={18} />
              </a>
              <a
                id="mobile-linkedin"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-850 bg-slate-800/55 text-slate-300 hover:text-white"
              >
                <Linkedin size={18} />
              </a>
              <a
                id="mobile-email"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-slate-800/55 text-slate-300 hover:text-white"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
