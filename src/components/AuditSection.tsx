import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Search, Map, Mail } from 'lucide-react';

const AuditSection: React.FC = () => {
  const auditCategories = [
    {
      icon: Monitor,
      title: 'Website Review',
      description: 'Conversion optimization analysis'
    },
    {
      icon: Smartphone,
      title: 'Social Presence',
      description: 'Platform performance audit'
    },
    {
      icon: Search,
      title: 'SEO Visibility',
      description: 'Search ranking assessment'
    },
    {
      icon: Map,
      title: 'Funnel Mapping',
      description: 'Customer journey analysis'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Get Your Free Marketing Audit & Custom Strategy Plan
          </h2>
          <p className="text-lg sm:text-xl text-teal-100 max-w-3xl mx-auto">
            Discover exactly what's holding your practice back and get a roadmap to success
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {auditCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                className="group cursor-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10
                  }}
                  animate={{
                    y: [0, -5, 0]
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3
                    }
                  }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                  </motion.div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">{category.title}</h3>
                  <p className="text-teal-100 text-xs sm:text-sm">{category.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center space-y-4 sm:space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://hello.gotoretreats.com/free-marketing-assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-600 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all cursor-hover"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free Audit Now
          </motion.a>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-teal-100"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Or email us directly: </span>
            </div>
            <a 
              href="mailto:avi@gotoretreats.com" 
              className="text-white font-semibold hover:underline cursor-hover text-sm sm:text-base"
            >
              avi@gotoretreats.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditSection;