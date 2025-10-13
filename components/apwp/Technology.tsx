'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const WildlifeProtectionTechnology = () => {
  const technologyRef = useRef(null);
  const isTechnologyInView = useInView(technologyRef, { once: true });

  const technologies = [
    {
      title: 'Thermal Imaging',
      description: 'Night vision and heat detection for 24/7 wildlife monitoring',
    },
    {
      title: 'Satellite Monitoring',
      description: 'Real-time area surveillance with global coverage capabilities',
    },
    {
      title: 'Ground Sensors',
      description: 'Intrusion detection systems with intelligent alert networks',
    },
    {
      title: 'Helicopter Patrols',
      description: 'Autonomous surveillance flights with advanced AI detection',
    }
  ];

  return (
    <section
      ref={technologyRef}
      className="py-24 md:py-32 bg-[#1A1A1A] text-white relative overflow-hidden"
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
          <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4">
            Advanced Technology
          </h2>
          <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed font-[ui-sans-serif]">
            State-of-the-art surveillance and detection technology that provides
            24/7 protection for wildlife and conservation areas.
          </p>
        </motion.div>

        {/* Technology - Inline list */}
        <div className="max-w-6xl mx-auto divide-y divide-white/10">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isTechnologyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="py-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-[ui-serif] tracking-tight text-white mb-1">
                    {tech.title}
                  </h3>
                  <p className="text-white/80 font-[ui-sans-serif]">
                    {tech.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom spacer for rhythm */}
        <div className="mt-8" />
      </div>
    </section>
  );
};

export default WildlifeProtectionTechnology;