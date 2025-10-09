'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Star, Zap, Camera, Satellite, Binoculars, Bone as Drone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WildlifeProtectionTechnology = () => {
  const technologyRef = useRef(null);
  const isTechnologyInView = useInView(technologyRef, { once: true });

  const technologies = [
    {
      title: 'Thermal Imaging',
      description: 'Night vision and heat detection for 24/7 wildlife monitoring',
      icon: Camera
    },
    {
      title: 'Satellite Monitoring',
      description: 'Real-time area surveillance with global coverage capabilities',
      icon: Satellite
    },
    {
      title: 'Ground Sensors',
      description: 'Intrusion detection systems with intelligent alert networks',
      icon: Binoculars
    },
    {
      title: 'Drone Patrols',
      description: 'Autonomous surveillance flights with advanced AI detection',
      icon: Drone
    }
  ];

  return (
    <section
      ref={technologyRef}
      className="py-24 md:py-32 bg-[#1A1A1A] text-white relative overflow-hidden before:block before:h-px before:w-full before:bg-white/10"
    >
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-valentor-red rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-valentor-red/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isTechnologyInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4">Advanced Technology</h2>
          <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed font-[ui-sans-serif]">
            State-of-the-art surveillance and detection technology that provides 24/7 protection for wildlife and conservation areas.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isTechnologyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Card className="h-full bg-[#0f0f0f] backdrop-blur-xl border border-white/10 transition-colors duration-300 rounded-lg overflow-hidden">
                <div className="h-2 bg-[#344154]"></div>
                <CardContent className="p-8 text-center">
                  {/* Icon with luxury styling */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-[#344154]/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto transition-colors duration-500">
                      <tech.icon className="h-10 w-10 text-[#344154]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-[ui-serif] tracking-tight text-white mb-4">
                    {tech.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed font-[ui-sans-serif]">
                    {tech.description}
                  </p>

                  {/* Decorative element */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 bg-[#344154] rounded-full`}
                        ></div>
                      ))}
                    </div>
                    <p className="text-xs text-white/70 text-center mt-2 font-[ui-sans-serif]">
                      Advanced Technology
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isTechnologyInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center bg-[#252525] backdrop-blur-xl rounded-full px-8 py-4 border border-gray-700 shadow-lg">
            <Award className="h-6 w-6 text-valentor-red mr-3" />
            <span className="text-white font-semibold">
              Cutting-Edge Innovation • Wildlife Security Excellence
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WildlifeProtectionTechnology;