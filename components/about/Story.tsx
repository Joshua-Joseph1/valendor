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
      className="py-32 bg-[#1a1a1a] text-white relative overflow-hidden"
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
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Our Story –
                <span className="block text-white">Valiant Risk Group</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-valentor-red to-red-600 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Valiant Risk Group was founded on the unwavering principles of
                integrity, discipline, discretion, and trust earned, not
                assumed.
              </p>
              <p>
                Born from a shared mission to redefine the landscape of modern
                risk management, Valiant is the culmination of decades spent
                operating at the sharpest edge of global security. Our founders
                have protected heads of state, high-net-worth individuals, and
                corporate leaders in some of the world's most volatile
                environments, across Africa, Asia, South America, and the Middle
                East.
              </p>
              <p>
                Forged in high-threat zones and refined through years of
                disciplined service, our team brings an unmatched depth of
                operational precision, intelligence expertise, and an
                instinctive comprehension of the realities faced by those in
                positions of influence and exposure.
              </p>
              <p>
                Valiant Risk Group exists to serve those who cannot afford
                uncertainty. We deliver intelligence-led, full-spectrum
                protection, engineered for continuity, control, and absolute
                peace of mind.
              </p>
              <p>
                This is not traditional security. This is strategic protection,
                engineered through experience, anchored in trust.
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
            <div className="h-full bg-[#252525] backdrop-blur-xl border border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden rounded-2xl">
              <div className="h-2 bg-gradient-to-r from-valentor-red to-red-700"></div>
              <div className="p-10">
                {/* Header */}
                <div className="flex items-center mb-8">
                  <div className="bg-valentor-red/20 backdrop-blur-sm rounded-2xl p-4 mr-6">
                    <Shield className="h-10 w-10 text-valentor-red" />
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
                  environments, ultimately enhancing work performance efficiency
                  and peace of mind.
                </p>

                <div className="bg-valentor-red/10 backdrop-blur-sm rounded-2xl p-6 border border-valentor-red/20">
                  <div className="flex items-center space-x-4">
                    <div className="bg-valentor-red/20 rounded-xl p-3">
                      <Award className="h-8 w-8 text-valentor-red" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        Excellence in Security
                      </h4>
                      <p className="text-gray-300">
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