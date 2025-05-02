import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// User table for authentication (from original schema)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Founders/Team Members
export const founders = pgTable("founders", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  bio: text("bio").notNull(),
  image: text("image").notNull(),
});

export const founderBadges = pgTable("founder_badges", {
  id: serial("id").primaryKey(),
  founderId: integer("founder_id").references(() => founders.id).notNull(),
  badge: text("badge").notNull(),
});

export const foundersRelations = relations(founders, ({ many }) => ({
  badges: many(founderBadges),
}));

// Services
export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
});

export const serviceFeatures = pgTable("service_features", {
  id: serial("id").primaryKey(),
  serviceId: integer("service_id").references(() => services.id).notNull(),
  text: text("text").notNull(),
});

export const servicesRelations = relations(services, ({ many }) => ({
  features: many(serviceFeatures),
}));

// Case Studies
export const caseStudies = pgTable("case_studies", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  industry: text("industry").notNull(),
  type: text("type").notNull(),
  testimonial: text("testimonial").notNull(),
  author: text("author").notNull(),
  image: text("image").notNull(),
});

export const caseStudyResults = pgTable("case_study_results", {
  id: serial("id").primaryKey(),
  caseStudyId: integer("case_study_id").references(() => caseStudies.id).notNull(),
  text: text("text").notNull(),
});

export const caseStudiesRelations = relations(caseStudies, ({ many }) => ({
  results: many(caseStudyResults),
}));

// Contact Form Submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Insert schemas
export const insertFounderSchema = createInsertSchema(founders);
export const insertFounderBadgeSchema = createInsertSchema(founderBadges);
export const insertServiceSchema = createInsertSchema(services);
export const insertServiceFeatureSchema = createInsertSchema(serviceFeatures);
export const insertCaseStudySchema = createInsertSchema(caseStudies);
export const insertCaseStudyResultSchema = createInsertSchema(caseStudyResults);
export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions);

// Types
export type Founder = typeof founders.$inferSelect;
export type FounderBadge = typeof founderBadges.$inferSelect;
export type Service = typeof services.$inferSelect;
export type ServiceFeature = typeof serviceFeatures.$inferSelect;
export type CaseStudy = typeof caseStudies.$inferSelect;
export type CaseStudyResult = typeof caseStudyResults.$inferSelect;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
