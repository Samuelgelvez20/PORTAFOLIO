import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const About = () => {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-16 md:py-24 border-t border-gray-200/80 dark:border-gray-800/80 reveal-init ${
        isVisible ? 'reveal-active' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
            {t.about.tagline}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {t.about.title}
          </h2>
        </div>

        {/* Bio & Education Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story (Left, 7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            <p className="p-6 rounded-2xl glass-panel border border-gray-200 dark:border-gray-800/80 shadow-xs card-glow">
              {t.about.p1}
            </p>
            <p className="p-6 rounded-2xl glass-panel border border-gray-200 dark:border-gray-800/80 shadow-xs card-glow">
              {t.about.p2}
            </p>
          </div>

          {/* Quick Info Cards (Right, 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Education Card */}
            <div className="p-6 rounded-2xl glass-panel border border-gray-200 dark:border-gray-800/80 card-glow">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200/60 dark:border-gray-800/60">
                <h3 className="font-bold text-gray-900 dark:text-white text-base tracking-tight">
                  {t.about.educationTitle}
                </h3>
                <span className="text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Campuslands
                </span>
              </div>
              <div className="space-y-4 pl-3 border-l-2 border-blue-500/40">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {t.about.edu1Title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {t.about.edu1Place}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {t.about.edu2Title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {t.about.edu2Place}
                  </p>
                </div>
              </div>
            </div>

            {/* Soft Skills Card */}
            <div className="p-6 rounded-2xl glass-panel border border-gray-200 dark:border-gray-800/80 card-glow">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200/60 dark:border-gray-800/60">
                <h3 className="font-bold text-gray-900 dark:text-white text-base tracking-tight">
                  {t.about.softSkillsTitle}
                </h3>
                <span className="text-[11px] font-mono font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                  Valores
                </span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                {t.about.softSkillsList}
              </p>
            </div>

            {/* Languages Card */}
            <div className="p-6 rounded-2xl glass-panel border border-gray-200 dark:border-gray-800/80 card-glow">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200/60 dark:border-gray-800/60">
                <h3 className="font-bold text-gray-900 dark:text-white text-base tracking-tight">
                  {t.about.languagesTitle}
                </h3>
                <span className="text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Idiomas
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-gray-700 dark:text-gray-300">
                <span className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/60">
                  {t.about.langNative}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/60">
                  {t.about.langEnglish}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* What I can offer (Grid of 6 items with clean numerical index) */}
        <div className="mt-16 pt-12 border-t border-gray-200/60 dark:border-gray-800/60">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {t.about.offerTitle}
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {t.about.offerIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.about.offerItems.map((item, index) => {
              const formattedIndex = String(index + 1).padStart(2, '0');
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl glass-panel border border-gray-200/80 dark:border-gray-800/80 card-glow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/50">
                        {formattedIndex}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                    </div>

                    <h4 className="font-bold text-gray-900 dark:text-white text-base">
                      {item.title}
                    </h4>
                    <p className="mt-2.5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
