import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SpotlightCard } from './reactbits/SpotlightCard';

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
  const { lang, t } = useLanguage();
  const sectionRef = useRef(null);

  const softSkills = t.about.softSkillsList.split(' • ');

  useGSAP(
    () => {
      // Cabecera de habilidades
      gsap.from('.gsap-skills-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
        },
        y: 20,
        opacity: 0,
        duration: 0.45,
        ease: 'power2.out',
      });

      // Tarjetas de categorías técnicas (se animan como bloque completo con sus habilidades ya visibles)
      gsap.from('.gsap-skills-category', {
        scrollTrigger: {
          trigger: '.gsap-skills-grid',
          start: 'top 88%',
        },
        y: 28,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-16 md:py-24 border-t border-white/10 relative"
    >
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="gsap-skills-header text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400 font-mono">
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
        <div className="gsap-skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skillsData.map((category) => {
            const categoryTitle = t.skills.categories[category.categoryKey] || category.categoryKey;

            return (
              <SpotlightCard
                key={category.categoryKey}
                spotlightColor="rgba(56, 189, 248, 0.16)"
                borderSpotlightColor="rgba(56, 189, 248, 0.5)"
                className="gsap-skills-category p-6 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl shadow-black/40 card-glow flex flex-col justify-between"
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
                        className="gsap-skill-pill inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/40 text-xs font-medium text-gray-200 transition-all cursor-default hover:-translate-y-0.5"
                      >
                        <TechIcon name={skill.name} className="w-4 h-4 shrink-0" />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            );
          })}

          {/* Soft Skills Card */}
          <SpotlightCard
            spotlightColor="rgba(192, 132, 252, 0.18)"
            borderSpotlightColor="rgba(192, 132, 252, 0.55)"
            className="gsap-skills-category p-6 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl shadow-black/40 card-glow flex flex-col justify-between"
          >
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
                    className="gsap-skill-pill inline-flex items-center px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>

        </div>

      </div>
    </section>
  );
};

export default Skills;
