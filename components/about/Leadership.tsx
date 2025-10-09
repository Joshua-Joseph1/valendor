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
      className="py-24 md:py-32 bg-[#1A1A1A] text-white relative overflow-hidden before:block before:h-px before:w-full before:bg-white/10"
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4">Leadership Team</h2>
          <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed font-[ui-sans-serif]">
            Our leadership brings decades from military, intelligence, and private security sectors to deliver unmatched expertise.
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
              <Card className="h-full bg-[#0f0f0f] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors duration-300 rounded-lg overflow-hidden">
                <div className="h-2 bg-[#C1272D]"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className="bg-[#C1272D]/20 backdrop-blur-sm rounded-xl p-4 flex-shrink-0 transition-colors duration-300">
                      <leader.icon className="h-8 w-8 text-[#C1272D]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-[ui-serif] tracking-tight text-white mb-2">
                        {leader.name}
                      </h3>
                      <p className="text-white/80 font-[ui-sans-serif] mb-4 text-base">
                        {leader.position}
                      </p>
                      <p className="text-white/80 mb-4 text-sm leading-relaxed font-[ui-sans-serif]">
                        {leader.background}
                      </p>
                      <div className="bg-[#C1272D]/10 backdrop-blur-sm rounded-xl p-4 border border-[#C1272D]/20 transition-colors duration-300">
                        <p className="text-sm text-white/80 font-[ui-sans-serif]">
                          <span className="font-[ui-serif] text-white">
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