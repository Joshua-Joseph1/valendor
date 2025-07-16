'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, Shield, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true });

  const principles = [
    {
      title: 'Discretion',
      description: 'Operating with the highest levels of confidentiality and professionalism, ensuring our clients\' privacy and security are never compromised.',
      icon: Eye,
      gradient: 'from-slate-600 to-slate-800',
      details: [
        'Confidential operations and reporting',
        'Non-disclosure protocols',
        'Invisible security presence'
      ]
    },
    {
      title: 'Strength',
      description: 'Robust capabilities enhanced by extensive experience, proven methodologies, and cutting-edge technology to handle any security challenge.',
      icon: Shield,
      gradient: 'from-valentor-red to-red-700',
      details: [
        'Elite security professionals',
        'Advanced technology integration',
        'Proven track record'
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
        'Cultural sensitivity'
      ]
    }
  ];

  return (
    <section id="about" ref={aboutRef} className="py-32 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-valentor-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-900 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Why Choose
            <span className="block text-gray-900">
              Valiant Risk Group
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our foundational principles guide every operation, ensuring unparalleled 
            service delivery in the most demanding circumstances.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Card className="h-full bg-white/80 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${principle.gradient}`}></div>
                <CardContent className="p-10">
                  {/* Icon with luxury styling */}
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${principle.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-6`}>
                      <principle.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-center">
                    {principle.description}
                  </p>

                  {/* Feature list */}
                  <div className="space-y-3">
                    {principle.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: (index * 0.2) + (detailIndex * 0.1) + 0.5 }}
                        className="flex items-center"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${principle.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                        <span className="text-sm text-gray-700 font-medium">{detail}</span>
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

export default AboutSection;