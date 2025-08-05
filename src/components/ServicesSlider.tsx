import React from 'react';
import SliderTrail from './SliderTrail';

interface ScrollItem {
  content: string;
  alt?: string;
}

const servicesScrollItems: ScrollItem[] = [
  { content: '/12.png', alt: 'Service 1' },
  { content: '/13.png', alt: 'Service 2' },
  { content: '/14.png', alt: 'Service 3' },
  { content: '/15.png', alt: 'Service 4' },
  { content: '/16.png', alt: 'Service 5' },
  { content: '/17.png', alt: 'Service 6' },
  { content: '/18.png', alt: 'Service 7' },
  { content: '/19.png', alt: 'Service 8' },
  { content: '/20.png', alt: 'Service 9' },
  { content: '/11.png', alt: 'Service 10' },
];

const ServicesSlider: React.FC = () => {
  const handleExploreServices = () => {
    window.open('https://www.gotoretreats.com/s?pub_categoryLevel1=services', '_blank');
  };

  return (
    <SliderTrail
      title="Service Providers:"
      subtitle="A trusted network of wellness experts devoted to collective healing and unforgettable experiences."
      items={servicesScrollItems}
      ctaText="Explore Our Service Providers"
      onCtaClick={handleExploreServices}
      direction="rtl" // right-to-left
      loopDuration={30}
    />
  );
};

export default ServicesSlider; 