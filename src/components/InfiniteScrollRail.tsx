import React from 'react';
import { motion } from 'framer-motion';

const InfiniteScrollRail: React.FC = () => {
  const scrollItems = [
    { type: 'text', content: 'SOULFUL Marketing' },
    { type: 'emoji', content: '✨' },
    { type: 'text', content: 'List → Discover → Book' },
    { type: 'emoji', content: '🎯' },
    { type: 'text', content: 'Wellness Focused' },
    { type: 'emoji', content: '🧘‍♀️' },
    { type: 'text', content: 'Results Driven' },
    { type: 'emoji', content: '📈' },
    { type: 'text', content: 'GoToRetreats' },
    { type: 'emoji', content: '💫' },
  ];

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-r from-teal-50 to-orange-50 overflow-hidden">
      <motion.div
        className="flex space-x-4 sm:space-x-8 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex space-x-4 sm:space-x-8">
            {scrollItems.map((item, index) => (
              <motion.div
                key={`${setIndex}-${index}`}
                className={`flex items-center ${
                  item.type === 'text' 
                    ? 'text-lg sm:text-2xl font-bold text-gray-800' 
                    : 'text-xl sm:text-3xl'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {item.content}
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default InfiniteScrollRail;