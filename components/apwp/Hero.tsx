'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Award, Star, Shield, TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WildlifeProtectionHero = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <section
      ref={heroRef}
      className="relative py-24 md:py-32 bg-[#1A1A1A] text-white overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-valentor-red/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-valentor-red/5 to-transparent rounded-full blur-3xl"></div>

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40l20-20v40l-20-20zm0 0l-20 20h40l-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-valentor-red/10 via-transparent to-slate-800/20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          ></motion.div>

          {/* Main Content */}
          <div className="text-center space-y-8">
            {/* Icon and Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-[ui-serif] tracking-tight leading-tight">
                Wildlife Protection
              </h1>
              <div className="h-px w-16 bg-[#344154] mx-auto" />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-4xl mx-auto font-[ui-sans-serif]">
                Advanced surveillance and elite rangers defending threatened species and preserving natural legacies.
              </p>
            </motion.div>

            {/* Action Buttons */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <a
                href="/contact"
                aria-label="Arrange a Private Consultation with Valiant Risk Group"
                className="inline-flex items-center bg-[#C1272D] hover:bg-[#C1272D]/90 text-white px-8 py-4 text-base md:text-lg rounded-xl transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
              >
                Arrange a Private Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div> */}

            {/* Trust Indicators */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 pt-8"
            >
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-valentor-red" />
                <span>Advanced Surveillance</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-amber-400" />
                <span>Security Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-green-400" />
                <span>Species Protection</span>
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WildlifeProtectionHero;