'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Award, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AboutHero = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <section 
      ref={heroRef}
      className="relative py-20 sm:py-32 lg:py-40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-valentor-red/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-80 h-48 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-r from-valentor-red/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40l20-20v40l-20-20zm0 0l-20 20h40l-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-valentor-red/10 via-transparent to-slate-800/20" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-xl rounded-full px-4 sm:px-6 py-3 border border-white/20 mb-6 sm:mb-8">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-valentor-red mr-2" />
              <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider">Elite Security Consultancy</span>
              <div className="ml-2 sm:ml-3 flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-amber-300 fill-current" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Icon and Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center space-y-4 sm:space-y-6"
            >
              <div className="bg-valentor-red/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-valentor-red/30">
                <Shield className="h-10 w-10 sm:h-16 sm:w-16 text-valentor-red" />
              </div>
              
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="text-white">About</span>
                <span className="block bg-gradient-to-r from-valentor-red via-red-500 to-red-600 bg-clip-text text-transparent">
                  Valentor Group
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto px-4">
                Founded on the principles of discretion, strength, and adaptability, 
                we are the world's premier risk management and protection consultancy.
              </p>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-valentor-red to-red-600 rounded-full mx-auto"></div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4 px-4"
            >
              <Link href="#services">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-valentor-red hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-2xl hover:border-white/50 transition-all duration-300"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400 pt-6 sm:pt-8 px-4"
            >
              <div className="flex items-center space-x-2">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-valentor-red" />
                <span>15+ Years Excellence</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400" />
                <span>500+ Clients Protected</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
                <span>Global Operations</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;