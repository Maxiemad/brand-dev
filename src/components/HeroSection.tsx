import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-teal-50 relative overflow-hidden pt-20 sm:pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-teal-400/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 bg-orange-400/20 rounded-full"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-green-400/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column - Text & CTAs */}
        <motion.div
          className="space-y-6 sm:space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Plan Your Retreat With{' '}
            <motion.span
              className="text-teal-600"
              animate={{ color: ['#008C8D', '#10B981', '#008C8D'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Clarity
            </motion.span>
            , Confidence, and Zero Overwhelm
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Whether you're doing it yourself, need expert support, or want us to handle it all — we've got a path designed for you.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-teal-700 transition-all cursor-hover group w-full sm:w-auto"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 140, 141, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore 3 Flexible Retreat Planning Bundles
            </motion.button>

            <motion.a
              href="https://calendly.com/avi-gotoretreats/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-800 text-gray-800 rounded-lg font-semibold text-base sm:text-lg hover:border-teal-600 hover:text-teal-600 transition-all cursor-hover group w-full sm:w-auto"
              whileHover={{ 
                scale: 1.05,
                borderColor: '#0D9488',
                color: '#0D9488'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="mr-2 group-hover:animate-pulse" size={20} />
              <span className="group-hover:text-teal-600">Book Your Free Consultation Call</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column - Video Placeholder */}
        <motion.div
          className="relative mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Outer container with animated border */}
          <div className="relative p-1 rounded-3xl bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 shadow-2xl">
            {/* Animated rotating border */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              animate={{
                background: [
                  'linear-gradient(0deg, #14B8A6, #10B981, #06B6D4, #14B8A6)',
                  'linear-gradient(90deg, #14B8A6, #10B981, #06B6D4, #14B8A6)',
                  'linear-gradient(180deg, #14B8A6, #10B981, #06B6D4, #14B8A6)',
                  'linear-gradient(270deg, #14B8A6, #10B981, #06B6D4, #14B8A6)',
                  'linear-gradient(360deg, #14B8A6, #10B981, #06B6D4, #14B8A6)'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Corner accent dots */}
            <motion.div
              className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -180, -360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [-360, -180, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
            
            {/* Inner content container */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20">
              {/* Floating particles inside */}
              <motion.div
                className="absolute top-4 left-4 w-2 h-2 bg-teal-400 rounded-full opacity-60"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute top-8 right-6 w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-60"
                animate={{
                  y: [0, 15, 0],
                  x: [0, -8, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div
                className="absolute bottom-6 left-8 w-1 h-1 bg-cyan-400 rounded-full opacity-60"
                animate={{
                  y: [0, -10, 0],
                  x: [0, 12, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
              
            <motion.div
              className="aspect-video bg-black/50 rounded-2xl flex items-center justify-center relative overflow-hidden"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Video background pattern */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%']
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
                  backgroundSize: '100% 100%'
                }}
              />
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-teal-400/30 to-orange-400/30"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <motion.button
                className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-white/95 rounded-full flex items-center justify-center shadow-xl cursor-hover"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(255, 255, 255, 0.7)',
                    '0 0 0 20px rgba(255, 255, 255, 0)',
                    '0 0 0 0 rgba(255, 255, 255, 0)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 ml-1" />
              </motion.button>
              
              <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                Watch: How Our Retreat Planning Works
              </div>
            </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;