'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
// Icons removed per brand guideline
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
    <section
      ref={processRef}
      className="py-24 md:py-32 bg-[#1a1a1a] text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className={`absolute top-20 left-20 w-96 h-96 bg-${accentColor} rounded-full blur-3xl`}
        ></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4">{title}</h2>
          <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed font-[ui-sans-serif]">{description}</p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto divide-y divide-white/10">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="py-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg bg-white/5 text-white flex items-center justify-center font-[ui-serif] tracking-tight`}>{item.step}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-[ui-serif] tracking-tight text-white mb-1">{item.title}</h3>
                    <p className="text-white/80 leading-relaxed font-[ui-sans-serif]">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;