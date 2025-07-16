import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "GoToRetreats transformed my practice. I went from struggling to find clients to having a 3-month waitlist!",
      author: "Sarah Chen",
      profession: "Yoga Teacher & Wellness Coach",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      quote: "The SOULFUL methodology isn't just marketing - it's a complete transformation of how I connect with my ideal clients.",
      author: "Marcus Rodriguez",
      profession: "Reiki Master & Energy Healer",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      quote: "Finally, marketing that feels authentic to who I am. My retreat bookings have tripled since working with GoToRetreats.",
      author: "Luna Thompson",
      profession: "Sound Healer & Retreat Leader",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      quote: "The team understands the wellness industry like no other agency. They speak our language and get our values.",
      author: "David Kim",
      profession: "Life Coach & Mindfulness Teacher",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Real results from real wellness practitioners
          </p>
        </motion.div>

        <div className="relative">
          {/* Background Quote Icon */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 sm:-translate-y-8"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Quote className="w-12 h-12 sm:w-24 sm:h-24 text-teal-200" />
          </motion.div>

          {/* Testimonial Card */}
          <div className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 min-h-[250px] sm:min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="w-full text-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-base sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <motion.img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].author}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-gray-900 text-base sm:text-lg">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-teal-600 text-sm">
                      {testimonials[currentIndex].profession}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-hover"
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </motion.button>

            <motion.button
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-hover"
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all cursor-hover ${
                  index === currentIndex ? 'bg-teal-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;