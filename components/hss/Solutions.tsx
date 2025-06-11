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
    <section ref={solutionsRef} className="py-32 bg-gradient-to-br from-gray-50 via-slate-50 to-white relative overflow-hidden">
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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center bg-valentor-red/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Zap className="h-5 w-5 text-valentor-red mr-2" />
            <span className="text-valentor-red font-semibold text-sm uppercase tracking-wider">Innovation in Security</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Innovation in Security
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our technology solutions leverage the latest advances in artificial 
            intelligence, machine learning, and IoT integration for next-generation security.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Card className="h-full bg-white/80 backdrop-blur-xl border-2 border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 rounded-2xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  {/* Icon with luxury styling */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-valentor-red/20 to-valentor-red/10 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6">
                      <solution.icon className="h-10 w-10 text-valentor-red" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-valentor-red rounded-full flex items-center justify-center">
                      <Star className="h-3 w-3 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {solution.description}
                  </p>

                  {/* Decorative element */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 bg-valentor-red rounded-full opacity-${(i + 1) * 30}`}></div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 text-center mt-2 font-medium">
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
          animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 border border-gray-200 shadow-lg">
            <Award className="h-6 w-6 text-valentor-red mr-3" />
            <span className="text-gray-900 font-semibold">Cutting-Edge Innovation • Professional Excellence</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HardwareSoftwareSolutions;