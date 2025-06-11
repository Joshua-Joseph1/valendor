'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Award, Star, Truck, Plane, Route, Monitor } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SecureTransferOfferings = () => {
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true });

  const offerings = [
    {
      title: 'Armored Convoy & Vehicle Escort',
      description: 'Professional convoy operations with armored vehicles and tactical escort support for maximum security.',
      icon: Truck,
      details: [
        'Armored vehicle deployment and coordination',
        'Multi-vehicle convoy formation and tactics',
        'Route security and checkpoint management',
        'Emergency response and extraction protocols'
      ]
    },
    {
      title: 'Secure Aviation & Ground Transfers',
      description: 'Complete air and ground transportation security from origin to destination with seamless coordination.',
      icon: Plane,
      details: [
        'Airport security coordination and VIP handling',
        'Aircraft security sweeps and clearance',
        'Ground transportation security escorts',
        'Seamless multi-modal transfer protocols'
      ]
    },
    {
      title: 'Tactical Route Support',
      description: 'Advanced route planning and security support for high-risk environments with real-time intelligence.',
      icon: Route,
      details: [
        'Real-time route intelligence and threat assessment',
        'Alternative route planning and contingencies',
        'Checkpoint coordination and security liaison',
        'Emergency diversion and safe house protocols'
      ]
    },
    {
      title: 'Real-Time Control Room Monitoring',
      description: '24/7 monitoring and communication support throughout transfer operations with advanced technology.',
      icon: Monitor,
      details: [
        'GPS tracking and real-time location monitoring',
        'Communication relay and coordination center',
        'Threat intelligence updates and alerts',
        'Emergency response coordination and dispatch'
      ]
    }
  ];

  return (
    <section ref={servicesRef} className="py-32 bg-gradient-to-br from-white via-gray-50 to-slate-50 relative overflow-hidden">
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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center bg-valentor-red/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Award className="h-5 w-5 text-valentor-red mr-2" />
            <span className="text-valentor-red font-semibold text-sm uppercase tracking-wider">Premium Transport Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Transport & Escort Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive secure transport solutions for high-value assets, personnel, 
            and sensitive materials in challenging environments worldwide with unmatched security protocols.
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
                  className="bg-white/80 backdrop-blur-xl border-2 border-gray-200/50 rounded-2xl mb-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <AccordionTrigger className="px-8 py-6 hover:no-underline group-hover:bg-gray-50/50 transition-all duration-300">
                    <div className="flex items-center text-left w-full">
                      <div className="bg-gradient-to-br from-valentor-red/20 to-valentor-red/10 rounded-2xl p-4 mr-6 group-hover:from-valentor-red/30 group-hover:to-valentor-red/20 transition-all duration-300">
                        <offering.icon className="h-8 w-8 text-valentor-red" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                          {offering.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {offering.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 ml-20 border border-gray-100 shadow-inner">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {offering.details.map((detail, detailIndex) => (
                          <motion.div
                            key={detailIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isServicesInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: (index * 0.1) + (detailIndex * 0.05) + 0.3 }}
                            className="flex items-start group/item hover:bg-white/50 rounded-xl p-3 transition-all duration-200"
                          >
                            <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-0.5 flex-shrink-0 group-hover/item:text-green-600 transition-colors duration-200" />
                            <span className="text-gray-700 font-medium leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                              {detail}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Decorative element */}
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 text-center mt-2 font-medium">
                          Premium Service Excellence
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

export default SecureTransferOfferings;