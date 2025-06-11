'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Award, Star, Shield } from 'lucide-react';
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
      icon: Award
    },
    {
      name: 'Elena Volkov',
      position: 'Director of Operations',
      background: 'International security consultant with diplomatic protection experience.',
      expertise: 'Executive Protection, Diplomatic Security, Training & Development',
      icon: Star
    }
  ];

  return (
    <section ref={teamRef} className="py-16 sm:py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 sm:w-96 h-64 sm:h-96 bg-valentor-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 sm:w-80 h-48 sm:h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center bg-valentor-red/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-3 mb-6 sm:mb-8">
            <Award className="h-4 w-4 sm:h-5 sm:w-5 text-valentor-red mr-2" />
            <span className="text-valentor-red font-semibold text-xs sm:text-sm uppercase tracking-wider">Expert Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Leadership Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Our leadership team brings together decades of experience from military, 
            intelligence, and private security sectors to deliver unmatched expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {leadership.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full bg-white/90 backdrop-blur-xl border-2 border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 rounded-2xl overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start space-x-4 sm:space-x-6">
                    {/* Icon */}
                    <div className="bg-gradient-to-br from-valentor-red/20 to-valentor-red/10 rounded-2xl p-3 sm:p-4 flex-shrink-0 group-hover:from-valentor-red/30 group-hover:to-valentor-red/20 transition-all duration-300">
                      <leader.icon className="h-6 w-6 sm:h-8 sm:w-8 text-valentor-red" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors duration-300">
                        {leader.name}
                      </h3>
                      <p className="text-valentor-red font-semibold mb-3 text-sm sm:text-base">
                        {leader.position}
                      </p>
                      <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                        {leader.background}
                      </p>
                      <div className="bg-gray-50 rounded-xl p-3 group-hover:bg-gray-100 transition-colors duration-300">
                        <p className="text-xs sm:text-sm text-gray-700">
                          <span className="font-semibold text-gray-900">Expertise:</span> {leader.expertise}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 text-center mt-2 font-medium">
                      Industry Expert
                    </p>
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