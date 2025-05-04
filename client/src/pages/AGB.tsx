import { useLanguage } from "../contexts/LanguageContext";
import { Container } from "../components/ui/container";
import { Link } from "wouter";

export default function AGB() {
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
        <h1 className="text-3xl font-bold mb-8">{language === 'de' ? 'Allgemeine Geschäftsbedingungen' : 'Terms and Conditions'}</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">§1 {language === 'de' ? 'Geltungsbereich' : 'Scope'}</h2>
            <p>
              {language === 'de' 
                ? 'Diese Allgemeinen Geschäftsbedingungen gelten für alle Angebote, Lieferungen und Leistungen von Taylor Consulting, Rheinsberger Straße 71, 10115 Berlin (nachfolgend "Taylor Consulting" genannt) gegenüber ihren Kunden (nachfolgend "Kunde" genannt). Sie gelten auch für alle zukünftigen Geschäftsbeziehungen, auch wenn sie nicht nochmals ausdrücklich vereinbart werden. Abweichende Bedingungen des Kunden, die Taylor Consulting nicht ausdrücklich anerkennt, werden nicht Vertragsinhalt, auch wenn Taylor Consulting ihnen nicht ausdrücklich widerspricht.'
                : 'These General Terms and Conditions apply to all offers, deliveries and services from Taylor Consulting, Rheinsberger Straße 71, 10115 Berlin (hereinafter referred to as "Taylor Consulting") to its customers (hereinafter referred to as "Customer"). They also apply to all future business relationships, even if they are not expressly agreed again. Deviating conditions of the customer that Taylor Consulting does not expressly acknowledge do not become part of the contract, even if Taylor Consulting does not expressly object to them.'}
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">§2 {language === 'de' ? 'Vertragsschluss' : 'Contract Conclusion'}</h2>
            <p>
              {language === 'de' 
                ? 'Angebote von Taylor Consulting sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind. Die Beauftragung durch den Kunden gilt als verbindliches Vertragsangebot. Die Annahme dieses Vertragsangebotes erfolgt durch Bestätigung oder durch Beginn der Leistungserbringung durch Taylor Consulting.'
                : 'Offers from Taylor Consulting are subject to change and non-binding, unless they are expressly marked as binding. The order by the customer is considered a binding contract offer. The acceptance of this contract offer takes place through confirmation or through the commencement of service provision by Taylor Consulting.'}
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">§3 {language === 'de' ? 'Leistungsumfang' : 'Scope of Services'}</h2>
            <p>
              {language === 'de' 
                ? 'Der Umfang der Leistungen ergibt sich aus der jeweiligen Leistungsbeschreibung, dem Angebot, dem Auftrag oder der Auftragsbestätigung. Taylor Consulting ist berechtigt, zur Erfüllung der vereinbarten Leistungen Subunternehmer zu beauftragen. Änderungen oder Ergänzungen der vereinbarten Leistungen bedürfen einer gesonderten Vereinbarung.'
                : 'The scope of services is derived from the respective service description, the offer, the order or the order confirmation. Taylor Consulting is entitled to commission subcontractors to fulfill the agreed services. Changes or additions to the agreed services require a separate agreement.'}
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">§4 {language === 'de' ? 'Mitwirkungspflichten des Kunden' : 'Cooperation Obligations of the Customer'}</h2>
            <p>
              {language === 'de' 
                ? 'Der Kunde ist verpflichtet, Taylor Consulting bei der Erbringung der vereinbarten Leistungen angemessen zu unterstützen. Dies umfasst insbesondere die rechtzeitige Bereitstellung aller erforderlichen Informationen, Unterlagen und Daten sowie die Benennung von Ansprechpartnern. Kommt der Kunde seinen Mitwirkungspflichten nicht rechtzeitig nach, so verlängern sich die für Taylor Consulting geltenden Fristen angemessen. Taylor Consulting kann den dadurch entstandenen Mehraufwand in Rechnung stellen.'
                : 'The customer is obliged to provide appropriate support to Taylor Consulting in the provision of the agreed services. This includes, in particular, the timely provision of all necessary information, documents and data, as well as the designation of contact persons. If the customer does not fulfill its cooperation obligations in a timely manner, the deadlines applicable to Taylor Consulting will be extended accordingly. Taylor Consulting can invoice the additional work incurred as a result.'}
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">§5 {language === 'de' ? 'Vergütung und Zahlungsbedingungen' : 'Remuneration and Payment Terms'}</h2>
            <p>
              {language === 'de' 
                ? 'Die Vergütung für die Leistungen von Taylor Consulting richtet sich nach dem jeweiligen Angebot oder der Auftragsbestätigung. Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer, sofern nicht anders angegeben. Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig. Bei Zahlungsverzug ist Taylor Consulting berechtigt, Verzugszinsen in Höhe von 9 Prozentpunkten über dem jeweiligen Basiszinssatz zu berechnen.'
                : 'The remuneration for the services of Taylor Consulting is based on the respective offer or order confirmation. All prices are subject to statutory value added tax, unless otherwise stated. Invoices are due for payment without deduction within 14 days of invoicing. In the event of payment default, Taylor Consulting is entitled to charge default interest at the rate of 9 percentage points above the respective base rate.'}
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">§6 {language === 'de' ? 'Gewährleistung und Haftung' : 'Warranty and Liability'}</h2>
            <p>
              {language === 'de' 
                ? 'Taylor Consulting erbringt die vereinbarten Leistungen nach den anerkannten Regeln der Technik und mit der erforderlichen Sorgfalt. Sollten Leistungen mangelhaft sein, hat der Kunde Taylor Consulting unverzüglich zu informieren und Gelegenheit zur Nacherfüllung zu geben. Die Haftung von Taylor Consulting für Schäden ist auf Vorsatz und grobe Fahrlässigkeit beschränkt, sofern es sich nicht um die Verletzung einer vertragswesentlichen Pflicht oder um Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit handelt.'
                : 'Taylor Consulting provides the agreed services in accordance with the recognized rules of technology and with the necessary care. If services are defective, the customer must inform Taylor Consulting immediately and give them the opportunity to rectify the defect. Taylor Consulting\'s liability for damages is limited to intent and gross negligence, unless it involves the breach of an essential contractual obligation or damages from injury to life, body or health.'}
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">§7 {language === 'de' ? 'Datenschutz und Vertraulichkeit' : 'Data Protection and Confidentiality'}</h2>
            <p>
              {language === 'de' 
                ? 'Taylor Consulting verpflichtet sich zur Einhaltung der geltenden datenschutzrechtlichen Bestimmungen. Nähere Informationen zum Datenschutz können der Datenschutzerklärung entnommen werden. Beide Parteien verpflichten sich, vertrauliche Informationen, die sie im Rahmen der Zusammenarbeit erhalten, vertraulich zu behandeln und nicht an Dritte weiterzugeben, sofern dies nicht zur Erfüllung der vertraglichen Pflichten notwendig ist oder gesetzliche Verpflichtungen bestehen.'
                : 'Taylor Consulting undertakes to comply with the applicable data protection regulations. Further information on data protection can be found in the privacy policy. Both parties undertake to treat confidential information that they receive in the course of the cooperation confidentially and not to pass it on to third parties, unless this is necessary for the fulfillment of contractual obligations or legal obligations exist.'}
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">§8 {language === 'de' ? 'Schlussbestimmungen' : 'Final Provisions'}</h2>
            <p>
              {language === 'de' 
                ? 'Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gerichtsstand für alle Streitigkeiten aus der Geschäftsbeziehung ist, soweit gesetzlich zulässig, Berlin. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so wird die Wirksamkeit der übrigen Bestimmungen dadurch nicht berührt. Die Parteien werden in diesem Fall die unwirksame Bestimmung durch eine wirksame ersetzen, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.'
                : 'The law of the Federal Republic of Germany applies to the exclusion of the UN Convention on Contracts for the International Sale of Goods. The place of jurisdiction for all disputes arising from the business relationship is, as far as legally permissible, Berlin. Should individual provisions of these GTC be or become invalid, the validity of the remaining provisions shall not be affected. In this case, the parties will replace the invalid provision with a valid one that comes closest to the economic purpose of the invalid provision.'}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}