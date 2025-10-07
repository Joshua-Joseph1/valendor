'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ServicesSection = () => {
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true });

  const services = [
    {
      title: "Risk Management & Intelligence",
      description:
        "We provide prudent assessments and strategic counsel to safeguard your interests, combining foresight with actionable insight.",
      href: "/services/risk-management-intelligence",
      features: [
        "Threat Assessment",
        "Strategic Consulting",
        "Crisis Planning",
      ],
    },
    {
      title: "Executive Protection",
      description:
        "Our discreet and professional support extends to high-profile individuals and their families, ensuring unparalleled assurance without compromising lifestyle.",
      href: "/services/executive-protection",
      features: [
        "Executive Protection",
        "Residential Security",
        "Travel Security",
      ],
    },
    {
      title: "Secure Transfer & Asset Escort",
      description:
        "From armored convoys to aviation transfers, our escorts guarantee safe passage for your most valuable assets.",
      href: "/services/secure-transfer-asset-escort",
      features: ["Armored Convoy", "Aviation Security", "Route Planning"],
    },
    {
      title: "Anti-Poaching & Wildlife Protection",
      description:
        "We employ advanced surveillance and highly trained rangers to defend threatened species and preserve natural legacies.",
      href: "/services/anti-poaching-wildlife-protection",
      features: [
        "Ranger Training",
        "UAV Surveillance",
        "Intelligence Networks",
      ],
    },
    {
      title: "Hardware & Software Solutions",
      description:
        "Integrating state-of-the-art technology, our systems provide seamless protection across physical and digital realms.",
      href: "/services/hardware-software-security",
      features: ["CCTV Systems", "Access Control", "Cyber Monitoring"],
    },
  ];

  return (
    <section id="services" ref={servicesRef} className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Core Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Distinguished security solutions, meticulously crafted to address
            the singular needs of the discerning global clientele. We offer a
            heritage of protection that resonates with the sophistication and
            stature of those accustomed to the finest standards across
            generations and industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#252525] shadow-lg rounded-lg overflow-hidden border border-gray-800"
            >
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={service.href}>
                  <Button
                    variant="outline"
                    className="w-full hover:bg-[#344154] hover:text-white hover:border-[#344154] transition-all duration-300 rounded-xl border-gray-600 text-gray-300"
                  >
                    Learn More
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
