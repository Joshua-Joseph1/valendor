'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, TrendingUp, Globe } from 'lucide-react';

const MissionVisionSection = () => {
  const missionRef = useRef(null);
  const isMissionInView = useInView(missionRef, { once: true });

  return (
    <section ref={missionRef} className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-valentor-red/5 via-transparent to-slate-800/20"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-valentor-red rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Mission Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="bg-valentor-red/20 backdrop-blur-sm rounded-2xl p-4 mr-6">
                  <Target className="h-10 w-10 text-valentor-red" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-2">Our Mission</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-valentor-red to-red-600 rounded-full"></div>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                To provide world-class risk management and protection services that enable 
                our clients to operate confidently in challenging environments, cutting-edge technology with human expertise to deliver solutions that protect 
                what matters most.
              </p>
              
              {/* <div className="bg-valentor-red/10 backdrop-blur-sm rounded-2xl p-6 border border-valentor-red/20">
                <div className="flex items-center space-x-4">
                  <div className="bg-valentor-red/20 rounded-xl p-3">
                    <Globe className="h-8 w-8 text-valentor-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Global Footprint</h3>
                    <p className="text-gray-300">Operating across 6 continents with local expertise</p>
                  </div>
                </div>
              </div> */}
            </div>
          </motion.div>

          {/* Vision Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="bg-gray-900/20 backdrop-blur-sm rounded-2xl p-4 mr-6">
                  <TrendingUp className="h-10 w-10 text-gray-400" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-2">Our Vision</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                To be the global leader in risk management and protection services, 
                setting the standard for professionalism, innovation, and results. 
                We envision a world where businesses and individuals can pursue their 
                goals without compromise to their security.
              </p>
              
              {/* <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-gradient-to-br from-valentor-red/20 to-red-700/20 backdrop-blur-sm rounded-2xl p-6 border border-valentor-red/20 text-center"
                >
                  <div className="text-4xl font-bold text-valentor-red mb-2">500+</div>
                  <div className="text-gray-300 text-sm font-medium">Clients Protected</div>
                  <div className="w-8 h-1 bg-valentor-red rounded-full mx-auto mt-2"></div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-gradient-to-br from-gray-900/20 to-gray-600/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-400/20 text-center"
                >
                  <div className="text-4xl font-bold text-gray-400 mb-2">15+</div>
                  <div className="text-gray-300 text-sm font-medium">Years Excellence</div>
                  <div className="w-8 h-1 bg-gray-400 rounded-full mx-auto mt-2"></div>
                </motion.div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;