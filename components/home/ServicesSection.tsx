'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Users, Lock, Eye, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ServicesSection = () => {
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true });

  const services = [
    {
      title: "Risk Management & Intelligence",
      description:
        "Comprehensive threat assessment and strategic risk consulting to protect your interests.",
      icon: Shield,
      href: "/services/risk-management-intelligence",
      features: [
        "Threat Assessment",
        "Strategic Consulting",
        "Crisis Planning",
      ],
      image: "/images/risk-management.png",
    },
    {
      title: "Executive Protection",
      description:
        "Discreet Executive Protection services for high-profile individuals and executives.",
      icon: Users,
      href: "/services/executive-protection",
      features: [
        "Executive Protection",
        "Residential Security",
        "Travel Security",
      ],
      image: "/images/executive-protection.png",
    },
    {
      title: "Secure Transfer & Asset Escort",
      description:
        "Professional secure transport and convoy services with real-time monitoring.",
      icon: Lock,
      href: "/services/secure-transfer-asset-escort",
      features: ["Armored Convoy", "Aviation Security", "Route Planning"],
      image: "/images/secure-transfer.png",
    },
    {
      title: "Anti-Poaching & Wildlife Protection",
      description:
        "Specialized wildlife protection with advanced surveillance and ranger training.",
      icon: Eye,
      href: "/services/anti-poaching-wildlife-protection",
      features: [
        "Ranger Training",
        "UAV Surveillance",
        "Intelligence Networks",
      ],
      image: "/images/anti-poaching.png",
    },
    {
      title: "Hardware & Software Security",
      description:
        "Cutting-edge security technology and cyber-physical threat monitoring.",
      icon: Zap,
      href: "/services/hardware-software-security",
      features: ["CCTV Systems", "Access Control", "Cyber Monitoring"],
      image: "/images/hardware-software.png",
    },
  ];

  return (
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

        <div className="grid grid-cols-1 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } bg-white shadow-lg rounded-lg overflow-hidden`}
            >
              <div className="md:w-2/5">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <service.icon className="h-10 w-10 text-valentor-red mr-4" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-gray-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={service.href}>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-valentor-red group-hover:text-white group-hover:border-valentor-red transition-all duration-300 rounded-xl"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
