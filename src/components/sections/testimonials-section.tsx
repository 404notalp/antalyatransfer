'use client';
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/contexts/translation';

interface BaseTestimonial {
  id: number;
  name: string;
  flag: keyof typeof translations['en']['flags']; // Use keyof for flag types
  rating: number;
  textKey: keyof typeof translations['en']['testimonials']['reviews']; // Key to lookup translated text
  isTripAdvisor?: boolean;
}

const baseTestimonialsData: BaseTestimonial[] = [
    { id: 1, name: 'Hans Müller', flag: 'de', rating: 5, textKey: 'review1' },
    { id: 2, name: 'Sarah Jenkins', flag: 'gb', rating: 5, textKey: 'review2', isTripAdvisor: true },
    { id: 3, name: 'Ahmet Yılmaz', flag: 'tr', rating: 5, textKey: 'review3' },
    { id: 4, name: 'Olga Petrova', flag: 'ru', rating: 5, textKey: 'review4' },
    { id: 5, name: 'Fatima Al-Sayed', flag: 'sa', rating: 5, textKey: 'review5', isTripAdvisor: true },
    { id: 6, name: 'John Smith', flag: 'us', rating: 5, textKey: 'review6' },
    { id: 7, name: 'Isabelle Dubois', flag: 'de', rating: 5, textKey: 'review7' },
    { id: 8, name: 'Abdullah Khan', flag: 'ae', rating: 5, textKey: 'review8' },
    { id: 9, name: 'Abdullah Algül', flag: 'tr', rating: 5, textKey: 'review9' }, // Updated name
];


interface TestimonialsSectionProps {
  className?: string;
  id?: string; // Add id prop
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ className, id }) => {
  const { language } = useLanguage();
  const t = translations[language];

  // Map base data to include translated text
   const testimonialsData = baseTestimonialsData.map(testimonial => ({
    ...testimonial,
    text: t.testimonials.reviews[String(testimonial.textKey)] || `Missing translation for ${String(testimonial.textKey)}`
  }));


  return (
    <section id={id} className={`py-12 md:py-20 ${className}`} aria-labelledby="testimonials-title">
      <h2 id="testimonials-title" className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">{t.testimonials.title}</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto"
      >
        <CarouselContent>
          {testimonialsData.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="bg-card text-card-foreground shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
                  <CardContent className="flex flex-col items-start justify-between p-6 space-y-4 flex-grow">
                    {testimonial.isTripAdvisor && (
                      <div className="flex items-center space-x-2 mb-2">
                         <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6 text-green-600">
                            <g>
                                <circle cx="14.25" cy="25.9375" r="9.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></circle>
                                <circle cx="33.75" cy="25.9375" r="9.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></circle>
                                <circle cx="14.25" cy="25.9375" r="3.0789" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></circle>
                                <circle cx="33.75" cy="25.9375" r="3.0789" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></circle>
                                <polyline points="10.729 16.1875 4.5 16.1875 7.3579 19.0455" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></polyline>
                                <path d="m40.6421,19.0455c-5.1867-5.1867-10.5465-6.733-16.6421-6.733-6.0955,0-11.4553,1.5463-16.6421,6.733" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                <polyline points="26.8577 32.8298 24 35.6875 21.1423 32.8298" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></polyline>
                                <polyline points="37.271 16.1875 43.5 16.1875 40.6421 19.0455" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></polyline>
                            </g>
                        </svg>
                        <span className="text-sm font-semibold text-green-600">{t.testimonials.tripadvisorReview}</span> {/* Use translated text */}
                      </div>
                    )}
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-accent' : 'text-muted-foreground'}`} // Use accent color for stars
                           fill={i < testimonial.rating ? 'hsl(var(--accent))' : 'none'} // Fill with accent color
                          aria-hidden="true" // Indicate stars are decorative
                        />
                      ))}
                       <span className="sr-only">{testimonial.rating} out of 5 stars</span> {/* Screen reader text */}
                    </div>
                    <p className="text-base italic leading-relaxed text-foreground/90 flex-grow">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-2 pt-4 border-t border-border w-full mt-auto">
                       <span className="text-3xl" aria-hidden="true">{t.flags[testimonial.flag]}</span>
                       <span className="font-semibold text-foreground">{testimonial.name}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:flex" aria-label="Previous testimonial"/>
        <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:flex" aria-label="Next testimonial"/>
      </Carousel>
    </section>
  );
};

export default TestimonialsSection;
