import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

interface ServiceFeature {
  text: string;
}

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: ServiceFeature[];
}

interface ServicesSectionProps {
  data?: ServiceProps[];
}

const defaultServices: ServiceProps[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "Prozess-Optimierung mit RPA",
    description: "Automatisieren Sie repetitive Aufgaben und Workflows mit Robotic Process Automation und steigern Sie Ihre Effizienz um bis zu 80%.",
    features: [
      { text: "Reduzierung manueller Eingaben" },
      { text: "Fehlerminimierung" },
      { text: "24/7 Betrieb" }
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "KI-gestützte Datenanalyse",
    description: "Nutzen Sie die Kraft der künstlichen Intelligenz, um Ihre Daten zu analysieren und wertvolle Erkenntnisse zu gewinnen.",
    features: [
      { text: "Predictive Analytics" },
      { text: "Muster-Erkennung" },
      { text: "Entscheidungsunterstützung" }
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: "Intelligente Kommunikationssysteme",
    description: "Automatisieren Sie Kundenkommunikation mit intelligenten Chatbots und NLP-Technologien für besseren Service.",
    features: [
      { text: "Chatbot-Integration" },
      { text: "Sprach- und Textanalyse" },
      { text: "Sentiment-Analyse" }
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Dokumenten-Automatisierung",
    description: "Extrahieren Sie Informationen aus Dokumenten, automatisieren Sie die Verarbeitung und optimieren Sie Ihre Workflows.",
    features: [
      { text: "OCR-Technologie" },
      { text: "Intelligente Klassifizierung" },
      { text: "Automatische Datenextraktion" }
    ]
  }
];

function ServiceCard({ service, index }: { service: ServiceProps, index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div 
      ref={cardRef}
      className="bg-white rounded-lg shadow-md p-8 border-t-4 border-primary transition duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-primary mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4">
        {service.description}
      </p>
      <ul className="space-y-2 text-gray-700 mb-6">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
            {feature.text}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ServicesSection({ data = defaultServices }: ServicesSectionProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="services" ref={sectionRef} className="section py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Wir bieten eine Reihe von KI-gestützten Automatisierungslösungen, die speziell auf die Bedürfnisse Ihres Unternehmens zugeschnitten sind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
