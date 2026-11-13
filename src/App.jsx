import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Objectives } from './components/Objectives';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AmbientBackground } from './components/AmbientBackground';
import { CosmicIntro } from './components/CosmicIntro';

export const App = () => {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <ThemeProvider>
      <LanguageProvider>
        {!introFinished && (
          <CosmicIntro onComplete={() => setIntroFinished(true)} />
        )}

        <div className="relative min-h-screen bg-slate-900/95 dark:bg-[#06080e] text-gray-900 dark:text-gray-100 transition-colors duration-500 antialiased selection:bg-blue-500 selection:text-white">
          {/* Skip link for keyboard accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
          >
            Saltar al contenido principal / Skip to content
          </a>

          {/* Dynamic Ambient Background with Floating Aurora, Starfield & Shooting Stars (z-0) */}
          <AmbientBackground />

          {/* Foreground Interactive Content (z-10) */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main id="main-content" className="flex-1">
              <Hero />
              <About />
              <Objectives />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
