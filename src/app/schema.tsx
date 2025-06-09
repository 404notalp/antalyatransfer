import React from 'react';

const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Antalya Greenway Transfer",
    "image": "/images/logo.png", // Use logo from public/images
    "@id": "https://antalyagreenwaytransfer.com", // Replace with actual URL
    "url": "https://antalyagreenwaytransfer.com", // Replace with actual URL
    "telephone": "+905052992298", // Updated phone number
    "email": "info@algultransfer.com", // Replace with actual email
    "priceRange": "€€", // Optional: Adjust based on pricing (e.g., €, €€, €€€)
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Luxury Lane", // Replace with actual address
      "addressLocality": "Antalya",
      "addressRegion": "Antalya",
      "postalCode": "07000", // Replace with actual postal code
      "addressCountry": "TR"
    },
    "geo": { // Optional but recommended
      "@type": "GeoCoordinates",
      "latitude": 36.8969, // Replace with actual latitude
      "longitude": 30.7133 // Replace with actual longitude
    },
    "description": "Antalya Greenway Transfer offers luxury VIP transfer services in Antalya, Turkey, specializing in airport transfers, private city tours, and custom routes with a fleet of Mercedes Vito vehicles.",
    "openingHoursSpecification": [ // Optional: Specify if applicable
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [ // Add social media links
      "https://www.facebook.com/antalyagreenwaytransfer", // Replace with actual FB link
      "https://www.instagram.com/antalyagreenwaytransfer", // Replace with actual IG link
      "https://www.tripadvisor.com/Profile/antalyagreenwaytransfer" // Replace with actual TripAdvisor link,
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wa.me/905052992298?text=Hello%20Algul%20Transfer,%20I%20would%20like%20to%20book%20a%20VIP%20transfer.", // Updated phone number and message
        "inLanguage": "en",
        "actionPlatform": [ 
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Book a VIP Transfer"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
