import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

interface CaseStudyResult {
  text: string;
}

interface CaseStudyProps {
  title: string;
  description: string;
  industry: string;
  type: string;
  results: CaseStudyResult[];
  testimonial: string;
  author: string;
  image: string;
}

interface CaseStudiesSectionProps {
  data?: CaseStudyProps[];
}

const defaultCaseStudies: CaseStudyProps[] = [
  {
    title: "Automatisierte Lieferkettenverwaltung für LogiTech GmbH",
    description: "Die Integration unserer KI-basierten Automatisierungslösung in die Lieferkettenverwaltung hat die Effizienz von LogiTech um 35% gesteigert und die Fehlerquote um 78% reduziert.",
    industry: "Logistikbranche",
    type: "Prozessautomatisierung",
    results: [
      { text: "Implementierung eines KI-gestützten Routenoptimierungssystems" },
      { text: "Automatisierung der Bestandsverwaltung mit Predictive Analytics" },
      { text: "Reduzierung der Lieferzeit um 28%" }
    ],
    testimonial: "Die KI-Lösung von Taylor Consulting hat unsere Lieferkette revolutioniert. Wir können nun viel präziser planen und schneller auf Veränderungen reagieren.",
    author: "Michael Berger, CIO",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "KI-gestützte Betrugserkennung für FinSecure AG",
    description: "Implementierung eines intelligenten Betrugserkennungssystems, das verdächtige Transaktionen in Echtzeit analysiert und potenzielle Betrugsfälle mit 97% Genauigkeit identifiziert.",
    industry: "Finanzsektor",
    type: "Datenanalyse",
    results: [
      { text: "Entwicklung eines selbstlernenden Algorithmus zur Betrugserkennung" },
      { text: "Reduzierung falscher Alarme um 82%" },
      { text: "Einsparungen von ca. 2,4 Millionen Euro im ersten Jahr" }
    ],
    testimonial: "Das KI-System hat unsere Betrugserkennung auf ein neues Level gehoben. Es lernt kontinuierlich und passt sich neuen Bedrohungen an.",
    author: "Laura Schmidt, Head of Security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Intelligente Patientenakten-Verwaltung für MediCare Klinik",
    description: "Entwicklung einer KI-gestützten Lösung zur Digitalisierung und intelligenten Verwaltung von Patientenakten, die die Bearbeitungszeit um 68% reduziert hat.",
    industry: "Gesundheitswesen",
    type: "Dokumentenmanagement",
    results: [
      { text: "Implementierung eines OCR-Systems mit medizinischer Fachterminologie" },
      { text: "Automatische Kategorisierung und Indexierung von Patientendaten" },
      { text: "Compliance-konforme Datensicherheit und -verschlüsselung" }
    ],
    testimonial: "Die Lösung hat unsere Verwaltungsprozesse transformiert. Ärzte haben nun sofortigen Zugriff auf relevante Patientendaten.",
    author: "Dr. Julia Weber, Ärztliche Direktorin",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

function CaseStudyCard({ caseStudy, index }: { caseStudy: CaseStudyProps, index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div 
      ref={cardRef}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <div className="lg:flex">
        <div className="lg:w-1/3 relative">
          <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
          <img 
            className="h-64 lg:h-full w-full object-cover" 
            src={caseStudy.image} 
            alt={caseStudy.title} 
            loading="lazy"
          />
        </div>
        <div className="lg:w-2/3 p-8">
          <div className="flex flex-wrap items-center mb-4 gap-2">
            <span className="bg-primary/20 text-primary text-xs font-semibold py-1 px-3 rounded-full">
              {caseStudy.industry}
            </span>
            <span className="bg-primary/20 text-primary text-xs font-semibold py-1 px-3 rounded-full">
              {caseStudy.type}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
          <p className="text-gray-300 mb-4">
            {caseStudy.description}
          </p>
          <ul className="space-y-2 text-gray-300 mb-6">
            {caseStudy.results.map((result, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                {result.text}
              </li>
            ))}
          </ul>
          <div className="italic text-gray-400">
            "{caseStudy.testimonial}" - {caseStudy.author}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudiesSection({ data = defaultCaseStudies }: CaseStudiesSectionProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="case-studies" ref={sectionRef} className="section py-20 bg-secondary text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Erfolgsgeschichten</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            Entdecken Sie, wie wir anderen Unternehmen geholfen haben, durch KI-Automatisierung Zeit und Ressourcen zu sparen und ihre Effizienz zu steigern.
          </p>
        </motion.div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {data.map((caseStudy, index) => (
            <CaseStudyCard key={index} caseStudy={caseStudy} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
