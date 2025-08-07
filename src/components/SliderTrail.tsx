import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollItem {
  content: string;
  alt?: string;
}

interface SliderTrailProps {
  title?: string;
  subtitle?: string;
  items: ScrollItem[];
  ctaText: string;
  onCtaClick?: () => void;
  direction?: 'ltr' | 'rtl'; // left-to-right or right-to-left
  loopDuration?: number; // seconds for full loop
}

/**
 * Reusable infinite image trail component with scroll controls.
 * direction="ltr" scrolls left-to-right (i.e., animates x from -width to 0),
 * direction="rtl" scrolls right-to-left (x from 0 to -width).
 */
const SliderTrail: React.FC<SliderTrailProps> = ({
  title,
  subtitle,
  items,
  ctaText,
  onCtaClick,
  direction = 'rtl',
  loopDuration = 30,
}) => {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rowWidth, setRowWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (rowRef.current) {
        setRowWidth(rowRef.current.scrollWidth);
      }
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    // iOS Safari specific: handle orientation change
    window.addEventListener('orientationchange', () => {
      setTimeout(updateWidth, 100);
    });
    
    return () => {
      window.removeEventListener('resize', updateWidth);
      window.removeEventListener('orientationchange', updateWidth);
    };
  }, [items]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoScrolling(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleScrollRight();
    } else if (isRightSwipe) {
      handleScrollLeft();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
    // Resume auto-scroll after 3 seconds
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const handleScrollLeft = () => {
    if (!rowRef.current) return;
    const scrollAmount = containerWidth * 0.8; // Scroll 80% of container width
    setCurrentScroll(prev => Math.max(0, prev - scrollAmount));
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const handleScrollRight = () => {
    if (!rowRef.current) return;
    const scrollAmount = containerWidth * 0.8; // Scroll 80% of container width
    setCurrentScroll(prev => prev + scrollAmount);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  /**
   * Calculate animation values depending on direction.
   * For rtl: x goes from 0 to -rowWidth (so it scrolls left).
   * For ltr: x goes from -rowWidth to 0 (so visible row moves right).
   */
  const animateX = isAutoScrolling
    ? direction === 'rtl'
      ? rowWidth
        ? { x: [0, -rowWidth] }
        : {}
      : rowWidth
      ? { x: [-rowWidth, 0] }
      : {}
    : { x: -currentScroll };

  // For smooth infinite loop we duplicate the set.
  return (
    <section className="py-12 bg-white overflow-hidden">
      {title && (
        <div className="max-w-6xl mx-auto px-4 mb-6 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}
      
      {/* Scroll Controls - Desktop */}
      <div className="max-w-6xl mx-auto px-4 mb-4">
        <div className="flex justify-between items-center">
          <motion.button
            onClick={handleScrollLeft}
            className="hidden sm:flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-hover group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-teal-600 transition-colors" />
          </motion.button>
          
          <motion.button
            onClick={handleScrollRight}
            className="hidden sm:flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-hover group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-teal-600 transition-colors" />
          </motion.button>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full overflow-hidden" 
        style={{ height: '260px' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          className="flex"
          style={{ width: rowWidth ? rowWidth * 2 : 'auto' }}
          animate={rowWidth ? animateX : {}}
          transition={
            rowWidth
              ? {
                  duration: isAutoScrolling ? loopDuration : 0.5,
                  repeat: isAutoScrolling ? Infinity : 0,
                  ease: isAutoScrolling ? 'linear' : 'easeOut',
                }
              : {}
          }
        >
          {/* Original items */}
          <div ref={rowRef} className="flex gap-6 sm:gap-10 px-4">
            {items.map((item, idx) => (
              <div key={`first-${idx}`} className="flex-shrink-0">
                <div className="relative group">
                  <img
                    src={item.content}
                    alt={item.alt || `Trail image ${idx + 1}`}
                    className="w-40 h-40 sm:w-52 sm:h-52 rounded-xl object-cover shadow-md border border-white transition-transform duration-300 group-hover:scale-[1.02] select-none"
                    draggable={false}
                  />
                  {/* Optional overlay or label could go here */}
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless looping */}
          <div className="flex gap-6 sm:gap-10 px-4">
            {items.map((item, idx) => (
              <div key={`second-${idx}`} className="flex-shrink-0">
                <div className="relative group">
                  <img
                    src={item.content}
                    alt={item.alt || `Trail duplicate image ${idx + 1}`}
                    className="w-40 h-40 sm:w-52 sm:h-52 rounded-xl object-cover shadow-md border border-white transition-transform duration-300 group-hover:scale-[1.02] select-none"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile Scroll Indicators */}
      <div className="sm:hidden mt-4 text-center">
        <p className="text-sm text-gray-500">
          Swipe left or right to navigate
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={onCtaClick}
          aria-label={ctaText}
          className="inline-flex items-center px-6 py-3 bg-[#FFA947] text-gray-900 rounded-full text-sm font-medium shadow-lg hover:brightness-95 transition-transform duration-200 focus:outline-none focus-visible:ring focus-visible:ring-[#FFA947]/30"
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
};

export default SliderTrail; 