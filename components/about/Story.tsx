'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';


const AboutStory = () => {
  const storyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true });

  return (
    <section
      ref={storyRef}
      className="py-24 md:py-32 bg-[#1A1A1A] text-white relative overflow-hidden"
    >
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-valentor-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4 leading-tight">
                Our Story — Valiant Risk Group
              </h2>
              <div className="h-px w-16 bg-[#344154] mb-6"></div>
            </div>

            <div className="space-y-6 text-base md:text-lg text-white/80 leading-relaxed font-[ui-sans-serif]">
              <p>
                Founded on enduring principles of integrity, discipline and
                trust earned through service excellence, Valiant embodies
                decades of experience at the pinnacle of international
                protection. Our founders have shielded heads of state,
                luminaries and corporate leaders in some of the world’s most
                volatile environments — from Africa to Asia and beyond.
              </p>
              <p>
                This heritage has forged a collective of professionals who
                possess an instinctive understanding of the pressures faced by
                those at the helm of influence. We exist to serve those who
                cannot afford uncertainty, delivering intelligence‑led,
                full‑spectrum protection engineered for continuity, control and
                absolute peace of mind.
              </p>
            </div>

            {/* <div className="space-y-3 sm:space-y-4">
              {[
                "Founded by former Special Forces leadership",
                "15+ years of proven excellence",
                "Global reach with local expertise",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center group hover:bg-gray-50 rounded-xl p-3 transition-all duration-200"
                >
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-3 flex-shrink-0 group-hover:text-green-600 transition-colors duration-200" />
                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          {/* Right Side - Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="h-full transition-colors duration-300">
              <div className="p-0">
                {/* Header */}
                <div className="flex items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-[ui-serif] tracking-tight text-white mb-2">
                      Our Mission
                    </h3>
                    <div className="w-16 h-px bg-[#344154]"></div>
                  </div>
                </div>

                <p className="text-white/80 mb-8 leading-relaxed font-[ui-sans-serif]">
                  To deliver world-class risk management and protection services
                  that allow clients to pursue their ambitions confidently. We
                  blend human expertise with leading technology to safeguard
                  what matters most.
                </p>

                <div className="bg-[#C1272D]/10 backdrop-blur-sm rounded-xl p-6 border border-[#C1272D]/20">
                  <div className="flex items-center space-x-4">

                    <div>
                      <h4 className="text-xl font-[ui-serif] tracking-tight text-white">
                        Excellence in Security
                      </h4>
                      <p className="text-white/80">
                        Recognized industry leader
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;