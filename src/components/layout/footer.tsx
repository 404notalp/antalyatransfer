
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/contexts/translation'; // Import getVehicleLinkText


const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const tFooter = t.footer; // Footer specific translations
  const tNavbar = t.navbar; // Navbar specific translations for consistency

  // Use the helper function to get the vehicle link text
  const vehicleLinkText = tNavbar.vehicles; // Get "Vehicles" translation from navbar object

   const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
         // If it's an external link or a full page link, let default behavior handle it
         if (!href.startsWith('#')) {
              return; // Let the Link component handle navigation
         }

         e.preventDefault(); // Prevent default for hash links
         const targetElement = document.querySelector(href);
         if (targetElement) {
             const navbarHeight = document.querySelector('nav')?.offsetHeight || 0; // Use 0 as fallback
             const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
             const offsetPosition = elementPosition - navbarHeight - 20; // Adjust offset (e.g., 20px below navbar)

             window.scrollTo({
                 top: offsetPosition < 0 ? 0 : offsetPosition, // Ensure scroll doesn't go negative
                 behavior: 'smooth',
             });
         }
     };


  return (
    <footer className="bg-black py-8 px-4 md:px-8 border-t border-border mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Logo - Vertically centered via items-center */}
         <div className="flex justify-center md:justify-start items-center mb-6 md:mb-0 md:-ml-4 h-full"> {/* Added h-full and items-center ensures vertical centering */}
           <Link href="/" className="block"> {/* Make Link a block for better layout */}
            <Image
              src="/logo.webp" // Use logo.webp
              alt={tFooter.logoAlt || 'Antalya Greenway Transfer Logo'} // Use translated alt text
              width={145} // Increased by 30% (111 * 1.3 = 144.3, rounded up to 145)
              height={145} // Increased by 30% (111 * 1.3 = 144.3, rounded up to 145)
              className="w-[90px] md:w-[108px] rounded-full-image" // increased by 30%  (h-[60px] -> w-[90px], md:h-[72px] -> md:w-[108px])
              priority // Prioritize loading
            />
          </Link>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-primary mb-3">{tFooter.quickLinks}</h3>
          <ul className="space-y-2">
             {/* Removed Home Link */}
             <li><Link href="/#services" onClick={(e) => handleNavLinkClick(e, '/#services')} className="text-muted-foreground hover:text-primary transition-colors text-sm">{tNavbar.services}</Link></li>
             <li><Link href="/#vehicles" onClick={(e) => handleNavLinkClick(e, '/#vehicles')} className="text-muted-foreground hover:text-primary transition-colors text-sm">{vehicleLinkText}</Link></li> {/* Link to Vehicles */}
             <li><Link href="/#pricing" onClick={(e) => handleNavLinkClick(e, '/#pricing')} className="text-muted-foreground hover:text-primary transition-colors text-sm">{tNavbar.pricing}</Link></li>
             <li><Link href="/#contact" onClick={(e) => handleNavLinkClick(e, '/#contact')} className="text-muted-foreground hover:text-primary transition-colors text-sm">{tNavbar.contact}</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-primary mb-3">{tFooter.legal}</h3>
            <ul className="space-y-2">
                <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">{tFooter.privacyPolicy}</Link></li>
                <li><Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors text-sm">{tFooter.cookiePolicy}</Link></li>
                {/* Add GDPR link if needed */}
                {/* <li><Link href="/gdpr" className="text-muted-foreground hover:text-primary transition-colors text-sm">{tFooter.gdprInfo}</Link></li> */}
            </ul>
        </div>


        {/* Social Icons & Contact Info */}
        <div className="flex flex-col items-center md:items-end">
            <div className="mb-4 text-center md:text-right">
                 <h3 className="text-lg font-semibold text-white mb-3">{tFooter.contactInfo}</h3>
                 <p className="text-muted-foreground text-sm mb-1" dir='ltr'>{tFooter.phoneNumber}</p>
                 <p className="text-muted-foreground text-sm break-all">{tFooter.emailAddress}</p>
            </div>
             <div className="flex justify-center md:justify-end items-center space-x-4 mb-4">
                <Link href="https://www.instagram.com/antalyagreenway" target="_blank" rel="noopener noreferrer" aria-label="Antalya Greenway Transfer on Instagram" className="text-foreground hover:text-primary transition-colors">
                    <Instagram size={22} />
                </Link>
 {/* Removed TripAdvisor Icon Link */}
             </div>
            {/* Copyright */}
            <div className="text-center md:text-right text-muted-foreground text-xs">
                © {new Date().getFullYear()} Antalya Greenway Transfer. {tFooter.allRightsReserved}  All Rights Reserved
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

