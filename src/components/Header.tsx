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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center ${isScrolled ? 'py-1 sm:py-1.5' : 'py-2 sm:py-3'}`}>
          <motion.div
            className="flex items-center cursor-hover"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
          >
            <img 
              src="/Screenshot_2025-06-08_at_7.05.20_PM-removebg-preview.png" 
              alt="GoToRetreats" 
              className={`${isScrolled ? 'h-10 sm:h-12' : 'h-16 sm:h-20'} w-auto`}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {['methodology', 'plans', 'contact'].map((item) => (
              <motion.button
                key={item}
                className="text-gray-700 hover:text-teal-600 font-medium cursor-hover transition-colors text-sm xl:text-base"
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item)}
              >
                {item === 'plans' ? 'Our Plans' : item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex space-x-3 xl:space-x-4">
            <motion.a
              href="https://calendly.com/avi-gotoretreats/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 xl:px-4 py-2 text-sm xl:text-base text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 transition-colors cursor-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Free Call
            </motion.a>
            <motion.a
              href="https://calendly.com/avi-gotoretreats/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 xl:px-4 py-2 text-sm xl:text-base bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors cursor-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden cursor-hover p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-custom-gray-dark border-t border-white/10 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="py-4 space-y-4">
              {['methodology', 'plans', 'contact'].map((item) => (
                <button
                  key={item}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-teal-600 cursor-hover text-lg font-medium"
                  onClick={() => scrollToSection(item)}
                >
                  {item === 'plans' ? 'Our Plans' : item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <div className="px-4 space-y-3 pt-2">
                <a
                  href="https://calendly.com/avi-gotoretreats/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 text-teal-600 border-2 border-teal-600 rounded-lg cursor-hover font-semibold text-lg"
                >
                  Free Call
                </a>
                <a
                  href="https://calendly.com/avi-gotoretreats/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 bg-teal-500 text-white rounded-lg cursor-hover font-semibold text-lg"
                >
                  Get Started
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