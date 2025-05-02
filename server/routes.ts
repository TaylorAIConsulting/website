import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submissions
  app.post('/api/contact', async (req, res) => {
    try {
      const contactSchema = z.object({
        name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
        email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
        subject: z.string().optional(),
        message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
        acceptPolicy: z.boolean().refine(val => val === true, {
          message: "Sie müssen die Datenschutzbestimmungen akzeptieren"
        }),
      });

      const validatedData = contactSchema.parse(req.body);
      
      // Store contact submission in database
      const contactSubmission = await storage.createContactSubmission(validatedData);
      
      return res.status(201).json({
        success: true,
        message: "Kontaktanfrage erfolgreich übermittelt",
        id: contactSubmission.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false,
          errors: validationError.details 
        });
      }
      
      console.error("Error handling contact form:", error);
      return res.status(500).json({ 
        success: false,
        message: "Ein interner Serverfehler ist aufgetreten" 
      });
    }
  });

  // API route to get website data
  app.get('/api/website-data', async (req, res) => {
    try {
      // Add cache-control headers to prevent caching
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
      
      const websiteData = await storage.getWebsiteData();
      
      return res.status(200).json(websiteData);
    } catch (error) {
      console.error("Error fetching website data:", error);
      return res.status(500).json({
        success: false,
        message: "Fehler beim Abrufen der Website-Daten"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
