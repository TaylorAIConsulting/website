import { Link } from "wouter";
import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Taylor Consulting</h3>
            <p className="text-gray-400 mb-4 max-w-[220px]">
              Ihr Partner für maßgeschneiderte KI-Automatisierungslösungen. Wir helfen Ihnen, Ihre Prozesse zu optimieren und Ressourcen effizient einzusetzen.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Sitemap</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition duration-300">Über uns</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition duration-300">Services</a></li>
              <li><a href="#case-studies" className="text-gray-400 hover:text-primary transition duration-300">Referenzen</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition duration-300">Kontakt</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li><Link href="/impressum" className="text-gray-400 hover:text-primary transition duration-300">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-gray-400 hover:text-primary transition duration-300">Datenschutz</Link></li>
              <li><Link href="/agb" className="text-gray-400 hover:text-primary transition duration-300">AGB</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Innovationsstraße 42</li>
              <li>80331 München</li>
              <li>Deutschland</li>
              <li className="pt-2">
                <a href="tel:+4989123456789" className="hover:text-primary transition duration-300">+49 (0) 89 123 456 789</a>
              </li>
              <li>
                <a href="mailto:info@taylor-consulting.de" className="hover:text-primary transition duration-300">info@taylor-consulting.de</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Taylor Consulting. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-primary transition duration-300" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition duration-300" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
