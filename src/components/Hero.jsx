import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TechIcon } from './TechIcon';
import { ArrowDown, ArrowUpRight, MapPin } from './icons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { DecryptedText } from './reactbits/DecryptedText';
import { ShinyText } from './reactbits/ShinyText';
import { Magnet } from './reactbits/Magnet';

export const Hero = () => {
  const { t, personal } = useLanguage();
  const heroRef = useRef(null);

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

  // Manejador de inclinación magnética 3D (Tilt) idéntica a las tarjetas de proyectos
  const handleAvatarMouseMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const tiltX = (y / rect.height) * -16; // Inclinación vertical
    const tiltY = (x / rect.width) * 16;   // Inclinación horizontal

    gsap.to(el, {
      rotateX: tiltX,
      rotateY: tiltY,
      scale: 1.04,
      transformPerspective: 950,
      duration: 0.35,
      ease: 'power2.out',
    });
  };

  const handleAvatarMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Badges superiores
      tl.fromTo('.gsap-hero-badge', 
        { y: -8, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.25, stagger: 0.03, clearProps: 'all' }
      )
      // Textos secundarios con entrada sutil (el nombre y descripción ya son visibles para LCP instantáneo < 1.2s)
      .fromTo('.gsap-hero-greeting, .gsap-hero-subtitle', 
        { y: 8, opacity: 0.5 },
        { y: 0, opacity: 1, duration: 0.25, stagger: 0.03, clearProps: 'all' },
        0.02
      )
      // Recuadros de habilidades / tecnologías (Hero Tech Badges)
      .fromTo('.gsap-hero-tech', 
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, stagger: 0.02, ease: 'back.out(1.4)', clearProps: 'all' },
        0.12
      )
      // Botones de acción CTA
      .fromTo('.gsap-hero-cta', 
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.05, clearProps: 'all' },
        0.18
      )
      // Entrada del Avatar
      .fromTo('.gsap-hero-avatar', 
        { scale: 0.88, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.45, 
          ease: 'back.out(1.4)',
          clearProps: 'opacity',
          onComplete: () => {
            gsap.to('.gsap-hero-avatar', {
              y: -8,
              duration: 3.2,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });
          }
        },
        0.05
      );
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} id="hero" className="relative pt-10 pb-20 md:pt-16 md:pb-28">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
          
          {/* Left Column: Information & Actions */}
          <div className="flex-1 text-center md:text-left">
            
            {/* Status & Location Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-6">
              <div className="gsap-hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/60 text-xs font-semibold text-blue-700 dark:text-blue-300 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <ShinyText text={t.hero.badgeAvailable} speed={3.5} className="font-semibold text-xs" />
              </div>

              <div className="gsap-hero-badge inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100/70 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60 text-xs font-medium text-gray-600 dark:text-gray-300">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                <span>{t.hero.location}</span>
              </div>
            </div>

            {/* Greeting & Name con ShinyText */}
            <div>
              <span className="gsap-hero-greeting block text-sm sm:text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 mb-1">
                {t.hero.greeting}
              </span>
              <h1 className="gsap-hero-name text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.12] break-words">
                <span className="text-gradient inline-block">{personal.name}</span>
              </h1>

              {/* Subtitle */}
              <p className="gsap-hero-subtitle mt-3 sm:mt-4 text-base sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                {t.hero.title} <span className="hidden sm:inline text-gray-400 dark:text-gray-600">/</span>{' '}
                <span className="block sm:inline text-blue-600 dark:text-blue-400 font-bold font-mono tracking-tight">
                  <DecryptedText
                    text={t.hero.subtitle}
                    speed={30}
                    maxIterations={14}
                    sequential={true}
                    animateOn="both"
                  />
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="gsap-hero-desc mt-4 text-base text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* Tech Badges with official brand SVGs */}
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-2 max-w-2xl">
              {heroTechnologies.map((tech) => (
                <span
                  key={tech}
                  className="gsap-hero-tech inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100/90 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/60 text-gray-800 dark:text-gray-200 hover:border-blue-500/50 hover:bg-white dark:hover:bg-gray-800 transition-all cursor-default hover:-translate-y-0.5"
                >
                  <TechIcon name={tech} className="w-3.5 h-3.5" />
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons con Magnet de React Bits */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 w-full">
              <Magnet strength={0.35}>
                <a
                  href="#projects"
                  className="gsap-hero-cta w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-indigo-500/35 transition-all cursor-pointer"
                >
                  <span>{t.hero.ctaProjects}</span>
                  <ArrowDown className="w-4 h-4" />
                </a>
              </Magnet>

              <Magnet strength={0.35}>
                <a
                  href="#contact"
                  className="gsap-hero-cta w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl font-semibold text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700/80 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all shadow-xs cursor-pointer"
                >
                  <span>{t.hero.ctaContact}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                </a>
              </Magnet>
            </div>
          </div>

          {/* Right Column: Visual Avatar with Levitating Entrance, 3D Interactive Tilt & Saturn Planetary Rings */}
          <div className="relative gsap-hero-avatar shrink-0 select-none">
            {/* 3D Planetary Tilt Container */}
            <div
              onMouseMove={handleAvatarMouseMove}
              onMouseLeave={handleAvatarMouseLeave}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-76 md:h-76 lg:w-84 lg:h-84 flex items-center justify-center cursor-pointer will-change-transform"
            >
              {/* Saturn Orbital Ring 1: Dust & Outer Perimeter */}
              <div className="saturn-ring-dust" />

              {/* Saturn Orbital Ring 2: Principal Planetary Ring with Orbiting Moon */}
              <div className="saturn-ring-outer">
                {/* Glowing Satellite / Moon traveling along the ring */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_12px_3px_#38bdf8,0_0_24px_6px_#818cf8]" />
              </div>

              {/* Saturn Orbital Ring 3: Inner Cassini Band with Secondary Moon */}
              <div className="saturn-ring-inner">
                {/* Secondary Orbiting Particle */}
                <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-purple-300 shadow-[0_0_8px_2px_#c084fc]" />
              </div>

              {/* Central Planet (Avatar) */}
              <div className="relative z-10 w-40 h-40 sm:w-56 sm:h-56 md:w-68 md:h-68 lg:w-76 lg:h-76 rounded-full p-1.5 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 shadow-2xl shadow-indigo-500/30 dark:shadow-purple-950/50 transition-shadow duration-300 hover:shadow-cyan-500/40">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-gray-900 ring-4 ring-white/10 pointer-events-none">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    width="288"
                    height="288"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105 pointer-events-none"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
