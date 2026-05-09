import React from 'react';
import { LeafDecoration } from './Icons';

export const FormulaSection = () => {
  return (
    <section className="py-24 bg-botanical text-cream relative overflow-hidden px-6 lg:px-8">
       {/* Subtle background leaves */}
       <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden flex flex-wrap gap-20 p-10">
         {Array.from({length: 12}).map((_, i) => (
           <LeafDecoration key={i} className={`w-32 h-32 ${i%2===0 ? 'rotate-45' : '-rotate-12'}`} />
         ))}
       </div>

       <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">The Formula</h2>
            <p className="text-xl text-cream/80 max-w-2xl">A simpler way to build the habit, designed for busy humans who want to feel good in their bodies again.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-8">
            <div className="relative pt-8 md:pt-0">
              <span className="absolute left-0 -top-10 md:-top-4 text-[100px] md:text-[140px] font-serif text-honey/20 leading-none select-none z-0">1</span>
              <div className="relative z-10 pl-6 border-l-2 border-honey">
                <h3 className="text-3xl font-serif mb-4 text-honey mt-2">Daily micro-tasks</h3>
                <p className="text-cream/80 leading-relaxed text-lg font-medium">Just one simple 15-minute routine every morning. No planning, no guessing. Wake up, check the task, do it.</p>
              </div>
            </div>
            <div className="relative pt-8 md:pt-0">
              <span className="absolute left-0 -top-10 md:-top-4 text-[100px] md:text-[140px] font-serif text-honey/20 leading-none select-none z-0">2</span>
              <div className="relative z-10 pl-6 border-l-2 border-honey">
                <h3 className="text-3xl font-serif mb-4 text-honey mt-2">Streak garden</h3>
                <p className="text-cream/80 leading-relaxed text-lg font-medium">Every consecutive day you show up, your virtual garden grows. A visual representation of your consistency.</p>
              </div>
            </div>
            <div className="relative pt-8 md:pt-0">
              <span className="absolute left-0 -top-10 md:-top-4 text-[100px] md:text-[140px] font-serif text-honey/20 leading-none select-none z-0">3</span>
              <div className="relative z-10 pl-6 border-l-2 border-honey">
                <h3 className="text-3xl font-serif mb-4 text-honey mt-2">Share your wins</h3>
                <p className="text-cream/80 leading-relaxed text-lg font-medium">A small, warm community of people cheering for daily persistence, not just massive transformations.</p>
              </div>
            </div>
          </div>
       </div>
    </section>
  );
};
