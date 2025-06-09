// src/components/icons/tripadvisor.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface TripAdvisorIconProps extends React.SVGProps<SVGSVGElement> {}

const TripAdvisorIcon: React.FC<TripAdvisorIconProps> = ({ className, ...props }) => {
  return (
    <svg
        width="24" // Consistent size
        height="24"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
        className={cn(className)} // Use cn for utility classes
        {...props}
    >
        {/* Black Circle Background */}
        <circle cx="128" cy="128" r="128" fill="black" />

        {/* White Owl */}
        <g fill="white">
            {/* Left Eye Circle */}
            <circle cx="96" cy="112" r="48" />
             {/* Right Eye Circle */}
            <circle cx="160" cy="112" r="48" />
             {/* Left Pupil */}
            <circle cx="96" cy="112" r="16" fill="black" />
             {/* Right Pupil */}
            <circle cx="160" cy="112" r="16" fill="black" />
            {/* Beak (Triangle) */}
            <polygon points="128,144 112,160 144,160" />
             {/* Eyebrows/Feathers (Simple Arcs or Polygons) - Adjust as needed */}
             {/* Left Brow */}
            <path d="M 64,80 Q 96,64 112,80" stroke="white" strokeWidth="8" fill="none" />
             {/* Right Brow */}
            <path d="M 144,80 Q 160,64 192,80" stroke="white" strokeWidth="8" fill="none" />
        </g>
    </svg>
  );
};

export default TripAdvisorIcon;