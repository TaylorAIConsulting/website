import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

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

// Function to get translated case studies
function getTranslatedCaseStudies(t: (key: string) => string): CaseStudyProps[] {
  return [
    {
      title: t('caseStudies.case1.title'),
      description: t('caseStudies.case1.description'),
      industry: t('caseStudies.case1.industry'),
      type: t('caseStudies.case1.type'),
      results: [
        { text: t('caseStudies.case1.result1') },
        { text: t('caseStudies.case1.result2') },
        { text: t('caseStudies.case1.result3') }
      ],
      testimonial: t('caseStudies.case1.testimonial'),
      author: t('caseStudies.case1.author'),
      image: "/images/Vice-Logo.jpeg"
    },
    {
      title: t('caseStudies.case2.title'),
      description: t('caseStudies.case2.description'),
      industry: t('caseStudies.case2.industry'),
      type: t('caseStudies.case2.type'),
      results: [
        { text: t('caseStudies.case2.result1') },
        { text: t('caseStudies.case2.result2') },
        { text: t('caseStudies.case2.result3') }
      ],
      testimonial: t('caseStudies.case2.testimonial'),
      author: t('caseStudies.case2.author'),
      image: "/images/VFX-Forum.png"
    },
    {
      title: t('caseStudies.case3.title'),
      description: t('caseStudies.case3.description'),
      industry: t('caseStudies.case3.industry'),
      type: t('caseStudies.case3.type'),
      results: [
        { text: t('caseStudies.case3.result1') },
        { text: t('caseStudies.case3.result2') },
        { text: t('caseStudies.case3.result3') }
      ],
      testimonial: t('caseStudies.case3.testimonial'),
      author: t('caseStudies.case3.author'),
      image: "/images/jamie_hunter.mp4"
    }
  ];
};

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
          {caseStudy.image.endsWith('.mp4') ? (
            <div className="w-full h-64 lg:h-full overflow-hidden" style={{ maxHeight: '400px' }}>
              <video 
                className="min-w-full min-h-full object-cover" 
                autoPlay 
                loop 
                muted
                playsInline
                preload="auto"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 38%" // Fokus auf das Gesicht
                }}
              >
                <source src={caseStudy.image} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="aspect-[16/9] md:aspect-[4/3] w-full min-h-[200px] bg-black">
              <img 
                className="object-cover w-full h-full"
                src={caseStudy.image} 
                alt={caseStudy.title} 
                loading="lazy"
              />
            </div>  
          )}
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

export default function CaseStudiesSection({ data }: CaseStudiesSectionProps) {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const caseStudyData = getTranslatedCaseStudies(t);

  return (
    <section id="case-studies" ref={sectionRef} className="section py-20 bg-secondary text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('caseStudies.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            {t('caseStudies.description')}
          </p>
        </motion.div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {caseStudyData.map((caseStudy, index) => (
            <CaseStudyCard key={index} caseStudy={caseStudy} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
