import { useLanguage } from "../contexts/LanguageContext";
import { Container } from "../components/ui/container";
import { Link } from "wouter";

export default function Datenschutz() {
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
        <h1 className="text-3xl font-bold mb-8">{language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. {language === 'de' ? 'Datenschutz auf einen Blick' : 'Privacy at a Glance'}</h2>
            <h3 className="text-lg font-medium mb-1">{language === 'de' ? 'Allgemeine Hinweise' : 'General Information'}</h3>
            <p>
              {language === 'de' 
                ? 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.'
                : 'The following notices provide a simple overview of what happens to your personal data when you visit our website. Personal data is all data by which you can be personally identified. Detailed information on the subject of data protection can be found in our privacy policy listed below this text.'}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-1">{language === 'de' ? 'Datenerfassung auf unserer Website' : 'Data Collection on Our Website'}</h3>
            <p>
              {language === 'de' 
                ? 'Wer ist verantwortlich für die Datenerfassung auf dieser Website? Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.'
                : 'Who is responsible for data collection on this website? Data processing on this website is carried out by the website operator. You can find their contact details in the imprint of this website.'}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-1">{language === 'de' ? 'Wie erfassen wir Ihre Daten?' : 'How Do We Collect Your Data?'}</h3>
            <p>
              {language === 'de' 
                ? 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.'
                : 'Your data is collected on the one hand when you communicate it to us. This could be, for example, data that you enter in a contact form. Other data is automatically collected by our IT systems when you visit the website. This is primarily technical data (e.g. internet browser, operating system or time of page access). This data is collected automatically as soon as you enter our website.'}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-1">{language === 'de' ? 'Wofür nutzen wir Ihre Daten?' : 'What Do We Use Your Data For?'}</h3>
            <p>
              {language === 'de' 
                ? 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.'
                : 'Part of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior.'}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-1">{language === 'de' ? 'Welche Rechte haben Sie bezüglich Ihrer Daten?' : 'What Rights Do You Have Regarding Your Data?'}</h3>
            <p>
              {language === 'de' 
                ? 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.'
                : 'You have the right to receive information about the origin, recipient, and purpose of your stored personal data free of charge at any time. You also have the right to request the correction, blocking, or deletion of this data. You can contact us at any time at the address given in the imprint for this purpose and for further questions on the subject of data protection. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.'}
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">2. {language === 'de' ? 'Allgemeine Hinweise und Pflichtinformationen' : 'General Information and Mandatory Information'}</h2>
            <h3 className="text-lg font-medium mb-1">{language === 'de' ? 'Datenschutz' : 'Data Protection'}</h3>
            <p>
              {language === 'de' 
                ? 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.'
                : 'The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy. When you use this website, various personal data is collected. Personal data is data that can be used to personally identify you. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this is done. We would like to point out that data transmission on the Internet (e.g. when communicating by e-mail) may have security gaps. Complete protection of data against access by third parties is not possible.'}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-1">{language === 'de' ? 'Hinweis zur verantwortlichen Stelle' : 'Note on the Responsible Entity'}</h3>
            <p>
              {language === 'de' 
                ? 'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:'
                : 'The responsible entity for data processing on this website is:'}
            </p>
            <p className="mt-2">
              Taylor Consulting<br />
              Rheinsberger Straße 71<br />
              10115 Berlin<br />
              Deutschland<br />
              <br />
              {language === 'de' ? 'Telefon' : 'Phone'}: +49 (0) 172 2179436<br />
              E-Mail: info@taylorconsulting.io
            </p>
            <p className="mt-2">
              {language === 'de' 
                ? 'Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.'
                : 'The responsible entity is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g. names, e-mail addresses, etc.).'}
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">3. {language === 'de' ? 'Datenerfassung auf unserer Website' : 'Data Collection on Our Website'}</h2>
            <h3 className="text-lg font-medium mb-1">{language === 'de' ? 'Cookies' : 'Cookies'}</h3>
            <p>
              {language === 'de' 
                ? 'Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.'
                : 'The Internet pages partly use so-called cookies. Cookies do not harm your computer and do not contain viruses. Cookies serve to make our offer more user-friendly, effective and safer. Cookies are small text files that are stored on your computer and that your browser saves. Most of the cookies we use are so-called "session cookies". They are automatically deleted after your visit. Other cookies remain stored on your device until you delete them. These cookies enable us to recognize your browser the next time you visit. You can set your browser so that you are informed about the setting of cookies and only allow cookies in individual cases, exclude the acceptance of cookies for certain cases or in general, and activate the automatic deletion of cookies when closing the browser. When cookies are deactivated, the functionality of this website may be limited.'}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-1">{language === 'de' ? 'Kontaktformular' : 'Contact Form'}</h3>
            <p>
              {language === 'de' 
                ? 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.'
                : 'If you send us inquiries via the contact form, your details from the inquiry form, including the contact details you provide there, are stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent.'}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}