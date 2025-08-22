import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isSubscribeSuccess, setIsSubscribeSuccess] = useState(false);
  const [firstName, setFirstName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string }>({});

  useEffect(() => {
    if (isSubscribeSuccess) return;
    const iframe = document.getElementById('ml-inline-target-frame') as HTMLIFrameElement | null;
    if (!iframe) return;
    const onLoad = () => {
      const nameInput = document.querySelector<HTMLInputElement>('#mlb2-20877511 input[name="fields[name]"]');
      if (nameInput && nameInput.value) {
        setFirstName(nameInput.value.trim());
      }
      setIsSubscribeSuccess(true);
    };
    iframe.addEventListener('load', onLoad);
    return () => iframe.removeEventListener('load', onLoad);
  }, [isSubscribeSuccess]);

  const resetForm = () => {
    setIsSubscribeSuccess(false);
    setFirstName('');
    setEmail('');
    setErrors({});
    setIsSubmitting(false);
  };

  const validateForm = () => {
    const newErrors: { email?: string } = {};
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission (replace with actual MailerLite API call)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Extract first name from email (improved logic)
      const emailName = email.split('@')[0];
      // Handle cases like john.doe@email.com -> John
      const cleanName = emailName.split('.')[0].split('_')[0];
      const capitalizedName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1).toLowerCase();
      setFirstName(capitalizedName);
      
      setIsSubscribeSuccess(true);
    } catch (error) {
      console.error('Subscription error:', error);
      setErrors({ email: 'Subscription failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "What's the difference between DIY, DWY, and DFY?",
      answer: "DIY (Do It Yourself) gives you all the tools and templates to plan independently. DWY (Done With You) includes everything from DIY plus 6 personal strategy calls for guidance. DFY (Done For You) means we handle everything while you focus on teaching and transformation."
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
      question: "How far in advance should I start planning?",
      answer: "We recommend starting 3-6 months in advance for domestic retreats and 6-12 months for international destinations. However, we've successfully planned retreats with shorter timelines when needed."
    },
    {
      question: "What types of retreats do you support?",
      answer: "We support all types of wellness and transformation retreats: yoga, meditation, wellness coaching, corporate team building, spiritual journeys, creative workshops, and more. Our framework adapts to your unique vision."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-teal-400/5 rounded-full blur-xl"
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
          className="absolute bottom-20 right-10 w-24 h-24 bg-orange-400/5 rounded-full blur-xl"
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
              <HelpCircle className="w-8 h-8 text-teal-400" />
            </motion.div>
            <span className="text-teal-400 font-semibold text-lg">Got Questions?</span>
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
              background: 'linear-gradient(45deg, #ffffff, #5EEAD4, #10B981, #ffffff)',
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
                className="absolute -inset-1 bg-gradient-to-r from-teal-400/10 to-emerald-400/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                  borderColor: openIndex === index ? '#14B8A6' : '#E5E7EB'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Question Button */}
                <motion.button
                  className="w-full px-6 sm:px-8 py-6 sm:py-8 text-left flex items-center justify-between cursor-hover group"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ backgroundColor: 'rgba(20, 184, 166, 0.05)' }}
                >
                  <motion.h3 
                    className="font-bold text-base sm:text-lg pr-4 flex-1"
                    style={{
                      color: openIndex === index ? '#0D9488' : '#111827'
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
                          ? ['0 0 0 rgba(94, 234, 212, 0)', '0 0 20px rgba(94, 234, 212, 0.5)', '0 0 0 rgba(94, 234, 212, 0)']
                          : '0 0 0 rgba(94, 234, 212, 0)'
                      }}
                      transition={{
                        duration: 2,
                        repeat: openIndex === index ? Infinity : 0
                      }}
                      className="rounded-full p-2"
                    >
                      {openIndex === index ? (
                        <ChevronUp className="w-6 h-6 text-teal-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-500 group-hover:text-teal-600 transition-colors" />
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
                      className="overflow-hidden border-t border-teal-200"
                    >
                      <motion.div 
                        className="px-6 sm:px-8 py-6 sm:py-8 bg-gradient-to-r from-teal-50 to-emerald-50"
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
                            color: '#047857',
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
            href="https://calendly.com/ashkairos_gotoretreats/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#FFA947] text-gray-900 rounded-xl font-semibold hover:brightness-95 transition-all cursor-hover shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(20, 184, 166, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Free Consultation
          </motion.a>

          {/* Custom form below the CTA */}
          <div className="mt-6 sm:mt-8">
            {!isSubscribeSuccess ? (
              <motion.div
                className="bg-[#444444] border border-[#e6e6e6] rounded-2xl p-6 sm:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-6">
                  <h4 className="text-white text-2xl sm:text-3xl font-bold mb-3 text-left">
                    Start Planning Your Retreat Today!
                  </h4>
                  <p className="text-white text-lg text-left">
                    Simply leave your email address, and we'll give you the link to download your{' '}
                    <strong>FREE Retreat Planning Guide</strong> right away!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-4 py-3 rounded-lg border-2 text-gray-900 font-medium transition-colors ${
                          errors.email 
                            ? 'border-red-500 bg-red-50' 
                            : 'border-[#009e9b] bg-white focus:border-[#E09453]'
                        }`}
                        required
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting || !email.trim()}
                      className={`w-full sm:w-auto px-6 py-3 rounded-lg font-bold text-white transition-all whitespace-nowrap ${
                        isSubmitting || !email.trim()
                          ? 'bg-gray-500 cursor-not-allowed'
                          : 'bg-[#009e9b] hover:bg-[#E09453] hover:scale-105'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Subscribing...
                        </div>
                      ) : (
                        'Subscribe'
                      )}
                    </button>
                  </div>

                  <p className="text-white text-sm text-left">
                    You can unsubscribe anytime. For more details, review our Privacy Policy.
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.section 
                className="py-16 bg-[#444444] border border-[#e6e6e6] rounded-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-green-400 text-6xl mb-4">✅</div>
                    <h4 className="text-white text-2xl font-bold mb-2">
                      {firstName ? `Thank you, ${firstName}!` : 'Thank you!'}
                    </h4>
                    <p className="text-white text-lg mb-4">Your Retreat Planning Guide is Here! 🙌</p>
                    <p className="text-white mb-6">You're one step closer to planning a smooth, successful retreat!</p>
                    <a 
                      href="https://drive.google.com/file/d/1hjuO8sQTM12qrwlPcEfDcV_R9DNrHcNg/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-[#009e9b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E09453] transition-colors"
                    >
                      Download Your FREE Guide
                    </a>
                    <button 
                      onClick={resetForm}
                      className="block mx-auto mt-4 text-white text-sm underline hover:no-underline"
                    >
                      Subscribe another email
                    </button>
                  </motion.div>
                </div>
              </motion.section>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;