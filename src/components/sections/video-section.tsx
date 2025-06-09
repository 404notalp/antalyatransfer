'use client';
import React from 'react';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/contexts/translation';

interface VideoSectionProps {
  className?: string;
  id?: string; // Add id prop
}

const VideoSection: React.FC<VideoSectionProps> = ({ className, id }) => {
    const { language } = useLanguage();
    const t = translations[language].video;
    // Updated YouTube video ID
    const videoId = 'JjvWeNm5EjU';

  return (
    <section id={id} className={`py-12 md:py-20 ${className}`} aria-labelledby="video-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added container */}
        <h2 id="video-title" className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">{t.title}</h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl border border-border w-full"> {/* Added w-full */}
            <iframe
              width="100%" // Changed to 100% for full width
              height="100%" // Changed to 100% for full height within aspect ratio container
              // Added controls=0, showinfo=0, rel=0, modestbranding=1, iv_load_policy=3 to hide UI
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3`}
              title="YouTube video player - Algul Transfer Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full" // Ensure iframe fills container
              loading="lazy"
            ></iframe>
        </div>
      </div>
       {/* Ensure aspect ratio utility classes are available */}
       <style jsx global>{`
        .aspect-w-16 { position: relative; padding-bottom: 56.25%; /* 16:9 Aspect Ratio */ }
        .aspect-h-9 { } /* Combined with aspect-w-16 */
        .aspect-w-16 > *, .aspect-h-9 > * { position: absolute; height: 100%; width: 100%; inset: 0px; }
      `}</style>
    </section>
  );
};

export default VideoSection;
