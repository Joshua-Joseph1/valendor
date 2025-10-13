'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Award, Star, Monitor, AlertTriangle, Fingerprint, Wifi } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const HardwareSoftwareOfferings = () => {
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true });

  const offerings = [
    {
      title: 'CCTV & Command Systems',
      description: 'Advanced surveillance systems with centralized monitoring and control capabilities for comprehensive security coverage.',
      details: [
        'High-definition IP camera systems with night vision',
        'Centralized command and control centers',
        'Video analytics and automated threat detection',
        'Cloud-based storage and remote monitoring'
      ]
    },
    {
      title: 'Intrusion Detection Tech',
      description: 'Sophisticated perimeter and interior intrusion detection systems with real-time alerting capabilities.',
      details: [
        'Motion sensors and perimeter detection systems',
        'Glass break and vibration sensors',
        'Integrated alarm systems with multiple zones',
        'Mobile alerts and real-time notifications'
      ]
    },
    {
      title: 'Access Control & Biometrics',
      description: 'Multi-layered access control systems with biometric authentication for maximum security assurance.',
      details: [
        'Fingerprint and facial recognition systems',
        'Smart card and key fob access control',
        'Multi-factor authentication protocols',
        'Visitor management and tracking systems'
      ]
    },
    {
      title: 'Cyber-Physical Threat Monitoring',
      description: 'Integrated monitoring of both physical and digital security threats with advanced AI analytics.',
      details: [
        'Network security monitoring and threat detection',
        'IoT device security and management',
        'Integrated physical and cyber security dashboards',
        'Real-time threat intelligence and response'
      ]
    }
  ];

  return (
    <section
      ref={servicesRef}
      className="py-24 md:py-32 bg-[#1a1a1a] text-white relative overflow-hidden"
    >
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-valentor-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4">Security Technology Solutions</h2>
          <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed font-[ui-sans-serif]">Comprehensive security technology integration that combines physical and digital protection systems for maximum effectiveness.</p>
        </motion.div>

        {/* Services - Expanded Inline */}
        <div className="max-w-5xl mx-auto">
          <Accordion type="multiple" defaultValue={offerings.map((_, i) => `item-${i}`)} className="w-full space-y-0">
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
                        <h3 className="text-2xl font-[ui-serif] tracking-tight text-white mb-1">{offering.title}</h3>
                        <p className="text-white/80 text-base leading-relaxed font-[ui-sans-serif]">{offering.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pt-4 pb-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 pl-10">
                      {offering.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            isServicesInView ? { opacity: 1, x: 0 } : {}
                          }
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + detailIndex * 0.05 + 0.2,
                          }}
                          className="flex items-start"
                        >
                          <span className="w-2 h-2 bg-[#344154] rounded-full mr-3 mt-2"></span>
                          <span className="text-white/80 leading-relaxed font-[ui-sans-serif]">{detail}</span>
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

export default HardwareSoftwareOfferings;