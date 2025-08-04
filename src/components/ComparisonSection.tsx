import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, TrendingUp, MapPin, Users, Wrench, MessageCircle, Sparkles } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const comparisons = [
    {
      icon: TrendingUp,
      category: 'Retreats Planned',
      gotoretreats: 'Planned & hosted dozens of successful, high-impact retreats across multiple countries',
      typical: 'Often 1–2 events, little niche experience'
    },
    {
      icon: MapPin,
      category: 'Core Focus',
      gotoretreats: 'Transformation-first — spiritual & emotional depth, with a focus on the soul',
      typical: 'Travel coordination only, surface-level support'
    },
    {
      icon: Users,
      category: 'Venues & Partners',
      gotoretreats: 'Curated healing-first venues, conscious vendors & aligned practitioners',
      typical: 'Generic resorts or budget locations with little soul'
    },
    {
      icon: Wrench,
      category: 'Who\'s Behind It',
      gotoretreats: 'Built by retreat leaders, for retreat leaders — we walk the talk',
      typical: 'Built by agencies or admins with no retreat facilitation experience'
    },
    {
      icon: MessageCircle,
      category: 'Planning Tools',
      gotoretreats: 'Templates, launch calendars, budgeting tools, live support — all in one',
      typical: 'Usually no tools, or generic checklists with no personalization'
    },
    {
      icon: Sparkles,
      category: 'Support Style',
      gotoretreats: 'Personalized, soulful consulting + logistics + mindset support',
      typical: 'Mostly transactional or hands-off'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why We're Different
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Not all retreat planning services are created equal
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="grid lg:grid-cols-2 gap-1 lg:gap-1 gap-4">
            {/* GoToRetreats Column */}
                          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 sm:p-6 lg:p-8 relative overflow-hidden flex flex-col h-full">
              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: 'radial-gradient(circle, #10B981 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />
              
              <motion.div
                className="text-center mb-6 sm:mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-emerald-400 to-teal-400 text-white rounded-full font-bold text-sm sm:text-base lg:text-lg shadow-lg">
                  💛 GoToRetreats
                </div>
              </motion.div>

              <div className="space-y-4">
                {comparisons.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-emerald-300 relative overflow-hidden w-full min-h-[60px] sm:min-h-[76px] h-auto sm:h-[76px] max-h-fit"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.02,
                        x: 5,
                        boxShadow: "0 10px 20px rgba(16, 185, 129, 0.3)"
                      }}
                    >
                      {/* Animated progress bar */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-b-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                      
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, 0],
                          boxShadow: [
                            "0 0 0 rgba(16, 185, 129, 0)",
                            "0 0 20px rgba(16, 185, 129, 0.4)",
                            "0 0 0 rgba(16, 185, 129, 0)"
                          ]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                        className="rounded-full"
                      >
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0 mt-1 sm:mt-0.5" />
                      </motion.div>
                      <div>
                        <p className="font-bold text-black text-xs sm:text-sm leading-relaxed">{item.gotoretreats}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Typical Services Column */}
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-4 sm:p-6 lg:p-8 relative overflow-hidden flex flex-col h-full">
              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 opacity-5"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: 'linear-gradient(45deg, #EF4444 25%, transparent 25%), linear-gradient(-45deg, #EF4444 25%, transparent 25%)',
                  backgroundSize: '10px 10px'
                }}
              />
              
              <motion.div
                className="text-center mb-6 sm:mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold text-sm sm:text-base lg:text-lg shadow-lg">
                  😕 Typical Services
                </div>
              </motion.div>

              <div className="space-y-4">
                {comparisons.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-red-400/30 relative overflow-hidden w-full min-h-[60px] sm:min-h-[76px] h-auto sm:h-[76px] max-h-fit"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.02,
                        x: -5,
                        boxShadow: "0 10px 20px rgba(239, 68, 68, 0.3)"
                      }}
                    >
                      {/* Animated warning bar */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-b-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                      
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, 0],
                          boxShadow: [
                            "0 0 0 rgba(239, 68, 68, 0)",
                            "0 0 20px rgba(239, 68, 68, 0.4)",
                            "0 0 0 rgba(239, 68, 68, 0)"
                          ]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                        className="rounded-full"
                      >
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0 mt-1 sm:mt-0.5" />
                      </motion.div>
                      <div>
                        <p className="font-bold text-black text-xs sm:text-sm leading-relaxed">{item.typical}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Swipe Indicator */}
        <motion.div
          className="lg:hidden text-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 text-gray-300 text-sm"
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>Swipe to compare</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;