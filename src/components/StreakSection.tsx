import React from 'react';
import { motion } from 'motion/react';
import { HoneybeeIcon } from './Icons';

export const StreakSection = () => {
  return (
    <section className="py-24 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="relative w-64 h-64 mb-12">
          {/* Illustrated Beehive (CSS shapes approximation) */}
          <div className="absolute inset-0 flex flex-col items-center justify-end">
             <div className="w-16 h-8 bg-honey/80 rounded-t-full border-2 border-botanical-light mb-[-2px]"></div>
             <div className="w-24 h-10 bg-honey rounded-full border-2 border-botanical-light mb-[-4px]"></div>
             <div className="w-32 h-12 bg-honey rounded-full border-2 border-botanical-light mb-[-4px] relative flex justify-center items-center">
                <div className="w-6 h-6 bg-botanical-dark rounded-full"></div>
             </div>
             <div className="w-28 h-10 bg-honey rounded-full border-2 border-botanical-light mb-[-4px]"></div>
             <div className="w-20 h-8 bg-honey/90 rounded-b-full border-2 border-botanical-light"></div>
          </div>
          
          {/* Flying Bees */}
          <motion.div 
             animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
             transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
             className="absolute top-10 right-4 text-honey"
          >
             <HoneybeeIcon className="w-8 h-8 -rotate-12" />
          </motion.div>

          <motion.div 
             animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
             className="absolute top-20 left-4 text-honey drop-shadow-sm"
          >
             <HoneybeeIcon className="w-6 h-6 rotate-45" />
          </motion.div>

          <motion.div 
             animate={{ y: [0, -8, 0], x: [0, 15, 0] }}
             transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
             className="absolute bottom-10 right-10 text-honey drop-shadow-sm"
          >
             <HoneybeeIcon className="w-5 h-5 -rotate-45" />
          </motion.div>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">Your streak is your garden.<br/>Don't let the bees leave.</h2>
        <p className="text-lg md:text-xl text-botanical/80 max-w-2xl leading-relaxed">
          Every day you complete your 15-minute challenge, a new honeybee arrives. Miss a day, and the bees fly away. It's a gentle, beautiful way to track what really matters: showing up.
        </p>
      </div>
    </section>
  );
};
