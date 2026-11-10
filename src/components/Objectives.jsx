import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Objectives = () => {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useScrollReveal();

  const stages = [
    {
      num: '01',
      title: t.objectives.shortTitle,
      desc: t.objectives.shortDesc,
      tag: 'Corto Plazo',
      tagColor: 'text-blue-600 dark:text-blue-400 border-blue-200/60 dark:border-blue-800/60 bg-blue-50/50 dark:bg-blue-950/30',
    },
    {
      num: '02',
      title: t.objectives.mediumTitle,
      desc: t.objectives.mediumDesc,
      tag: 'Mediano Plazo',
      tagColor: 'text-purple-600 dark:text-purple-400 border-purple-200/60 dark:border-purple-800/60 bg-purple-50/50 dark:bg-purple-950/30',
    },
    {
      num: '03',
      title: t.objectives.longTitle,
      desc: t.objectives.longDesc,
      tag: 'Largo Plazo',
      tagColor: 'text-emerald-600 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/60 bg-emerald-50/50 dark:bg-emerald-950/30',
    },
  ];

  return (
    <section
      id="objectives"
      ref={sectionRef}
      className={`py-16 md:py-24 border-t border-gray-200/80 dark:border-gray-800/80 reveal-init ${
        isVisible ? 'reveal-active' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
            {t.objectives.tagline}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {t.objectives.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            {t.objectives.subtitle}
          </p>
        </div>

        {/* 3 Columns Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="relative p-7 rounded-2xl glass-panel border border-gray-200/80 dark:border-gray-800/80 card-glow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${stage.tagColor}`}>
                    FASE {stage.num}
                  </span>
                  <span className="text-3xl font-black text-gray-200 dark:text-gray-800 font-mono select-none">
                    {stage.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {stage.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200/60 dark:border-gray-800/60 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span className="font-medium">{stage.tag}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
