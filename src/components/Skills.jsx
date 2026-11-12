import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Skills = () => {
  const { lang, t } = useLanguage();
  const [sectionRef, isVisible] = useScrollReveal();

  const softSkills = t.about.softSkillsList.split(' • ');

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`py-16 md:py-24 border-t border-white/10 reveal-init ${
        isVisible ? 'reveal-active' : ''
      }`}
    >
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400">
            {t.skills.tagline}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {t.skills.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Technical Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skillsData.map((category) => {
            const categoryTitle = t.skills.categories[category.categoryKey] || category.categoryKey;

            return (
              <div
                key={category.categoryKey}
                className="p-6 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl shadow-black/40 card-glow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 pb-2.5 border-b border-white/10">
                    <h3 className="font-bold text-white text-base">
                      {categoryTitle}
                    </h3>
                    <span className="text-[11px] font-mono text-gray-400 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                      {category.skills.length} {category.skills.length === 1 ? 'tech' : 'techs'}
                    </span>
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/40 text-xs font-medium text-gray-200 transition-all cursor-default hover:-translate-y-0.5"
                      >
                        <TechIcon name={skill.name} className="w-4 h-4 shrink-0" />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Soft Skills Card */}
          <div className="p-6 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl shadow-black/40 card-glow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5 pb-2.5 border-b border-white/10">
                <h3 className="font-bold text-white text-base">
                  {t.skills.categories.soft}
                </h3>
                <span className="text-[11px] font-mono text-purple-400 px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                  {softSkills.length} {lang === 'en' ? 'traits' : 'destrezas'}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {softSkills.map((trait) => (
                  <span
                    key={trait}
                    className="inline-flex items-center px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
