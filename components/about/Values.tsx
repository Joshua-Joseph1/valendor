'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, Shield, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutValues = () => {
  const valuesRef = useRef(null);
  const isValuesInView = useInView(valuesRef, { once: true });

  const coreValues = [
    {
      title: 'Discretion',
      description: 'Operating with the highest levels of confidentiality and professionalism, ensuring our clients\' privacy and security are never compromised.',
      icon: Eye,
      gradient: 'from-slate-600 to-slate-800',
      details: [
        'Confidential operations and reporting',
        'Non-disclosure protocols',
        'Invisible security presence',
        'Secure communication channels'
      ]
    },
    {
      title: 'Strength',
      description: 'Robust capabilities backed by extensive experience, proven methodologies, and cutting-edge technology to handle any security challenge.',
      icon: Shield,
      gradient: 'from-valentor-red to-red-700',
      details: [
        'Elite security professionals',
        'Advanced technology integration',
        'Proven track record',
        'Comprehensive threat response'
      ]
    },
    {
      title: 'Adaptability',
      description: 'Flexible solutions tailored to unique challenges and changing environments, ensuring effective security in any situation.',
      icon: Target,
      gradient: 'from-blue-900 to-blue-700',
      details: [
        'Customized security solutions',
        'Rapid response capabilities',
        'Cultural sensitivity',
        'Evolving threat assessment'
      ]
    }
  ];

  return (
    <section
      ref={valuesRef}
      className="py-24 md:py-32 bg-[#1A1A1A] text-white relative overflow-hidden before:block before:h-px before:w-full before:bg-white/10"
    >
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-valentor-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4">Our Values</h2>
          <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed font-[ui-sans-serif]">
            Our foundational principles guide every operation, ensuring unparalleled service delivery in the most demanding circumstances.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {coreValues.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Card className="h-full bg-[#0f0f0f] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors duration-300 overflow-hidden rounded-lg">
                <div
                  className={`h-2 bg-gradient-to-r ${principle.gradient}`}
                ></div>
                <CardContent className="p-8">
                  {/* Icon with luxury styling */}
                  <div className="relative mb-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${principle.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-6`}
                    >
                      <principle.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-[ui-serif] tracking-tight text-white mb-4 text-center">
                    {principle.title}
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed text-center font-[ui-sans-serif]">
                    {principle.description}
                  </p>

                  {/* Feature list */}
                  <div className="space-y-3">
                    {principle.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isValuesInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.2 + detailIndex * 0.1 + 0.5,
                        }}
                        className="flex items-center"
                      >
                        <div className={`w-2 h-2 bg-[#344154] rounded-full mr-3 flex-shrink-0`}></div>
                        <span className="text-sm text-white/80 font-medium font-[ui-sans-serif]">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;