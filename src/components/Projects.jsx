import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const filterOptions = [
    { key: 'all', label: t.projects.filterAll },
    { key: 'java', label: t.projects.filterJava },
    { key: 'python', label: t.projects.filterPython },
  ];

  const filteredProjects = portfolioData.projectsList.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const isInitialMount = useRef(true);

  useGSAP(
    () => {
      // Cabecera de la sección
      gsap.from('.gsap-projects-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
        },
        y: 20,
        opacity: 0,
        duration: 0.45,
        ease: 'power2.out',
      });

      // Botonera de filtros
      gsap.from('.gsap-filter-btn', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        scale: 0.94,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out',
      });

      // Tarjetas de proyectos con entrada fluida e inmediata
      gsap.from('.gsap-project-card', {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 88%',
        },
        y: 35,
        opacity: 0,
        scale: 0.97,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      });
    },
    { scope: sectionRef }
  );

  // Re-animar suavemente SOLO cuando el usuario cambia de filtro (nunca en el montaje inicial)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (!gridRef.current) return;
    gsap.fromTo(
      gridRef.current.querySelectorAll('.gsap-project-card'),
      { opacity: 0, y: 15, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.05, ease: 'power2.out' }
    );
  }, [filter]);

  // Manejador de inclinación magnética 3D (Tilt) + Foco de Luz (Spotlight de React Bits)
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;

    // Actualizar coordenadas del foco cósmico en CSS de alto rendimiento (sin re-renders)
    card.style.setProperty('--spotlight-x', `${localX}px`);
    card.style.setProperty('--spotlight-y', `${localY}px`);

    // Solo aplicar inclinación 3D en dispositivos con mouse
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const x = localX - rect.width / 2;
    const y = localY - rect.height / 2;

    const tiltX = (y / rect.height) * -12; // Inclinación vertical
    const tiltY = (x / rect.width) * 12;   // Inclinación horizontal

    gsap.to(card, {
      rotateX: tiltX,
      rotateY: tiltY,
      scale: 1.02,
      transformPerspective: 950,
      duration: 0.35,
      ease: 'power2.out',
    });
  };

  const handleCardMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-16 md:py-24 border-t border-white/10 relative"
    >
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="gsap-projects-header text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400 font-mono">
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
              className={`gsap-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === opt.key
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 border border-white/20'
                  : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid con 3D Tilt */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const content = project[lang] || project.es;

            return (
              <article
                key={project.id}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                style={{ transformStyle: 'preserve-3d' }}
                className="gsap-project-card group relative overflow-hidden p-5 sm:p-6 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-blue-500/15 card-glow flex flex-col justify-between cursor-default will-change-transform"
              >
                {/* React Bits: Spotlight Radial Glow (Persigue al cursor) */}
                <div
                  className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'radial-gradient(450px circle at var(--spotlight-x, -500px) var(--spotlight-y, -500px), rgba(56, 189, 248, 0.16), transparent 60%)',
                  }}
                />

                {/* React Bits: Border Spotlight (Ilumina el borde donde esté el ratón) */}
                <div
                  className="pointer-events-none absolute inset-0 z-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    padding: '1.5px',
                    maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                    background:
                      'radial-gradient(280px circle at var(--spotlight-x, -500px) var(--spotlight-y, -500px), rgba(96, 165, 250, 0.65), transparent 70%)',
                  }}
                />

                <div className="relative z-10 flex-1 flex flex-col justify-between">
                <div className="flex-1 flex flex-col">
                  {/* Floating Project Image Container */}
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-inner group-hover:border-blue-500/30 transition-colors">
                    <img
                      src={project.image}
                      alt={content.title}
                      width="960"
                      height="540"
                      loading="lazy"
                      decoding="async"
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
                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.projects.repoBtn}: ${content.title}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 hover:border-white/20 border border-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-sm cursor-pointer"
                  >
                    <TechIcon name="github" className="w-4 h-4" />
                    <span>{t.projects.repoBtn}</span>
                  </a>
                </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
