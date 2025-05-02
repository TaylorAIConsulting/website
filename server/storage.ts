import { db } from "@db";
import * as schema from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export const storage = {
  // Create a contact form submission
  async createContactSubmission(data: {
    name: string;
    email: string;
    subject?: string;
    message: string;
    acceptPolicy: boolean;
  }) {
    const [submission] = await db.insert(schema.contactSubmissions)
      .values({
        name: data.name,
        email: data.email,
        subject: data.subject || "",
        message: data.message,
        createdAt: new Date(),
      })
      .returning();
    
    return submission;
  },

  // Get all website data for the frontend
  async getWebsiteData() {
    const founders = await db.query.founders.findMany({
      orderBy: schema.founders.id,
      with: {
        badges: true,
      },
    });

    const services = await db.query.services.findMany({
      orderBy: schema.services.id,
      with: {
        features: true,
      },
    });

    const caseStudies = await db.query.caseStudies.findMany({
      orderBy: schema.caseStudies.id,
      with: {
        results: true,
      },
    });

    // Format the services data
    const formattedServices = services.map(service => ({
      ...service,
      features: service.features.map(feature => ({
        text: feature.text,
      })),
    }));

    // Format the case studies data
    const formattedCaseStudies = caseStudies.map(study => ({
      ...study,
      results: study.results.map(result => ({
        text: result.text,
      })),
    }));

    // Format the founders data
    const formattedFounders = founders.map(founder => ({
      ...founder,
      badges: founder.badges.map(badge => badge.badge)
    }));

    return {
      founders: formattedFounders,
      services: formattedServices,
      caseStudies: formattedCaseStudies,
      hero: {
        headline: "AI-Automatisierungen für Ihr Unternehmen",
        subline: "Maßgeschneiderte KI-Lösungen, die Ihre Prozesse optimieren und Ihr Geschäft auf die nächste Stufe bringen."
      }
    };
  },

  // Get all contact submissions
  async getContactSubmissions() {
    return db.query.contactSubmissions.findMany({
      orderBy: [desc(schema.contactSubmissions.createdAt)],
    });
  },
};
