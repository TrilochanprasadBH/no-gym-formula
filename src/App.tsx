import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainSection } from './components/PainSection';
import { FormulaSection } from './components/FormulaSection';
import { StreakSection } from './components/StreakSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-honey/30 text-botanical overflow-x-hidden">
      <Navbar />
      <Hero />
      <PainSection />
      <FormulaSection />
      <StreakSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
