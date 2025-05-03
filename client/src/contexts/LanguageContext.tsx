import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  de: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Über uns',
    'nav.services': 'Services',
    'nav.caseStudies': 'Referenzen',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.headline': 'KI-Automatisierungslösungen für Ihr Unternehmen',
    'hero.subline': 'Steigern Sie Ihre Effizienz mit maßgeschneiderten KI-Lösungen',
    'hero.cta': 'Jetzt beraten lassen',
    'hero.services': 'Services entdecken',
    
    // About Section
    'about.title': 'Über uns',
    'about.description': 'Taylor Consulting ist Ihr Partner für intelligente Prozessautomatisierung. Wir verbinden menschliche Expertise mit modernster KI-Technologie, um für Ihr Unternehmen maßgeschneiderte Automatisierungslösungen zu entwickeln.',
    
    // Services Section
    'services.title': 'Unsere Services',
    'services.description': 'Wir bieten hochwertige KI-Automatisierungslösungen, die speziell auf die Bedürfnisse Ihres Unternehmens zugeschnitten sind.',
    
    // Case Studies Section
    'caseStudies.title': 'Erfolgsgeschichten',
    'caseStudies.description': 'Entdecken Sie, wie wir anderen Unternehmen geholfen haben, durch KI-Automatisierung Zeit und Ressourcen zu sparen und ihre Effizienz zu steigern.',
    
    // Contact Section
    'contact.title': 'Kontakt',
    'contact.description': 'Bereit, Ihre Prozesse zu optimieren? Kontaktieren Sie uns für eine unverbindliche Beratung.',
    'contact.namePlaceholder': 'Ihr Name',
    'contact.emailPlaceholder': 'Ihre E-Mail',
    'contact.messagePlaceholder': 'Ihre Nachricht',
    'contact.submit': 'Nachricht senden',
    'contact.success': 'Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.',
    
    // Footer
    'footer.company': 'Taylor Consulting',
    'footer.description': 'Ihr Partner für maßgeschneiderte KI-Automatisierungs-lösungen. Wir helfen Ihnen, Ihre Prozesse zu optimieren und Ressourcen effizient einzusetzen.',
    'footer.sitemap': 'Sitemap',
    'footer.legal': 'Rechtliches',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.contact': 'Kontakt',
    'footer.copyright': '© 2025 Taylor Consulting. Alle Rechte vorbehalten.'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About us',
    'nav.services': 'Services',
    'nav.caseStudies': 'Case Studies',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.headline': 'AI Automation Solutions for Your Business',
    'hero.subline': 'Increase your efficiency with customized AI solutions',
    'hero.cta': 'Get consultation',
    'hero.services': 'Explore services',
    
    // About Section
    'about.title': 'About us',
    'about.description': 'Taylor Consulting is your partner for intelligent process automation. We combine human expertise with cutting-edge AI technology to develop customized automation solutions for your business.',
    
    // Services Section
    'services.title': 'Our Services',
    'services.description': 'We offer high-quality AI automation solutions specifically tailored to the needs of your company.',
    
    // Case Studies Section
    'caseStudies.title': 'Success Stories',
    'caseStudies.description': 'Discover how we have helped other companies save time and resources through AI automation and increase their efficiency.',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.description': 'Ready to optimize your processes? Contact us for a non-binding consultation.',
    'contact.namePlaceholder': 'Your Name',
    'contact.emailPlaceholder': 'Your Email',
    'contact.messagePlaceholder': 'Your Message',
    'contact.submit': 'Send Message',
    'contact.success': 'Thank you for your message. We will get back to you shortly.',
    
    // Footer
    'footer.company': 'Taylor Consulting',
    'footer.description': 'Your partner for customized AI automation solutions. We help you optimize your processes and use resources efficiently.',
    'footer.sitemap': 'Sitemap',
    'footer.legal': 'Legal',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2025 Taylor Consulting. All rights reserved.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get the language setting from localStorage on first load
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'de'; // Default language is German
  });

  // When the language changes, save it to localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};