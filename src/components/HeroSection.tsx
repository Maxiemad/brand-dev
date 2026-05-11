import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Play } from 'lucide-react';

const HERO_VIDEO_SRC =
  'https://assets.cdn.filesafe.space/ySINC5nOQO9jQivquBDe/media/6a02331ac56db4013f5c26ce.mp4';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [overlay, setOverlay] = useState(true);

  const handlePlay = () => {
    setOverlay(false);
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    void video.play().catch((e) => console.log('Video play error:', e));
  };

  return (
    <section id="hero" className="flex items-start justify-center bg-gradient-to-br from-[#FAF7F2] to-[#F1E9DE] relative pt-20 sm:pt-24 pb-8 sm:pb-10 overflow-x-clip">
      {/* Animated Background Elements — clip here so section can extend layout without hiding oversized hero media */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-8 lg:gap-10 items-start relative z-10 min-w-0 w-full">
        {/* Left Column - Text & CTAs */}
        <motion.div
          className="min-w-0 space-y-6 sm:space-y-8 text-center lg:text-left lg:max-w-xl xl:max-w-2xl"
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full">
              <motion.button
                className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-[#CBA381] text-white rounded-xl font-semibold text-lg hover:brightness-95 transition-all cursor-pointer shadow-lg w-full sm:w-auto"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(203, 163, 129, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Planning Your Retreat
              </motion.button>
              
              <motion.a
                href="https://crm.gotoretreats.com/widget/bookings/meeting-with-carolina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-4 sm:py-5 bg-white text-[#8C725D] border-2 border-[#8C725D] rounded-xl font-semibold text-lg hover:bg-[#FAF7F2] transition-all cursor-pointer shadow-lg w-full sm:w-auto text-center"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(140, 114, 93, 0.15)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Book a Discovery Call with Our Retreat Manager
              </motion.a>
            </div>
            
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

        <div className="relative mt-8 lg:mt-0 lg:-mt-2 min-w-0 w-full">
          <div className="relative rounded-3xl shadow-2xl w-full max-w-full aspect-video max-h-[380px] sm:max-h-[400px] lg:max-h-[420px] overflow-hidden border-2 border-gray-300 bg-gray-100 p-2 shadow-[0_0_20px_rgba(156,163,175,0.2)]">
            <div className="relative h-full min-h-0 w-full overflow-hidden rounded-2xl bg-[#2a2a2a]">
              <video
                ref={videoRef}
                src={HERO_VIDEO_SRC}
                className="absolute inset-0 h-full w-full object-cover"
                playsInline
                controls={!overlay}
                preload="metadata"
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