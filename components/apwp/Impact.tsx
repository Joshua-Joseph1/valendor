'use client';

import { motion } from 'framer-motion';
import { Award, TrendingUp } from 'lucide-react';

const WildlifeProtectionImpact = () => {
  const statistics = [
    {
      number: '95%',
      label: 'Reduction in Poaching',
      description: 'Across protected areas'
    },
    {
      number: '500+',
      label: 'Rangers Trained',
      description: 'Professional development'
    },
    {
      number: '1M+',
      label: 'Acres Protected',
      description: 'Conservation coverage'
    },
    {
      number: '25+',
      label: 'Species Saved',
      description: 'From extinction'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#1A1A1A] text-white overflow-hidden before:block before:h-px before:w-full before:bg-white/10">
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
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40l20-20v40l-20-20zm0 0l-20 20h40l-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4">Conservation Impact</h2>
          <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
          <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-white/80 font-[ui-sans-serif]">
            Our wildlife protection programs have helped preserve critical habitats and protect endangered species across multiple continents.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-[#0f0f0f] backdrop-blur-xl rounded-xl p-8 border border-white/10 transition-colors duration-300">
                {/* Icon */}
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                
                {/* Number */}
                <div className="text-4xl md:text-5xl font-[ui-serif] tracking-tight mb-3 text-white">
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-lg md:text-xl font-[ui-serif] tracking-tight mb-2 text-white">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="text-white/80 text-sm font-[ui-sans-serif]">
                  {stat.description}
                </div>

                {/* Decorative line */}
                <div className="w-12 h-px bg-[#344154] mx-auto mt-4"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-xl rounded-full px-8 py-4 border border-white/20">
            <Award className="h-6 w-6 text-white mr-3" />
            <span className="text-white font-semibold">Proven Security Results • Global Conservation Impact</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WildlifeProtectionImpact;