'use client';
import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Clock, Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/contexts/translation';

interface DriverSectionProps {
  className?: string;
  id?: string; // Add id prop
}

const DriverSection: React.FC<DriverSectionProps> = ({ className, id }) => {
    const { language } = useLanguage();
    const t = translations[language].driver;

  return (
    <section id={id} className={`py-12 md:py-20 ${className}`} aria-labelledby="driver-title">
      <Card className="bg-card text-card-foreground shadow-xl rounded-lg overflow-hidden border-transparent">
        <CardContent className="p-6 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Headshot */}
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-48 h-[270px] md:w-64 md:h-[360px] rounded-lg overflow-hidden shadow-lg border-4 border-primary">
              <Image
                src="/sofor.webp" // Replace with actual headshot
                alt={t.alt}
                layout="fill"
                objectFit="cover" // Keep cover to fill the container
                objectPosition="top"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Biography and Highlights */}
          <div className="md:col-span-2 text-center md:text-left">
            <h2 id="driver-title" className="text-3xl md:text-4xl font-bold text-primary mb-4">{t.title}</h2>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6">{t.bio}</p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2 text-foreground/80">
                <ShieldCheck className="h-5 w-5 text-primary" /> {/* Changed color to primary */}
                <span>{t.securityVetted}</span> {/* Use translated string */}
              </div>
              <div className="flex items-center space-x-2 text-foreground/80">
                <Clock className="h-5 w-5 text-primary" /> {/* Changed color to primary */}
                <span>{t.experiencedPunctual}</span> {/* Use translated string */}
              </div>
              <div className="flex items-center space-x-2 text-foreground/80">
                <Languages className="h-5 w-5 text-primary" /> {/* Changed color to primary */}
                <span>{t.multilingualAvailable}</span> {/* Use translated string */}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default DriverSection;
