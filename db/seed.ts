import { db } from "./index";
import * as schema from "@shared/schema";

async function seed() {
  try {
    console.log("🌱 Starting database seeding...");
    
    // Seed founders/team members
    const founders = [
      {
        name: "Andreas Schneider",
        role: "Co-Founder & AI Manager",
        bio: "Mit über 10 Jahren Erfahrung in der Technologiebranche unterstützt Andreas Unternehmen dabei, das volle Potenzial von KI-Technologien auszuschöpfen.",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Dino Fetzer",
        role: "Co-Founder & AI Manager",
        bio: "Dino ist spezialisiert auf die Integration von KI in bestehende Geschäftsprozesse und hat zahlreiche erfolgreiche Automatisierungsprojekte geleitet.",
        image: "/images/dino_fetzer.png"
      }
    ];

    // Check if founders already exist
    const existingFounders = await db.query.founders.findMany();
    
    if (existingFounders.length === 0) {
      console.log("Seeding founders...");
      
      for (const founder of founders) {
        const [insertedFounder] = await db.insert(schema.founders)
          .values(founder)
          .returning();
          
        if (founder.name === "Andreas Schneider") {
          await db.insert(schema.founderBadges)
            .values([
              { founderId: insertedFounder.id, badge: "AI Manager Zertifiziert" },
              { founderId: insertedFounder.id, badge: "KI-Experte" }
            ]);
        } else if (founder.name === "Dino Fetzer") {
          await db.insert(schema.founderBadges)
            .values([
              { founderId: insertedFounder.id, badge: "AI Manager Zertifiziert" },
              { founderId: insertedFounder.id, badge: "RPA-Spezialist" }
            ]);
        }
      }
    } else {
      console.log("Founders already exist, skipping...");
    }

    // Seed services
    const services = [
      {
        title: "Prozess-Optimierung mit RPA",
        description: "Automatisieren Sie repetitive Aufgaben und Workflows mit Robotic Process Automation und steigern Sie Ihre Effizienz um bis zu 80%.",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>',
        features: [
          "Reduzierung manueller Eingaben",
          "Fehlerminimierung",
          "24/7 Betrieb"
        ]
      },
      {
        title: "KI-gestützte Datenanalyse",
        description: "Nutzen Sie die Kraft der künstlichen Intelligenz, um Ihre Daten zu analysieren und wertvolle Erkenntnisse zu gewinnen.",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
        features: [
          "Predictive Analytics",
          "Muster-Erkennung",
          "Entscheidungsunterstützung"
        ]
      },
      {
        title: "Intelligente Kommunikationssysteme",
        description: "Automatisieren Sie Kundenkommunikation mit intelligenten Chatbots und NLP-Technologien für besseren Service.",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>',
        features: [
          "Chatbot-Integration",
          "Sprach- und Textanalyse",
          "Sentiment-Analyse"
        ]
      },
      {
        title: "Dokumenten-Automatisierung",
        description: "Extrahieren Sie Informationen aus Dokumenten, automatisieren Sie die Verarbeitung und optimieren Sie Ihre Workflows.",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
        features: [
          "OCR-Technologie",
          "Intelligente Klassifizierung",
          "Automatische Datenextraktion"
        ]
      }
    ];

    // Check if services already exist
    const existingServices = await db.query.services.findMany();
    
    if (existingServices.length === 0) {
      console.log("Seeding services...");
      
      for (const service of services) {
        const { features, ...serviceData } = service;
        
        const [insertedService] = await db.insert(schema.services)
          .values(serviceData)
          .returning();
          
        // Add features for this service
        const featurePromises = features.map(feature => 
          db.insert(schema.serviceFeatures)
            .values({ serviceId: insertedService.id, text: feature })
        );
        
        await Promise.all(featurePromises);
      }
    } else {
      console.log("Services already exist, skipping...");
    }

    // Seed case studies
    const caseStudies = [
      {
        title: "Automatisierte Lieferkettenverwaltung für LogiTech GmbH",
        description: "Die Integration unserer KI-basierten Automatisierungslösung in die Lieferkettenverwaltung hat die Effizienz von LogiTech um 35% gesteigert und die Fehlerquote um 78% reduziert.",
        industry: "Logistikbranche",
        type: "Prozessautomatisierung",
        testimonial: "Die KI-Lösung von Taylor Consulting hat unsere Lieferkette revolutioniert. Wir können nun viel präziser planen und schneller auf Veränderungen reagieren.",
        author: "Michael Berger, CIO",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        results: [
          "Implementierung eines KI-gestützten Routenoptimierungssystems",
          "Automatisierung der Bestandsverwaltung mit Predictive Analytics",
          "Reduzierung der Lieferzeit um 28%"
        ]
      },
      {
        title: "KI-gestützte Betrugserkennung für FinSecure AG",
        description: "Implementierung eines intelligenten Betrugserkennungssystems, das verdächtige Transaktionen in Echtzeit analysiert und potenzielle Betrugsfälle mit 97% Genauigkeit identifiziert.",
        industry: "Finanzsektor",
        type: "Datenanalyse",
        testimonial: "Das KI-System hat unsere Betrugserkennung auf ein neues Level gehoben. Es lernt kontinuierlich und passt sich neuen Bedrohungen an.",
        author: "Laura Schmidt, Head of Security",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        results: [
          "Entwicklung eines selbstlernenden Algorithmus zur Betrugserkennung",
          "Reduzierung falscher Alarme um 82%",
          "Einsparungen von ca. 2,4 Millionen Euro im ersten Jahr"
        ]
      },
      {
        title: "Intelligente Patientenakten-Verwaltung für MediCare Klinik",
        description: "Entwicklung einer KI-gestützten Lösung zur Digitalisierung und intelligenten Verwaltung von Patientenakten, die die Bearbeitungszeit um 68% reduziert hat.",
        industry: "Gesundheitswesen",
        type: "Dokumentenmanagement",
        testimonial: "Die Lösung hat unsere Verwaltungsprozesse transformiert. Ärzte haben nun sofortigen Zugriff auf relevante Patientendaten.",
        author: "Dr. Julia Weber, Ärztliche Direktorin",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        results: [
          "Implementierung eines OCR-Systems mit medizinischer Fachterminologie",
          "Automatische Kategorisierung und Indexierung von Patientendaten",
          "Compliance-konforme Datensicherheit und -verschlüsselung"
        ]
      }
    ];

    // Check if case studies already exist
    const existingCaseStudies = await db.query.caseStudies.findMany();
    
    if (existingCaseStudies.length === 0) {
      console.log("Seeding case studies...");
      
      for (const caseStudy of caseStudies) {
        const { results, ...caseStudyData } = caseStudy;
        
        const [insertedCaseStudy] = await db.insert(schema.caseStudies)
          .values(caseStudyData)
          .returning();
          
        // Add results for this case study
        const resultPromises = results.map(result => 
          db.insert(schema.caseStudyResults)
            .values({ caseStudyId: insertedCaseStudy.id, text: result })
        );
        
        await Promise.all(resultPromises);
      }
    } else {
      console.log("Case studies already exist, skipping...");
    }

    console.log("✅ Database seeding completed successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  }
}

seed();
