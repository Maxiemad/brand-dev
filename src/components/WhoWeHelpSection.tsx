import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, GraduationCap, Briefcase, User, Globe } from 'lucide-react';

const WhoWeHelpSection: React.FC = () => {
  const audiences = [
    { 
      icon: Heart, 
      title: 'Yoga teachers & wellness coaches',
      description: 'Transform your practice into retreats'
    },
    { 
      icon: Briefcase, 
      title: 'Corporate teams seeking deeper connection',
      description: 'Build stronger team bonds'
    },
    { 
      icon: Users, 
      title: 'Families or small groups wanting curated escapes',
      description: 'Create meaningful memories'
    },
    { 
      icon: GraduationCap, 
      title: 'Workshop facilitators & educators',
      description: 'Expand your teaching impact'
    },
    { 
      icon: User, 
      title: 'Personal brands ready to lead a powerful in-person experience',
      description: 'Connect with your audience'
    },
    { 
      icon: Globe, 
      title: 'Coaches & mentors with a global audience',
      description: 'Host intimate retreats that deepen client transformation'
    },
   
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Planning Services Are Perfect For:
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a seasoned facilitator or planning your first retreat
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <motion.div
                key={index}
                className="group text-center p-6 sm:p-8 rounded-xl bg-white hover:shadow-lg transition-all duration-300 cursor-hover border border-gray-200"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full mb-6 group-hover:from-teal-200 group-hover:to-emerald-200 transition-all duration-300 border border-teal-200"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                >
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600 group-hover:text-teal-700 transition-colors" />
                </motion.div>
                
                <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors text-base sm:text-lg">
                  {audience.title}
                </h3>
                
                <motion.p
                  className="text-gray-600 text-sm sm:text-base"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  {audience.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;