import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface FounderProps {
  name: string;
  role: string;
  bio: string;
  badges: string[];
  image: string;
}

interface AboutSectionProps {
  data?: FounderProps[];
}

const defaultFounders: FounderProps[] = [
  {
    name: "Andreas Schneider",
    role: "Co-Founder & AI Manager",
    bio: "Mit über 10 Jahren Erfahrung in der Technologiebranche unterstützt Andreas Unternehmen dabei, das volle Potenzial von KI-Technologien auszuschöpfen.",
    badges: ["AI Manager Zertifiziert", "KI-Experte"],
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Dino Fetzer",
    role: "Co-Founder & AI Manager",
    bio: "Dino Fetzer, zertifizierter AI-Manager und Werbe-Filmregisseur, spezialisiert auf innovative KI-Automation und Content-Erstellung.",
    badges: ["AI Manager Zertifiziert", "Award Winning Director"],
    image: "/images/dino_fetzer.png"
  }
];

function FounderCard({ founder }: { founder: FounderProps }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div 
      ref={cardRef}
      className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-64 bg-gray-200 relative overflow-hidden">
        <img 
          className="w-full h-full object-cover" 
          src={founder.image} 
          alt={`${founder.name} - ${founder.role}`} 
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{founder.name}</h3>
        <p className="text-gray-600 mb-4">{founder.role}</p>
        <div className="flex flex-wrap items-center mb-4 gap-2">
          {founder.badges.map((badge, index) => (
            <span key={index} className="bg-accent text-primary text-sm font-semibold py-1 px-3 rounded-full">
              {badge}
            </span>
          ))}
        </div>
        <p className="text-gray-700">
          {founder.bio}
        </p>
      </div>
    </motion.div>
  );
}

export default function AboutSection({ data = defaultFounders }: AboutSectionProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="about" ref={sectionRef} className="section py-20 bg-neutral-light">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Über uns</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Taylor Consulting ist Ihr Partner für intelligente Prozessautomatisierung. Wir verbinden menschliche Expertise mit modernster KI-Technologie, um für Ihr Unternehmen maßgeschneiderte Automatisierungslösungen zu entwickeln.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {data.map((founder, index) => (
            <FounderCard key={index} founder={founder} />
          ))}
        </div>
      </div>
    </section>
  );
}
