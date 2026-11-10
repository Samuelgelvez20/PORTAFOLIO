import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TechIcon } from './TechIcon';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';

export const Hero = () => {
  const { t, personal } = useLanguage();

  const heroTechnologies = [
    'Java',
    'Spring Boot',
    'Python',
    'PostgreSQL',
    'MySQL',
    'JSON',
    'React',
    'Tailwind',
    'Docker',
    'Git',
    'Linux',
  ];

  return (
    <section id="hero" className="relative pt-10 pb-20 md:pt-16 md:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
          
          {/* Left Column: Information & Actions */}
          <div className="flex-1 text-center md:text-left">
            
            {/* Status & Location Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-6 anim-hero-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/60 text-xs font-semibold text-blue-700 dark:text-blue-300 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{t.hero.badgeAvailable}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100/70 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60 text-xs font-medium text-gray-600 dark:text-gray-300">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                <span>{t.hero.location}</span>
              </div>
            </div>

            {/* Greeting & Name */}
            <div className="anim-hero-2">
              <span className="block text-sm sm:text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 mb-1">
                {t.hero.greeting}
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.12] break-words">
                <span className="text-gradient">{personal.name}</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-3 sm:mt-4 text-base sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                {t.hero.title} <span className="hidden sm:inline text-gray-400 dark:text-gray-600">/</span>{' '}
                <span className="block sm:inline text-blue-600 dark:text-blue-400 font-bold">
                  {t.hero.subtitle}
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed anim-hero-3">
              {t.hero.description}
            </p>

            {/* Tech Badges with official brand SVGs */}
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-2 max-w-xl anim-hero-3">
              {heroTechnologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100/90 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/60 text-gray-800 dark:text-gray-200 hover:border-blue-500/50 hover:bg-white dark:hover:bg-gray-800 transition-all cursor-default hover:-translate-y-0.5"
                >
                  <TechIcon name={tech} className="w-3.5 h-3.5" />
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 anim-hero-4 w-full">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-indigo-500/35 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl font-semibold text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700/80 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-xs"
              >
                <span>{t.hero.ctaContact}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Avatar with Entrance */}
          <div className="relative anim-hero-avatar shrink-0">
            <div className="relative w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full p-1.5 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 shadow-2xl shadow-indigo-500/20 dark:shadow-purple-950/40">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-gray-900 ring-4 ring-white/10">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
