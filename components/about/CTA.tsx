'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
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
              Join the ranks of satisfied clients who trust Valiant Risk Group
              with their most critical security needs. Contact us today for a
              confidential consultation.
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
                Book A Consultation
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
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-valentor-red">
                24/7
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">
                Expert Support
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-gray-200/50 text-center shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-valentor-red">
                Global
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">Coverage</div>
            </div>
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-gray-200/50 text-center shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-valentor-red">
                100%
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">
                Confidential
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;