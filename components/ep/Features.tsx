'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExecutiveProtectionFeatures = () => {
  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true });

  const features = [
    {
      title: '24/7 Availability',
      description: 'Round-the-clock protection and support with immediate response capabilities',
      icon: Clock
    },
    {
      title: 'Global Operations',
      description: 'Worldwide coverage with local expertise and cultural understanding',
      icon: MapPin
    },
    {
      title: 'Emergency Response',
      description: 'Immediate response to any security incident with tactical support',
      icon: Phone
    }
  ];

  return (
    <section ref={featuresRef} className="py-32 bg-gradient-to-br from-gray-50 via-slate-50 to-white relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-valentor-red rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-900 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Service Features
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our executive protection services are built on the foundation of excellence, 
            discretion, and unwavering commitment to your safety and security.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Card className="h-full bg-white/80 backdrop-blur-xl border-2 border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 rounded-2xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  {/* Icon with luxury styling */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-valentor-red/20 to-valentor-red/10 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6">
                      <feature.icon className="h-10 w-10 text-valentor-red" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveProtectionFeatures;