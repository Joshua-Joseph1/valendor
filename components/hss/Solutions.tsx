'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Star, Zap, Camera, Smartphone, Shield, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HardwareSoftwareSolutions = () => {
  const solutionsRef = useRef(null);
  const isSolutionsInView = useInView(solutionsRef, { once: true });

  const solutions = [
    {
      title: 'Smart Surveillance',
      description: 'AI-powered video analytics with intelligent threat detection',
      icon: Camera
    },
    {
      title: 'Mobile Integration',
      description: 'Smartphone-based security control with real-time alerts',
      icon: Smartphone
    },
    {
      title: 'Cyber Protection',
      description: 'Digital threat monitoring with advanced cybersecurity',
      icon: Shield
    },
    {
      title: 'Threat Detection',
      description: 'Real-time alert systems with automated response protocols',
      icon: AlertTriangle
    }
  ];

  return (
    <section
      ref={solutionsRef}
      className="py-24 md:py-32 bg-[#1a1a1a] text-white relative overflow-hidden"
    >
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-valentor-red rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4">Innovation in Security</h2>
          <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed font-[ui-sans-serif]">Our technology solutions leverage advances in AI, machine learning, and IoT for next‑generation security.</p>
        </motion.div>

        {/* Solutions - Inline list */}
        <div className="max-w-6xl mx-auto divide-y divide-white/10">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="py-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <solution.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-[ui-serif] tracking-tight text-white mb-1">{solution.title}</h3>
                  <p className="text-white/80 leading-relaxed font-[ui-sans-serif]">{solution.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-8" />
      </div>
    </section>
  );
};

export default HardwareSoftwareSolutions;