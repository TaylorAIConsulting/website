// Hier definieren wir die notwendigen Typen für unsere statischen Daten
type Language = 'de' | 'en';

interface Founder {
  name: string;
  role: string;
  bio: string;
  badges?: string[];
  image: string;
  language: Language;
}

interface ServiceFeature {
  text: string;
}

interface Service {
  icon: string;
  title: string;
  description: string;
  features?: ServiceFeature[];
  language: Language;
}

interface CaseStudyResult {
  text: string;
}

interface CaseStudy {
  title: string;
  description: string;
  industry: string;
  type: string;
  testimonial: string;
  author: string;
  image: string;
  results?: CaseStudyResult[];
  language: Language;
}

// Mock Daten für die Founder
export const founderData: Omit<Founder, 'id'>[] = [
  {
    name: 'Andreas Schneider',
    role: 'Technical Program Manager',
    bio: 'Erfahrener technischer Programmmanager, spezialisiert auf Medien-Workflows, strategische Optimierung, KI, Automation, Innovation und Effizienzsteigerung.',
    image: '/images/andreas_schneider_new.jpeg',
    language: 'de'
  },
  {
    name: 'Andreas Schneider',
    role: 'Technical Program Manager',
    bio: 'Experienced technical program manager specialized in media workflows, strategic optimization, AI, automation, innovation, and efficiency enhancement.',
    image: '/images/andreas_schneider_new.jpeg',
    language: 'en'
  },
  {
    name: 'Dino Fetzer',
    role: 'Creative Director',
    bio: 'Kreativdirektor mit Expertise in internationalen Projekten der Unterhaltungsindustrie, spezialisiert auf innovative KI-Lösungen und kreative Produktionsprozesse.',
    image: '/images/dino_fetzer.png',
    language: 'de'
  },
  {
    name: 'Dino Fetzer',
    role: 'Creative Director',
    bio: 'Creative Director with expertise in international entertainment industry projects, specialized in innovative AI solutions and creative production processes.',
    image: '/images/dino_fetzer.png',
    language: 'en'
  }
];

// Mock Daten für die Services
export const serviceData: Omit<Service, 'id'>[] = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
    title: 'Workflow-Automatisierung',
    description: 'Optimierung und Automatisierung komplexer Abläufe in Medienproduktion und Contentverteilung.',
    language: 'de'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
    title: 'Workflow Automation',
    description: 'Optimization and automation of complex processes in media production and content distribution.',
    language: 'en'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m2 12 3-3 3 3-3 3-3-3Z"></path><path d="m19 12-3-3-3 3 3 3 3-3Z"></path><path d="M7.5 12h9"></path></svg>',
    title: 'KI-Integration',
    description: 'Implementierung maßgeschneiderter KI-Lösungen zur Effizienzsteigerung und Qualitätsverbesserung von Medienprodukten.',
    language: 'de'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m2 12 3-3 3 3-3 3-3-3Z"></path><path d="m19 12-3-3-3 3 3 3 3-3Z"></path><path d="M7.5 12h9"></path></svg>',
    title: 'AI Integration',
    description: 'Implementation of customized AI solutions to increase efficiency and improve the quality of media products.',
    language: 'en'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
    title: 'Prozessoptimierung',
    description: 'Analyse und Verbesserung bestehender Produktionsprozesse mit Fokus auf Effizienz und Ressourceneinsatz.',
    language: 'de'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
    title: 'Process Optimization',
    description: 'Analysis and improvement of existing production processes with a focus on efficiency and resource utilization.',
    language: 'en'
  }
];

