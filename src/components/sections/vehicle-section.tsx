'use client';
import React, { useState } from "react";
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/contexts/translation';
import { Maximize } from 'lucide-react';

interface VehicleSectionProps {
  className?: string;
  id?: string; // Ensure id prop is received
}

interface ImageData {
    src: string;
    alt: string;
    type: 'interior' | 'exterior';
}

const VehicleSection: React.FC<VehicleSectionProps> = ({ className, id }) => {
    const { language } = useLanguage();
    const t = translations[language].vehicles;
    const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false); // State for dialog visibility

    const interiorImageNames = [
        "/interior-1.webp",
        "/interior-2.webp",
        "/interior-3.webp",
        "/interior-4.webp",
        "/interior-5.webp",
        "/interior-6.webp",
    ];

    const allImages: ImageData[] = [
       ...interiorImageNames.map((name) => ({
            src: name,
 alt: t.interiorAlt,
            type: 'interior' as "interior" | "exterior"
        })),
       { src: '/exterior-1.webp', alt: t.exteriorAlt, type: 'exterior' },
       { src: '/exterior-2.webp', alt: t.exteriorAlt, type: 'exterior' },
       { src: '/exterior-3.webp', alt: t.exteriorAlt, type: 'exterior' },
 { src: '/exterior-4.webp', alt: t.exteriorAlt, type: 'exterior' as "interior" | "exterior" },
    ];

    const interiorImages = allImages.filter(
        (img) => img.type === 'interior'
    );
    
  const exteriorImages = allImages.filter((img) => img.type === "exterior");

    const openDialog = (image: ImageData) => {
        setSelectedImage(image);
        setIsDialogOpen(true);
    };

    const handleOpenChange = (open: boolean) => {
        setIsDialogOpen(open);
        if (!open) {
             // Delay resetting selected image to allow for fade-out animation
             setTimeout(() => {
                setSelectedImage(null);
            }, 300);
        }
    };


  return (
    // Wrap the entire section content that interacts with the dialog within the Dialog component
    <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
      <section id={id} className={`py-12 md:py-20 ${className}`} aria-labelledby="vehicle-title">
         <div className="text-center mb-10 md:mb-16">
           <h2 id="vehicle-title" className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
           <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">{t.description}</p>
        </div>

        {/* Interior Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-10">
            {t.interiorTitle}
          </h3>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {interiorImages.map((image, index) => (
                <CarouselItem key={`interior-${index}`} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    {/* DialogTrigger wraps the clickable element */}
                    <DialogTrigger asChild>
                      <Card
                        className="overflow-hidden rounded-lg shadow-lg bg-card border-transparent transform transition duration-300 hover:scale-[1.02] group cursor-pointer"
                        onClick={() => openDialog(image)}
                        aria-label={`View ${image.alt} enlarged`}
                        role="button" // Explicitly add role="button"
                      >
                        <CardContent className="p-0 relative">
                          <div className="aspect-[4/3]">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={800}
                              height={600}
                              className="object-cover w-full h-full"
                              loading="lazy"
                            />
                          </div>
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Maximize className="h-12 w-12 text-white" />
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
                  <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:flex" aria-label="Previous interior image"/>
                  <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:flex" aria-label="Next interior image"/>
              </Carousel>
          </div>

           {/* Exterior Section */}
          <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-10">{t.exteriorTitle}</h3>
               <Carousel
                  opts={{ align: "start", loop: true }}
                   className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-7xl mx-auto"
              >
                  <CarouselContent className="-ml-4">
                      {exteriorImages.map((image, index) => (
                      <CarouselItem key={`exterior-${index}`} className="md:basis-1/2 lg:basis-1/4 pl-4">
                           <div className="p-1">
                             {/* DialogTrigger wraps the clickable element */}
                            <DialogTrigger asChild>
                              <Card
                                  className="overflow-hidden rounded-lg shadow-lg bg-card border-transparent transform transition duration-300 hover:scale-[1.02] group cursor-pointer"
                                  onClick={() => openDialog(image)}
                                  aria-label={`View ${image.alt} enlarged`}
                                  role="button" // Explicitly add role="button"
                              >
                               <CardContent className="p-0 relative">
                                  <div className="aspect-[4/3]">
                                      <Image
                                          src={image.src}
                                          alt={image.alt}
                                          width={800}
                                          height={600}
                                          className="object-cover w-full h-full"
                                          loading="lazy"
                                      />
                                  </div>
                                   <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <Maximize className="h-12 w-12 text-white" />
                                  </div>
                              </CardContent>
                             </Card>
                           </DialogTrigger>
                          </div>
                      </CarouselItem>
                      ))}
                  </CarouselContent>
                   <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:flex" aria-label="Previous exterior image"/>
                   <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:flex" aria-label="Next exterior image"/>
              </Carousel>
          </div>


          {/* DialogContent includes accessibility title */}
          <DialogContent className="max-w-5xl w-full p-1 bg-background/90 border-border rounded-lg shadow-xl flex items-center justify-center">
               {selectedImage && (
                  <>
                    {/* Add DialogHeader and DialogTitle for accessibility */}
                    <DialogHeader className="sr-only"> {/* Hide header visually */}
                      <DialogTitle>{`Enlarged View: ${selectedImage.alt}`}</DialogTitle>
                    </DialogHeader>
                    <div className="relative w-full h-auto max-h-[85vh] aspect-video">
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            fill
                            style={{ objectFit: 'contain' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                            priority
                        />
                    </div>
                  </>
               )}
               {/* DialogContent includes a close button by default, no need for a second one */}
          </DialogContent>


          {/* Ensure aspect ratio utility classes are available */}
        <style jsx global>{`
          .aspect-\\[4\\/3\\] {
            position: relative;
            padding-bottom: 75%; /* 4:3 Aspect Ratio */
          }
          .aspect-\\[4\\/3\\] > * {
            position: absolute;
            height: 100%;
            width: 100%;
            inset: 0px;
            object-fit: cover; /* Ensure preview images cover the area */
          }
           .aspect-video {
             position: relative;
             padding-bottom: 56.25%; /* 16:9 aspect ratio */
           }
          .object-contain { object-fit: contain; }
        `}</style>
      </section>
    </Dialog> 
  );
};

export default VehicleSection;
