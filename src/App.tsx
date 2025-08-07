import React from 'react';
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
import FinalCTASection from './components/FinalCTASection';

function App() {
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
          <FinalCTASection />
        </main>
      </div>
    </>
  );
}

export default App;