import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Book, Download, ArrowRight } from 'lucide-react';

const EmailSubscriptionSection: React.FC = () => {
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

  const handleSubmit = () => {
    // Redirect to the form URL
    window.location.href = 'https://crm.gotoretreats.com/widget/form/PfHiUUtaftd4NIUSX9QS';
  };

  return (
    <section id="pdf-download" className="py-16 bg-[#444444] border border-[#e6e6e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Horizontal Layout */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            {/* Left Section - Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#444444] flex items-center justify-center border border-[#e6e6e6] shadow-sm">
                <Book className="w-8 h-8 sm:w-10 sm:h-10 text-[#009e9b]" />
              </div>
            </div>

            {/* Middle Section - Content */}
            <div className="flex-1 text-center sm:text-left">
              {/* Free Download Badge */}
              <div className="inline-flex items-center gap-2 mb-3">
                <Download className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-white font-medium">Free Download</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Retreat Planning Guide
              </h3>

              {/* Description */}
              <p className="text-white text-base sm:text-lg">
                Unlock proven strategies to fill your retreats, attract ideal participants, and maximize your planning ROI.
              </p>
            </div>

            {/* Right Section - CTA Button */}
            <div className="flex-shrink-0">
              <button
                onClick={handleSubmit}
                className="bg-[#009e9b] hover:bg-[#E09453] text-white font-semibold rounded-xl px-6 py-4 transition-colors flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span>Get Your Free Guide</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSubscriptionSection;
