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
      className="py-32 bg-[#1a1a1a] text-white relative overflow-hidden"
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
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Our Mission &<span className="block text-white">Vision</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The foundational principles that guide every operation and define
            our commitment to excellence in risk management and protection
            services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <div className="h-full bg-[#252525] backdrop-blur-xl border border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105 overflow-hidden rounded-2xl">
              <div className="h-2 bg-gradient-to-r from-valentor-red to-red-700"></div>
              <div className="p-10">
                <div className="flex items-center mb-8">
                  <div className="bg-valentor-red/20 backdrop-blur-sm rounded-2xl p-4 mr-6">
                    <Target className="h-10 w-10 text-valentor-red" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Our Mission
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-valentor-red to-red-600 rounded-full"></div>
                  </div>
                </div>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  To provide world-class risk management and protection services
                  that enable our clients to operate confidently in challenging
                  environments, combining cutting-edge technology with human
                  expertise to deliver solutions that protect what matters most.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-valentor-red to-red-700 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-300 font-medium">
                      Global risk assessment and mitigation
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-valentor-red to-red-700 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-300 font-medium">
                      Technology-driven security solutions
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-valentor-red to-red-700 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-300 font-medium">
                      Uncompromising client protection
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group"
          >
            <div className="h-full bg-[#252525] backdrop-blur-xl border border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105 overflow-hidden rounded-2xl">
              <div className="h-2 bg-gradient-to-r from-slate-600 to-slate-800"></div>
              <div className="p-10">
                <div className="flex items-center mb-8">
                  <div className="bg-slate-600/20 backdrop-blur-sm rounded-2xl p-4 mr-6">
                    <TrendingUp className="h-10 w-10 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Our Vision
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full"></div>
                  </div>
                </div>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  To be the global leader in risk management and protection
                  services, setting the standard for professionalism,
                  innovation, and results. We envision a world where businesses
                  and individuals can pursue their goals without compromise to
                  their security.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-300 font-medium">
                      Industry-leading innovation and standards
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-300 font-medium">
                      Global security excellence
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-300 font-medium">
                      Empowering secure business operations
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