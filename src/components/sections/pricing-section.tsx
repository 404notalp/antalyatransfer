"use client";
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/contexts/translation";

interface PricingData {
  bolge: string; // Region name
  gidis: number;
  gidisDonus: number;
}

interface PricingSectionProps {
  className?: string;
  id?: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({ className, id }) => {
  const { language } = useLanguage();
  const t = translations[language].pricing;
  // Data for airport transfers
  const airportTransfers: PricingData[] = [
    { bolge: 'Antalya – Kundu', gidis: 30, gidisDonus: 40 },
    { bolge: 'Belek', gidis: 40, gidisDonus: 50 },
    { bolge: 'Side', gidis: 50, gidisDonus: 60 },
    { bolge: 'K.Ağaç – Kızılot – Okurcalar', gidis: 55, gidisDonus: 65 },
    { bolge: 'Alanya', gidis: 65, gidisDonus: 75 },
    { bolge: 'Mahmutlar – Kargıcak', gidis: 85, gidisDonus: 95 },
    { bolge: 'Beldibi – Göynük – Kemer', gidis: 45, gidisDonus: 55 },
    { bolge: 'Kiriş – Ç.Yuva – Tekirova', gidis: 55, gidisDonus: 65 },
    { bolge: 'Çıralı – Olympos – Adrasan', gidis: 65, gidisDonus: 75 },
  ];

  // Data for intercity transfers (sample data - replace with real data)
  const intercityTransfers: PricingData[] = [
    { bolge: 'Antalya – İstanbul', gidis: 300, gidisDonus: 500 },
    { bolge: 'Antalya – Ankara', gidis: 250, gidisDonus: 450 },
    { bolge: 'Antalya – İzmir', gidis: 350, gidisDonus: 600 },
    { bolge: 'Antalya – Fethiye', gidis: 150, gidisDonus: 250 },
    { bolge: 'Antalya – Kaş', gidis: 100, gidisDonus: 180 },
    { bolge: 'Antalya – Pamukkale', gidis: 200, gidisDonus: 350 },
    { bolge: 'Antalya – Konya', gidis: 220, gidisDonus: 400 },
    { bolge: 'Antalya – Mersin', gidis: 400, gidisDonus: 700 },
  ];

  const handleRequestQuoteClick = () => {
    const phoneNumber = "+905052992298";
    const message = encodeURIComponent(
      t.requestQuoteMessage ||
        "Hello Antalya Greenway Transfer, I would like to request a custom quote for a VIP transfer."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // Helper function to render a table
  const renderTable = (title: string, data: PricingData[], headers: { bolge: string, gidis: string, gidisDonus: string }) => (
    <div className="overflow-hidden rounded-lg border border-border shadow-md bg-card mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-center py-4 text-primary bg-muted/30">{title}</h3>
        <div className="overflow-x-auto">
            <Table className="min-w-full">
                <TableHeader>
                <TableRow className="hover:bg-muted/50 border-b border-border">
                    <TableHead className="w-[40%] px-4 py-3 text-left text-sm font-medium text-muted-foreground uppercase tracking-wider">{headers.bolge}</TableHead>
                    <TableHead className="w-[20%] px-4 py-3 text-left text-sm font-medium text-muted-foreground uppercase tracking-wider">{headers.gidis}</TableHead>
                    <TableHead className="w-[20%] px-4 py-3 text-right text-sm font-medium text-muted-foreground uppercase tracking-wider">{headers.gidisDonus}</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-border">
                {data.map((route, index) => (
                    <TableRow key={index} className="hover:bg-muted/50 transition-colors">
 <TableCell className="px-4 py-4 whitespace-nowrap text-sm font-medium text-foreground">{route.bolge}</TableCell><TableCell className="px-4 py-4 whitespace-nowrap text-sm text-foreground">€{route.gidis}</TableCell>{/* Display gidis price */}<TableCell className="px-4 py-4 whitespace-nowrap text-sm text-foreground text-right font-semibold">€{route.gidisDonus}</TableCell>{/* Display gidisDonus price */}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>
    </div>
  );

  return (
    <section id={id} className={`py-12 md:py-20 ${className}`} aria-labelledby="pricing-title">
      <h2 id="pricing-title" className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">{t.title}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Airport Transfers Table */}
        {renderTable(t.airportTransfersTitle, airportTransfers, { bolge: t.destination, gidis: t.oneWayPrice, gidisDonus: t.roundTripPrice })} {/* Updated headers */}
        {/* Intercity Transfers Table */}
        {renderTable(t.intercityTransfersTitle, intercityTransfers, { bolge: t.route, gidis: t.oneWayPrice, gidisDonus: t.roundTripPrice })} {/* Updated headers */}
      </div>


      <div className="mt-10 text-center">
      <p className="text-lg text-foreground/80 mb-6">{t.customQuotePrompt}
      </p>
      {/* Custom Quote Button */}
      <Button
          size="lg"
          onClick={handleRequestQuoteClick}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-3 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          aria-label={t.requestQuote}>
          {t.requestQuote}
        </Button>
      </div>
    </section>
  );
};

export default PricingSection;