import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { PopupButton } from '@typeform/embed-react';
import { LeafDecoration } from './Icons';
import { HeroSteps } from './HeroSteps';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
        <div className="w-full md:w-3/5 z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-serif leading-[1.1] text-botanical tracking-tight mb-6 shadow-sm shadow-cream/0"
          >
            Fitness that <br/><span className="relative inline-block">
              finally sticks.<LeafDecoration className="absolute -top-4 -right-8 w-8 h-8 text-botanical-light/40 -rotate-12" />
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-botanical/80 mb-10 max-w-lg leading-relaxed"
          >
            No gym memherships. No expensive equipment. Just <strong className="font-semibold">15 minutes a day</strong> of bodyweight movement that fits into your actual life.
          </motion.p>
          
          <motion.div 
            id="challenges-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8"
          >
            <PopupButton 
              id="BZDF60HX"
              className="bg-honey text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-honey/90 transition-all shadow-md hover:shadow-lg whitespace-nowrap inline-block"
            >
              Start Our Challenge
            </PopupButton>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-sm text-botanical/60 mt-4 flex items-center gap-2"
          >
             <CheckCircle2 className="w-4 h-4 text-honey" /> 100% free forever. No credit card required.
          </motion.p>
        </div>
        
        <div className="w-full md:w-2/5 flex justify-center md:justify-end relative">
           <HeroSteps />
        </div>
      </div>
    </section>
  );
};
