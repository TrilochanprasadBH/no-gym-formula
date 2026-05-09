import React from 'react';
import { MapPinOff, TrendingDown, Users } from 'lucide-react';

export const PainSection = () => {
  return (
    <section className="py-24 bg-white/40 px-6 lg:px-8 border-y border-botanical/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4">Why you keep stopping.</h2>
          <p className="text-lg text-botanical/70 max-w-2xl mx-auto">It's not a lack of willpower. It's friction. Traditional fitness is built to fail you.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-cream border border-botanical/10 p-8 rounded-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-botanical-light">
              <MapPinOff className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-serif mb-3">No gym nearby</h3>
            <p className="text-botanical/70 leading-relaxed">The commute is the first hurdle. If it takes 20 minutes just to get there, that's already friction.</p>
          </div>
          
          <div className="bg-cream border border-botanical/10 p-8 rounded-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-botanical-light">
              <TrendingDown className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-serif mb-3">Motivation fades</h3>
            <p className="text-botanical/70 leading-relaxed">By week two, the initial burst of energy is gone. Without simple habits, the routine collapses.</p>
          </div>

          <div className="bg-cream border border-botanical/10 p-8 rounded-2xl flex flex-col items-center text-center">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-botanical-light">
              <Users className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-serif mb-3">No accountability</h3>
            <p className="text-botanical/70 leading-relaxed">Doing it alone in your living room is hard when no one is cheering that you showed up.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
