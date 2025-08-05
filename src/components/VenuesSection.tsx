import React from 'react';
import SliderTrail from './SliderTrail';

interface ScrollItem {
  content: string;
  alt?: string;
}

const venuesScrollItems: ScrollItem[] = [
  { content:'/10.png', alt: 'Venue 1' },
  { content:'/9.png', alt: 'Venue 2' },
  { content: '/8.png', alt: 'Venue 3' },
  { content: '/7.png', alt: 'Venue 4' },
  { content: '/6.png', alt: 'Venue 5' },
  { content: '/5.png', alt: 'Venue 6' },
  { content: '/4.png', alt: 'Venue 7' },
  { content: '/3.png', alt: 'Venue 8' },
  { content: '/2.png', alt: 'Venue 9' },
  { content: '/1.png', alt: 'Venue 10' },
];

const VenuesSection: React.FC = () => {
  const handleExploreVenues = () => {
    window.open('https://www.gotoretreats.com/s?pub_categoryLevel1=venues', '_blank');
  };

  return (
    <SliderTrail
      title="Premium Venues"
      subtitle="Handpicked spaces designed to inspire, restore, and elevate every retreat experience."
      items={venuesScrollItems}
      ctaText="Explore Our Venues"
      onCtaClick={handleExploreVenues}
      direction="ltr" // left-to-right
      loopDuration={28}
    />
  );
};

export default VenuesSection; 