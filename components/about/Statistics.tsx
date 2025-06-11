'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Clock, Globe, TrendingUp, Award, Star } from 'lucide-react';

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
    <section ref={statsRef} className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-valentor-red via-red-600 to-red-800 text-white overflow-hidden">
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
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-xl rounded-full px-4 sm:px-6 py-3 border border-white/20 mb-6 sm:mb-8">
            <Award className="h-4 w-4 sm:h-5 sm:w-5 text-white mr-2" />
            <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider">Performance Metrics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
            By the Numbers
          </h2>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed px-4">
            Our track record speaks for itself. These numbers represent our commitment 
            to excellence and the trust our clients place in us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white/15">
                {/* Icon */}
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-white/30 transition-all duration-300">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                
                {/* Number */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 text-white">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  {stat.description}
                </div>

                {/* Decorative line */}
                <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-white/50 to-transparent rounded-full mx-auto mt-3 sm:mt-4"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-xl rounded-full px-6 sm:px-8 py-3 sm:py-4 border border-white/20">
            <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white mr-3" />
            <span className="text-white font-semibold text-sm sm:text-base">Trusted by Global Leaders • Proven Excellence</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStatistics;