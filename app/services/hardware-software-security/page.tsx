'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Monitor, 
  Lock, 
  Fingerprint, 
  Wifi, 
  ArrowRight,
  CheckCircle,
  Camera,
  Smartphone,
  Shield,
  AlertTriangle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const HardwareSoftwareSecurityPage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const solutionsRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isSolutionsInView = useInView(solutionsRef, { once: true });

  const offerings = [
    {
      title: 'CCTV & Command Systems',
      description: 'Advanced surveillance systems with centralized monitoring and control capabilities.',
      details: [
        'High-definition IP camera systems with night vision',
        'Centralized command and control centers',
        'Video analytics and automated threat detection',
        'Cloud-based storage and remote monitoring'
      ]
    },
    {
      title: 'Intrusion Detection Tech',
      description: 'Sophisticated perimeter and interior intrusion detection systems.',
      details: [
        'Motion sensors and perimeter detection systems',
        'Glass break and vibration sensors',
        'Integrated alarm systems with multiple zones',
        'Mobile alerts and real-time notifications'
      ]
    },
    {
      title: 'Access Control & Biometrics',
      description: 'Multi-layered access control systems with biometric authentication.',
      details: [
        'Fingerprint and facial recognition systems',
        'Smart card and key fob access control',
        'Multi-factor authentication protocols',
        'Visitor management and tracking systems'
      ]
    },
    {
      title: 'Cyber-Physical Threat Monitoring',
      description: 'Integrated monitoring of both physical and digital security threats.',
      details: [
        'Network security monitoring and threat detection',
        'IoT device security and management',
        'Integrated physical and cyber security dashboards',
        'Real-time threat intelligence and response'
      ]
    }
  ];

  const solutions = [
    {
      title: 'Smart Surveillance',
      description: 'AI-powered video analytics',
      icon: Camera
    },
    {
      title: 'Mobile Integration',
      description: 'Smartphone-based security control',
      icon: Smartphone
    },
    {
      title: 'Cyber Protection',
      description: 'Digital threat monitoring',
      icon: Shield
    },
    {
      title: 'Threat Detection',
      description: 'Real-time alert systems',
      icon: AlertTriangle
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900 text-white overflow-hidden"
      >
        {/* Subtle geometric background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center mb-8">
              <div className="bg-blue-600/20 backdrop-blur-sm rounded-2xl p-4 mr-6">
                <Monitor className="h-12 w-12 text-blue-400" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Hardware &
                  <span className="block text-blue-400">Software Security</span>
                </h1>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl">
              Cutting-edge security technology solutions including CCTV systems, 
              access control, biometric authentication, and cyber-physical threat monitoring.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                Security Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg rounded-xl">
                Technology Demo
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
              Security Technology Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive security technology integration that combines physical 
              and digital protection systems for maximum security effectiveness.
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
                        <div className="bg-blue-100 rounded-lg p-3 mr-4">
                          {index === 0 && <Monitor className="h-6 w-6 text-blue-600" />}
                          {index === 1 && <AlertTriangle className="h-6 w-6 text-blue-600" />}
                          {index === 2 && <Fingerprint className="h-6 w-6 text-blue-600" />}
                          {index === 3 && <Wifi className="h-6 w-6 text-blue-600" />}
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

      {/* Solutions Section */}
      <section ref={solutionsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Innovation in Security
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our technology solutions leverage the latest advances in artificial 
              intelligence, machine learning, and IoT integration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <solution.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Enterprise-Grade Security
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our hardware and software security solutions are designed for 
                enterprise environments where reliability, scalability, and 
                integration are critical requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">24/7 monitoring and support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Scalable architecture for growth</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Integration with existing systems</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Compliance with industry standards</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                System Integration
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">CCTV Systems</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Access Control</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Intrusion Detection</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Cyber Monitoring</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Secure Your Digital Future
            </h2>
            <p className="text-xl mb-8">
              Implement cutting-edge security technology that protects your 
              organization from both physical and digital threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HardwareSoftwareSecurityPage;