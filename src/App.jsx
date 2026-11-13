import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AmbientBackground } from './components/AmbientBackground';
import { CosmicCursor } from './components/CosmicCursor';

const About = lazy(() => import('./components/About'));
const Objectives = lazy(() => import('./components/Objectives'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen bg-slate-900/95 dark:bg-[#06080e] text-gray-900 dark:text-gray-100 transition-colors duration-500 antialiased selection:bg-cyan-500 selection:text-white">
          {/* Custom Interactive Cosmic Cursor with Light Trail (z-50) */}
          <CosmicCursor />

          {/* Skip link for keyboard accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
          >
            Saltar al contenido principal / Skip to content
          </a>

          {/* Dynamic Ambient Background with Floating Aurora, Interactive Starfield & Shooting Stars (z-0) */}
          <AmbientBackground />

          {/* Foreground Interactive Content (z-10) con offset para Navbar flotante */}
          <div className="relative z-10 flex flex-col min-h-screen pt-20 sm:pt-24">
            <Navbar />
            <main id="main-content" className="flex-1">
              <Hero />
              <Suspense fallback={<div className="min-h-[300px]" />}>
                <About />
                <Objectives />
                <Skills />
                <Projects />
                <Contact />
              </Suspense>
            </main>
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
