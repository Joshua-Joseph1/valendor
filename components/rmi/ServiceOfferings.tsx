'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
// Icons removed per brand guideline
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface ServiceOfferingsProps {
  title: string;
  description: string;
  offerings: Array<{
    title: string;
    description: string;
    details: string[];
    icon?: React.ComponentType<{ className?: string }>;
  }>;
  accentColor?: string;
}

const ServiceOfferings = ({ 
  title, 
  description, 
  offerings, 
  accentColor = 'valentor-red' 
}: ServiceOfferingsProps) => {
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true });

  return (
    <section
      ref={servicesRef}
      className="py-32 bg-[#1a1a1a] relative overflow-hidden"
    >
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className={`absolute top-20 right-20 w-96 h-96 bg-${accentColor} rounded-full blur-3xl`}
        ></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Services Accordion */}
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-[#252525] backdrop-blur-xl border border-gray-700 rounded-2xl mb-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <AccordionTrigger className="px-8 py-6 hover:no-underline group-hover:bg-[#2b2b2b] transition-all duration-300">
                    <div className="flex items-center text-left w-full">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
                          {offering.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {offering.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8">
                    <div className="bg-[#1f1f1f] rounded-2xl p-8 ml-0 border border-gray-800 shadow-inner">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {offering.details.map((detail, detailIndex) => (
                          <motion.div
                            key={detailIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={
                              isServicesInView ? { opacity: 1, x: 0 } : {}
                            }
                            transition={{
                              duration: 0.4,
                              delay: index * 0.1 + detailIndex * 0.05 + 0.3,
                            }}
                            className="flex items-start group/item hover:bg-[#2b2b2b] rounded-xl p-3 transition-all duration-200"
                          >
                            <span className="text-gray-300 font-medium leading-relaxed group-hover/item:text-white transition-colors duration-200">
                              {detail}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;