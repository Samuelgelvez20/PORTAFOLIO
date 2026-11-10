import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const { t, personal } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-200/60 dark:border-gray-800/60">
          
          {/* Brand & info */}
          <div className="text-center md:text-left">
            <a
              href="#hero"
              className="text-lg font-black tracking-tight text-gradient inline-block"
            >
              {personal.shortName}
            </a>
            <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t.nav.about}
            </a>
            <a href="#objectives" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t.nav.objectives}
            </a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t.nav.skills}
            </a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t.nav.projects}
            </a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t.nav.contact}
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} {personal.name}. {t.footer.rights}</p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label={t.footer.backToTop}
            className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all cursor-pointer text-gray-700 dark:text-gray-300"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

