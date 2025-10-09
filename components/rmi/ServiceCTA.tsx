'use client';

import { motion } from 'framer-motion';
// Icons removed per brand guideline
import { Button } from '@/components/ui/button';

interface ServiceCTAProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  accentColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const ServiceCTA = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  accentColor = 'valentor-red',
  gradientFrom = 'valentor-red',
  gradientTo = 'red-800'
}: ServiceCTAProps) => {
  return (
    <section
      className={`relative py-24 md:py-32 bg-[#1a1a1a] text-white overflow-hidden`}
    >
      {/* Sophisticated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-black rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 50l25-25v50l-25-25zm0 0l-25 25h50l-25-25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              {title}
            </motion.h2>
            <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base md:text-lg mb-12 max-w-4xl mx-auto leading-relaxed text-white/80 font-[ui-sans-serif]"
            >
              {description}
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
            <a
              href="/contact"
              aria-label="Enlist Our Expertise at Valiant Risk Group"
              className="inline-flex items-center bg-[#C1272D] hover:bg-[#C1272D]/90 text-white px-10 py-4 text-base md:text-lg rounded-xl transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
            >
              {primaryButtonText}
            </a>
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

export default ServiceCTA;