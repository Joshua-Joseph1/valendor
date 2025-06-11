'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Star, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactCTA = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-valentor-red via-red-600 to-red-800 text-white overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-black rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 50l25-25v50l-25-25zm0 0l-25 25h50l-25-25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
              className="inline-flex items-center bg-white/10 backdrop-blur-xl rounded-full px-6 sm:px-8 py-3 sm:py-4 border border-white/20 mb-6 sm:mb-8"
            >
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white mr-3" />
              <span className="text-white font-semibold text-sm sm:text-lg">Elite Security Consultancy</span>
              <div className="ml-3 sm:ml-4 flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-amber-300 fill-current" />
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight"
            >
              Your Security Cannot Wait
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 px-4"
            >
              In security, timing is everything. Contact us now for immediate assistance 
              or to schedule a comprehensive security consultation tailored to your unique needs.
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
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-valentor-red hover:bg-gray-100 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
            >
              Emergency Hotline
              <Phone className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform duration-300" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl rounded-2xl transition-all duration-300"
            >
              Schedule Consultation
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/80 text-xs sm:text-sm">Emergency Response</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-bold mb-2">Global</div>
              <div className="text-white/80 text-xs sm:text-sm">Coverage</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-bold mb-2">100%</div>
              <div className="text-white/80 text-xs sm:text-sm">Confidential</div>
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
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              <span className="text-white/80 text-sm font-medium">Emergency Hotline:</span>
              <a 
                href="tel:+15559115233" 
                className="text-white font-bold text-base sm:text-lg hover:text-gray-200 transition-colors duration-200"
              >
                +1 (555) 911-SAFE
              </a>
            </div>
            <p className="text-white/60 text-xs sm:text-sm px-4">
              All consultations are confidential and secure • ISO 27001 Certified • Trusted Worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;