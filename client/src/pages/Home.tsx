import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { getWebsiteData } from "../data/staticData";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  
  // Statische Daten basierend auf der aktuellen Sprache abrufen
  const websiteData = getWebsiteData(language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const heroData = {
    headline: language === 'de' ? 'KI-Automatisierungslösungen für die Medienindustrie' : 'AI Automation Solutions for the Media Industry',
    subline: language === 'de' ? 'Spezialisiert auf die Optimierung von Produktionsabläufen und Innovationsimpulse für Medienunternehmen' : 'Specialized in optimizing production processes and innovation impulses for media companies'
  };

  return (
    <div className="min-h-screen">
      <Navbar 
        isScrolled={isScrolled} 
        mobileMenuOpen={mobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main>
        <HeroSection data={heroData} />
        <AboutSection data={websiteData.founders} />
        <ServicesSection data={websiteData.services} />
        <CaseStudiesSection data={websiteData.caseStudies} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
