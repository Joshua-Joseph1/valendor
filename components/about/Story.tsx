'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Award, Shield, Star } from 'lucide-react';

const AboutStory = () => {
  const storyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true });

  return (
    <section
      ref={storyRef}
      className="py-16 sm:py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 sm:w-96 h-64 sm:h-96 bg-valentor-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 sm:w-80 h-48 sm:h-80 bg-gray-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Our Story – Valiant Risk Group
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-valentor-red to-red-600 rounded-full mb-6 sm:mb-8"></div>
            </div>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                Valiant Risk Group was founded on the unwavering principles of integrity, discipline, discretion, and trust earned, not assumed.
              </p>
              <p>
                Born from a shared mission to redefine the landscape of modern risk management, Valiant is the culmination of decades spent operating at the sharpest edge of global security. Our founders have protected heads of state, high-net-worth individuals, and corporate leaders in some of the world’s most volatile environments, across Africa, Asia, South America, and the Middle East.
              </p>
              <p>
                Forged in high-threat zones and refined through years of disciplined service, our team brings an unmatched depth of operational precision, intelligence expertise, and an instinctive comprehension of the realities faced by those in positions of influence and exposure.
              </p>
              <p>
                Valiant Risk Group exists to serve those who cannot afford uncertainty. We deliver intelligence-led, full-spectrum protection, engineered for continuity, control, and absolute peace of mind.
              </p>
              <p>
                This is not traditional security. This is strategic protection, engineered through experience, anchored in trust.
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
            <div className="bg-gradient-to-br from-valentor-red/5 via-red-50 to-slate-50 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-valentor-red/10">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
                {/* Header */}
                <div className="flex items-center mb-6">
                  {/* <div className="bg-valentor-red/10 rounded-2xl p-3 mr-4">
                    <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-valentor-red" />
                  </div> */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Our Mission
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-valentor-red to-red-600 rounded-full mt-2"></div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  To provide world-class risk management and protection services that enable our clients to operate confidently in challenging environments, ultimately enhancing work performance efficiency and peace of mind.
                </p>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-valentor-red flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      Excellence in Security
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Recognized industry leader
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                {/* <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-2 font-medium">
                    Trusted Excellence Since 2009
                  </p>
                </div> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;