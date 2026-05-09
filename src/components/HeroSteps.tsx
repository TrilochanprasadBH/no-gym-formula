import React from 'react';
import { motion } from 'motion/react';

const AnimatedCross = ({ delay }: { delay: number }) => (
  <motion.div 
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay, type: 'spring', stiffness: 300, damping: 20 }}
    className="relative w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20"
  >
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-honey" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <motion.path d="M7 7L17 17" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: delay + 0.2, duration: 0.3, ease: 'easeOut' }} />
      <motion.path d="M17 7L7 17" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: delay + 0.35, duration: 0.3, ease: 'easeOut' }} />
    </svg>
  </motion.div>
);

const NoItem = ({ text, delay }: { text: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay }}
    className="flex items-center gap-4 text-cream/90 font-medium"
  >
    <AnimatedCross delay={delay + 0.1} />
    <span className="relative">
      {text}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: delay + 0.6, duration: 0.4, ease: 'easeInOut' }}
        className="absolute top-1/2 left-0 w-full h-[2px] bg-honey origin-left -translate-y-1/2 rounded-full"
      />
    </span>
  </motion.div>
);

export const HeroSteps = () => (
  <div className="relative w-full max-w-md mx-auto md:mr-0 mt-12 md:mt-0">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-botanical p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-botanical/30 relative overflow-hidden"
    >
      <div className="flex flex-col gap-5 text-lg md:text-xl font-sans relative z-10">
        <NoItem text="No gym memberships" delay={0.6} />
        <NoItem text="No hour-long commutes" delay={1.1} />
        <NoItem text="No expensive equipment" delay={1.6} />
        <NoItem text="No extreme diets" delay={2.1} />
        <NoItem text="No misleading trends" delay={2.6} />
      </div>

      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 3.4, ease: "easeOut" }}
         className="mt-10 pt-10 border-t border-cream/10 relative z-10 flex flex-col items-center text-center"
      >
         <h3 className="font-serif font-black italic text-[3rem] md:text-6xl text-white tracking-tight leading-none relative">
           Just natural.
           <motion.svg
             initial={{ pathLength: 0, opacity: 0 }}
             animate={{ pathLength: 1, opacity: 1 }}
             transition={{ duration: 1.2, delay: 4.1, ease: "anticipate" }}
             className="absolute -bottom-2 left-0 w-full h-4 text-honey overflow-visible drop-shadow-sm"
             viewBox="0 0 100 10"
             preserveAspectRatio="none"
           >
             <path d="M0 6 Q 50 12 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
           </motion.svg>
         </h3>
      </motion.div>
    </motion.div>
  </div>
);
