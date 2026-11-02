import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { CtaBanner } from './components/CtaBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TrialModal } from './components/TrialModal';
import { PlanDto } from './types';

export function App() {
  const [trialOpen, setTrialOpen] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanDto | null>(null);

  useEffect(() => {
    if (
      window.location.hash === '#register' ||
      window.location.hash === '#registro' ||
      window.location.pathname === '/register'
    ) {
      setTrialOpen(true);
    }
  }, []);

  const handleOpenTrial = () => {
    setSelectedPlan(null);
    setTrialOpen(true);
  };

  const handleSelectPlan = (plan: PlanDto) => {
    setSelectedPlan(plan);
    setTrialOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onOpenTrial={handleOpenTrial} />
      <main style={{ flexGrow: 1 }}>
        <Hero onOpenTrial={handleOpenTrial} />
        <AboutUs />
        <Features />
        <Pricing onSelectPlan={handleSelectPlan} />
        <CtaBanner onOpenTrial={handleOpenTrial} />
        <Contact />
      </main>
      <Footer />
      <TrialModal
        isOpen={trialOpen}
        onClose={() => setTrialOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}

export default App;

