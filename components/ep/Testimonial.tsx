'use client';

import { motion } from 'framer-motion';
import { Quote, Star, Award } from 'lucide-react';

const ExecutiveProtectionTestimonial = () => {
  return (
    <section className="py-32 bg-[#1a1a1a] text-white relative overflow-hidden">
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
          {/* Premium badge */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center bg-valentor-red/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
            >
              <Award className="h-5 w-5 text-valentor-red mr-2" />
              <span className="text-valentor-red font-semibold text-sm uppercase tracking-wider">
                Client Testimonial
              </span>
              <div className="ml-3 flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 text-amber-400 fill-current"
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Testimonial Card */}
          <div className="bg-[#252525] backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-gray-700 relative">
            <div className="h-2 bg-gradient-to-r from-valentor-red to-red-700"></div>
            {/* Quote icon */}
            <div className="absolute -top-6 left-12">
              <div className="bg-valentor-red rounded-2xl p-4 shadow-xl">
                <Quote className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center pt-8">
              <motion.blockquote
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl lg:text-4xl text-white mb-8 leading-relaxed font-light italic"
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
                <div className="w-16 h-1 bg-gradient-to-r from-valentor-red to-red-600 rounded-full mx-auto mt-4"></div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-6 right-6 opacity-10">
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-valentor-red rounded-full"
                  ></div>
                ))}
              </div>
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