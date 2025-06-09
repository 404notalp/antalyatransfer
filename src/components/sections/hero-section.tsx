'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/contexts/translation';

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const handleBookNowClick = () => {
    const phoneNumber = '+905052992298';
    const message = encodeURIComponent('Hello Antalya Greenway Transfer, I would like to inquire about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/landing-1.webp')` }}
      aria-labelledby="hero-title"
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg animate-fade-in-up">
          {t.title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 drop-shadow-md animate-fade-in-up animation-delay-300">
          {t.subtitle}
        </p>
        <Button
           size="lg"
           onClick={handleBookNowClick}
           className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-3 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up animation-delay-600"
           aria-label={t.bookNow}
         >
          {t.bookNow}
        </Button>
      </div>

      {/* Keyframes for animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0; /* Start hidden */
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
