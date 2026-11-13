import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, GraduationCap, Sparkles } from './icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SpotlightCard } from './reactbits/SpotlightCard';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const { lang, t } = useLanguage();
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // 1. Cabecera de la sección
      gsap.from('.gsap-about-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
        },
        y: 20,
        opacity: 0,
        duration: 0.45,
        ease: 'power2.out',
      });

      // 2. Columnas principales de historia
      gsap.from('.gsap-about-story-p', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        y: 25,
        opacity: 0,
        duration: 0.45,
        stagger: 0.08,
        ease: 'power2.out',
      });

      // 3. Tarjetas laterales de información rápida (Educación, Valores, Idiomas)
      gsap.from('.gsap-about-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        y: 25,
        opacity: 0,
        duration: 0.45,
        stagger: 0.07,
        ease: 'power2.out',
      });

      // 4. Grid de los 6 pilares de valor
      gsap.from('.gsap-about-offer-item', {
        scrollTrigger: {
          trigger: '.gsap-about-offer-grid',
          start: 'top 88%',
        },
        y: 25,
        scale: 0.98,
        opacity: 0,
        duration: 0.45,
        stagger: 0.05,
        ease: 'power2.out',
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-24 border-t border-white/10 relative"
    >
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="gsap-about-header text-center md:text-left mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400 font-mono">
            {t.about.tagline}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {t.about.title}
          </h2>
        </div>

        {/* Bio & Education Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story (Left, 7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-gray-300 leading-relaxed text-base sm:text-lg">
            <p className="gsap-about-story-p p-6 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40 card-glow">
              {t.about.p1}
            </p>
            <p className="gsap-about-story-p p-6 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40 card-glow">
              {t.about.p2}
            </p>
          </div>

          {/* Quick Info Cards (Right, 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Education Card */}
            <div className="gsap-about-card p-6 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40 card-glow">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                  <h3 className="font-bold text-white text-base tracking-tight">
                    {t.about.educationTitle}
                  </h3>
                </div>
                <span className="text-[11px] font-mono font-semibold text-blue-400 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 uppercase tracking-wider">
                  Campuslands
                </span>
              </div>
              <div className="space-y-4 pl-3 border-l-2 border-blue-500/50">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {t.about.edu1Title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {t.about.edu1Place}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {t.about.edu2Title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {t.about.edu2Place}
                  </p>
                </div>
              </div>
            </div>

            {/* Soft Skills Card */}
            <div className="gsap-about-card p-6 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40 card-glow">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <h3 className="font-bold text-white text-base tracking-tight">
                    {t.about.softSkillsTitle}
                  </h3>
                </div>
                <span className="text-[11px] font-mono font-semibold text-purple-400 px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 uppercase tracking-wider">
                  {lang === 'en' ? 'Traits' : 'Valores'}
                </span>
              </div>
              <p className="text-sm text-gray-300 font-medium leading-relaxed">
                {t.about.softSkillsList}
              </p>
            </div>

            {/* Languages Card */}
            <div className="gsap-about-card p-6 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40 card-glow">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <h3 className="font-bold text-white text-base tracking-tight">
                    {t.about.languagesTitle}
                  </h3>
                </div>
                <span className="text-[11px] font-mono font-semibold text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 uppercase tracking-wider">
                  {lang === 'en' ? 'Bilingual' : 'Bilingüe'}
                </span>
              </div>

              <div className="space-y-4 pl-3 border-l-2 border-cyan-500/50">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {lang === 'en' ? 'Spanish' : 'Español'}
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {lang === 'en' ? 'Native' : 'Nativo'}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {lang === 'en' ? 'English' : 'Inglés'}
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {lang === 'en' ? 'B1 • Technical & Conversational' : 'B1 • Técnico y Conversacional'}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* What I can offer (Grid of 6 items) */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              {t.about.offerTitle}
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              {t.about.offerIntro}
            </p>
          </div>

          <div className="gsap-about-offer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.about.offerItems.map((item, index) => {
              const formattedIndex = String(index + 1).padStart(2, '0');
              return (
                <div
                  key={index}
                  className="gsap-about-offer-item p-6 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl shadow-black/40 card-glow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-blue-400 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
                        {formattedIndex}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                    </div>

                    <h4 className="font-bold text-white text-base">
                      {item.title}
                    </h4>
                    <p className="mt-2.5 text-sm text-gray-300/90 leading-relaxed">
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

export default About;
