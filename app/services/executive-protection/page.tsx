'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Users, 
  Home, 
  Plane, 
  Car, 
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  MapPin,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ExecutiveProtectionPage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });

  const offerings = [
    {
      title: 'Tiered Close Protection Details',
      description: 'Scalable protection services from discrete accompaniment to full security details.',
      details: [
        'Level 1: Discrete personal protection for low-risk environments',
        'Level 2: Enhanced protection with advance reconnaissance',
        'Level 3: Full security detail with counter-surveillance',
        'Level 4: High-threat environment protection with tactical support'
      ]
    },
    {
      title: 'Secure Residential Coverage',
      description: 'Comprehensive home and property security for principals and their families.',
      details: [
        'Residential security assessments and hardening',
        '24/7 security personnel and monitoring',
        'Family protection and safe room protocols',
        'Domestic staff vetting and security training'
      ]
    },
    {
      title: 'Protective Surveillance Operations',
      description: 'Covert surveillance to identify and neutralize threats before they materialize.',
      details: [
        'Counter-surveillance detection and mitigation',
        'Threat identification and early warning systems',
        'Behavioral analysis and pattern recognition',
        'Intelligence gathering and threat assessment'
      ]
    },
    {
      title: 'Travel & Diplomatic Security Coordination',
      description: 'Comprehensive security planning and coordination for domestic and international travel.',
      details: [
        'Pre-travel security assessments and route planning',
        'Airport and transportation security coordination',
        'Hotel and venue security arrangements',
        'Emergency evacuation planning and support'
      ]
    }
  ];

  const features = [
    {
      title: '24/7 Availability',
      description: 'Round-the-clock protection and support',
      icon: Clock
    },
    {
      title: 'Global Operations',
      description: 'Worldwide coverage with local expertise',
      icon: MapPin
    },
    {
      title: 'Discrete Service',
      description: 'Invisible protection that maintains privacy',
      icon: Shield
    },
    {
      title: 'Emergency Response',
      description: 'Immediate response to any security incident',
      icon: Phone
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
      >
        {/* Subtle geometric background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-valentor-red/10 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center mb-8">
              <div className="bg-valentor-red/20 backdrop-blur-sm rounded-2xl p-4 mr-6">
                <Users className="h-12 w-12 text-valentor-red" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Executive
                  <span className="block text-valentor-red">Protection</span>
                </h1>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl">
              Discrete, professional close protection services for high-profile individuals, 
              executives, and their families, ensuring security without compromising lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-valentor-red hover:bg-red-700 text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                Request Protection Detail
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg rounded-xl">
                Security Assessment
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
              Protection Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive executive protection services tailored to your specific threat 
              level and security requirements, delivered by elite protection professionals.
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
                          {index === 0 && <Users className="h-6 w-6 text-valentor-red" />}
                          {index === 1 && <Home className="h-6 w-6 text-valentor-red" />}
                          {index === 2 && <Shield className="h-6 w-6 text-valentor-red" />}
                          {index === 3 && <Plane className="h-6 w-6 text-valentor-red" />}
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

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Service Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our executive protection services are built on the foundation of excellence, 
              discretion, and unwavering commitment to your safety and security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <feature.icon className="h-10 w-10 text-valentor-red mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <blockquote className="text-2xl md:text-3xl text-gray-900 mb-8">
              "Valentor Group's executive protection team provided seamless, 
              discrete security that allowed me to focus on business without 
              worrying about my safety. Their professionalism is unmatched."
            </blockquote>
            <div className="text-gray-600">
              <p className="font-semibold">Fortune 500 CEO</p>
              <p>Confidential Client</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-valentor-red text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Your Safety is Our Priority
            </h2>
            <p className="text-xl mb-8">
              Experience the confidence that comes with elite executive protection. 
              Contact us for a confidential security consultation tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-valentor-red hover:bg-gray-100 px-8 py-4 text-lg rounded-xl">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl">
                Emergency Hotline
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveProtectionPage;