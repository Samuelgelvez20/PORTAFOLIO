import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import { ExternalLink, EyeOff } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Projects = () => {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [sectionRef, isVisible] = useScrollReveal();

  const filterOptions = [
    { key: 'all', label: t.projects.filterAll },
    { key: 'fullstack', label: t.projects.filterFullstack },
    { key: 'backend', label: t.projects.filterBackend },
    { key: 'desktop', label: t.projects.filterDesktop },
  ];

  const filteredProjects = portfolioData.projectsList.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-16 md:py-24 border-t border-gray-200/80 dark:border-gray-800/80 reveal-init ${
        isVisible ? 'reveal-active' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
            {t.projects.tagline}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {t.projects.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => setFilter(opt.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === opt.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const content = project[lang] || project.es;

            return (
              <article
                key={project.id}
                className="group rounded-2xl glass-panel border border-gray-200/80 dark:border-gray-800/80 overflow-hidden card-glow flex flex-col justify-between"
              >
                <div>
                  {/* Project Image Preview */}
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-900/60 border-b border-gray-200/60 dark:border-gray-800/60">
                    <img
                      src={project.image}
                      alt={content.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-mono font-bold text-white tracking-widest">
                      {project.number}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {content.title}
                    </h3>

                    <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-4">
                      {content.description}
                    </p>

                    {/* Tech Badges with micro-icons */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-gray-100 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700/60"
                        >
                          <TechIcon name={tag} className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-5 sm:p-6 pt-0 mt-3 sm:mt-4 flex items-center gap-2.5 sm:gap-3">
                  {/* GitHub Repo Button */}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700/80 transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <TechIcon name="github" className="w-4 h-4" />
                    <span>{t.projects.repoBtn}</span>
                  </a>

                  {/* Live Demo or Placeholder */}
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
                      title={t.projects.demoBtn}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="hidden sm:inline">{t.projects.demoBtn}</span>
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl text-xs font-medium text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900/40 border border-dashed border-gray-200 dark:border-gray-800 cursor-not-allowed"
                      title={t.projects.noDemoYet}
                    >
                      <EyeOff className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
