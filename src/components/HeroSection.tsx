import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Play } from 'lucide-react';
import Player from '@vimeo/player';

const HeroSection: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [overlay, setOverlay] = useState(true);

  const handlePlay = () => {
    setOverlay(false);
    if (iframeRef.current) {
      const player = new Player(iframeRef.current);
      player.play();
    }
  };

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
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#FFA947] text-gray-900 rounded-lg font-semibold text-base sm:text-lg hover:brightness-95 transition-all cursor-hover group w-full sm:w-auto"
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
              href="https://calendly.com/ashkairos_gotoretreats/30min"
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

        {/* Right Column - Video */}
        <motion.div className="relative mt-8 lg:mt-0 -mt-24 lg:-mt-28">
          {/* Video container with subtle green border */}
          <div className="relative rounded-3xl shadow-2xl w-full h-full aspect-video overflow-hidden border-2 border-gray-300 bg-gray-100 p-2 shadow-[0_0_20px_rgba(156,163,175,0.2)]">
            <motion.div
              className="w-full h-full aspect-video bg-black/50 rounded-3xl relative overflow-hidden"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Vimeo Video Embed */}
              <iframe
                ref={iframeRef}
                src="https://player.vimeo.com/video/1106920945?h=0&autoplay=0&loop=0&title=0&byline=0&portrait=0&controls=1&muted=0&playsinline=1"
                className="w-full h-full rounded-3xl"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="GoToRetreats Video"
              />
              {/* Overlay with play button */}
              {overlay && (
                <motion.div
                  className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 cursor-pointer z-10"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: overlay ? 1 : 0 }}
                  onClick={handlePlay}
                >
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-white/95 rounded-full flex items-center justify-center shadow-xl"
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
                  </motion.div>
                </motion.div>
              )}
              <div className="absolute bottom-4 left-4 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-lg">
                Watch: How Our Retreat Planning Works
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;