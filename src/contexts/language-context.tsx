
'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { LanguageCode, supportedLanguages } from './translation'; // Import LanguageCode and supportedLanguages

interface LanguageContextProps {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>('en'); // Default to English initially

  useEffect(() => {
    // Check for saved preference first
    const savedLang = localStorage.getItem('preferredLanguage') as LanguageCode;
    if (savedLang && supportedLanguages.some(lang => lang.code === savedLang)) {
      // Use saved preference if valid
      setLanguageState(savedLang);
    } else {
      // Otherwise, default to English
      setLanguageState('en');
    }
    // Set the initial lang attribute on mount based on determined language
    document.documentElement.lang = language;
  }, []); // Empty dependency array ensures this runs only once on mount

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem('preferredLanguage', lang); // Save preference
    // Update html lang attribute
    document.documentElement.lang = lang;
  };

  // Effect to update lang attribute whenever language state changes
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);


  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

