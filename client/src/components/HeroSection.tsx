import { motion } from "framer-motion";

interface HeroProps {
  data?: {
    headline: string;
    subline: string;
  };
}

export default function HeroSection({ data }: HeroProps) {
  const headline = data?.headline || "AI-Automatisierungen für Ihr Unternehmen";
  const subline = data?.subline || "Maßgeschneiderte KI-Lösungen, die Ihre Prozesse optimieren und Ihr Geschäft auf die nächste Stufe bringen.";

  return (
    <section id="home" className="section relative min-h-screen flex items-center bg-gradient-hero text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-secondary opacity-90"></div>
        {/* Abstract tech pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover" 
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {subline}
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a 
              href="#contact" 
              className="bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Jetzt Beratung anfragen
            </motion.a>
            <motion.a 
              href="#services" 
              className="bg-transparent border-2 border-white hover:border-primary hover:text-primary text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Services entdecken
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
