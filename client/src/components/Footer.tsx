import { Link } from "wouter";
import { Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Taylor Consulting</h3>
            <p className="text-gray-400 mb-4 max-w-[180px]">
              {t('footer.companyDescription')}
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">{t('footer.sitemap')}</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition duration-300">{t('footer.home')}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition duration-300">{t('footer.about')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition duration-300">{t('footer.services')}</a></li>
              <li><a href="#case-studies" className="text-gray-400 hover:text-primary transition duration-300">{t('footer.caseStudies')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition duration-300">{t('footer.contact')}</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li><Link href="/impressum" className="text-gray-400 hover:text-primary transition duration-300">{t('footer.imprint')}</Link></li>
              <li><Link href="/datenschutz" className="text-gray-400 hover:text-primary transition duration-300">{t('footer.privacy')}</Link></li>
              <li><Link href="/agb" className="text-gray-400 hover:text-primary transition duration-300">{t('footer.terms')}</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer.address.street')}</li>
              <li>{t('footer.address.city')}</li>
              <li>{t('footer.address.country')}</li>
              <li className="pt-2">
                <a href="tel:+491722179436" className="hover:text-primary transition duration-300">{t('footer.phone')}</a>
              </li>
              <li>
                <a href="mailto:info@taylorconsulting.io" className="hover:text-primary transition duration-300">{t('footer.email')}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Taylor Consulting. {t('footer.copyright')}
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
