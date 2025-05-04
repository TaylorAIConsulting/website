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
    
    // Founders
    'about.founder1.name': 'Andreas Schneider',
    'about.founder1.role': 'Co-Founder & AI Manager',
    'about.founder1.bio': 'Erfahrener technischer Programmmanager, spezialisiert auf Medien-Workflows, strategische Optimierung, KI, Automation, Innovation und Effizienzsteigerung.',
    'about.founder1.badge1': 'AI Manager Zertifiziert',
    'about.founder1.badge2': 'KI-Experte',
    
    'about.founder2.name': 'Dino Fetzer',
    'about.founder2.role': 'Co-Founder & AI Manager',
    'about.founder2.bio': 'Dino Fetzer, zertifizierter AI-Manager und Werbe-Filmregisseur, spezialisiert auf innovative KI-Automation und Content-Erstellung.',
    'about.founder2.badge1': 'AI Manager Zertifiziert',
    'about.founder2.badge2': 'Award Winning Director',
    
    // Services Section
    'services.title': 'Unsere Services',
    'services.description': 'Wir bieten hochwertige KI-Automatisierungslösungen, die speziell auf die Bedürfnisse Ihres Unternehmens zugeschnitten sind.',
    
    // Service 1
    'services.service1.title': 'Prozess-Optimierung mit RPA',
    'services.service1.description': 'Automatisieren Sie repetitive Aufgaben und Workflows mit Robotic Process Automation und steigern Sie Ihre Effizienz um bis zu 80%.',
    'services.service1.feature1': 'Reduzierung manueller Eingaben',
    'services.service1.feature2': 'Fehlerminimierung',
    'services.service1.feature3': '24/7 Betrieb',
    
    // Service 2
    'services.service2.title': 'Datenanalyse & Prognosen',
    'services.service2.description': 'Nutzen Sie das volle Potenzial Ihrer Daten mit KI-gestützter Analytik und gewinnen Sie wertvolle Erkenntnisse für fundierte Geschäftsentscheidungen.',
    'services.service2.feature1': 'Predictive Analytics',
    'services.service2.feature2': 'Automatisierte Berichterstellung',
    'services.service2.feature3': 'Visualisierung komplexer Datensätze',
    
    // Service 3
    'services.service3.title': 'Chatbots & Virtuelle Assistenten',
    'services.service3.description': 'Verbessern Sie Ihren Kundenservice mit intelligenten Chatbots, die rund um die Uhr Anfragen bearbeiten und Ihre Teams entlasten können.',
    'services.service3.feature1': 'Natürliche Sprachverarbeitung',
    'services.service3.feature2': 'Nahtlose Integration in bestehende Systeme',
    'services.service3.feature3': 'Kontinuierliches Lernen und Verbessern',
    
    // Service 4
    'services.service4.title': 'Maßgeschneiderte KI-Lösungen',
    'services.service4.description': 'Wir entwickeln individuelle KI-Anwendungen, die genau auf Ihre Geschäftsprozesse und Anforderungen zugeschnitten sind.',
    'services.service4.feature1': 'Bedarfsanalyse & Konzeptentwicklung',
    'services.service4.feature2': 'Implementierung & Integration',
    'services.service4.feature3': 'Kontinuierliche Optimierung',
    
    // Case Studies Section
    'caseStudies.title': 'Erfolgsgeschichten',
    'caseStudies.description': 'Entdecken Sie, wie wir anderen Unternehmen geholfen haben, durch KI-Automatisierung Zeit und Ressourcen zu sparen und ihre Effizienz zu steigern.',
    
    // Case Study 1
    'caseStudies.case1.title': 'Automatisierte Inhaltsverwaltung und Monetarisierung für Vice Media',
    'caseStudies.case1.description': 'Durch die Integration unserer KI-gesteuerten Automatisierung und fortschrittlicher Datenanalyse haben wir den Vice-Medienkatalog effizient neu strukturiert, die Produktionsprozesse beschleunigt und eine innovative Monetarisierung ermöglicht.',
    'caseStudies.case1.industry': 'Medienbranche',
    'caseStudies.case1.type': 'KI-Automation & Datenanalyse',
    'caseStudies.case1.result1': 'Implementierung einer KI-basierten Analyseplattform zur Echtzeit-Content-Optimierung',
    'caseStudies.case1.result2': 'Automatisierte Katalogisierung und intelligente Inhaltsvorschläge mittels Machine Learning',
    'caseStudies.case1.result3': 'Steigerung der Content-Monetarisierung um 42%',
    'caseStudies.case1.testimonial': 'Die KI-Automationslösung von Taylor Consulting hat unsere Inhalte effizienter organisiert und neue Umsatzpotenziale erschlossen. Vice Media ist jetzt flexibler und erfolgreicher am Markt positioniert.',
    'caseStudies.case1.author': 'Julia Kramer, Head of Digital Operations',
    
    // Case Study 2
    'caseStudies.case2.title': 'KI-gestützte Festivaloptimierung',
    'caseStudies.case2.description': 'Durch den Einsatz von KI-gestützter Automatisierung und datenbasierter Analyse haben wir das VFX Forum transformiert, indem wir die Festivalorganisation optimierten, die Programmplanung effizienter gestalteten und neue Monetarisierungsmöglichkeiten erschlossen.',
    'caseStudies.case2.industry': 'Medien- & Kreativbranche',
    'caseStudies.case2.type': 'Intelligente Automatisierung für das VFX Forum',
    'caseStudies.case2.result1': 'Implementierung eines KI-gestützten Systems zur automatisierten Programmplanung',
    'caseStudies.case2.result2': 'Einsatz von Datenanalyse zur Optimierung der Teilnehmererfahrung',
    'caseStudies.case2.result3': 'Steigerung der Sponsoring-Einnahmen um 40%',
    'caseStudies.case2.testimonial': 'Mit der KI-Lösung von Taylor Consulting konnten wir unser Festival effizienter organisieren und gleichzeitig ein besseres Erlebnis für alle Teilnehmer bieten.',
    'caseStudies.case2.author': 'Martin Kramer, Festivalleiter VFX Forum',
    
    // Case Study 3
    'caseStudies.case3.title': 'Digital Entertainment KI Prototyping',
    'caseStudies.case3.description': 'Prototyping eines KI-Avatars. KI Charakter interagiert in Echtzeit und erhielt positives Feedback – ein klarer Beweis für die technische Machbarkeit.',
    'caseStudies.case3.industry': 'Digital Entertainment',
    'caseStudies.case3.type': 'KI Prototyping',
    'caseStudies.case3.result1': 'Integration von NLP, GANs und Motion-Capture-Technologien',
    'caseStudies.case3.result2': 'Plattformintegration auf Social Media',
    'caseStudies.case3.result3': 'Erfassung von Nutzer-Feedback und erste Datenanalysen',
    'caseStudies.case3.testimonial': 'Der KI-Avatar hat unsere digitale Präsenz revolutioniert. Die Kombination aus menschenähnlicher Interaktion und KI-gestützter Personalisierung hat unsere Nutzerbindung auf ein neues Niveau gehoben.',
    'caseStudies.case3.author': 'Thomas Weber, Creative Director',
    
    // Contact Section
    'contact.title': 'Kontakt',
    'contact.description': 'Bereit, Ihre Prozesse zu optimieren? Kontaktieren Sie uns für eine unverbindliche Beratung.',
    'contact.contactInfo': 'Kontaktinformationen',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.address': 'Adresse',
    'contact.country': 'Deutschland',
    'contact.followUs': 'Folgen Sie uns',
    'contact.contactForm': 'Kontaktformular',
    
    // Contact Form
    'contact.form.name': 'Name',
    'contact.form.namePlaceholder': 'Ihr Name',
    'contact.form.email': 'E-Mail',
    'contact.form.emailPlaceholder': 'ihre.email@beispiel.de',
    'contact.form.subject': 'Betreff',
    'contact.form.subjectPlaceholder': 'Worum geht es?',
    'contact.form.message': 'Nachricht',
    'contact.form.messagePlaceholder': 'Wie können wir Ihnen helfen?',
    'contact.form.acceptPolicy': 'Ich akzeptiere die',
    'contact.form.privacyPolicy': 'Datenschutzbestimmungen',
    'contact.form.send': 'Nachricht senden',
    'contact.form.sending': 'Wird gesendet...',
    
    // Contact Toast Messages
    'contact.toast.successTitle': 'Nachricht gesendet!',
    'contact.toast.successDescription': 'Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.',
    'contact.toast.errorTitle': 'Fehler beim Senden',
    'contact.toast.errorDescription': 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.',
    
    // Contact Form Validation
    'contact.validation.nameLength': 'Name muss mindestens 2 Zeichen lang sein',
    'contact.validation.emailValid': 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
    'contact.validation.messageLength': 'Nachricht muss mindestens 10 Zeichen lang sein',
    'contact.validation.acceptPolicy': 'Sie müssen die Datenschutzbestimmungen akzeptieren',
    
    // Footer
    'footer.company': 'Taylor Consulting',
    'footer.companyDescription': 'Ihr Partner für maßgeschneiderte KI-Automatisierungs-lösungen. Wir helfen Ihnen, Ihre Prozesse zu optimieren und Ressourcen effizient einzusetzen.',
    'footer.sitemap': 'Sitemap',
    'footer.home': 'Home',
    'footer.about': 'Über uns',
    'footer.services': 'Services',
    'footer.caseStudies': 'Referenzen',
    'footer.legal': 'Rechtliches',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.contact': 'Kontakt',
    'footer.address.street': 'Rheinsberger Straße 71',
    'footer.address.city': '10115 Berlin',
    'footer.address.country': 'Deutschland',
    'footer.phone': '+49 (0) 172 2179436',
    'footer.email': 'info@taylorconsulting.io',
    'footer.copyright': 'Alle Rechte vorbehalten.'
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
    
    // Founders
    'about.founder1.name': 'Andreas Schneider',
    'about.founder1.role': 'Co-Founder & AI Manager',
    'about.founder1.bio': 'Experienced technical program manager, specialized in media workflows, strategic optimization, AI, automation, innovation and efficiency improvement.',
    'about.founder1.badge1': 'Certified AI Manager',
    'about.founder1.badge2': 'AI Expert',
    
    'about.founder2.name': 'Dino Fetzer',
    'about.founder2.role': 'Co-Founder & AI Manager',
    'about.founder2.bio': 'Dino Fetzer, certified AI Manager and commercial film director, specializes in innovative AI automation and content creation.',
    'about.founder2.badge1': 'Certified AI Manager',
    'about.founder2.badge2': 'Award Winning Director',
    
    // Services Section
    'services.title': 'Our Services',
    'services.description': 'We offer high-quality AI automation solutions specifically tailored to the needs of your company.',
    
    // Service 1
    'services.service1.title': 'Process Optimization with RPA',
    'services.service1.description': 'Automate repetitive tasks and workflows with Robotic Process Automation and increase your efficiency by up to 80%.',
    'services.service1.feature1': 'Reduction of manual entries',
    'services.service1.feature2': 'Error minimization',
    'services.service1.feature3': '24/7 operation',
    
    // Service 2
    'services.service2.title': 'Data Analysis & Forecasts',
    'services.service2.description': 'Harness the full potential of your data with AI-powered analytics and gain valuable insights for informed business decisions.',
    'services.service2.feature1': 'Predictive Analytics',
    'services.service2.feature2': 'Automated reporting',
    'services.service2.feature3': 'Visualization of complex datasets',
    
    // Service 3
    'services.service3.title': 'Chatbots & Virtual Assistants',
    'services.service3.description': 'Improve your customer service with intelligent chatbots that can handle inquiries around the clock and relieve your teams.',
    'services.service3.feature1': 'Natural language processing',
    'services.service3.feature2': 'Seamless integration into existing systems',
    'services.service3.feature3': 'Continuous learning and improvement',
    
    // Service 4
    'services.service4.title': 'Custom AI Solutions',
    'services.service4.description': 'We develop individual AI applications that are precisely tailored to your business processes and requirements.',
    'services.service4.feature1': 'Needs analysis & concept development',
    'services.service4.feature2': 'Implementation & integration',
    'services.service4.feature3': 'Continuous optimization',
    
    // Case Studies Section
    'caseStudies.title': 'Success Stories',
    'caseStudies.description': 'Discover how we have helped other companies save time and resources through AI automation and increase their efficiency.',
    
    // Case Study 1
    'caseStudies.case1.title': 'Automated Content Management and Monetization for Vice Media',
    'caseStudies.case1.description': 'By integrating our AI-driven automation and advanced data analytics, we efficiently restructured the Vice media catalog, accelerated production processes, and enabled innovative monetization.',
    'caseStudies.case1.industry': 'Media Industry',
    'caseStudies.case1.type': 'AI Automation & Data Analysis',
    'caseStudies.case1.result1': 'Implementation of an AI-based analytics platform for real-time content optimization',
    'caseStudies.case1.result2': 'Automated cataloging and intelligent content suggestions using machine learning',
    'caseStudies.case1.result3': 'Increased content monetization by 42%',
    'caseStudies.case1.testimonial': 'The AI automation solution from Taylor Consulting has organized our content more efficiently and unlocked new revenue potential. Vice Media is now more flexibly and successfully positioned in the market.',
    'caseStudies.case1.author': 'Julia Kramer, Head of Digital Operations',
    
    // Case Study 2
    'caseStudies.case2.title': 'AI-Powered Festival Optimization',
    'caseStudies.case2.description': 'By employing AI-driven automation and data-based analysis, we transformed the VFX Forum by optimizing festival organization, making program planning more efficient, and unlocking new monetization opportunities.',
    'caseStudies.case2.industry': 'Media & Creative Industry',
    'caseStudies.case2.type': 'Intelligent Automation for VFX Forum',
    'caseStudies.case2.result1': 'Implementation of an AI-powered system for automated program planning',
    'caseStudies.case2.result2': 'Use of data analysis to optimize participant experience',
    'caseStudies.case2.result3': 'Increase in sponsorship revenue by 40%',
    'caseStudies.case2.testimonial': 'With Taylor Consulting\'s AI solution, we were able to organize our festival more efficiently while providing a better experience for all participants.',
    'caseStudies.case2.author': 'Martin Kramer, Festival Director VFX Forum',
    
    // Case Study 3
    'caseStudies.case3.title': 'Digital Entertainment AI Prototyping',
    'caseStudies.case3.description': 'Prototyping of an AI Avatar. AI character interacts in real-time and received positive feedback – a clear proof of technical feasibility.',
    'caseStudies.case3.industry': 'Digital Entertainment',
    'caseStudies.case3.type': 'AI Prototyping',
    'caseStudies.case3.result1': 'Integration of NLP, GANs and motion capture technologies',
    'caseStudies.case3.result2': 'Platform integration on social media',
    'caseStudies.case3.result3': 'User feedback collection and initial data analysis',
    'caseStudies.case3.testimonial': 'The AI avatar has revolutionized our digital presence. The combination of human-like interaction and AI-powered personalization has elevated our user engagement to a new level.',
    'caseStudies.case3.author': 'Thomas Weber, Creative Director',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.description': 'Ready to optimize your processes? Contact us for a non-binding consultation.',
    'contact.contactInfo': 'Contact Information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.country': 'Germany',
    'contact.followUs': 'Follow Us',
    'contact.contactForm': 'Contact Form',
    
    // Contact Form
    'contact.form.name': 'Name',
    'contact.form.namePlaceholder': 'Your Name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'your.email@example.com',
    'contact.form.subject': 'Subject',
    'contact.form.subjectPlaceholder': 'What is it about?',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'How can we help you?',
    'contact.form.acceptPolicy': 'I accept the',
    'contact.form.privacyPolicy': 'Privacy Policy',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    
    // Contact Toast Messages
    'contact.toast.successTitle': 'Message Sent!',
    'contact.toast.successDescription': 'Thank you for your message. We will get back to you shortly.',
    'contact.toast.errorTitle': 'Error Sending Message',
    'contact.toast.errorDescription': 'There was a problem sending your message. Please try again later.',
    
    // Contact Form Validation
    'contact.validation.nameLength': 'Name must be at least 2 characters long',
    'contact.validation.emailValid': 'Please enter a valid email address',
    'contact.validation.messageLength': 'Message must be at least 10 characters long',
    'contact.validation.acceptPolicy': 'You must accept the privacy policy',
    
    // Footer
    'footer.company': 'Taylor Consulting',
    'footer.companyDescription': 'Your partner for customized AI automation solutions. We help you optimize your processes and use resources efficiently.',
    'footer.sitemap': 'Sitemap',
    'footer.home': 'Home',
    'footer.about': 'About us',
    'footer.services': 'Services',
    'footer.caseStudies': 'Case Studies',
    'footer.legal': 'Legal',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.contact': 'Contact',
    'footer.address.street': 'Rheinsberger Straße 71',
    'footer.address.city': '10115 Berlin',
    'footer.address.country': 'Germany',
    'footer.phone': '+49 (0) 172 2179436',
    'footer.email': 'info@taylorconsulting.io',
    'footer.copyright': 'All rights reserved.'
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