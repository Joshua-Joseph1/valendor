'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TreePine, Bone as Drone, Network, Users, ArrowRight, CheckCircle, Binoculars, Camera, Satellite, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const WildlifeProtectionPage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const technologyRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isTechnologyInView = useInView(technologyRef, { once: true });

  const offerings = [
    {
      title: 'Ranger Training & Tactical Support',
      description: 'Comprehensive training programs for wildlife rangers and conservation personnel.',
      details: [
        'Advanced tracking and surveillance techniques',
        'Anti-poaching tactics and field operations',
        'Weapons training and tactical equipment use',
        'Emergency response and medical training'
      ]
    },
    {
      title: 'UAV Surveillance & Ground Tracking',
      description: 'Cutting-edge drone surveillance and ground-based tracking systems.',
      details: [
        'Long-range UAV patrols with thermal imaging',
        'Real-time video monitoring and analysis',
        'Automated detection of human intrusion',
        'Ground sensor networks and alert systems'
      ]
    },
    {
      title: 'Wildlife Intelligence Networks',
      description: 'Comprehensive intelligence gathering and information sharing systems.',
      details: [
        'Poaching network identification and disruption',
        'Criminal intelligence analysis and reporting',
        'Informant networks and community engagement',
        'Cross-border intelligence sharing protocols'
      ]
    },
    {
      title: 'Integrated Taskforces (Local & International)',
      description: 'Coordinated multi-agency response teams for wildlife protection.',
      details: [
        'Local law enforcement coordination',
        'International wildlife crime investigations',
        'Multi-agency taskforce development',
        'Legal support and prosecution assistance'
      ]
    }
  ];

  const technologies = [
    {
      title: 'Thermal Imaging',
      description: 'Night vision and heat detection',
      icon: Camera
    },
    {
      title: 'Satellite Monitoring',
      description: 'Real-time area surveillance',
      icon: Satellite
    },
    {
      title: 'Ground Sensors',
      description: 'Intrusion detection systems',
      icon: Binoculars
    },
    {
      title: 'Drone Patrols',
      description: 'Autonomous surveillance flights',
      icon: Drone
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-32 bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-900 text-white overflow-hidden"
      >
        {/* Subtle geometric background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center mb-8">
              <div className="bg-green-600/20 backdrop-blur-sm rounded-2xl p-4 mr-6">
                <TreePine className="h-12 w-12 text-green-400" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Anti-Poaching &
                  <span className="block text-green-400">Wildlife Protection</span>
                </h1>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl">
              Specialized wildlife protection services combining advanced surveillance 
              technology, ranger training, and intelligence networks to combat poaching 
              and preserve endangered species.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                Protect Wildlife Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg rounded-xl">
                Conservation Consultation
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
              Wildlife Protection Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive anti-poaching solutions that combine traditional conservation 
              methods with cutting-edge technology and intelligence gathering.
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
                        <div className="bg-green-100 rounded-lg p-3 mr-4">
                          {index === 0 && <Users className="h-6 w-6 text-green-600" />}
                          {index === 1 && <Drone className="h-6 w-6 text-green-600" />}
                          {index === 2 && <Network className="h-6 w-6 text-green-600" />}
                          {index === 3 && <Award className="h-6 w-6 text-green-600" />}
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

      {/* Technology Section */}
      <section ref={technologyRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTechnologyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Advanced Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              State-of-the-art surveillance and detection technology that provides 
              24/7 protection for wildlife and conservation areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isTechnologyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <tech.icon className="h-10 w-10 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {tech.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">
              Conservation Impact
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our wildlife protection programs have helped preserve critical habitats 
              and protect endangered species across multiple continents.
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
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-white/80">Reduction in Poaching</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Rangers Trained</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-white/80">Acres Protected</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-white/80">Species Saved</div>
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
              Join the Fight Against Poaching
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Partner with us to protect endangered wildlife and preserve natural 
              habitats for future generations. Every action makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg rounded-xl">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg rounded-xl">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WildlifeProtectionPage;