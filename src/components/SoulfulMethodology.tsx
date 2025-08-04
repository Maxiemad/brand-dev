import React from 'react';
import { motion } from 'framer-motion';

const SoulfulMethodology: React.FC = () => {
  const solutions = [
    'Templates, checklists, forms & launch guides',
    'Custom retreat itinerary tailored to your vision',
    'Excursion & transportation logistics',
    'Contractor support (chefs, healers, photographers)',
    'Budgeting tools + profit projections',
    'On-site or virtual support',
    
  ];

  return (
    <section id="methodology" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We help with the planning. You focus on your purpose.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we provide everything you need for a successful retreat
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="group cursor-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-6 sm:p-8 h-full hover:shadow-lg transition-all duration-300 border border-teal-200"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(20, 184, 166, 0.15)",
                  rotateY: 5
                }}
                animate={{
                  y: [0, -5, 0],
                  rotateX: [0, 2, 0]
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3
                  },
                  rotateX: {
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.2
                  }
                }}
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Animated background bars */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-200/30 to-emerald-200/30 rounded-xl"
                  animate={{
                    scaleX: [0, 1, 0],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                
                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-teal-400 to-green-400 rounded-full flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      },
                      rotate: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{
                        scale: [1, 0.8, 1]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.1
                      }}
                    />
                  </motion.div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed relative z-10">
                    {solution}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://calendly.com/ashkairos_gotoretreats/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#FFA947] text-gray-900 rounded-lg font-semibold text-base sm:text-lg hover:brightness-95 transition-all cursor-hover"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Free Discovery Call
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SoulfulMethodology;