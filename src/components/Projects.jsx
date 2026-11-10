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
      className={`py-16 md:py-24 border-t border-white/10 reveal-init ${
        isVisible ? 'reveal-active' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400">
            {t.projects.tagline}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {t.projects.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => setFilter(opt.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === opt.key
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 border border-white/20'
                  : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10'
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
                className="group p-5 sm:p-6 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 card-glow flex flex-col justify-between"
              >
                <div className="flex-1 flex flex-col">
                  {/* Floating Project Image Container */}
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-inner group-hover:border-blue-500/30 transition-colors">
                    <img
                      src={project.image}
                      alt={content.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Dark gradient overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Number Badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono font-bold text-white/90 border border-white/15 tracking-widest shadow-md">
                      {project.number}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="mt-5 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                      {content.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-gray-300/90 leading-relaxed line-clamp-4 flex-1">
                      {content.description}
                    </p>

                    {/* Tech Badges with micro-icons */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 transition-colors"
                        >
                          <TechIcon name={tag} className="w-3 h-3 text-blue-400" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2.5 sm:gap-3">
                  {/* GitHub Repo Button */}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 hover:border-white/20 border border-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
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
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/25 border border-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0"
                      title={t.projects.demoBtn}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="hidden sm:inline">{t.projects.demoBtn}</span>
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl text-xs font-medium text-gray-500 bg-white/[0.02] border border-dashed border-white/10 cursor-not-allowed"
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
