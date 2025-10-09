'use client';

import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AboutCTA = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#1A1A1A] text-white overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(52,65,84,0.20),transparent_60%)]">
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
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-[ui-serif] tracking-tight mb-4 leading-tight"
            >
              Ready to Secure Your Future?
            </motion.h2>
            <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base md:text-lg mb-12 max-w-4xl mx-auto leading-relaxed text-white/80 font-[ui-sans-serif] px-4"
            >
              Join the ranks of Fortune 500 companies and high-profile individuals who entrust us with their most critical needs. Your future deserves unparalleled stewardship.
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
            <Link href="/contact" aria-label="Enlist Our Expertise at Valiant Risk Group">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#C1272D] hover:bg-[#C1272D]/90 text-white px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg rounded-xl transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
              >
                Enlist Our Expertise
              </Button>
            </Link>

            <Link href="#services">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent text-white/90 hover:text-white border-white/20 hover:border-white/30 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg rounded-xl transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
              >
                Retain Valiant Risk Group
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators - inline list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto divide-y divide-white/10"
          >
            {[
              { label: 'Expert Support', value: '24/7' },
              { label: 'Coverage', value: 'Global' },
              { label: 'Confidential', value: '100%' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-4">
                <div className="text-white/80 font-[ui-sans-serif]">{item.label}</div>
                <div className="text-white font-[ui-serif] tracking-tight text-lg">{item.value}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;