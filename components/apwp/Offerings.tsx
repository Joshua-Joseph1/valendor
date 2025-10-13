'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const WildlifeProtectionOfferings = () => {
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true });

  const offerings = [
    {
      title: 'Ranger Training & Tactical Support',
      description: 'Comprehensive training programs for wildlife rangers and conservation personnel with advanced tactical support.',
      details: [
        'Advanced tracking and surveillance techniques',
        'Anti-poaching tactics and field operations',
        'Weapons training and tactical equipment use',
        'Emergency response and medical training'
      ]
    },
    {
      title: 'UAV Surveillance & Ground Tracking',
      description: 'Cutting-edge helicopter surveillance and ground-based tracking systems with real-time monitoring capabilities.',
      details: [
        'Long-range UAV patrols with thermal imaging',
        'Real-time video monitoring and analysis',
        'Automated detection of human intrusion',
        'Ground sensor networks and alert systems'
      ]
    },
    {
      title: 'Wildlife Intelligence Networks',
      description: 'Comprehensive intelligence gathering and information sharing systems for wildlife crime prevention.',
      details: [
        'Poaching network identification and disruption',
        'Criminal intelligence analysis and reporting',
        'Informant networks and community engagement',
        'Cross-border intelligence sharing protocols'
      ]
    },
    {
      title: 'Integrated Taskforces (Local & International)',
      description: 'Coordinated multi-agency response teams for wildlife protection with global cooperation.',
      details: [
        'Local law enforcement coordination',
        'International wildlife crime investigations',
        'Multi-agency taskforce development',
        'Legal support and prosecution assistance'
      ]
    }
  ];

  return (
    <section
      ref={servicesRef}
      className="py-24 md:py-32 bg-[#1A1A1A] text-white relative overflow-hidden"
    >
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-valentor-red rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4">
            Explore Our Offerings
          </h2>
          <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed font-[ui-sans-serif]">
            Distinguished security solutions, meticulously crafted to address
            the singular needs of a discerning global clientele.
          </p>
        </motion.div>

        {/* Services - Expanded Inline */}
        <div className="max-w-5xl mx-auto">
          <Accordion
            type="multiple"
            defaultValue={offerings.map((_, i) => `item-${i}`)}
            className="w-full space-y-0"
          >
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="mb-0 py-8 border-t border-white/10 group"
                >
                  <AccordionTrigger className="px-0 py-0 hover:no-underline focus:outline-none">
                    <div className="flex items-start text-left w-full gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-[ui-serif] tracking-tight text-white mb-1">
                          {offering.title}
                        </h3>
                        <p className="text-white/80 text-base leading-relaxed font-[ui-sans-serif]">
                          {offering.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pt-4 pb-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 pl-10">
                      {offering.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isServicesInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + detailIndex * 0.05 + 0.2,
                          }}
                          className="flex items-start"
                        >
                          <span className="w-2 h-2 bg-[#344154] rounded-full mr-3 mt-2"></span>
                          <span className="text-white/80 leading-relaxed font-[ui-sans-serif]">
                            {detail}
                          </span>
                        </motion.div>
                      ))}
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

export default WildlifeProtectionOfferings;