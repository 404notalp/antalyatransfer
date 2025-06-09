
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/contexts/language-context';
import LocalBusinessSchema from './schema'; // Import the schema component

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Antalya Greenway Transfer | Luxury VIP Transfer Service in Antalya', // Changed "Algul Transfer" to "Antalya Greenway Transfer"
  description: 'Experience unparalleled luxury and comfort with Antalya Greenway Transfer, your premier VIP transfer service in Antalya, Turkey. Specializing in airport transfers, city tours, and custom routes with our Mercedes Vito fleet.', // Changed "Algul Transfer" to "Antalya Greenway Transfer"
    icons: { // Add favicon link here
     icon: '/favicon.ico',
    },
  openGraph: {
      title: 'Antalya Greenway Transfer | Luxury VIP Transfer Service in Antalya',
      description: 'Experience unparalleled luxury and comfort with Antalya Greenway Transfer, your premier VIP transfer service in Antalya, Turkey. Specializing in airport transfers, city tours, and custom routes with our Mercedes Vito fleet.',
      url: 'https://antalyagreenwaytransfer.com', // Replace with actual URL
      siteName: 'Antalya Greenway Transfer', // Changed "Algul Transfer" to "Antalya Greenway Transfer"
      images: [
          {
               url: '/logo.webp', // Replace with actual OG image URL (use absolute URL in production)
              width: 1200,
              height: 630,
              alt: 'Luxury Mercedes Vito interior for Antalya Greenway Transfer',
          },
      ],
      locale: 'en_US', // Default locale, adjust as needed
      // Define alternate locales based on supported languages
      alternateLocale: ['tr_TR', 'ar_AE', 'ru_RU', 'de_DE'],
      type: 'website',
  },
    // Add other meta tags if needed (e.g., Twitter cards)
  twitter: {
    card: 'summary_large_image',
    title: 'Antalya Greenway Transfer | Luxury VIP Transfer Service in Antalya', // Changed "Algul Transfer" to "Antalya Greenway Transfer"
    description: 'Premier VIP transfers in Antalya. Book your luxury Mercedes Vito ride today!',
     images: ['/logo.webp'], // Replace with actual image URL (use absolute URL in production)
    // site: '@yourTwitterHandle', // Optional: Add Twitter handle
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Remove lang="en", it will be set dynamically by LanguageProvider
    // Add suppressHydrationWarning here to fix potential class mismatch issues from fonts/extensions
    <html className="dark" suppressHydrationWarning={true}>
        <head>
          {/* JSON-LD schema */}
          <LocalBusinessSchema />
        </head>
        {/* Add suppressHydrationWarning to body as well to potentially fix font class issues */}
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`} suppressHydrationWarning={true}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
