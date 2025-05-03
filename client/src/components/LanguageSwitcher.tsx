import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button 
        onClick={() => setLanguage('de')}
        className={`text-sm px-2 py-1 rounded ${language === 'de' ? 'bg-primary text-white' : 'text-white hover:text-primary'}`}
        aria-label="Switch to German"
      >
        DE
      </button>
      <span className="text-gray-400">|</span>
      <button 
        onClick={() => setLanguage('en')}
        className={`text-sm px-2 py-1 rounded ${language === 'en' ? 'bg-primary text-white' : 'text-white hover:text-primary'}`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}