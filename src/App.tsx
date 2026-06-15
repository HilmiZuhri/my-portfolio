import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'skills', 'projects', 'experience', 'testimonials', 'contact'];
    
    // Set up standard lightweight intersection observer to monitor scroll sections
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Triggers when section is roughly centered in viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div id="root-container" className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col justify-between selection:bg-brand-cyan/30 selection:text-white">
      {/* Dynamic Header */}
      <Header activeSection={activeSection} />

      {/* Main Pages Content */}
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      {/* Styled Footer */}
      <Footer />
    </div>
  );
}
