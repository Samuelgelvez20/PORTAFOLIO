import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Skills = () => {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useScrollReveal();

  const softSkills = [
    t.about.softSkillsList.split(' • ')
  ].flat();

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`py-16 md:py-24 border-t border-gray-200/80 dark:border-gray-800/80 reveal-init ${
        isVisible ? 'reveal-active' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
            {t.skills.tagline}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {t.skills.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
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
                className="p-6 rounded-2xl glass-panel border border-gray-200/80 dark:border-gray-800/80 card-glow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 pb-2 border-b border-gray-200/60 dark:border-gray-800/60">
                    <h3 className="font-bold text-gray-900 dark:text-white text-base">
                      {categoryTitle}
                    </h3>
                    <span className="text-[11px] font-mono text-gray-400 dark:text-gray-500">
                      {category.skills.length} techs
                    </span>
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/60 text-xs font-medium text-gray-800 dark:text-gray-200 hover:border-blue-500/50 hover:bg-white dark:hover:bg-gray-800 transition-all cursor-default hover:-translate-y-0.5"
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
          <div className="p-6 rounded-2xl glass-panel border border-gray-200/80 dark:border-gray-800/80 card-glow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5 pb-2 border-b border-gray-200/60 dark:border-gray-800/60">
                <h3 className="font-bold text-gray-900 dark:text-white text-base">
                  {t.skills.categories.soft}
                </h3>
                <span className="text-[11px] font-mono text-gray-400 dark:text-gray-500">
                  {softSkills.length} traits
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {softSkills.map((trait) => (
                  <span
                    key={trait}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-800/50 text-xs font-semibold text-purple-700 dark:text-purple-300"
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
