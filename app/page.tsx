'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, 
  Eye, 
  Users, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  Target,
  Lock,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const HomePage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const missionRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isAboutInView = useInView(aboutRef, { once: true });
  const isMissionInView = useInView(missionRef, { once: true });

  const services = [
    {
      title: 'Risk Management & Intelligence',
      description: 'Comprehensive threat assessment and strategic risk consulting to protect your interests.',
      icon: Shield,
      href: '/services/risk-management-intelligence',
      features: ['Threat Assessment', 'Strategic Consulting', 'Crisis Planning']
    },
    {
      title: 'Executive Protection',
      description: 'Discrete close protection services for high-profile individuals and executives.',
      icon: Users,
      href: '/services/executive-protection',
      features: ['Close Protection', 'Residential Security', 'Travel Security']
    },
    {
      title: 'Secure Transfer & Asset Escort',
      description: 'Professional secure transport and convoy services with real-time monitoring.',
      icon: Lock,
      href: '/services/secure-transfer-asset-escort',
      features: ['Armored Convoy', 'Aviation Security', 'Route Planning']
    },
    {
      title: 'Anti-Poaching & Wildlife Protection',
      description: 'Specialized wildlife protection with advanced surveillance and ranger training.',
      icon: Eye,
      href: '/services/anti-poaching-wildlife-protection',
      features: ['Ranger Training', 'UAV Surveillance', 'Intelligence Networks']
    },
    {
      title: 'Hardware & Software Security',
      description: 'Cutting-edge security technology and cyber-physical threat monitoring.',
      icon: Zap,
      href: '/services/hardware-software-security',
      features: ['CCTV Systems', 'Access Control', 'Cyber Monitoring']
    }
  ];

  const principles = [
    {
      title: 'Discretion',
      description: 'Operating with the highest levels of confidentiality and professionalism.',
      icon: Eye
    },
    {
      title: 'Strength',
      description: 'Robust capabilities backed by extensive experience and proven methodologies.',
      icon: Shield
    },
    {
      title: 'Adaptability',
      description: 'Flexible solutions tailored to unique challenges and changing environments.',
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/2471234/pexels-photo-2471234.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Valentor</span>
              <span className="text-valentor-red"> Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discretion. Strength. Adaptability.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Global risk management and protection consultancy providing comprehensive 
              security solutions for the world's most challenging environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-valentor-red hover:bg-red-700 text-white px-8 py-4 text-lg"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solutions tailored to meet the unique challenges 
              of our global clientele across diverse industries and environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <service.icon className="h-10 w-10 text-valentor-red mr-4" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href}>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-valentor-red group-hover:text-white group-hover:border-valentor-red transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Valentor Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Valentor Group
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our foundational principles guide every operation, ensuring unparalleled 
              service delivery in the most demanding circumstances.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-valentor-red/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <principle.icon className="h-10 w-10 text-valentor-red" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {principle.title}
                </h3>
                <p className="text-gray-600">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={missionRef} className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-8">
                To provide world-class risk management and protection services that enable 
                our clients to operate confidently in challenging environments. We combine 
                cutting-edge technology with human expertise to deliver solutions that protect 
                what matters most.
              </p>
              <div className="flex items-center space-x-4">
                <Globe className="h-12 w-12 text-valentor-red" />
                <div>
                  <h3 className="text-xl font-semibold">Global Footprint</h3>
                  <p className="text-gray-400">Operating across 6 continents</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-8">
                To be the global leader in risk management and protection services, 
                setting the standard for professionalism, innovation, and results. 
                We envision a world where businesses and individuals can pursue their 
                goals without compromise to their security.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-valentor-red mb-2">500+</div>
                  <div className="text-gray-400">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-valentor-red mb-2">15+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-valentor-red text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our team of experts to discuss your security requirements 
              and discover how Valentor Group can protect your interests.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-valentor-red hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Get in Touch Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;