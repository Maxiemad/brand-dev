import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);



  const faqs = [
    {
      question: "What's the difference between DIY, DWY, and DFY?",
      answer: "DIY (Do It Yourself) gives you all the tools and templates to plan independently. DWY (Done With You) includes everything from DIY plus 4 personal strategy calls for guidance. DFY (Done For You) means we handle everything while you focus on teaching and transformation."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Absolutely! You can upgrade from DIY to DWY or DFY at any time. We'll credit your previous purchase toward the higher tier, so you never pay twice for the same resources."
    },
    {
      question: "What if I already have a venue?",
      answer: "Perfect! We can work with your existing venue. For DFY clients, we'll coordinate directly with your venue. For DIY/DWY, we provide checklists and templates to maximize your venue relationship."
    },
    {
      question: "What if I don't have a venue?",
      answer: "No problem at all! Venue sourcing is one of the most critical parts of planning. In our DWY and DFY tiers, we provide guided support or full sourcing and negotiation for up to 3 vetted options."
    },
    {
      question: "How far in advance should I start planning?",
      answer: "We recommend starting 3-6 months in advance for domestic retreats and 6-12 months for international destinations. However, we've successfully planned retreats with shorter timelines when needed."
    },
    {
      question: "What types of retreats do you support?",
      answer: "We support all types of wellness and transformation retreats: yoga, meditation, wellness coaching, corporate team building, spiritual journeys, creative workshops, and more. Our framework adapts to your unique vision."
    },
    {
      question: "Do I need experience to host a retreat?",
      answer: "Not at all! Whether it's your first retreat or your fiftieth, our frameworks give you exactly what you need. For beginners, we highly recommend our DWY or DFY tiers for hands-on guidance."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2] relative overflow-hidden">
      <div className="bg-noise"></div>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-[#D4C3B3]/20 rounded-full blur-xl"
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
          className="absolute bottom-20 right-10 w-24 h-24 bg-[#E8DCC9]/30 rounded-full blur-xl"
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <HelpCircle className="w-8 h-8 text-[#A68A71]" />
            </motion.div>
            <span className="text-[#A68A71] font-semibold text-lg">Got Questions?</span>
          </motion.div>
          
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: 'linear-gradient(45deg, #4A433D, #A68A71, #8C725D, #4A433D)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Everything you need to know about our retreat planning services
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Glow effect for open FAQ */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#D4C3B3]/30 to-[#E8DCC9]/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  opacity: openIndex === index ? 0.3 : 0
                }}
              />
              
              <motion.div
                className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg"
                whileHover={{
                  scale: 1.02,
                  y: -2
                }}
                animate={{
                  borderColor: openIndex === index ? '#A68A71' : '#E5E7EB'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Question Button */}
                <motion.button
                  className="w-full px-6 sm:px-8 py-6 sm:py-8 text-left flex items-center justify-between cursor-hover group"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ backgroundColor: 'rgba(166, 138, 113, 0.05)' }}
                >
                  <motion.h3 
                    className="font-bold text-base sm:text-lg pr-4 flex-1"
                    style={{
                      color: openIndex === index ? '#8C725D' : '#4A433D'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.question}
                  </motion.h3>
                  
                  <motion.div
                    className="flex-shrink-0 ml-4"
                    animate={{ 
                      rotate: openIndex === index ? 180 : 0,
                      scale: openIndex === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <motion.div
                      animate={{
                        boxShadow: openIndex === index 
                          ? ['0 0 0 rgba(166, 138, 113, 0)', '0 0 20px rgba(166, 138, 113, 0.5)', '0 0 0 rgba(166, 138, 113, 0)']
                          : '0 0 0 rgba(166, 138, 113, 0)'
                      }}
                      transition={{
                        duration: 2,
                        repeat: openIndex === index ? Infinity : 0
                      }}
                      className="rounded-full p-2"
                    >
                      {openIndex === index ? (
                        <ChevronUp className="w-6 h-6 text-[#A68A71]" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-500 group-hover:text-[#A68A71] transition-colors" />
                      )}
                    </motion.div>
                  </motion.div>
                </motion.button>
                
                {/* Answer Section */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        ease: "easeOut",
                        opacity: { delay: 0.1 }
                      }}
                      className="overflow-hidden border-t border-[#E8DCC9]"
                    >
                      <motion.div 
                        className="px-6 sm:px-8 py-6 sm:py-8 bg-gradient-to-r from-[#FAF7F2] to-[#F1E9DE]"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <motion.p
                          className="text-gray-700 text-sm sm:text-base leading-relaxed"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          whileHover={{ 
                            color: '#4A433D',
                            x: 10,
                            scale: 1.02
                          }}
                        >
                          {faq.answer}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-600 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Still have questions? We're here to help!
          </motion.p>
          <motion.a
            href="https://crm.gotoretreats.com/book/ash-kairos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#FFA947] text-gray-900 rounded-xl font-semibold hover:brightness-95 transition-all cursor-hover shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(203, 163, 129, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Free Consultation
          </motion.a>


        </motion.div>
      </div>


    </section>
  );
};

export default FAQSection;