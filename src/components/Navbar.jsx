import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const { lang, setLang, t, personal } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for shadow, progress, and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'glass-panel shadow-sm shadow-black/5 dark:shadow-white/5 border-b border-gray-200/80 dark:border-gray-800/80'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="text-xl font-extrabold tracking-tight text-gradient flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md py-1"
          aria-label="Ir al inicio"
        >
          {personal.shortName}
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`text-sm font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm ${
                activeSection === item.id
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-in fade-in duration-200" />
              )}
            </a>
          ))}
        </nav>

        {/* Action Controls: Theme + Language */}
        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <div
            className="flex items-center p-1 rounded-lg bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60 text-xs font-semibold"
            role="group"
            aria-label="Selector de idioma"
          >
            <button
              type="button"
              onClick={() => setLang('es')}
              aria-pressed={lang === 'es'}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                lang === 'es'
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-white shadow-xs'
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-white shadow-xs'
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
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
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Thin animated scroll progress bar */}
      <div
        className="h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-gray-200 dark:border-gray-800 px-6 py-5 animate-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
