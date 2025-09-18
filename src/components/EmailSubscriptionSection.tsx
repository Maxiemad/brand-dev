import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EmailSubscriptionSection: React.FC = () => {
  const [isSubscribeSuccess, setIsSubscribeSuccess] = useState(false);
  const [firstName, setFirstName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; firstName?: string }>({});

  // Ensure this section scrolls into view when accessed via anchor link
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#pdf-download') {
      // Wait for component to render, then scroll
      setTimeout(() => {
        const element = document.getElementById('pdf-download');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000);
    }
  }, []);

  const resetForm = () => {
    setIsSubscribeSuccess(false);
    setFirstName('');
    setEmail('');
    setErrors({});
    setIsSubmitting(false);
  };

  const validateForm = () => {
    const newErrors: { email?: string; firstName?: string } = {};
    
    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
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
      
      // Use the firstName from the form input
      setFirstName(firstName.trim());
      
      setIsSubscribeSuccess(true);
    } catch (error) {
      console.error('Subscription error:', error);
      setErrors({ email: 'Subscription failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="pdf-download" className="w-full py-8 sm:py-12 mt-8 sm:mt-12 lg:mt-16">
      {!isSubscribeSuccess ? (
        <motion.div
          className="bg-[#444444] border border-[#e6e6e6] rounded-2xl p-6 sm:p-8 mx-4 sm:mx-6 lg:mx-8"
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
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border-2 text-gray-900 font-medium transition-colors ${
                    errors.firstName 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-[#009e9b] bg-white focus:border-[#E09453]'
                  }`}
                  required
                />
                {errors.firstName && (
                  <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>
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
                disabled={isSubmitting || !email.trim() || !firstName.trim()}
                className={`w-full sm:w-auto px-6 py-3 rounded-lg font-bold text-white transition-all whitespace-nowrap ${
                  isSubmitting || !email.trim() || !firstName.trim()
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
        <motion.div 
          className="bg-[#444444] border border-[#e6e6e6] rounded-2xl p-8 sm:p-12 mx-4 sm:mx-6 lg:mx-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
      )}
    </section>
  );
};

export default EmailSubscriptionSection;
