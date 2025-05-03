import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center border border-gray-600 rounded-md overflow-hidden">
      <button 
        onClick={() => setLanguage('de')}
        className={`text-sm px-3 py-1 transition-colors ${language === 'de' ? 'bg-primary text-white' : 'text-white hover:text-primary hover:bg-gray-800'}`}
        aria-label="Switch to German"
      >
        DE
      </button>
      <div className="w-px h-4 bg-gray-600"></div>
      <button 
        onClick={() => setLanguage('en')}
        className={`text-sm px-3 py-1 transition-colors ${language === 'en' ? 'bg-primary text-white' : 'text-white hover:text-primary hover:bg-gray-800'}`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}