'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, TrendingUp } from "lucide-react";

const MissionVisionSection = () => {
  const missionRef = useRef(null);
  const isMissionInView = useInView(missionRef, { once: true });

  return (
    <section
      ref={missionRef}
      className="py-24 md:py-32 bg-[#1a1a1a] text-white relative overflow-hidden"
    >
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-valentor-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4">Our Mission & Vision</h2>
          <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed font-[ui-sans-serif]">
            The foundational principles that guide every operation and define our commitment to excellence in risk management and protection services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_min-content_1fr] gap-12 max-w-7xl mx-auto items-start">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <div className="h-full transition-colors duration-300">
              <div className="p-0">
                <div className="flex items-center mb-8">
                  <div className="bg-[#C1272D]/15 backdrop-blur-sm rounded-xl p-4 mr-6">
                    <Target className="h-10 w-10 text-[#C1272D]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-[ui-serif] tracking-tight text-white mb-2">
                      Our Mission
                    </h3>
                    <div className="w-16 h-px bg-[#344154]"></div>
                  </div>
                </div>

                <p className="text-white/80 mb-8 leading-relaxed font-[ui-sans-serif]">
                  To deliver world-class risk management and protection services that allow clients to pursue their ambitions confidently. We blend human expertise with leading technology to safeguard what matters most.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#344154] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-white/80 font-medium font-[ui-sans-serif]">
                      Global risk assessment and mitigation
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#344154] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-white/80 font-medium font-[ui-sans-serif]">
                      Technology-driven security solutions
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#344154] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-white/80 font-medium font-[ui-sans-serif]">
                      Uncompromising client protection
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vertical blue rule for desktop */}
          <div className="hidden lg:block w-px bg-[#344154]/50 h-full mx-auto" aria-hidden="true"></div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group"
          >
            <div className="h-full transition-colors duration-300">
              <div className="p-0">
                <div className="flex items-center mb-8">
                  <div className="bg-[#344154]/20 backdrop-blur-sm rounded-xl p-4 mr-6">
                    <TrendingUp className="h-10 w-10 text-[#344154]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-[ui-serif] tracking-tight text-white mb-2">
                      Our Vision
                    </h3>
                    <div className="w-16 h-px bg-[#344154]"></div>
                  </div>
                </div>

                <p className="text-white/80 mb-8 leading-relaxed font-[ui-sans-serif]">
                  To set the global standard for professionalism and innovation in our field, ensuring that individuals and enterprises can thrive without compromise.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#344154] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-white/80 font-medium font-[ui-sans-serif]">
                      Industry-leading innovation and standards
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#344154] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-white/80 font-medium font-[ui-sans-serif]">
                      Global security excellence
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#344154] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-white/80 font-medium font-[ui-sans-serif]">
                      Empowering secure operations without compromise
                    </span>
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

export default MissionVisionSection;