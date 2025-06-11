'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Star, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AboutCTA = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 sm:w-96 h-64 sm:h-96 bg-valentor-red rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 sm:w-80 h-48 sm:h-80 bg-gray-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Premium badge */}
          <div className="text-center mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center bg-valentor-red/10 backdrop-blur-sm rounded-full px-6 sm:px-8 py-3 sm:py-4 border border-valentor-red/20 mb-6 sm:mb-8"
            >
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-valentor-red mr-3" />
              <span className="text-valentor-red font-semibold text-sm sm:text-lg">Elite Security Consultancy</span>
              <div className="ml-3 sm:ml-4 flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400 fill-current" />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Main content */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-gray-900"
            >
              Ready to Experience the
              <span className="block bg-gradient-to-r from-valentor-red to-red-600 bg-clip-text text-transparent">
                Valentor Difference?
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed text-gray-600 px-4"
            >
              Join the ranks of satisfied clients who trust Valentor Group with their 
              most critical security needs. Contact us today for a confidential consultation.
            </motion.p>
          </div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
          >
            <Link href="/contact">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-valentor-red hover:bg-red-700 text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
              >
                Get in Touch
                <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <Link href="#services">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-2 border-valentor-red text-valentor-red hover:bg-valentor-red hover:text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl rounded-2xl transition-all duration-300"
              >
                View Our Services
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-gray-200/50 text-center shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-valentor-red">24/7</div>
              <div className="text-gray-600 text-xs sm:text-sm">Expert Support</div>
            </div>
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-gray-200/50 text-center shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-valentor-red">Global</div>
              <div className="text-gray-600 text-xs sm:text-sm">Coverage</div>
            </div>
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-gray-200/50 text-center shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-valentor-red">100%</div>
              <div className="text-gray-600 text-xs sm:text-sm">Confidential</div>
            </div>
          </motion.div>

          {/* Emergency contact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-12"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-valentor-red" />
              <span className="text-gray-600 text-sm font-medium">Emergency Hotline:</span>
              <a 
                href="tel:+15559115233" 
                className="text-valentor-red font-bold text-base sm:text-lg hover:text-red-700 transition-colors duration-200"
              >
                +1 (555) 911-SAFE
              </a>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm px-4">
              All consultations are confidential and secure • ISO 27001 Certified • Trusted Worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;