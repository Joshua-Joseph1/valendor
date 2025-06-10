'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Truck, 
  Plane, 
  Route, 
  Monitor, 
  ArrowRight,
  CheckCircle,
  Shield,
  MapPin,
  Radio,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata = {
  title: 'Secure Transfer & Asset Escort - Valentor Group',
  description: 'Professional secure transport and convoy services with armored vehicles, aviation security, and real-time monitoring.',
};

const SecureTransferPage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const capabilitiesRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isCapabilitiesInView = useInView(capabilitiesRef, { once: true });

  const offerings = [
    {
      title: 'Armored Convoy & Vehicle Escort',
      description: 'Professional convoy operations with armored vehicles and tactical escort support.',
      details: [
        'Armored vehicle deployment and coordination',
        'Multi-vehicle convoy formation and tactics',
        'Route security and checkpoint management',
        'Emergency response and extraction protocols'
      ]
    },
    {
      title: 'Secure Aviation & Ground Transfers',
      description: 'Complete air and ground transportation security from origin to destination.',
      details: [
        'Airport security coordination and VIP handling',
        'Aircraft security sweeps and clearance',
        'Ground transportation security escorts',
        'Seamless multi-modal transfer protocols'
      ]
    },
    {
      title: 'Tactical Route Support',
      description: 'Advanced route planning and security support for high-risk environments.',
      details: [
        'Real-time route intelligence and threat assessment',
        'Alternative route planning and contingencies',
        'Checkpoint coordination and security liaison',
        'Emergency diversion and safe house protocols'
      ]
    },
    {
      title: 'Real-Time Control Room Monitoring',
      description: '24/7 monitoring and communication support throughout transfer operations.',
      details: [
        'GPS tracking and real-time location monitoring',
        'Communication relay and coordination center',
        'Threat intelligence updates and alerts',
        'Emergency response coordination and dispatch'
      ]
    }
  ];

  const capabilities = [
    {
      title: 'Armored Vehicles',
      description: 'Fleet of certified armored vehicles',
      icon: Shield
    },
    {
      title: 'Route Planning',
      description: 'Advanced route analysis and optimization',
      icon: MapPin
    },
    {
      title: 'Communications',
      description: 'Secure communication systems',
      icon: Radio
    },
    {
      title: '24/7 Monitoring',
      description: 'Round-the-clock operation support',
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center mb-6">
              <Truck className="h-12 w-12 text-valentor-red mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
                Secure Transfer & Asset Escort
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Professional secure transport and convoy services with armored vehicles, 
              tactical support, and real-time monitoring for high-value assets and personnel.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-valentor-red hover:bg-red-700">
                Request Transport Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Route Assessment
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transport & Escort Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive secure transport solutions for high-value assets, personnel, 
              and sensitive materials in challenging environments worldwide.
            </p>
          </motion.div>

          <div className="space-y-8">
            <Accordion type="single" collapsible className="w-full">
              {offerings.map((offering, index) => (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center text-left">
                        <div className="bg-valentor-red/10 rounded-lg p-3 mr-4">
                          {index === 0 && <Truck className="h-6 w-6 text-valentor-red" />}
                          {index === 1 && <Plane className="h-6 w-6 text-valentor-red" />}
                          {index === 2 && <Route className="h-6 w-6 text-valentor-red" />}
                          {index === 3 && <Monitor className="h-6 w-6 text-valentor-red" />}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {offering.title}
                          </h3>
                          <p className="text-gray-600 mt-1">
                            {offering.description}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="bg-gray-50 rounded-lg p-4 ml-16">
                        <ul className="space-y-2">
                          {offering.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section ref={capabilitiesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced resources and capabilities that ensure secure, efficient, 
              and reliable transport operations in any environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <capability.icon className="h-10 w-10 text-valentor-red mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-valentor-red text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">
              Proven Track Record
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our secure transport operations have successfully completed thousands 
              of missions across the globe with zero security incidents.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-white/80">Successful Transports</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-white/80">Mission Success Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/80">Countries Covered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Operations Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Secure Your Next Transport
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you need to transport high-value assets, personnel, or sensitive 
              materials, our secure transfer services ensure safe delivery every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-valentor-red hover:bg-red-700">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-valentor-red text-valentor-red hover:bg-valentor-red hover:text-white">
                Request Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecureTransferPage;