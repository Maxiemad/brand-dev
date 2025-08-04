import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Target, Calendar } from 'lucide-react';

const FinalCTASection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-teal-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-teal-400/30 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 bg-orange-400/30 rounded-full"
          animate={{
            y: [0, 30, 0],
            x: [0, -25, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Target className="w-6 h-6 text-green-400" />
            <span className="text-green-400 font-semibold">Ready to plan your retreat the smart way?</span>
          </motion.div>
          
          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              background: 'linear-gradient(45deg, #ffffff, #10b981, #22c55e, #ffffff)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            We'll help you choose the path that aligns with your vision, energy, and budget.
          </motion.h2>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://calendly.com/avi-gotoretreats/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 sm:px-12 py-4 sm:py-6 bg-[#FFA947] text-gray-900 rounded-2xl font-bold text-lg sm:text-xl shadow-2xl hover:brightness-95 transition-all duration-300 cursor-hover group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.4)",
              y: -5
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="mr-3"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Calendar className="w-6 h-6 group-hover:animate-pulse" />
            </motion.div>
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-gray-900"
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Book a Free Planning Call Now
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center pt-12 sm:pt-16 border-t border-gray-700 mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center justify-center mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/goto-retreats-high-resolution-logo-transparent-3.png" 
              alt="GoToRetreats" 
              className="h-16 sm:h-20 w-auto opacity-90"
            />
          </motion.div>
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 GoToRetreats. Helping retreat leaders create transformational experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;