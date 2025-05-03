import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useLanguage } from "../contexts/LanguageContext";

const contactFormSchema = (t: (key: string) => string) => z.object({
  name: z.string().min(2, t('contact.validation.nameLength')),
  email: z.string().email(t('contact.validation.emailValid')),
  subject: z.string().optional(),
  message: z.string().min(10, t('contact.validation.messageLength')),
  acceptPolicy: z.literal(true, {
    errorMap: () => ({ message: t('contact.validation.acceptPolicy') }),
  }),
});

type ContactFormValues = z.infer<ReturnType<typeof contactFormSchema>>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const { toast } = useToast();
  const { t, language } = useLanguage();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      acceptPolicy: false,
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: t('contact.toast.successTitle'),
        description: t('contact.toast.successDescription'),
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: t('contact.toast.errorTitle'),
        description: t('contact.toast.errorDescription'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="section py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-8">
              <motion.div 
                className="bg-neutral-light p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-lg font-bold mb-4">{t('contact.contactInfo')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-primary mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">{t('contact.email')}</p>
                      <a href="mailto:info@taylor-consulting.de" className="text-primary hover:underline">
                        info@taylor-consulting.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-primary mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">{t('contact.phone')}</p>
                      <a href="tel:+4989123456789" className="text-primary hover:underline">
                        +49 (0) 89 123 456 789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-primary mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">{t('contact.address')}</p>
                      <p className="text-gray-600">
                        Innovationsstraße 42<br />
                        80331 München<br />
                        {t('contact.country')}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-neutral-light p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-lg font-bold mb-4">{t('contact.followUs')}</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-primary transition duration-300" 
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-primary transition duration-300" 
                    aria-label="Twitter"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="md:col-span-3 bg-white rounded-lg shadow-md p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6">{t('contact.contactForm')}</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.name')} *</FormLabel>
                          <FormControl>
                            <Input placeholder={t('contact.form.namePlaceholder')} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.email')} *</FormLabel>
                          <FormControl>
                            <Input placeholder={t('contact.form.emailPlaceholder')} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.subject')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.form.subjectPlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.message')} *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t('contact.form.messagePlaceholder')} 
                            rows={5} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="acceptPolicy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-gray-600">
                            {t('contact.form.acceptPolicy')} <a href="#" className="text-primary hover:underline">{t('contact.form.privacyPolicy')}</a> *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
