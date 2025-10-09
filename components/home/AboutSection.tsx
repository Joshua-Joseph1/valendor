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
        "Operating with the highest levels of confidentiality and professionalism, ensuring our clients' privacy and security are never compromised.",
      gradient: "from-slate-600 to-slate-800",
      details: [
        "Confidential operations and reporting",
        "Non-disclosure protocols",
        "Invisible security presence",
      ],
    },
    {
      title: "Strength",
      description:
        "Robust capabilities enhanced by extensive experience, proven methodologies, and cutting-edge technology to handle any security challenge.",
      gradient: "from-valentor-red to-red-700",
      details: [
        "Elite security professionals",
        "Advanced technology integration",
        "Proven track record",
      ],
    },
    {
      title: "Adaptability",
      description:
        "Flexible solutions tailored to unique challenges and changing environments, ensuring effective security in any situation.",
      gradient: "from-slate-600 to-slate-800",
      details: [
        "Customized security solutions",
        "Rapid response capabilities",
        "Cultural sensitivity",
      ],
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
          <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4">About Valiant Risk Group</h2>
          <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed font-[ui-sans-serif]">
            Forged in the principles of discretion, strength, and adaptability, Valiant Risk Group stands as the world’s pre-eminent consultancy in risk management and protection. Our legacy is defined by an uncompromising standard of excellence and an enduring commitment to those who entrust us with their security.
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
                        <div className={`w-2 h-2 bg-[#344154] rounded-full mr-3 flex-shrink-0`}></div>
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
          className="mt-16 max-w-5xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-[ui-serif] tracking-tight mb-3">Our Story</h3>
          <div className="h-px w-12 bg-[#344154] mb-4" />
          <p className="text-white/80 font-[ui-sans-serif] leading-relaxed">
            For decades, our teams have quietly shielded heads of state, cultural luminaries, and corporate leaders across volatile regions. This heritage of protection informs our uncompromising approach and the discretion that defines Valiant Risk Group.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;