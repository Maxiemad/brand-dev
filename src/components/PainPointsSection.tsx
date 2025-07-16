import React from 'react';
import { motion } from 'framer-motion';

const PainPointsSection: React.FC = () => {
  const painPoints = [
    "Don't know where to start?",
    "Scattered plans and no path of execution?",
    "Unsure how to budget or find venues?",
    "Fear of forgetting important logistics?",
    "Can't focus on teaching because you're stuck managing everything?",
    "Fear of not creating the impactful experience that you envision.",
    "Not sure if you will be able to pull it off seamlessly.",
    "Feeling exhausted with the never ending to-do list."
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Feeling overwhelmed trying to plan a retreat? You're not alone.
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-4 bg-white rounded-lg shadow-sm border-l-4 border-red-400 border border-gray-200"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
              <motion.p
                className="text-gray-700 text-left text-sm sm:text-base"
                whileHover={{ color: '#DC2626' }}
              >
                {point}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-lg sm:text-xl text-gray-700 mb-6 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span>👉</span>
            <span className="font-semibold text-teal-600">It's time to shift from chaos to clarity.</span>
            <span className="font-semibold text-teal-600">It's time to shift from chaos to clarity.</span>
          </motion.p>
          <motion.div
            className="w-16 sm:w-24 h-1 bg-gradient-to-r from-teal-600 to-green-500 mx-auto rounded-full"
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;