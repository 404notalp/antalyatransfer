'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from '@/contexts/language-context';
import { supportedLanguages } from '@/contexts/translation'; // Import supported languages
import { ChevronDown } from 'lucide-react'; // Add ChevronDown icon
import { cn } from '@/lib/utils'; // Import cn utility

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const currentLang = supportedLanguages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Apply hover effect using primary color instead of default ghost accent hover */}
        <Button
           variant="ghost"
           size="sm"
            className="flex items-center gap-1 px-2 py-1 h-auto text-sm hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
            aria-label="Change Language"
          >
           {/* Display current language native name */}
           <span>{currentLang?.nativeName}</span>
           <ChevronDown className="h-4 w-4 opacity-50" /> {/* Add dropdown indicator */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {supportedLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
             className={cn(
                'cursor-pointer flex items-center gap-2',
                 // Apply primary background if selected or hovered/focused
                 language === lang.code
                  ? 'bg-primary text-primary-foreground focus:bg-primary focus:text-primary-foreground' // Use primary (Red) for selected
                   : 'hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground' // Use primary (Red) for hover/focus
             )}
          >
            {/* Display flag and name in dropdown */}
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.nativeName}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
