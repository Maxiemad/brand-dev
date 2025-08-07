import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-white shadow-lg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 99999,
        backgroundColor: 'white',
        WebkitOverflowScrolling: 'touch',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        willChange: 'transform',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-1 sm:py-2' : 'py-3 sm:py-4'}`}> 
          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
          >
            <img 
              src="/Screenshot_2025-06-08_at_7.05.20_PM-removebg-preview.png" 
              alt="GoToRetreats" 
              className={`transition-all duration-300 ${isScrolled ? 'h-10 sm:h-12' : 'h-16 sm:h-20'} w-auto`}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {['methodology', 'services', 'contact'].map((item) => (
              <motion.button
                key={item}
                className="text-gray-700 hover:text-teal-600 font-medium capitalize transition-colors text-sm xl:text-base"
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </motion.button>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex space-x-3 xl:space-x-4">
            <motion.a
              href="https://hello.gotoretreats.com/free-marketing-assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 xl:px-4 py-2 text-sm xl:text-base text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Free Audit
            </motion.a>
            <motion.a
              href="https://calendly.com/avi-gotoretreats/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 xl:px-4 py-2 text-sm xl:text-base bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Call
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="py-4 space-y-4">
              {['methodology', 'services', 'contact'].map((item) => (
                <button
                  key={item}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-teal-600 capitalize text-lg font-medium"
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </button>
              ))}
              <div className="px-4 space-y-3 pt-2">
                <a
                  href="https://hello.gotoretreats.com/free-marketing-assessment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 text-teal-600 border-2 border-teal-600 rounded-lg font-semibold text-lg"
                >
                  Free Audit
                </a>
                <a
                  href="https://calendly.com/avi-gotoretreats/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 bg-teal-600 text-white rounded-lg font-semibold text-lg"
                >
                  Book Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;