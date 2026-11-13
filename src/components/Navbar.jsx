import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from './icons';
import { TechIcon } from './TechIcon';
import { Magnet } from './reactbits/Magnet';

export const Navbar = () => {
  const { lang, setLang, t, personal } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for progress and active section
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }

      const sections = ['about', 'objectives', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: '#about', label: t.nav.about, id: 'about' },
    { href: '#objectives', label: t.nav.objectives, id: 'objectives' },
    { href: '#skills', label: t.nav.skills, id: 'skills' },
    { href: '#projects', label: t.nav.projects, id: 'projects' },
    { href: '#contact', label: t.nav.contact, id: 'contact' },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-[1360px] rounded-2xl md:rounded-full bg-slate-950/85 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/70 transition-all duration-300">
      <div className="w-full px-4 sm:px-6 md:px-8 h-14 sm:h-16 flex items-center justify-between">
        
        {/* Brand / Logo con Magnet */}
        <Magnet strength={0.25}>
          <a
            href="#hero"
            className="text-xl font-extrabold tracking-tight text-gradient flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md py-1"
            aria-label="Ir al inicio"
          >
            {personal.shortName}
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          </a>
        </Magnet>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`text-sm font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm ${
                activeSection === item.id
                  ? 'text-blue-400 font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-in fade-in duration-200" />
              )}
            </a>
          ))}
        </nav>

        {/* Action Controls: Social Links (GitHub + LinkedIn) + Language Selector + Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          
          {/* Social Links: GitHub & LinkedIn (Desktop) con Magnet */}
          <div className="hidden sm:flex items-center gap-1.5 border-r border-white/10 pr-2.5">
            <Magnet strength={0.3}>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de GitHub de Samuel"
                title="GitHub"
                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all cursor-pointer shadow-xs"
              >
                <TechIcon name="github" className="w-4 h-4 text-purple-400" />
              </a>
            </Magnet>

            <Magnet strength={0.3}>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de LinkedIn de Samuel"
                title="LinkedIn"
                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-300 hover:text-cyan-400 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer shadow-xs"
              >
                <TechIcon name="linkedin" className="w-4 h-4 text-cyan-400" />
              </a>
            </Magnet>
          </div>

          {/* Language Selector */}
          <div
            className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold backdrop-blur-md"
            role="group"
            aria-label="Selector de idioma"
          >
            <button
              type="button"
              onClick={() => setLang('es')}
              aria-pressed={lang === 'es'}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                lang === 'es'
                  ? 'bg-blue-600 text-white font-bold shadow-xs shadow-blue-500/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-blue-600 text-white font-bold shadow-xs shadow-blue-500/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Abrir menú de navegación"
            className="md:hidden p-2 rounded-xl bg-white/5 text-gray-300 hover:text-white border border-white/10 transition-all cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Thin animated scroll progress bar integrada en la cápsula ovalada */}
      <div className="overflow-hidden rounded-b-2xl md:rounded-b-full">
        <div
          className="h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-t border-white/10 rounded-b-2xl px-6 py-5 animate-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-400 font-semibold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Social Links */}
          <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10"
            >
              <TechIcon name="github" className="w-4 h-4 text-purple-400" />
              <span>GitHub</span>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10"
            >
              <TechIcon name="linkedin" className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
