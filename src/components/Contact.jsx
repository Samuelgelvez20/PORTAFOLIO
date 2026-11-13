import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Download, Copy, Check, ArrowUpRight } from './icons';
import { TechIcon } from './TechIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SpotlightCard } from './reactbits/SpotlightCard';
import { Magnet } from './reactbits/Magnet';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const { lang, t, personal } = useLanguage();
  const [copied, setCopied] = useState(false);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Entrada del encabezado
      gsap.from('.gsap-contact-header', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        y: 20,
        opacity: 0,
        duration: 0.45,
        ease: 'power2.out',
      });

      // Stagger ágil de las tarjetas de contacto
      gsap.fromTo('.gsap-contact-card', 
        { y: 25, opacity: 0, scale: 0.98 },
        {
          scrollTrigger: {
            trigger: '.gsap-contact-grid',
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.07,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
        }
      );

      // Botón principal de CV
      gsap.fromTo('.gsap-contact-cta', 
        { y: 20, opacity: 0, scale: 0.96 },
        {
          scrollTrigger: {
            trigger: '.gsap-contact-cta',
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
        }
      );
    },
    { scope: containerRef }
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const currentCv = lang === 'en' ? personal.cvEn : personal.cvEs;

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-16 md:py-24 border-t border-white/10"
    >
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="gsap-contact-header text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400">
            {t.contact.tagline}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            {t.contact.description}
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="gsap-contact-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Email */}
          <SpotlightCard
            spotlightColor="rgba(59, 130, 246, 0.22)"
            borderSpotlightColor="rgba(96, 165, 250, 0.6)"
            className="gsap-contact-card p-5 sm:p-6 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl shadow-black/40 card-glow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  {lang === 'en' ? 'Direct Channel' : 'Canal Directo'}
                </span>
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Email
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-300 break-all select-all font-mono">
                {personal.email}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <a
                href={`mailto:${personal.email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-xs hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.contact.sendEmail}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center p-2.5 rounded-xl text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer relative hover:-translate-y-0.5 active:translate-y-0"
                title={t.contact.copyEmail}
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400 animate-in zoom-in duration-150" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-emerald-600 text-white text-[10px] font-bold whitespace-nowrap shadow-md">
                    {t.contact.emailCopied}
                  </span>
                )}
              </button>
            </div>
          </SpotlightCard>

          {/* Card 2: LinkedIn */}
          <SpotlightCard
            spotlightColor="rgba(6, 182, 212, 0.22)"
            borderSpotlightColor="rgba(34, 211, 238, 0.6)"
            className="gsap-contact-card p-5 sm:p-6 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl shadow-black/40 card-glow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {lang === 'en' ? 'Professional Network' : 'Red Profesional'}
                </span>
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <TechIcon name="linkedin" className="w-5 h-5 text-cyan-400" />
                <span>LinkedIn</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-300 truncate font-medium">
                Samuel David Gelvez
              </p>
            </div>

            <div className="mt-6">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.contact.viewProfile} LinkedIn - Samuel David Gelvez`}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.contact.viewProfile}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </SpotlightCard>

          {/* Card 3: GitHub */}
          <SpotlightCard
            spotlightColor="rgba(168, 85, 247, 0.22)"
            borderSpotlightColor="rgba(192, 132, 252, 0.6)"
            className="gsap-contact-card p-5 sm:p-6 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl shadow-black/40 card-glow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                  {lang === 'en' ? 'Code & Repos' : 'Código & Repos'}
                </span>
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <TechIcon name="github" className="w-5 h-5 text-purple-400" />
                <span>GitHub</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-300 font-mono">
                @Samuelgelvez20
              </p>
            </div>

            <div className="mt-6">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.contact.viewProfile} GitHub - Samuel David Gelvez`}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.contact.viewProfile}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </SpotlightCard>

        </div>

        {/* Download CV CTA */}
        <div className="gsap-contact-cta text-center px-4 flex justify-center">
          <Magnet strength={0.35}>
            <a
              href={currentCv}
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              <span>{t.contact.downloadCv} ({lang.toUpperCase()})</span>
            </a>
          </Magnet>
        </div>

      </div>
    </section>
  );
};

export default Contact;
