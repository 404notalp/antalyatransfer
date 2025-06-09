'use client';
import React, { useEffect } from 'react';
import HeroSection from '@/components/sections/hero-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ServicesSection from '@/components/sections/services-section';
import VehicleSection from '@/components/sections/vehicle-section';
import DriverSection from '@/components/sections/driver-section';
import PricingSection from '@/components/sections/pricing-section';
import VideoSection from '@/components/sections/video-section';
import ContactSection from '@/components/sections/contact-section';
import WhatsAppButton from '@/components/whatsapp-button';
import ScrollIndicator from '@/components/scroll-indicator';

export default function Home() {
    useEffect(() => {
        const sections = document.querySelectorAll('.fade-in-section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-on-scroll');
                    // Optional: Unobserve after animation
                    // observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        sections.forEach(section => {
            observer.observe(section);
        });

        // Cleanup observer on component unmount
        return () => sections.forEach(section => observer.unobserve(section));
    }, []);


  return (
    <div className="flex flex-col">
      <HeroSection />
      <ScrollIndicator />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 mt-16 md:mt-24">
        {/* Add IDs to sections */}
        <TestimonialsSection id="testimonials" className="fade-in-section"/>
        <ServicesSection id="services" className="fade-in-section"/>
        <VehicleSection id="vehicles" className="fade-in-section"/>
        <DriverSection id="driver" className="fade-in-section"/>
        <PricingSection id="pricing" className="fade-in-section"/>
        <VideoSection id="video" className="fade-in-section"/>
        <ContactSection id="contact" className="fade-in-section"/>
      </div>
      <WhatsAppButton phoneNumber="+905052992298" message="Hello Antalya Greenway Transfer, I would like to inquire about your services." />
    </div>
  );
}
