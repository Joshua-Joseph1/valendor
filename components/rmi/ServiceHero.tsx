'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
// Icons removed per brand guideline
import { Button } from '@/components/ui/button';

interface ServiceHeroProps {
  // icon removed
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  accentColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const ServiceHero = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  accentColor = "valentor-red",
  gradientFrom = "slate-900",
  gradientTo = "slate-900",
}: ServiceHeroProps) => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <section
      ref={heroRef}
      className={`relative py-24 md:py-32 bg-[#1a1a1a] text-white overflow-hidden`}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div
          className={`absolute top-20 left-20 w-96 h-96 bg-${accentColor}/20 rounded-full blur-3xl animate-pulse`}
        ></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-${accentColor}/5 to-transparent rounded-full blur-3xl`}
        ></div>

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40l20-20v40l-20-20zm0 0l-20 20h40l-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Gradient overlay removed to avoid red accents globally */}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Content */}
          <div className="text-center space-y-8">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-[ui-serif] tracking-tight leading-tight">
                {title} {subtitle}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-4xl mx-auto font-[ui-sans-serif]">
                {description}
              </p>
              <div className="mx-auto h-px w-16 bg-[#344154]" />
            </motion.div>

            {/* Action Buttons */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Button
                size="lg"
                className={`bg-[#C1272D] hover:bg-[#C1272D]/90 text-white px-8 py-4 text-base md:text-lg rounded-xl transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]`}
                onClick={onPrimaryClick}
                aria-label="Arrange a Private Consultation with Valiant Risk Group"
              >
                {primaryButtonText}
              </Button>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;