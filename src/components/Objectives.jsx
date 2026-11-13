import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const Objectives = () => {
  const { lang, t } = useLanguage();
  const sectionRef = useRef(null);

  const stages = [
    {
      num: '01',
      title: t.objectives.shortTitle,
      desc: t.objectives.shortDesc,
      tag: t.objectives.shortTitle,
      tagColor: 'text-blue-400 border-blue-500/25 bg-blue-500/10',
      dotColor: 'bg-blue-500',
    },
    {
      num: '02',
      title: t.objectives.mediumTitle,
      desc: t.objectives.mediumDesc,
      tag: t.objectives.mediumTitle,
      tagColor: 'text-purple-400 border-purple-500/25 bg-purple-500/10',
      dotColor: 'bg-purple-500',
    },
    {
      num: '03',
      title: t.objectives.longTitle,
      desc: t.objectives.longDesc,
      tag: t.objectives.longTitle,
      tagColor: 'text-emerald-400 border-emerald-500/25 bg-emerald-500/10',
      dotColor: 'bg-emerald-500',
    },
  ];

  const phaseLabel = lang === 'en' ? 'PHASE' : 'FASE';

  useGSAP(
    () => {
      // Cabecera
      gsap.from('.gsap-objectives-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
        },
        y: 20,
        opacity: 0,
        duration: 0.45,
        ease: 'power2.out',
      });

      // Tarjetas de objetivos escalonadas de forma ágil y sincronizada
      gsap.from('.gsap-objectives-card', {
        scrollTrigger: {
          trigger: '.gsap-objectives-grid',
          start: 'top 88%',
        },
        y: 25,
        scale: 0.98,
        opacity: 0,
        duration: 0.45,
        stagger: 0.08,
        ease: 'power2.out',
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="objectives"
      ref={sectionRef}
      className="py-16 md:py-24 border-t border-white/10 relative"
    >
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="gsap-objectives-header text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400 font-mono">
            {t.objectives.tagline}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {t.objectives.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            {t.objectives.subtitle}
          </p>
        </div>

        {/* 3 Columns Timeline Cards */}
        <div className="gsap-objectives-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="gsap-objectives-card relative p-7 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl shadow-black/40 card-glow flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border ${stage.tagColor}`}>
                    {phaseLabel} {stage.num}
                  </span>
                  <span className="text-3xl font-black text-white/10 font-mono select-none">
                    {stage.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {stage.title}
                </h3>

                <p className="text-sm text-gray-300/90 leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span className="font-medium">{stage.tag}</span>
                <span className={`w-2 h-2 rounded-full ${stage.dotColor}`}></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Objectives;
