import React from 'react';
import { HoneybeeIcon } from './Icons';
import { PopupButton } from '@typeform/embed-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-botanical/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 text-botanical font-serif text-2xl cursor-default">
          <div className="bg-honey/20 p-2 rounded-full text-honey">
            <HoneybeeIcon className="w-6 h-6" />
          </div>
          No Gym Formula
        </div>
        <PopupButton 
          id="BZDF60HX"
          className="bg-botanical text-cream px-6 py-2.5 rounded-full font-medium hover:bg-botanical-light transition-colors duration-300 shadow-sm inline-block"
        >
          Join Free
        </PopupButton>
      </div>
    </nav>
  );
};
