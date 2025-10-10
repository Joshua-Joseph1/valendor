'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface HeroSectionProps {
  onScrollToServices: () => void;
}

const HeroSection = ({ onScrollToServices }: HeroSectionProps) => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center text-white overflow-hidden pt-24 sm:pt-12 bg-[url('/images/hero-mobile.jpg')] sm:bg-[url('/images/hero-image-4.jpg')] bg-cover bg-center bg-fixed"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1a1a1a]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/60 via-[#1a1a1a]/40 to-[#1a1a1a]/60"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-valentor-red/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-valentor-blue/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            <div className="space-y-6">
              <motion.img
                src="/images/v-icon.png"
                alt="V Icon"
                initial={{ opacity: 0, y: -20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-36 h-36 hidden md:block"
              />
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-[ui-serif] tracking-tight leading-tight"
              >
                Discretion. Strength. Adaptability.
              </motion.h1>
              <div className="h-px w-16 bg-[#344154]" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-base md:text-lg text-[#AFC1CF] md:text-white/80 font-[ui-sans-serif] leading-relaxed">
                Distinguished security solutions, crafted for the discerning
                few. Valiant delivers intelligence-led protection across
                industries and environments—precise, unobtrusive, and
                unyielding.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={onScrollToServices}
                className="text-white/90 hover:text-white underline decoration-[#344154]/60 hover:decoration-white underline-offset-4 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D] text-base md:text-lg"
                aria-label="Explore Our Offerings at Valiant Risk Group"
              >
                Explore Our Offerings
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
