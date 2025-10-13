'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from "react";
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true });

  const principles = [
    {
      title: "Discretion",
      description:
        "We operate with the utmost confidentiality and decorum, ensuring your privacy remains inviolable.",
      gradient: "from-slate-600 to-slate-800",
      details: [],
    },
    {
      title: "Strength",
      description:
        "Our capabilities are fortified by seasoned professionals, proven methodologies, and cutting-edge technologies.",
      gradient: "from-valentor-red to-red-700",
      details: [],
    },
    {
      title: "Adaptability",
      description:
        "Our tailored solutions respond elegantly to the evolving landscape of risk and opportunity, maintaining cultural sensitivity and responsiveness at every turn.",
      gradient: "from-slate-600 to-slate-800",
      details: [],
    },
  ];

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-24 md:py-32 bg-[#1a1a1a] text-white relative overflow-hidden"
    >
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-valentor-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4">
            Why Choose Valiant Risk Group
          </h2>
          <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed font-[ui-sans-serif]">
            Anchored in enduring principles, Valiant Risk Group stands as a
            bastion of unwavering excellence. Every operation is executed with
            precision and resolve, ensuring a calibre of service that endures
            even in the most formidable of circumstances.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="transition-colors duration-300">
                <div className="p-0">
                  {/* Icon with luxury styling */}

                  {/* Content */}
                  <h3 className="text-2xl font-[ui-serif] tracking-tight text-white mb-4 text-center">
                    {principle.title}
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed text-center font-[ui-sans-serif]">
                    {principle.description}
                  </p>

                  {/* Feature list */}
                  <div className="space-y-3">
                    {principle.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.2 + detailIndex * 0.1 + 0.5,
                        }}
                        className="flex items-center"
                      >
                        <div
                          className={`w-2 h-2 bg-[#344154] rounded-full mr-3 flex-shrink-0`}
                        ></div>
                        <span className="text-sm text-white/80 font-medium font-[ui-sans-serif]">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional Our Story block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4">
            Our Story — Valiant Risk Group
          </h2>
          <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
          <p className="text-white/80 font-[ui-sans-serif] leading-relaxed">
            Founded on enduring principles of integrity, discipline and trust
            earned through service excellence. Valiant embodies decades of
            experience at the pinnacle of international protection. Our founders
            have shielded heads of state, luminaries and corporate leaders in
            some of the world’s most volatile environments from Africa to Asia
            and beyond.
          </p>
          <p className="text-white/80 font-[ui-sans-serif] leading-relaxed mt-4">
            This heritage has forged a collective of professionals who possess
            an instinctive understanding of the pressures faced by those at the
            helm of influence. We exist to serve those who cannot afford
            uncertainty, delivering intelligence‑led, full‑spectrum protection
            engineered for continuity, control and absolute peace of mind.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;