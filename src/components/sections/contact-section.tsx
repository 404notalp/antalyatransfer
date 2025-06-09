he'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/contexts/translation';

// Inline SVG for WhatsApp icon (assuming it's not in lucide)
const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
       <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
   </svg>
);

interface ContactSectionProps {
  className?: string;
  id?: string; // Add id prop
}


const ContactSection: React.FC<ContactSectionProps> = ({ className, id }) => {
    const { language } = useLanguage();
    const t = translations[language].contact;
    const phoneNumber = '+905052992298'; // Updated phone number
    const emailAddress = 'antalyagreenwaytransfer@gmail.com'; // Replace with actual email

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(t.whatsappMessage || 'Hello Antalya Greenway Transfer, I would like to inquire about your services.'); // Use translated message or fallback
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

  return (
    <section id={id} className={`py-12 md:py-20 ${className}`} aria-labelledby="contact-title">
      <h2 id="contact-title" className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">{t.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* WhatsApp */}
        <Card className="bg-card text-card-foreground shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl border-transparent hover:border-primary">
          <CardContent className="p-6 md:p-8 text-center flex flex-col items-center justify-center h-full">
             <div className="bg-primary rounded-full p-3 mb-4 inline-block">
                <WhatsAppIcon /> {/* WhatsApp Icon */}
             </div>
            <h3 className="text-xl font-semibold mb-2">{t.whatsapp}</h3>
            <Button
              variant="default" // Use default (primary red) variant
              size="lg"
              onClick={handleWhatsAppClick}
              className="mt-4 font-semibold" // Removed specific color classes, rely on variant
              aria-label={t.whatsapp}
            >
             {t.whatsapp}
            </Button>
          </CardContent>
        </Card>

        {/* Call Us */}
        <Card className="bg-card text-card-foreground shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl border-transparent hover:border-primary">
          <CardContent className="p-6 md:p-8 text-center flex flex-col items-center justify-center h-full">
              <div className="bg-primary rounded-full p-3 mb-4 inline-block">
                 <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
            <h3 className="text-xl font-semibold mb-2">{t.call}</h3>
            <a
              href={`tel:${phoneNumber}`}
              className="text-lg text-foreground/80 hover:text-primary transition-colors font-medium"
              aria-label={`Call Antalya Greenway Transfer at ${phoneNumber}`}
            >
              {phoneNumber}
            </a>
          </CardContent>
        </Card>

        {/* Email Us */}
         <Card className="bg-card text-card-foreground shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl border-transparent hover:border-primary">
          <CardContent className="p-6 md:p-8 text-center flex flex-col items-center justify-center h-full">
             <div className="bg-primary rounded-full p-3 mb-4 inline-block">
               <Mail className="h-8 w-8 text-primary-foreground" />
             </div>
            <h3 className="text-xl font-semibold mb-2">{t.email}</h3>
             <a
              href={`mailto:${emailAddress}`}
              className="text-lg text-foreground/80 hover:text-primary transition-colors font-medium break-all" // Added break-all for long emails
              aria-label={`Email Antalya Greenway Transfer at ${emailAddress}`}
            >
              {emailAddress}
            </a>
          </CardContent>
        </Card>
      </div>

      <p className="text-center text-lg text-foreground/80 mt-12">{t.availability}</p>
    </section>
  );
};

export default ContactSection;
