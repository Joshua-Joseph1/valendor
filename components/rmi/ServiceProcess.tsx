'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ServiceProcessProps {
  title: string;
  description: string;
  process: ProcessStep[];
  accentColor?: string;
}

const ServiceProcess = ({ 
  title, 
  description, 
  process, 
  accentColor = 'valentor-red' 
}: ServiceProcessProps) => {
  const processRef = useRef(null);
  const isProcessInView = useInView(processRef, { once: true });

  return (
    <section ref={processRef} className="py-32 bg-gradient-to-br from-slate-50 via-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute top-20 left-20 w-96 h-96 bg-${accentColor} rounded-full blur-3xl`}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0">
                    <ArrowRight className="absolute -right-2 -top-2 h-4 w-4 text-gray-400" />
                  </div>
                )}

                <Card className="h-full bg-white/80 backdrop-blur-xl border-2 border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 rounded-2xl overflow-hidden relative z-10">
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className={`bg-gradient-to-br from-${accentColor} to-red-700 text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6`}>
                      {item.step}
                    </div>

                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br from-${accentColor}/20 to-${accentColor}/10 rounded-2xl flex items-center justify-center mx-auto group-hover:from-${accentColor}/30 group-hover:to-${accentColor}/20 transition-all duration-300`}>
                        <item.icon className={`h-8 w-8 text-${accentColor}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;