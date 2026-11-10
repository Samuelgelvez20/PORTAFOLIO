import React, { createContext, useContext, useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      const savedLang = localStorage.getItem('portfolio-lang');
      return savedLang === 'en' ? 'en' : 'es';
    } catch {
      return 'es';
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('portfolio-lang', lang);
    } catch (e) {
      console.warn('Unable to persist language to localStorage', e);
    }
  }, [lang]);

  const t = portfolioData.translations[lang] || portfolioData.translations.es;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, personal: portfolioData.personal }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

