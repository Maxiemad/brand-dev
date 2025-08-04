import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ScrollItem {
  content: string;
  alt?: string;
}

interface SliderTrailProps {
  title?: string;
  items: ScrollItem[];
  ctaText: string;
  onCtaClick?: () => void;
  direction?: 'ltr' | 'rtl'; // left-to-right or right-to-left
  loopDuration?: number; // seconds for full loop
}

/**
 * Reusable infinite image trail component.
 * direction="ltr" scrolls left-to-right (i.e., animates x from -width to 0),
 * direction="rtl" scrolls right-to-left (x from 0 to -width).
 */
const SliderTrail: React.FC<SliderTrailProps> = ({
  title,
  items,
  ctaText,
  onCtaClick,
  direction = 'rtl',
  loopDuration = 30,
}) => {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [rowWidth, setRowWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (rowRef.current) {
        setRowWidth(rowRef.current.scrollWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [items]);

  /**
   * Calculate animation values depending on direction.
   * For rtl: x goes from 0 to -rowWidth (so it scrolls left).
   * For ltr: x goes from -rowWidth to 0 (so visible row moves right).
   */
  const animateX =
    direction === 'rtl'
      ? rowWidth
        ? { x: [0, -rowWidth] }
        : {}
      : rowWidth
      ? { x: [-rowWidth, 0] }
      : {};

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
        </div>
      )}
      <div className="relative w-full overflow-hidden" style={{ height: '260px' }}>
        <motion.div
          className="flex"
          style={{ width: rowWidth ? rowWidth * 2 : 'auto' }}
          animate={rowWidth ? animateX : {}}
          transition={
            rowWidth
              ? {
                  duration: loopDuration,
                  repeat: Infinity,
                  ease: 'linear',
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