// Funktionen zur Simulation von Service-Features
export const serviceFeatures = [
  { serviceId: 1, text: 'Automatisierte Mediendistribution', language: 'de' },
  { serviceId: 1, text: 'Automated media distribution', language: 'en' },
  { serviceId: 1, text: 'Workflow-Analyse und -Optimierung', language: 'de' },
  { serviceId: 1, text: 'Workflow analysis and optimization', language: 'en' },
  { serviceId: 1, text: 'Content-Delivery-Automatisierung', language: 'de' },
  { serviceId: 1, text: 'Content delivery automation', language: 'en' },
  { serviceId: 2, text: 'KI-gestützte Contentanalyse', language: 'de' },
  { serviceId: 2, text: 'AI-powered content analysis', language: 'en' },
  { serviceId: 2, text: 'Automatisierte Metadatengenerierung', language: 'de' },
  { serviceId: 2, text: 'Automated metadata generation', language: 'en' },
  { serviceId: 2, text: 'Intelligente Contentempfehlungen', language: 'de' },
  { serviceId: 2, text: 'Intelligent content recommendations', language: 'en' },
  { serviceId: 3, text: 'Ressourcenoptimierung', language: 'de' },
  { serviceId: 3, text: 'Resource optimization', language: 'en' },
  { serviceId: 3, text: 'Qualitätssicherung und -kontrolle', language: 'de' },
  { serviceId: 3, text: 'Quality assurance and control', language: 'en' },
  { serviceId: 3, text: 'Kostenreduktion durch optimierte Abläufe', language: 'de' },
  { serviceId: 3, text: 'Cost reduction through optimized processes', language: 'en' }
];

// Mock Daten für die Case Studies
export const caseStudyData: Omit<CaseStudy, 'id'>[] = [
  {
    title: 'VICE Media - Content Monetarisierung',
    description: 'Implementierung einer KI-gestützten Content-Management-Lösung zur Effizienzsteigerung bei der Monetarisierung von Videoinhalten.',
    industry: 'Digitale Medien',
    type: 'Prozessautomatisierung',
    testimonial: 'Die von Taylor Consulting implementierte Lösung hat unsere Content-Monetarisierung revolutioniert und die Effizienz um 40% gesteigert.',
    author: 'Medienmanager, VICE',
    image: '/images/Vice-Logo.jpeg',
    language: 'de'
  },
  {
    title: 'VICE Media - Content Monetization',
    description: 'Implementation of an AI-powered content management solution to increase efficiency in the monetization of video content.',
    industry: 'Digital Media',
    type: 'Process Automation',
    testimonial: 'The solution implemented by Taylor Consulting has revolutionized our content monetization and increased efficiency by 40%.',
    author: 'Media Manager, VICE',
    image: '/images/Vice-Logo.jpeg',
    language: 'en'
  },
  {
    title: 'VFX Forum - KI-gestützte Festivaloptimierung',
    description: 'Entwicklung einer intelligenten Automatisierungslösung für die Planung und Durchführung von internationalen Filmfestivals mit optimierter Ressourcennutzung.',
    industry: 'Veranstaltungsmanagement',
    type: 'KI-Integration',
    testimonial: 'Durch die maßgeschneiderte KI-Lösung von Taylor Consulting konnten wir unsere Planungszeit halbieren und die Besucherzufriedenheit deutlich steigern.',
    author: 'Festivalleiter, VFX Forum',
    image: '/images/VFX-Forum.png',
    language: 'de'
  },
  {
    title: 'VFX Forum - AI-powered Festival Optimization',
    description: 'Development of an intelligent automation solution for the planning and execution of international film festivals with optimized resource utilization.',
    industry: 'Event Management',
    type: 'AI Integration',
    testimonial: 'Through the tailored AI solution from Taylor Consulting, we were able to halve our planning time and significantly increase visitor satisfaction.',
    author: 'Festival Director, VFX Forum',
    image: '/images/VFX-Forum.png',
    language: 'en'
  },
  {
    title: 'Digital Entertainment KI Prototyping',
    description: 'Konzeption und Prototyping einer KI-basierten Plattform zur automatisierten Erstellung und Optimierung von digitalen Unterhaltungsinhalten.',
    industry: 'Unterhaltungsindustrie',
    type: 'KI-Entwicklung',
    testimonial: 'Die innovative Herangehensweise von Taylor Consulting hat uns geholfen, neue Wege in der automatisierten Content-Erstellung zu erschließen.',
    author: 'Innovationsmanager, Digital Entertainment',
    image: '/images/Jamie_Hunter_M_5.mp4',
    language: 'de'
  },
  {
    title: 'Digital Entertainment AI Prototyping',
    description: 'Conception and prototyping of an AI-based platform for automated creation and optimization of digital entertainment content.',
    industry: 'Entertainment Industry',
    type: 'AI Development',
    testimonial: 'Taylor Consulting\'s innovative approach has helped us explore new avenues in automated content creation.',
    author: 'Innovation Manager, Digital Entertainment',
    image: '/images/Jamie_Hunter_M_5.mp4',
    language: 'en'
  }
];

// Funktionen zur Simulation von Case Study Results
export const caseStudyResults = [
  { caseStudyId: 1, text: '40% höhere Monetarisierungsrate', language: 'de' },
  { caseStudyId: 1, text: '40% higher monetization rate', language: 'en' },
  { caseStudyId: 1, text: '60% schnellere Content-Verarbeitung', language: 'de' },
  { caseStudyId: 1, text: '60% faster content processing', language: 'en' },
  { caseStudyId: 1, text: '30% Kosteneinsparung', language: 'de' },
  { caseStudyId: 1, text: '30% cost reduction', language: 'en' },
  { caseStudyId: 2, text: '50% reduzierte Planungszeit', language: 'de' },
  { caseStudyId: 2, text: '50% reduced planning time', language: 'en' },
  { caseStudyId: 2, text: '35% optimierte Ressourcennutzung', language: 'de' },
  { caseStudyId: 2, text: '35% optimized resource utilization', language: 'en' },
  { caseStudyId: 2, text: '25% höhere Besucherzufriedenheit', language: 'de' },
  { caseStudyId: 2, text: '25% increased visitor satisfaction', language: 'en' },
  { caseStudyId: 3, text: '70% schnellere Prototypenentwicklung', language: 'de' },
  { caseStudyId: 3, text: '70% faster prototype development', language: 'en' },
  { caseStudyId: 3, text: '45% verbesserte Content-Qualität', language: 'de' },
  { caseStudyId: 3, text: '45% improved content quality', language: 'en' },
  { caseStudyId: 3, text: '80% Automatisierungsgrad', language: 'de' },
  { caseStudyId: 3, text: '80% automation level', language: 'en' }
];

// Hilfsfunktion zum Abrufen von Daten basierend auf der Sprache
export function getFoundersForLanguage(language: 'de' | 'en') {
  return founderData.filter(founder => founder.language === language);
}

export function getServicesForLanguage(language: 'de' | 'en') {
  return serviceData.filter(service => service.language === language);
}

export function getCaseStudiesForLanguage(language: 'de' | 'en') {
  return caseStudyData.filter(caseStudy => caseStudy.language === language);
}

export function getServiceFeaturesForService(serviceId: number, language: 'de' | 'en') {
  return serviceFeatures.filter(
    feature => feature.serviceId === serviceId && feature.language === language
  );
}

export function getCaseStudyResultsForCaseStudy(caseStudyId: number, language: 'de' | 'en') {
  return caseStudyResults.filter(
    result => result.caseStudyId === caseStudyId && result.language === language
  );
}

// Funktion zum Abrufen aller Websitedaten für eine bestimmte Sprache
export function getWebsiteData(language: 'de' | 'en') {
  const founders = getFoundersForLanguage(language);
  const services = getServicesForLanguage(language);
  const caseStudies = getCaseStudiesForLanguage(language);
  
  // Ergänze die Services mit ihren Features
  const servicesWithFeatures = services.map((service, index) => {
    const features = getServiceFeaturesForService(index + 1, language)
      .map(feature => ({ text: feature.text }));
    return { ...service, features };
  });
  
  // Ergänze die Case Studies mit ihren Results
  const caseStudiesWithResults = caseStudies.map((caseStudy, index) => {
    const results = getCaseStudyResultsForCaseStudy(index + 1, language)
      .map(result => ({ text: result.text }));
    return { ...caseStudy, results };
  });
  
  return {
    founders,
    services: servicesWithFeatures,
    caseStudies: caseStudiesWithResults
  };
}