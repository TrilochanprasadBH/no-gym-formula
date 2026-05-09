import React from 'react';

import { HoneybeeIcon } from './Icons';

export const CtaSection = () => {
  return (
    <section className="py-24 bg-white/50 px-6 lg:px-8 border-y border-botanical/5">
      <div className="max-w-3xl mx-auto text-center">
        <HoneybeeIcon className="w-12 h-12 text-honey mx-auto mb-8" />
        <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">Ready to see what sticks?</h2>
        <p className="text-lg text-botanical/70 mb-10 font-medium">Join 2,400+ people building the habit of daily movement.</p>
        
        <button
          data-tally-open="EkvX14"
          className="bg-botanical text-cream px-10 py-5 rounded-2xl font-bold text-lg hover:bg-botanical-light transition-all shadow-md hover:shadow-lg inline-block"
        >
          Start Our Challenge
        </button>
      </div>
    </section>
  );
};
