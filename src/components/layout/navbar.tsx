
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Ensure Image component is imported
import { Instagram, Facebook, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/language-switcher';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/contexts/translation'; // Import getVehicleLinkText


const Navbar: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language]; // Get all translations for the current language
  const tNavbar = t.navbar; // Navbar specific translations
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Add body overflow hidden when menu is open on mobile
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  useEffect(() => {
      // Ensure body overflow is reset when component unmounts or menu closes
      return () => {
          document.body.style.overflow = '';
      };
  }, [isMobileMenuOpen]);


  // Use the helper function to get the vehicle link text
  const vehicleLinkText = tNavbar.vehicles; // Get "Vehicles" translation from navbar object
  const phoneNumber = '+905052992298'; // Updated phone number

  const handleBookNowClick = () => {
    const message = encodeURIComponent(t.hero.bookNowMessage || 'Hello Antalya Greenway Transfer, I would like to book a VIP transfer.'); // Use translated message or fallback
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // If it's an external link or the root path, let default behavior handle it
        if (!href.startsWith('#') && !href.startsWith('/#')) { // Allow hash links within the page
             if (isMobileMenuOpen) {
                 toggleMobileMenu(); // Close mobile menu if open
            }
             return; // Let the Link component handle navigation
         }

        e.preventDefault(); // Prevent default for hash links

        const targetId = href.startsWith('/#') ? href.substring(2) : href.substring(1); // Get ID from href
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navbarHeight - 20; // Adjust offset (e.g., 20px below navbar)

            window.scrollTo({
                top: offsetPosition < 0 ? 0 : offsetPosition, // Ensure scroll doesn't go negative
                behavior: 'smooth',
            });
        } else if (href === '/#') { // Scroll to top if it's just the root hash
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        if (isMobileMenuOpen) {
            toggleMobileMenu(); // Close mobile menu after clicking
        }
    };


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-border py-3 px-4 md:px-8 flex items-center shadow-md">
       {/* Logo */}
       <div className="flex-shrink-0">
           <Link href="/" onClick={(e) => handleNavLinkClick(e, '/#')}>
               <Image
                   width={160}
                   height={160}
                   src="/logo.webp"
                   alt={tNavbar.logoAlt || 'Antalya Greenway Transfer Logo'}
                   className="w-20 h-20 rounded-full-image"
                   priority
               />
           </Link>
       </div>

      {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 flex-grow justify-center">
            <Link href="/#services" onClick={(e) => handleNavLinkClick(e, '/#services')} className="text-foreground hover:text-primary transition-colors">
                {tNavbar.services}
            </Link>
            <Link href="/#vehicles" onClick={(e) => handleNavLinkClick(e, '/#vehicles')} className="text-foreground hover:text-primary transition-colors">
                {vehicleLinkText}
            </Link>

         <Link href="/#pricing" onClick={(e) => handleNavLinkClick(e, '/#pricing')} className="text-foreground hover:text-primary transition-colors">{tNavbar.pricing}</Link> {/* Pricing Link */}
         <Link href="/#contact" onClick={(e) => handleNavLinkClick(e, '/#contact')} className="text-foreground hover:text-primary transition-colors">{tNavbar.contact}</Link>
      </div>

      {/* Desktop Right Side - Social, Lang, Book Now */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="http://instagram.com/greenwaytransfer/" target="_blank" rel="noopener noreferrer" aria-label="Antalya Greenway Transfer on Instagram" className="text-foreground hover:text-primary transition-colors">
          <Instagram size={20} />

        {/* TripAdvisor icon removed */}
        <LanguageSwitcher />
        <Button
            variant="default" // Use default (primary red) variant
            size="sm"
            onClick={handleBookNowClick}
            className="font-semibold hidden md:inline-flex" // Hide on mobile (md:inline-flex)
            aria-label={tNavbar.bookNow}
          >
           {tNavbar.bookNow}
        </Button>
      </div>

      {/* Mobile Menu Button & Lang */}
      <div className="md:hidden flex items-center space-x-2">
         <LanguageSwitcher />

        <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
             className="hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground" // Ensure hover/focus uses primary color
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>

       {/* Mobile Menu */}
       {isMobileMenuOpen && (
         <div
            id="mobile-menu"
             className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-border p-4 md:hidden flex flex-col space-y-3 h-[calc(100vh-var(--navbar-height))] overflow-y-auto" // Adjust height and overflow
             style={{ '--navbar-height': 'var(--navbar-height)' } as React.CSSProperties} // Pass CSS variable
         >
           {/* Removed Home Link */}
           <Link href="/#services" onClick={(e) => handleNavLinkClick(e, '/#services')} className="text-foreground hover:text-primary transition-colors block text-center py-2">{tNavbar.services}</Link>
           <Link href="/#vehicles" onClick={(e) => handleNavLinkClick(e, '/#vehicles')} className="text-foreground hover:text-primary transition-colors block text-center py-2">{vehicleLinkText}</Link> {/* Mobile Vehicles Link */}
           <Link href="/#pricing" onClick={(e) => handleNavLinkClick(e, '/#pricing')} className="text-foreground hover:text-primary transition-colors block text-center py-2">{tNavbar.pricing}</Link> {/* Mobile Pricing Link */}
           <Link href="/#contact" onClick={(e) => handleNavLinkClick(e, '/#contact')} className="text-foreground hover:text-primary transition-colors block text-center py-2">{tNavbar.contact}</Link>
            <div className="flex justify-center space-x-6 pt-4 border-t border-border mt-4">
                <Link href="http://instagram.com/greenwaytransfer/" target="_blank" rel="noopener noreferrer" aria-label="Antalya Greenway Transfer on Instagram" className="text-foreground hover:text-primary transition-colors">
                    <Instagram size={24} />
                </Link>
                {/* TripAdvisor icon removed */}
            </div>
         </div>
       )}
        {/* Add CSS variable for navbar height */}
      <style jsx global>{`
        :root {
          --navbar-height: 95px;
        }
        @media (min-width: 768px) {
           :root {
            --navbar-height: 100px;
          }
       } 
      `}</style>
    </nav>
    );
};

export default Navbar;

