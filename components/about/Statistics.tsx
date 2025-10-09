'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Clock, Globe, TrendingUp } from 'lucide-react';

const AboutStatistics = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  const statistics = [
    {
      number: '500+',
      label: 'Clients Protected',
      description: 'High-profile individuals and organizations',
      icon: Users
    },
    {
      number: '15+',
      label: 'Years Experience',
      description: 'Proven track record in security',
      icon: Clock
    },
    {
      number: '50+',
      label: 'Countries',
      description: 'Global operational coverage',
      icon: Globe
    },
    {
      number: '99.9%',
      label: 'Success Rate',
      description: 'Mission completion rate',
      icon: TrendingUp
    }
  ];

  return (
    <section ref={statsRef} className="relative py-24 md:py-32 bg-[#1A1A1A] text-white overflow-hidden before:block before:h-px before:w-full before:bg-white/10">
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40l20-20v40l-20-20zm0 0l-20 20h40l-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4">By the Numbers</h2>
          <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed font-[ui-sans-serif] px-4">
            Our track record speaks for itself. These numbers represent our commitment to excellence and the trust our clients place in us.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto divide-y divide-white/10">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="py-6"
            >
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-white/80 font-[ui-sans-serif]">{stat.label}</div>
                </div>
                <div className="text-2xl sm:text-3xl font-[ui-serif] tracking-tight text-white">{stat.number}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStatistics;