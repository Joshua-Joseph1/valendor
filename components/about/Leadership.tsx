'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutLeadership = () => {
  const teamRef = useRef(null);
  const isTeamInView = useInView(teamRef, { once: true });

  const leadership = [
    {
      name: 'Marcus Valentor',
      position: 'Founder & CEO',
      background: 'Former Special Forces Colonel with 25+ years in international security operations.',
      expertise: 'Strategic Risk Management, Executive Protection, Crisis Response',
      icon: Shield
    },
    {
      name: 'Sarah Chen',
      position: 'Chief Operating Officer',
      background: 'Ex-Intelligence Agency Director with expertise in global threat assessment.',
      expertise: 'Intelligence Analysis, Threat Assessment, International Operations',
      icon: Users
    },
    {
      name: 'David Rodriguez',
      position: 'Head of Technology',
      background: 'Cybersecurity expert and former military technology specialist.',
      expertise: 'Cyber Security, Surveillance Systems, Technology Integration',
      icon: Shield
    },
    {
      name: 'Elena Volkov',
      position: 'Director of Operations',
      background: 'International security consultant with diplomatic protection experience.',
      expertise: 'Executive Protection, Diplomatic Security, Training & Development',
      icon: Users
    }
  ];

  return (
    <section
      ref={teamRef}
      className="py-32 bg-[#1a1a1a] text-white relative overflow-hidden"
    >
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-valentor-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our leadership team brings together decades of experience from
            military, intelligence, and private security sectors to deliver
            unmatched expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {leadership.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full bg-[#252525] backdrop-blur-xl border border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105 rounded-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-valentor-red to-red-700"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className="bg-valentor-red/20 backdrop-blur-sm rounded-2xl p-4 flex-shrink-0 group-hover:bg-valentor-red/30 transition-all duration-300">
                      <leader.icon className="h-8 w-8 text-valentor-red" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
                        {leader.name}
                      </h3>
                      <p className="text-valentor-red font-semibold mb-4 text-base">
                        {leader.position}
                      </p>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {leader.background}
                      </p>
                      <div className="bg-valentor-red/10 backdrop-blur-sm rounded-xl p-4 border border-valentor-red/20 group-hover:bg-valentor-red/15 transition-colors duration-300">
                        <p className="text-sm text-gray-300">
                          <span className="font-semibold text-white">
                            Expertise:
                          </span>{" "}
                          {leader.expertise}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLeadership;