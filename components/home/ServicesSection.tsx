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
        "Prudent assessments and strategic counsel that fuse foresight with actionable insight.",
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
        "Discreet assurance for high-profile principals and families—unparalleled protection without compromise to lifestyle.",
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
        "Armored convoys and aviation transfers that guarantee safe passage for your most valuable assets.",
      href: "/services/secure-transfer-asset-escort",
      features: ["Armored Convoy", "Aviation Security", "Route Planning"],
    },
    {
      title: "Wildlife Protection",
      description:
        "Advanced surveillance and elite rangers defending threatened species and preserving natural legacies.",
      href: "/services/anti-poaching-wildlife-protection",
      features: [
        "Ranger Training",
        "UAV Surveillance",
        "Intelligence Networks",
      ],
    },
    {
      title: "Hardware & Software Security",
      description:
        "State-of-the-art systems uniting physical and digital protection into a seamless shield.",
      href: "/services/hardware-software-security",
      features: ["CCTV Systems", "Access Control", "Cyber Monitoring"],
    },
  ];

  return (
    <section id="services" ref={servicesRef} className="py-24 md:py-32 bg-[#1a1a1a] text-white before:block before:h-px before:w-full before:bg-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4">Explore Our Offerings</h2>
          <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto font-[ui-sans-serif]">
            Distinguished security solutions, meticulously crafted to address the singular needs of a discerning global clientele. A heritage of protection for those accustomed to uncompromising standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#0f0f0f] rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors duration-300"
            >
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-[ui-serif] tracking-tight text-white mb-2">
                    {service.title}
                  </h3>
                  <div className="h-px w-10 bg-[#344154] mb-4" />
                  <p className="text-white/80 mb-6 font-[ui-sans-serif]">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-white/70"
                      >
                        <span className="mr-2 text-[#344154]">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={service.href}>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent text-white/90 hover:text-white border-white/10 hover:bg-[#344154]/40 hover:border-[#344154] transition-colors duration-300 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
                    aria-label={`Learn more about ${service.title} at Valiant Risk Group`}
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
