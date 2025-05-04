import { useLanguage } from "../contexts/LanguageContext";
import { Container } from "../components/ui/container";
import { Link } from "wouter";

export default function Impressum() {
  const { language } = useLanguage();
  
  return (
    <Container className="py-12">
      <div className="flex items-center mb-8">
        <Link href="/" className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {language === 'de' ? 'Zurück zur Startseite' : 'Back to Home'}
        </Link>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">{language === 'de' ? 'Impressum' : 'Imprint'}</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">{language === 'de' ? 'Angaben gemäß § 5 TMG:' : 'Information according to § 5 TMG:'}</h2>
            <p>Taylor Consulting<br />
            Rheinsberger Straße 71<br />
            10115 Berlin<br />
            Deutschland</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">{language === 'de' ? 'Vertreten durch:' : 'Represented by:'}</h2>
            <p>Andreas Schneider<br />
            Dino Fetzer</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">{language === 'de' ? 'Kontakt:' : 'Contact:'}</h2>
            <p>{language === 'de' ? 'Telefon' : 'Phone'}: +49 (0) 172 2179436<br />
            E-Mail: info@taylorconsulting.io</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">{language === 'de' ? 'Umsatzsteuer-ID:' : 'VAT ID:'}</h2>
            <p>{language === 'de' ? 'Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz' : 'VAT identification number according to §27 a of the German VAT Act'}: DE123456789</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">{language === 'de' ? 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:' : 'Responsible for content according to § 55 para. 2 RStV:'}</h2>
            <p>Andreas Schneider<br />
            Rheinsberger Straße 71<br />
            10115 Berlin<br />
            Deutschland</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">{language === 'de' ? 'Streitschlichtung' : 'Dispute Resolution'}</h2>
            <p>
              {language === 'de' 
                ? 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
                : 'The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr. Our email address can be found above in the imprint. We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.'}
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">{language === 'de' ? 'Haftung für Inhalte' : 'Liability for Content'}</h2>
            <p>
              {language === 'de' 
                ? 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.'
                : 'As a service provider, we are responsible for our own content on these pages according to § 7 para.1 TMG and general laws. According to §§ 8 to 10 TMG, we as a service provider are not obliged to monitor transmitted or stored foreign information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this respect is only possible from the time of knowledge of a concrete infringement. If we become aware of such infringements, we will remove this content immediately.'}
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">{language === 'de' ? 'Haftung für Links' : 'Liability for Links'}</h2>
            <p>
              {language === 'de' 
                ? 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.'
                : 'Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of law. If we become aware of any infringements, we will remove such links immediately.'}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}