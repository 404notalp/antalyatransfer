'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Plane, Map, Route } from 'lucide-react'; // Replaced Airport with Plane
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/contexts/translation';

interface ServicesSectionProps {
  id: string;
  className?: string;
}


const ServicesSection: React.FC<ServicesSectionProps> = ({ className }) => {
  const { language } = useLanguage();
  const t = translations[language].services;

  const services = [
    {
      icon: <Plane className="h-10 w-10 text-primary mb-4" />, // Use Plane icon
      title: t.airport.title,
      description: t.airport.description,
    },
    {
      icon: <Map className="h-10 w-10 text-primary mb-4" />,
      title: t.cityTours.title,
      description: t.cityTours.description,
    },
    {
      icon: <Route className="h-10 w-10 text-primary mb-4" />,
      title: t.customRoutes.title,
      description: t.customRoutes.description,
    },
  ];

  return (
    <section className={`py-12 md:py-20 ${className}`} aria-labelledby="services-title">
      <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">{t.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="bg-card text-card-foreground shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border-transparent hover:border-primary">
            <CardHeader className="items-center text-center">
              {service.icon}
              <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-foreground/80 leading-relaxed">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
