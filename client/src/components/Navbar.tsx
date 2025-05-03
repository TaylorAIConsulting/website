import { Link } from "wouter";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navbar({ isScrolled, mobileMenuOpen, toggleMobileMenu, setMobileMenuOpen }: NavbarProps) {
  const { t } = useLanguage();
  
  const navLinks = [
    { href: "#home", label: t('nav.home') },
    { href: "#about", label: t('nav.about') },
    { href: "#services", label: t('nav.services') },
    { href: "#case-studies", label: t('nav.caseStudies') },
    { href: "#contact", label: t('nav.contact') },
  ];

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      id="navbar" 
      className={`navbar-fixed top-0 z-50 ${isScrolled ? 'bg-secondary shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white">
            Taylor <span className="text-primary">Consulting</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <LanguageSwitcher />
            
            <div className="lg:hidden ml-2">
              <button 
                id="menu-toggle" 
                className="text-white focus:outline-none"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-white hover:text-primary transition duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      
      <div id="mobile-menu" className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-secondary`}>
        <div className="px-4 py-5 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="block text-white hover:text-primary transition duration-300"
              onClick={handleNavLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
