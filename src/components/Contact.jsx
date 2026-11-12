import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Download, Copy, Check, ArrowUpRight } from 'lucide-react';
import { TechIcon } from './TechIcon';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Contact = () => {
  const { lang, t, personal } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [sectionRef, isVisible] = useScrollReveal();

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
      ref={sectionRef}
      className={`py-16 md:py-24 border-t border-white/10 reveal-init ${
        isVisible ? 'reveal-active' : ''
      }`}
    >
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Email */}
          <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl shadow-black/40 card-glow flex flex-col justify-between">
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
          </div>

          {/* Card 3: LinkedIn */}
          <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl shadow-black/40 card-glow flex flex-col justify-between">
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
                className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.contact.viewProfile}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 4: GitHub */}
          <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl shadow-black/40 card-glow flex flex-col justify-between">
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
                className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.contact.viewProfile}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Download CV CTA */}
        <div className="text-center px-4">
          <a
            href={currentCv}
            download
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4" />
            <span>{t.contact.downloadCv} ({lang.toUpperCase()})</span>
          </a>
        </div>

      </div>
    </section>
  );
};
