'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const HardwareSoftwareFeatures = () => {
  return (
    <section className="py-32 bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-valentor-red rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Enterprise-Grade Security
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our hardware and software security solutions are designed for
                enterprise environments where reliability, scalability, and
                integration are critical requirements for mission-critical
                operations.
              </p>
            </div>

            <div className="space-y-6">
              {[
                "24/7 monitoring and expert support",
                "Scalable architecture for business growth",
                "Seamless integration with existing systems",
                "Compliance with industry standards and regulations",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center group hover:bg-gray-700/20 rounded-xl p-4 transition-all duration-200"
                >
                  <CheckCircle className="h-8 w-8 text-valentor-red mr-4 flex-shrink-0 group-hover:text-red-600 transition-colors duration-200" />
                  <span className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors duration-200">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - System Integration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#252525] p-10 rounded-3xl shadow-2xl border border-gray-700"
          >
            <div className="h-2 bg-gradient-to-r from-valentor-red to-red-700 rounded-t-3xl -m-10 mb-8"></div>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              System Integration
            </h3>
            <div className="space-y-8">
              {[
                { name: "CCTV Systems", progress: 100, color: "valentor-red" },
                { name: "Access Control", progress: 85, color: "valentor-red" },
                {
                  name: "Intrusion Detection",
                  progress: 90,
                  color: "valentor-red",
                },
                {
                  name: "Cyber Monitoring",
                  progress: 95,
                  color: "valentor-red",
                },
              ].map((system, index) => (
                <motion.div
                  key={system.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold text-lg">
                      {system.name}
                    </span>
                    <span className="text-gray-300 font-medium">
                      {system.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="bg-valentor-red h-3 rounded-full shadow-lg"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${system.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom accent */}
            <div className="mt-8 pt-6 border-t border-gray-600">
              <p className="text-center text-gray-300 font-medium">
                Integrated Security Ecosystem
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HardwareSoftwareFeatures;