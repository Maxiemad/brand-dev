import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Wrench, Users } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const plans = [
    {
      tier: "TIER 1",
      icon: Crown,
      title: "Done-For-You Retreats",
      subtitle: "Show up. Teach. Transform. We handle the rest.",
      price: "Starts at $999",
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      features: [
        "Venue scouting + negotiation (3+ vetted options)",
        "Guest communication flow: emails, forms, FAQs",
        "Full itinerary co-creation",
        "Contractor sourcing + coordination",
        "Marketing checklist & launch calendar",
        "Social media management",
        "On-site support (virtual or in-person)",
        "Emergency prep & risk management"
      ],
      buttonText: "Book a Free Call",
      buttonColor: "bg-[#FFA947] hover:brightness-95 text-gray-900"
    },
    {
      tier: "TIER 2",
      icon: Wrench,
      title: "DIY Bundle",
      subtitle: "A self-guided roadmap to plan your retreat from A to Z.",
      price: "$199",
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      features: [
        "Plug-and-play itinerary builder",
        "Budgeting tools + real examples",
        "Legal forms, guest intake & feedback forms",
        "Marketing timelines + launch planner",
        "Venue sourcing checklist",
        "3 Step guide to planning, execution and follow-up",
        "Emergency planning and risk management guide",
        "Email templates for Marketing",
        "Free course (optional and subjected to Montana's availability)"
      ],
      buttonText: "Get the Toolkit – $199",
      buttonColor: "bg-[#FFA947] hover:brightness-95 text-gray-900",
      paymentLink: true
    },
    {
      tier: "TIER 3",
      icon: Users,
      title: "DWY (Done With You)",
      subtitle: "Self-starter? Get expert guidance along the way.",
      price: "$699",
      gradient: "from-teal-400 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50",
      features: [
        "Everything from DIY, plus:",
        "6 private 1:1 strategy calls",
        "Venue & logistics guidance",
        "Voice note & email support between sessions",
        "Custom retreat timeline",
        "Editable email templates included"
      ],
      buttonText: "Get Toolkit + Calls – $699",
      buttonColor: "bg-[#FFA947] hover:brightness-95 text-gray-900"
    }
  ];

  return (
    <section id="plans" className="py-20 sm:py-28 relative overflow-hidden bg-gray-50">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Our 3 Plans
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose the path that fits your style and budget
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-10">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={index}
                className="group relative cursor-hover"
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
              >
                <motion.div
                  className={`relative bg-white border border-gray-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full`}
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Tier Badge */}
                    <motion.div
                      className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${plan.gradient} text-white rounded-full text-sm font-bold mb-6`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {plan.tier}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="mb-6"
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Title & Subtitle */}
                    <h3 className="font-bold text-gray-900 mb-2 text-xl">
                      {plan.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {plan.subtitle}
                    </p>

                    {/* Price */}
                    <motion.div
                      className="mb-6"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                    </motion.div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {feature}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className={`w-full py-4 ${plan.buttonColor} text-white rounded-xl font-semibold text-lg transition-all cursor-hover`}
                      whileHover={{ 
                        scale: 1.02,
                        y: -2
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        if (plan.buttonText === "Get Toolkit + Calls – $699") {
                          window.open('https://buy.stripe.com/00wbIT2PCaAA5Npafi77O01', '_blank');
                        } else if (plan.buttonText === "Get the Toolkit – $199") {
                          window.open('https://buy.stripe.com/7sYeV5ai4cII7Vx5Z277O00', '_blank');
                        } else if (plan.buttonText === "Book a Free Call") {
                          window.open('https://calendly.com/ashkairos_gotoretreats/30min', '_blank');
                        }
                      }}
                    >
                      {plan.buttonText}
                    </motion.button>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${plan.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500 -z-10`}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;