'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Award, Star, Users, Bone as Drone, Network, Trophy } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const WildlifeProtectionOfferings = () => {
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true });

  const offerings = [
    {
      title: 'Ranger Training & Tactical Support',
      description: 'Comprehensive training programs for wildlife rangers and conservation personnel with advanced tactical support.',
      icon: Users,
      details: [
        'Advanced tracking and surveillance techniques',
        'Anti-poaching tactics and field operations',
        'Weapons training and tactical equipment use',
        'Emergency response and medical training'
      ]
    },
    {
      title: 'UAV Surveillance & Ground Tracking',
      description: 'Cutting-edge drone surveillance and ground-based tracking systems with real-time monitoring capabilities.',
      icon: Drone,
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
      icon: Network,
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
      icon: Trophy,
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
      className="py-24 md:py-32 bg-[#1A1A1A] text-white relative overflow-hidden before:block before:h-px before:w-full before:bg-white/10"
    >
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-valentor-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4">Explore Our Offerings</h2>
          <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed font-[ui-sans-serif]">
            Distinguished security solutions, meticulously crafted to address the singular needs of a discerning global clientele.
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
                  className="bg-[#0f0f0f] backdrop-blur-xl border border-white/10 rounded-lg mb-6 transition-colors duration-300 overflow-hidden group"
                >
                  <div className="h-2 bg-[#344154]"></div>
                  <AccordionTrigger className="px-8 py-6 hover:no-underline group-hover:bg-white/5 transition-colors duration-300">
                    <div className="flex items-center text-left w-full">
                      <div className="bg-[#344154]/20 backdrop-blur-sm rounded-xl p-4 mr-6 transition-colors duration-300">
                        <offering.icon className="h-8 w-8 text-[#344154]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-[ui-serif] tracking-tight text-white mb-2">
                          {offering.title}
                        </h3>
                        <p className="text-white/80 text-base leading-relaxed font-[ui-sans-serif]">
                          {offering.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8">
                    <div className="bg-[#344154]/10 backdrop-blur-sm rounded-xl p-8 ml-20 border border-[#344154]/20">
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
                            className="flex items-start group/item hover:bg-white/5 rounded-xl p-3 transition-colors duration-200"
                          >
                            <CheckCircle className="h-6 w-6 text-[#344154] mr-4 mt-0.5 flex-shrink-0 transition-colors duration-200" />
                            <span className="text-white/80 font-medium leading-relaxed font-[ui-sans-serif]">
                              {detail}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Decorative element */}
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="flex items-center justify-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-[#344154]"
                            />
                          ))}
                        </div>
                        <p className="text-xs text-white/70 text-center mt-2 font-[ui-sans-serif]">
                          Wildlife Security Excellence
                        </p>
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

export default WildlifeProtectionOfferings;