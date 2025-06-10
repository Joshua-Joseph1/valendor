'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Shield, 
  Eye, 
  Users, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  Target,
  Lock,
  Zap,
  Send,
  Phone,
  Mail,
  User
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

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

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
        className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
      >
        {/* Subtle geometric background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-valentor-red/10 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="mb-8">
                <div className="bg-valentor-red/20 backdrop-blur-sm rounded-2xl p-4 inline-block mb-6">
                  <Shield className="h-12 w-12 text-valentor-red" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  <span className="text-white">Valentor</span>
                  <span className="block text-valentor-red">Group</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-slate-300 mb-6 font-light">
                Discretion. Strength. Adaptability.
              </p>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
                Global risk management and protection consultancy providing comprehensive 
                security solutions for the world's most challenging environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-valentor-red hover:bg-red-700 text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg rounded-xl"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pl-8"
            >
              <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Get a Security Consultation
                    </h3>
                    <p className="text-gray-600">
                      Speak with our experts about your security requirements
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-transparent transition-all duration-200 bg-white"
                            placeholder="John"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-transparent transition-all duration-200 bg-white"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-transparent transition-all duration-200 bg-white"
                          placeholder="john.doe@company.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-transparent transition-all duration-200 bg-white"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-transparent transition-all duration-200 bg-white"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-transparent transition-all duration-200 bg-white"
                      >
                        <option value="">Select a service...</option>
                        <option value="risk-management">Risk Management & Intelligence</option>
                        <option value="executive-protection">Executive Protection</option>
                        <option value="secure-transfer">Secure Transfer & Asset Escort</option>
                        <option value="wildlife-protection">Anti-Poaching & Wildlife Protection</option>
                        <option value="hardware-software">Hardware & Software Security</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full bg-valentor-red hover:bg-red-700 text-white py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      Request Consultation
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Emergency Hotline:</span>{' '}
                      <a href="tel:+15559115233" className="text-valentor-red hover:underline">
                        +1 (555) 911-SAFE
                      </a>
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      All consultations are confidential and secure
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
                        className="w-full group-hover:bg-valentor-red group-hover:text-white group-hover:border-valentor-red transition-all duration-300 rounded-xl"
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
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-valentor-red hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get in Touch Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;