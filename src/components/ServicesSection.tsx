import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Wrench, Users } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const plans = [
    {
      tier: "TIER 1",
      icon: Wrench,
      title: "DIY (Do It Yourself)",
      subtitle: "Best for self-starters who want complete control",
      price: "$199",
      gradient: "from-[#D4C3B3] to-[#B5A596]",
      bgGradient: "from-[#FAF7F2] to-[#F1E9DE]",
      features: [
        "Budgeting tools + real examples",
        "Legal forms, guest intake & feedback forms",
        "Marketing timelines + launch planner",
        "Venue sourcing checklist",
        "3 Step guide to planning, execution and follow-up",
        "Emergency planning and risk management guide",
        "Email templates for Marketing",
      ],
      buttonText: "Get the Toolkit – $199",
      buttonColor: "bg-[#FFA947] hover:brightness-95 text-gray-900",
      paymentUrl: "https://crm.gotoretreats.com/payment-link/69d691eba6c96e61a84607db"
    },
    {
      tier: "TIER 2",
      icon: Users,
      title: "DWY (Done With You)",
      subtitle: "Perfect for creators who want expert guidance without doing it alone",
      price: "$999",
      gradient: "from-[#A68A71] to-[#8C725D]",
      bgGradient: "from-[#FAF7F2] to-[#E8DCC9]",
      features: [
        "Includes everything in Tier 1, plus:",
        "4 private 1:1 coaching & strategy calls with our Retreat Manager",
        "Custom landing page designed by our GoTo Studio Team",
        "Structured 4-phase retreat planning framework",
        "Venue sourcing & logistics guidance",
        "Financial planning (pricing, costs & profit structure)",
        "Marketing launch plan & sales strategy",
        "Operations planning & guest experience design",
        "Guest communication templates & systems",
        "Ongoing voice note & email support between sessions",
        "Editable templates & planning tools"
      ],
      buttonText: "Get Toolkit + Calls – $999",
      buttonColor: "bg-[#FFA947] hover:brightness-95 text-gray-900",
      paymentUrl: "https://crm.gotoretreats.com/payment-link/69d691cba6c96e61a84607da"
    },
    {
      tier: "TIER 3",
      icon: Crown,
      title: "DFY (Done For You)",
      subtitle: "Ideal for founders who want everything handled end-to-end",
      price: "Starts at $1,999",
      gradient: "from-[#CBA381] to-[#A68A71]",
      bgGradient: "from-[#F1E9DE] to-[#E8DCC9]",
      features: [
        "Includes everything in Tier 1 and Tier 2, plus:",
        "6 private 1:1 strategy calls (expanded support across all phases)",
        "End-to-end retreat planning & execution support",
        "Venue sourcing & negotiation (3 vetted options)",
        "Marketing & sales launch strategy (Instagram + email)",
        "Operations & guest experience design",
        "Full itinerary co-creation",
        "Contractor sourcing & coordination",
        "Guest communication systems (emails, forms, FAQs)",
        "Marketing checklist & launch calendar",
        "Active management of logistics, vendors & key decisions",
        "24-hour on-call support during the retreat",
        "Emergency planning & risk management",
        "On-site support (virtual or in-person)",
        "On-site retreat management (available as an add-on)",
        "Additional add-on services available"
      ],
      buttonText: "Choose DFY – Starts at $1,999",
      buttonColor: "bg-[#FFA947] hover:brightness-95 text-gray-900",
      paymentUrl: "https://crm.gotoretreats.com/payment-link/69d691b2c6a0e600f4d085ef"
    }
  ];

  return (
    <section id="plans" className="py-20 sm:py-28 relative overflow-hidden bg-[#FAF7F2]">
      <div className="bg-noise"></div>
      {/* Premium Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#D4C3B3]/20 to-[#E8DCC9]/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#B5A596]/20 to-[#A68A71]/20 rounded-full blur-3xl"
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

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={index}
                className="group relative cursor-pointer h-full"
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
              >
                <div
                  className={`relative bg-white border-2 ${index === 1 ? 'border-[#f59e0b] scale-[1.03] z-10' : 'border-transparent'} rounded-3xl p-8 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 h-full flex flex-col`}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col flex-grow">
                    {/* Badge for Middle Tier */}
                    {index === 1 && (
                      <div className="absolute -top-3 -right-3 bg-[#f59e0b] text-white px-4 py-1 rounded-full text-xs font-bold shadow-md uppercase tracking-wider">
                        Most Popular
                      </div>
                    )}

                    {/* Tier Badge */}
                    <motion.div
                      className={`inline-flex items-center self-start px-4 py-2 bg-gradient-to-r ${plan.gradient} text-white rounded-full text-sm font-bold mb-6`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {plan.tier}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="mb-6 flex"
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
                    <h3 className="font-bold text-gray-900 mb-3 text-xl">
                      {plan.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
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
                    <div className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex-shrink-0 w-2 h-2 bg-[#A68A71] rounded-full mt-2"></div>
                          <p className="text-[#756C62] text-sm leading-[1.5]">
                            {feature}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={plan.paymentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto block w-full py-4 text-center ${plan.buttonColor} text-white rounded-xl font-semibold text-lg transition-all duration-250 hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(255,140,0,0.3)] cursor-pointer no-underline`}
                    >
                      {plan.buttonText}
                    </a>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${plan.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500 -z-10`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;