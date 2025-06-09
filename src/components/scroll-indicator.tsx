'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator: React.FC = () => {
  const scrollToNextSection = () => {
    // Find the next section (you might need to adjust the selector)
    const nextSection = document.querySelector('section:nth-of-type(2)'); // Assuming the next section is the second <section> tag
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Fallback: scroll down by viewport height
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
      <button
        onClick={scrollToNextSection}
        className="animate-bounce bg-black/30 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/50 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </div>
  );
};

export default ScrollIndicator;
