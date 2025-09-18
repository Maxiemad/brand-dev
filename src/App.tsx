import React, { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PainPointsSection from './components/PainPointsSection';
import VenuesSection from './components/VenuesSection';
import SoulfulMethodology from './components/SoulfulMethodology';
import ServicesSection from './components/ServicesSection';
import ServicesSlider from './components/ServicesSlider';
import ComparisonSection from './components/ComparisonSection';
import WhoWeHelpSection from './components/WhoWeHelpSection';
import FAQSection from './components/FAQSection';
import EmailSubscriptionSection from './components/EmailSubscriptionSection';
import FinalCTASection from './components/FinalCTASection';

function App() {
  // Handle anchor links for direct navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          // Multiple attempts to ensure scrolling works
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 300);
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 800);
        }
      }
    };

    // Handle initial load with hash
    setTimeout(() => {
      handleHashChange();
    }, 500);

    // Handle hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <CustomCursor />
        <main>
          <HeroSection />
          <PainPointsSection />
          <SoulfulMethodology />
          <ServicesSection />
          <ComparisonSection />
          <VenuesSection />
          <ServicesSlider />
          <WhoWeHelpSection />
          <FAQSection />
          <EmailSubscriptionSection />
          <FinalCTASection />
        </main>
      </div>
    </>
  );
}

export default App;