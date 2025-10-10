'use client';

import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#1a1a1a] text-white overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(52,65,84,0.20),transparent_60%)]"
    >
      {/* Sophisticated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-black rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-black rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-black/5 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M50 50l25-25v50l-25-25zm0 0l-25 25h50l-25-25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
              className="text-base md:text-lg mb-12 max-w-4xl mx-auto leading-relaxed text-white/80 font-[ui-sans-serif]"
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
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link href="/contact" aria-label="Retain Valiant Risk Group">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white/90 hover:text-white border-white/20 hover:border-white/30 px-10 py-4 text-base md:text-lg rounded-xl transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
              >
                Arrange A Private Consultation
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators - inline list */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto divide-y divide-white/10"
          >
            {[
              { label: 'Emergency Response', value: '24/7' },
              { label: 'Countries Covered', value: '50+' },
              { label: 'Operations', value: 'Global' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-4">
                <div className="text-white/80 font-[ui-sans-serif]">{item.label}</div>
                <div className="text-white font-[ui-serif] tracking-tight text-lg">{item.value}</div>
              </div>
            ))}
          </motion.div> */}

          {/* Bottom accent */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-white/60 text-sm font-[ui-sans-serif]">
              All consultations are confidential and secure 
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;