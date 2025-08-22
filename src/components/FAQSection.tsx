import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isSubscribeSuccess, setIsSubscribeSuccess] = useState(false);
  const [firstName, setFirstName] = useState<string>('');

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
    const form = document.querySelector<HTMLFormElement>('#mlb2-20877511 form');
    if (form) form.reset();
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

          {/* Horizontal rectangular box below the CTA */}
          <div className="mt-6 sm:mt-8">
            {!isSubscribeSuccess ? (
              <div
                className="w-full"
                dangerouslySetInnerHTML={{ __html: `
<div class="editor-html-code aos-init aos-animate" data-aos="fade">
  <div class="ml-embedded" data-form="iWbDWL" background-color="#444444"><style type="text/css">@import url("https://assets.mlcdn.com/fonts.css?version=1734335");</style>
    <style type="text/css">
    /* LOADER */
    .ml-form-embedSubmitLoad {
      display: inline-block;
      width: 20px;
      height: 20px;
    }

    .g-recaptcha {
    transform: scale(1);
    -webkit-transform: scale(1);
    transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    height: ;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      border: 0;
    }

    .ml-form-embedSubmitLoad:after {
      content: " ";
      display: block;
      width: 11px;
      height: 11px;
      margin: 1px;
      border-radius: 50%;
      border: 4px solid #fff;
    border-color: #ffffff #ffffff #ffffff transparent;
    animation: ml-form-embedSubmitLoad 1.2s linear infinite;
    }
    @keyframes ml-form-embedSubmitLoad {
      0% {
      transform: rotate(0deg);
      }
      100% {
      transform: rotate(360deg);
      }
    }
      #mlb2-20877511.ml-form-embedContainer {
        box-sizing: border-box;
        display: table;
        margin: 0 auto;
        position: static;
        width: 100% !important;
      }
      #mlb2-20877511.ml-form-embedContainer h4,
      #mlb2-20877511.ml-form-embedContainer p,
      #mlb2-20877511.ml-form-embedContainer span,
      #mlb2-20877511.ml-form-embedContainer button {
        text-transform: none !important;
        letter-spacing: normal !important;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper {
        background-color: #444444;
        
        border-width: 10px;
        border-color: #e6e6e6;
        border-radius: 15px;
        border-style: solid;
        box-sizing: border-box;
        display: inline-block !important;
        margin: 0;
        padding: 0;
        position: relative;
              }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper.embedPopup,
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper.embedDefault { width: 100%; }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper.embedForm { max-width: 100%; width: 100%; }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedHeader img {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        height: auto;
        margin: 0 auto !important;
        max-width: 100%;
        width: undefinedpx;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody {
        padding: 20px 20px 0 20px;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody.ml-form-embedBodyHorizontal {
        padding-bottom: 0;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent,
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent {
        text-align: left;
        margin: 0 0 20px 0;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4,
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4 {
        color: #ffffff;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 30px;
        font-weight: 700;
        margin: 0 0 10px 0;
        text-align: left;
        word-break: break-word;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p,
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p {
        color: #ffffff;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 26px;
        margin: 0 0 10px 0;
        text-align: left;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ul,
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ul {
        color: #ffffff;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 20px;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol,
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol {
        list-style-type: lower-alpha;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol ol,
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol ol {
        list-style-type: lower-roman;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p a,
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p a {
        color: #009e9b;
        text-decoration: underline;
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group {
        text-align: left!important;
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group label {
        margin-bottom: 5px;
        color: #ffffff;
        font-size: 14px;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-weight: bold; font-style: normal; text-decoration: none;;
        display: inline-block;
        line-height: 20px;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p:last-child,
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p:last-child {
        margin: 0;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form {
        margin: 0;
        width: 100%;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent,
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow {
        margin: 0 0 20px 0;
        width: 100%;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow {
        float: left;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent.horozintalForm {
        margin: 0;
        padding: 0 0 20px 0;
        width: 100%;
        height: auto;
        float: left;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow {
        margin: 0 0 10px 0;
        width: 100%;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-last-item {
        margin: 0;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-formfieldHorizintal {
        margin: 0;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input {
        background-color: #ffffff !important;
        color: #444444 !important;
        border-color: #009e9b;
        border-radius: 4px !important;
        border-style: solid !important;
        border-width: 3px !important;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 14px !important;
        height: auto;
        line-height: 21px !important;
        margin-bottom: 0;
        margin-top: 0;
        margin-left: 0;
        margin-right: 0;
        padding: 10px 10px !important;
        width: 100% !important;
        box-sizing: border-box !important;
        max-width: 100% !important;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-webkit-input-placeholder,
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-webkit-input-placeholder { color: #444444; }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-moz-placeholder,
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-moz-placeholder { color: #444444; }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-ms-input-placeholder,
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-ms-input-placeholder { color: #444444; }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-moz-placeholder,
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-moz-placeholder { color: #444444; }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow textarea, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow textarea {
        background-color: #ffffff !important;
        color: #444444 !important;
        border-color: #009e9b;
        border-radius: 4px !important;
        border-style: solid !important;
        border-width: 3px !important;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 14px !important;
        height: auto;
        line-height: 21px !important;
        margin-bottom: 0;
        margin-top: 0;
        padding: 10px 10px !important;
        width: 100% !important;
        box-sizing: border-box !important;
        max-width: 100% !important;
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::before, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::before, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {
          border-color: #009e9b!important;
          background-color: #ffffff!important;
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input.custom-control-input[type="checkbox"]{
        box-sizing: border-box;
        padding: 0;
        position: absolute;
        z-index: -1;
        opacity: 0;
        margin-top: 5px;
        margin-left: -1.5rem;
        overflow: visible;
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {
        border-radius: 4px!important;
      }


      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::after, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::after, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::after {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::after, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::after {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::before, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input:checked~.custom-control-label::before, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::before, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::before, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::before  {
          border-color: #000000!important;
          background-color: #000000!important;
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::before {
          position: absolute;
          top: 4px;
          left: -1.5rem;
          display: block;
          width: 16px;
          height: 16px;
          pointer-events: none;
          content: "";
          background-color: #ffffff;
          border: #adb5bd solid 1px;
          border-radius: 50%;
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::after {
          position: absolute;
          top: 2px!important;
          left: -1.5rem;
          display: block;
          width: 1rem;
          height: 1rem;
          content: "";
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {
          position: absolute;
          top: 4px;
          left: -1.5rem;
          display: block;
          width: 16px;
          height: 16px;
          pointer-events: none;
          content: "";
          background-color: #ffffff;
          border: #adb5bd solid 1px;
          border-radius: 50%;
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after {
          position: absolute;
          top: 0px!important;
          left: -1.5rem;
          display: block;
          width: 1rem;
          height: 1rem;
          content: "";
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {
          position: absolute;
          top: 0px!important;
          left: -1.5rem;
          display: block;
          width: 1rem;
          height: 1rem;
          content: "";
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-radio .custom-control-label::after {
          background: no-repeat 50%/50% 50%;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-checkbox .custom-control-label::after, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::after, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {
          background: no-repeat 50%/50% 50%;
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-control, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-control {
        position: relative;
        display: block;
        min-height: 1.5rem;
        padding-left: 1.5rem;
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input {
          position: absolute;
          z-index: -1;
          opacity: 0;
          box-sizing: border-box;
          padding: 0;
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-control-label {
          color: #000000;
          font-size: 12px!important;
          font-family: 'Open Sans', Arial, Helvetica, sans-serif;
          line-height: 22px;
          margin-bottom: 0;
          position: relative;
          vertical-align: top;
          font-style: normal;
          font-weight: 700;
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedBody .custom-select, #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-select {
        background-color: #ffffff !important;
        color: #444444 !important;
        border-color: #009e9b;
        border-radius: 4px !important;
        border-style: solid !important;
        border-width: 3px !important;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 14px !important;
        line-height: 20px !important;
        margin-bottom: 0;
        margin-top: 0;
        padding: 10px 28px 10px 12px !important;
        width: 100% !important;
        box-sizing: border-box !important;
        max-width: 100% !important;
        height: auto;
        display: inline-block;
        vertical-align: middle;
        background: url('https://assets.mlcdn.com/ml/images/default/dropdown.svg') no-repeat right .75rem center/8px 10px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }


      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow {
        height: auto;
        width: 100%;
        float: left;
      }
      .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal { width: 70%; float: left; }
      .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal { width: 30%; float: left; }
      .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal.labelsOn { padding-top: 25px;  }
      .ml-form-formContent.horozintalForm .ml-form-horizontalRow .horizontal-fields { box-sizing: border-box; float: left; padding-right: 10px;  }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input {
        background-color: #ffffff;
        color: #444444;
        border-color: #009e9b;
        border-radius: 4px;
        border-style: solid;
        border-width: 3px;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 0;
        margin-top: 0;
        padding: 10px 10px;
        width: 100%;
        box-sizing: border-box;
        overflow-y: initial;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button {
        background-color: #009e9b !important;
        border-color: #009e9b;
        border-style: solid;
        border-width: 3px;
        border-radius: 4px;
        box-shadow: none;
        color: #ffffff !important;
        cursor: pointer;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 14px !important;
        font-weight: 700;
        line-height: 20px;
        margin: 0 !important;
        padding: 10px !important;
        width: 100%;
        height: auto;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button:hover {
        background-color: #E09453 !important;
        border-color: #E09453 !important;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type="checkbox"] {
        box-sizing: border-box;
        padding: 0;
        position: absolute;
        z-index: -1;
        opacity: 0;
        margin-top: 5px;
        margin-left: -1.5rem;
        overflow: visible;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description {
        color: #ffffff;
        display: block;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 12px;
        text-align: left;
        margin-bottom: 0;
        position: relative;
        vertical-align: top;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label {
        font-weight: normal;
        margin: 0;
        padding: 0;
        position: relative;
        display: block;
        min-height: 24px;
        padding-left: 24px;

      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label a {
        color: #ffffff;
        text-decoration: underline;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p {
        color: #ffffff !important;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;
        font-size: 12px !important;
        font-weight: normal !important;
        line-height: 18px !important;
        padding: 0 !important;
        margin: 0 5px 0 0 !important;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p:last-child {
        margin: 0;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit {
        margin: 0 0 20px 0;
        float: left;
        width: 100%;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {
        background-color: #009e9b !important;
        border: none !important;
        border-radius: 4px !important;
        box-shadow: none !important;
        color: #ffffff !important;
        cursor: pointer;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;
        font-size: 14px !important;
        font-weight: 700 !important;
        line-height: 21px !important;
        height: auto;
        padding: 10px !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading {
        display: none;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover {
        background-color: #E09453 !important;
      }
      .ml-subscribe-close {
        width: 30px;
        height: 30px;
        background: url('https://assets.mlcdn.com/ml/images/default/modal_close.png') no-repeat;
        background-size: 30px;
        cursor: pointer;
        margin-top: -10px;
        margin-right: -10px;
        position: absolute;
        top: 0;
        right: 0;
      }
      .ml-error input, .ml-error textarea, .ml-error select {
        border-color: red!important;
      }

      .ml-error .custom-checkbox-radio-list {
        border: 1px solid red !important;
        border-radius: 15px;
        padding: 10px;
      }

      .ml-error .label-description,
      .ml-error .label-description p,
      .ml-error .label-description p a,
      .ml-error label:first-child {
        color: #ff0000 !important;
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p,
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p:first-letter {
        color: #ff0000 !important;
      }
            @media only screen and (max-width: 700px){

        .ml-form-embedWrapper.embedDefault, .ml-form-embedWrapper.embedPopup { width: 100%!important; }
        .ml-form-formContent.horozintalForm { float: left!important; }
        .ml-form-formContent.horozintalForm .ml-form-horizontalRow { height: auto!important; width: 100%!important; float: left!important; }
        .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal { width: 100%!important; }
        .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal > div { padding-right: 0px!important; padding-bottom: 10px; }
        .ml-form-formContent.horozintalForm .ml-button-horizontal { width: 100%!important; }
        .ml-form-formContent.horozintalForm .ml-button-horizontal.labelsOn { padding-top: 0px!important; }

      }
    </style>

    <style type="text/css">

      .ml-mobileButton-horizontal { display: none; }

      #mlb2-20877511 .ml-mobileButton-horizontal button {

        background-color: #009e9b !important;
        border-color: #009e9b !important;
        border-style: solid !important;
        border-width: 3px !important;
        border-radius: 4px !important;
        box-shadow: none !important;
        color: #ffffff !important;
        cursor: pointer;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;
        font-size: 14px !important;
        font-weight: 700 !important;
        line-height: 20px !important;
        padding: 10px !important;
        width: 100% !important;

      }

      @media only screen and (max-width: 700px) {
        #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent.horozintalForm {
          padding: 0 0 10px 0 !important;
        }
        .ml-hide-horizontal { display: none !important; }
        .ml-form-formContent.horozintalForm .ml-button-horizontal { display: none!important; }
        .ml-mobileButton-horizontal { display: inline-block !important; margin-bottom: 20px;width:100%; }
        .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal > div { padding-bottom: 0px !important; }
      }

    </style>
  <style type="text/css">
    @media only screen and (max-width: 700px) {
       .ml-form-formContent.horozintalForm .ml-form-horizontalRow .horizontal-fields {
        margin-bottom: 10px !important;
        width: 100% !important;
      }
    }
  </style>
    
    <style type="text/css">
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions { text-align: left; float: left; width: 100%; }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent {
        margin: 0 0 15px 0;
        text-align: left;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.horizontal {
        margin: 0 0 15px 0;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent h4 {
        color: #000000;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 12px;
        font-weight: 700;
        line-height: 18px;
        margin: 0 0 10px 0;
        word-break: break-word;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p {
        color: #000000;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 12px;
        line-height: 18px;
        margin: 0 0 10px 0;
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.privacy-policy p {
        color: #ffffff;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 12px;
        line-height: 22px;
        margin: 0 0 10px 0;
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.privacy-policy p a {
        color: #ffffff;
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.privacy-policy p:last-child {
        margin: 0;
      }

      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p a {
        color: #000000;
        text-decoration: underline;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p:last-child { margin: 0 0 15px 0; }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptions {
        margin: 0;
        padding: 0;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox {
        margin: 0 0 10px 0;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox:last-child {
        margin: 0;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox label {
        font-weight: normal;
        margin: 0;
        padding: 0;
        position: relative;
        display: block;
        min-height: 24px;
        padding-left: 24px;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description {
        color: #000000;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 12px;
        line-height: 18px;
        text-align: left;
        margin-bottom: 0;
        position: relative;
        vertical-align: top;
        font-style: normal;
        font-weight: 700;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .description {
        color: #000000;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 12px;
        font-style: italic;
        font-weight: 400;
        line-height: 18px;
        margin: 5px 0 0 0;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type="checkbox"] {
        box-sizing: border-box;
        padding: 0;
        position: absolute;
        z-index: -1;
        opacity: 0;
        margin-top: 5px;
        margin-left: -1.5rem;
        overflow: visible;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedMailerLite-GDPR {
        padding-bottom: 20px;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedMailerLite-GDPR p {
        color: #000000;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 10px;
        line-height: 14px;
        margin: 0;
        padding: 0;
      }
      #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedMailerLite-GDPR p a {
        color: #000000;
        text-decoration: underline;

      }
      @media (max-width: 768px) {
        #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p {
          font-size: 12px !important;
          line-height: 18px !important;
        }
        #mlb2-20877511.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedMailerLite-GDPR p {
          font-size: 10px !important;
          line-height: 14px !important;
        }
      }
    </style>

    
    

    
    

    

      
        
        
      

      
        
        
      

      

            
            
            
            
            
      

      
      
        
        
         
        
        
      

        
        
        
        
      

       

        
        
        
        
        
        
        
        
        
        
        


      
        
        
        
        


  
        
        
        
      

      
    
    
    
    
    
  

  
        
        
        
      

      
        
        
        
      

      
        
        
        
      

       
        
        
        
       

       
        
        
        
        
        
      

      
        
        
        
        
        
        

        
        
        
        
        
        

        
        
        
        
        
        
        

      
        
        
        
        
        
        


      
        
        
        



      
    
      
      
      
      
      




    

      
    <div id="mlb2-20877511" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-20877511">
      <div class="ml-form-align-center ">
        <div class="ml-form-embedWrapper embedForm">

          
          

          <div class="ml-form-embedBody ml-form-embedBodyHorizontal row-form">

            <div class="ml-form-embedContent" style=" ">
              
                <h4>Start Planning Your Retreat Today!</h4>
                <p>Simply leave your email address, and we'll give you the link to download your <strong>FREE Retreat Planning Guide </strong>right away!<br></p>
<p><br></p>
              
            </div>

            <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/886923/forms/141004914525471900/subscribe" data-code="" method="post" target="ml-inline-target">
              

              <div class="ml-form-formContent horozintalForm">
                <div class="ml-form-horizontalRow">
                  <div class="ml-input-horizontal">
                    
                      
                      <div style="width: 100%;" class="horizontal-fields">




                        <div class="ml-field-group ml-field-text" style="margin-bottom:10px">
                          <input type="text" name="fields[name]" placeholder="First name (optional)" autocomplete="given-name" />
                        </div>
                        <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                          
                          <!-- input -->
                      <input type="email" class="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autocomplete="email" aria-invalid="false">
                      <!-- /input -->
                        </div>



                      </div>
                    
                  </div>


                  <div class="ml-button-horizontal primary ">
                    
                      <button type="submit" class="primary">Subscribe</button>
                    
                    <button disabled="disabled" style="display: none;" type="button" class="loading">
                      <div class="ml-form-embedSubmitLoad"></div>
                      <span class="sr-only">Loading...</span>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Privacy policy -->
              <div class="ml-form-embedPermissions" style="">
                <div class="ml-form-embedPermissionsContent horizontal privacy-policy">

                  

                  
                          <p>You can unsubscribe anytime. For more details, review our Privacy Policy.</p>
                  

                  
                </div>
              </div>
              <!-- /Privacy policy -->

              

              




              
              <input type="hidden" name="ml-submit" value="1" aria-invalid="false">

              

              <div class="ml-mobileButton-horizontal">
                <button type="submit" class="primary">Subscribe</button>
                <button disabled="disabled" style="display: none;" type="button" class="loading">
                  <div class="ml-form-embedSubmitLoad"></div>
                  <span class="sr-only">Loading...</span>
                </button>
              </div>
              <input type="hidden" name="anticsrf" value="true" aria-invalid="false">
            </form>
            <iframe id="ml-inline-target-frame" name="ml-inline-target" style="display:none"></iframe>
          </div>

          <div class="ml-form-successBody row-success" style="display: none">

            <div class="ml-form-successContent">
              
                <h4>Thank you!</h4>
                <p><br></p>
<p><strong>Your Retreat Planning Guide is Here!</strong> 🙌&nbsp;</p>
<p>You’re one step closer to planning a smooth, successful retreat!&nbsp;</p>
<p><span style="color: #009e9b"><span style="font-size: 20px;"><span><a href="https://drive.google.com/file/d/1hjuO8sQTM12qrwlPcEfDcV_R9DNrHcNg/view?usp=sharing" target="_blank">Click here to download your FREE Retreat Planning Guide.</a></span></span></span></p>
<p><span style="color: #009e9b"><span style="font-size: 20px;"><span><a href="https://drive.google.com/file/d/1hjuO8sQTM12qrwlPcEfDcV_R9DNrHcNg/view?usp=sharing" target="_blank"></a></span></span></span></p>
<p><br></p>
              
            </div>

          </div>
        </div>
      </div>
    </div>

  

  
  
  
  
  
      </div>
 </div>
                ` }}
              />
            ) : (
              <section className="py-16 bg-[#444444] border border-[#e6e6e6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-green-400 text-6xl mb-4">✅</div>
                    <h4 className="text-white text-2xl font-bold mb-2">{`Thank you${firstName ? ", " + firstName : ''}!`}</h4>
                    <p className="text-white text-lg mb-4">Your Retreat Marketing Guide is Here! 🙌</p>
                    <p className="text-white mb-6">You're one step closer to marketing your successful retreat!</p>
                    <a 
                      href="https://drive.google.com/file/d/1BZ9P5OWawV_8XCYiRrws853jz6Om78zI/view?usp=sharing" 
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
              </section>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;