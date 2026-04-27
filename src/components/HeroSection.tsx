import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Play } from 'lucide-react';
import Player from '@vimeo/player';

const HeroSection: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [overlay, setOverlay] = useState(true);

  const handlePlay = async () => {
    setOverlay(false);
    if (iframeRef.current) {
      const player = new Player(iframeRef.current);
      
      try {
        // First ensure audio is enabled
        await player.setVolume(1);
        await player.setMuted(false);
        
        // Then play the video with audio
        await player.play();
        
        // Double-check after a short delay to ensure audio stays on
        setTimeout(async () => {
          try {
            await player.setVolume(1);
            await player.setMuted(false);
          } catch (e) {
            console.log('Volume check error:', e);
          }
        }, 1000);
        
      } catch (error) {
        console.log('Video play error:', error);
        // Fallback: try to play anyway
        try {
          await player.play();
        } catch (e) {
          console.log('Fallback play error:', e);
        }
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#F1E9DE] relative overflow-hidden pt-20 sm:pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-[#D4C3B3]/30 rounded-full"
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
          className="absolute bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 bg-[#E8DCC9]/40 rounded-full"
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
          className="absolute top-1/2 right-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-[#B5A596]/20 rounded-full"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 min-w-0">
        {/* Left Column - Text & CTAs */}
        <motion.div
          className="min-w-0 space-y-6 sm:space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A433D] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Helping retreat leaders launch, sell, and scale transformative retreats{' '}
            <motion.span
              className="text-[#A68A71]"
              animate={{ color: ['#A68A71', '#8C725D', '#A68A71'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              effortlessly
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-[#756C62] leading-relaxed max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From idea to execution — we provide the tools, strategy, and support you need at every stage.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-[#CBA381] text-white rounded-xl font-semibold text-lg hover:brightness-95 transition-all cursor-hover shadow-lg w-full sm:w-auto"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(203, 163, 129, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Planning Your Retreat
            </motion.button>
            
            <motion.div 
              className="mt-4 text-sm text-[#8C8378] font-medium flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="w-1.5 h-1.5 bg-[#A68A71] rounded-full mr-2"></span>
              Trusted by 50+ retreat leaders worldwide
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="relative mt-8 lg:mt-0 -mt-24 lg:-mt-28 min-w-0">
          <div className="relative rounded-3xl shadow-2xl w-full max-w-full aspect-video overflow-hidden border-2 border-gray-300 bg-gray-100 p-2 shadow-[0_0_20px_rgba(156,163,175,0.2)]">
            <div className="relative w-full h-full min-h-0 bg-black/50 overflow-hidden rounded-2xl">
              <iframe
                ref={iframeRef}
                src="https://player.vimeo.com/video/1106920945?autoplay=0&loop=0&title=0&byline=0&portrait=0&controls=1&muted=0&playsinline=1"
                className="absolute inset-0 w-full h-full border-0"
                style={{ width: '100%', height: '100%' }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
                title="GoToRetreats Video"
              />
              {overlay && (
                <button
                  type="button"
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-opacity duration-300 cursor-pointer border-0 p-0"
                  onClick={handlePlay}
                  aria-label="Play video"
                >
                  <span className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full bg-[#FAF7F2]/95 text-[#A68A71] shadow-xl pointer-events-none">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" aria-hidden />
                  </span>
                </button>
              )}
              <div className="pointer-events-none absolute bottom-4 left-4 z-[11] text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-lg">
                Watch: How Our Retreat Planning Works
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;