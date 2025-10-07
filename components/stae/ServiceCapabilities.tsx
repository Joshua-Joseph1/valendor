'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Star, Zap, Shield, MapPin, Radio, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SecureTransferCapabilities = () => {
  const capabilitiesRef = useRef(null);
  const isCapabilitiesInView = useInView(capabilitiesRef, { once: true });

  const capabilities = [
    {
      title: 'Armored Vehicles',
      description: 'Fleet of certified armored vehicles with advanced protection systems',
      icon: Shield
    },
    {
      title: 'Route Planning',
      description: 'Advanced route analysis and optimization using AI-powered intelligence',
      icon: MapPin
    },
    {
      title: 'Communications',
      description: 'Secure communication systems with encrypted channels',
      icon: Radio
    },
    {
      title: '24/7 Monitoring',
      description: 'Round-the-clock operation support with global command centers',
      icon: Clock
    }
  ];

  return (
    <section
      ref={capabilitiesRef}
      className="py-32 bg-[#1a1a1a] text-white relative overflow-hidden"
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
          animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center bg-valentor-red/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Zap className="h-5 w-5 text-valentor-red mr-2" />
            <span className="text-valentor-red font-semibold text-sm uppercase tracking-wider">
              Advanced Capabilities
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Our Advanced Capabilities
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            State-of-the-art resources and capabilities that ensure secure,
            efficient, and reliable transport operations in any environment with
            cutting-edge technology.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Card className="h-full bg-[#252525] backdrop-blur-xl border border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105 rounded-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-valentor-red to-red-700"></div>
                <CardContent className="p-8 text-center">
                  {/* Icon with luxury styling */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-valentor-red/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-6">
                      <capability.icon className="h-10 w-10 text-valentor-red" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {capability.description}
                  </p>

                  {/* Decorative element */}
                  <div className="mt-6 pt-6 border-t border-gray-600">
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 bg-valentor-red rounded-full opacity-${
                            (i + 1) * 30
                          }`}
                        ></div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-300 text-center mt-2 font-medium">
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
          animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center bg-[#252525] backdrop-blur-xl rounded-full px-8 py-4 border border-gray-700 shadow-lg">
            <Award className="h-6 w-6 text-valentor-red mr-3" />
            <span className="text-white font-semibold">
              State-of-the-Art Equipment • Professional Excellence
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecureTransferCapabilities;