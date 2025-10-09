'use client';

import { motion } from 'framer-motion';
import { Quote, Star, Award } from 'lucide-react';

const ExecutiveProtectionTestimonial = () => {
  return (
    <section className="py-24 md:py-32 bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-valentor-red rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-900 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Removed premium badge for minimal style */}

          {/* Testimonial content */}
          <div className="relative">
            {/* Quote icon */}
            <div className="absolute -top-6 left-12 hidden">
              <div className="rounded-2xl p-4">
                <Quote className="h-8 w-8" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <motion.blockquote
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl lg:text-4xl text-white mb-6 leading-relaxed font-light italic"
              >
                "Valiant Risk Group's executive protection team provided
                seamless, Discreet security that allowed me to focus on business
                without worrying about my safety. Their professionalism is
                unmatched."
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-xl font-bold text-white">Fortune 500 CEO</p>
                <p className="text-gray-300 font-medium">Confidential Client</p>
                <div className="w-16 h-px bg-[#344154] mx-auto mt-4"></div>
              </motion.div>
            </div>
          </div>

          {/* Bottom accent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center bg-[#252525] backdrop-blur-xl rounded-full px-8 py-4 border border-gray-700 shadow-lg">
              <Award className="h-6 w-6 text-valentor-red mr-3" />
              <span className="text-white font-semibold">
                Trusted by Global Leaders • Proven Excellence
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveProtectionTestimonial;