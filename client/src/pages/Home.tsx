import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { data: websiteData } = useQuery({
    queryKey: ['/api/website-data', Date.now()], // Füge einen Timestamp hinzu, um Cache zu umgehen
    refetchOnMount: true,
    staleTime: 0,
  });

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

  return (
    <div className="min-h-screen">
      <Navbar 
        isScrolled={isScrolled} 
        mobileMenuOpen={mobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main>
        <HeroSection data={websiteData?.hero} />
        <AboutSection data={websiteData?.founders} />
        <ServicesSection data={websiteData?.services} />
        <CaseStudiesSection data={websiteData?.caseStudies} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
