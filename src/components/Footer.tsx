import React from 'react';
import { Instagram } from 'lucide-react';
import { HoneybeeIcon } from './Icons';

export const Footer = () => {
  return (
    <footer className="bg-cream py-12 px-6 lg:px-8 text-botanical/60">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 font-serif text-2xl text-botanical">
          <HoneybeeIcon className="w-5 h-5 text-honey" />
          No Gym Formula
        </div>
        <div className="text-sm font-medium">
          Made with <span className="text-botanical mx-1">🌿</span> and a love for moving well.
        </div>
        <a href="https://www.instagram.com/no.gym.formula?igsh=MXEzaHBqM2E2ODU3Zw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-botanical transition-colors" aria-label="Instagram">
           <Instagram className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
};
