'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, 
  Target, 
  Eye, 
  Users, 
  Globe, 
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const statsRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isStoryInView = useInView(storyRef, { once: true });
  const isValuesInView = useInView(valuesRef, { once: true });
  const isTeamInView = useInView(teamRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });

  const coreValues = [
    {
      title: 'Discretion',
      description: 'Operating with the highest levels of confidentiality and professionalism, ensuring our clients\' privacy and security are never compromised.',
      icon: Eye,
      details: [
        'Confidential operations and reporting',
        'Non-disclosure protocols',
        'Invisible security presence',
        'Secure communication channels'
      ]
    },
    {
      title: 'Strength',
      description: 'Robust capabilities backed by extensive experience, proven methodologies, and cutting-edge technology to handle any security challenge.',
      icon: Shield,
      details: [
        'Elite security professionals',
        'Advanced technology integration',
        'Proven track record',
        'Comprehensive threat response'
      ]
    },
    {
      title: 'Adaptability',
      description: 'Flexible solutions tailored to unique challenges and changing environments, ensuring effective security in any situation.',
      icon: Target,
      details: [
        'Customized security solutions',
        'Rapid response capabilities',
        'Cultural sensitivity',
        'Evolving threat assessment'
      ]
    }
  ];

  const leadership = [
    {
      name: 'Marcus Valentor',
      position: 'Founder & CEO',
      background: 'Former Special Forces Colonel with 25+ years in international security operations.',
      expertise: 'Strategic Risk Management, Executive Protection, Crisis Response'
    },
    {
      name: 'Sarah Chen',
      position: 'Chief Operating Officer',
      background: 'Ex-Intelligence Agency Director with expertise in global threat assessment.',
      expertise: 'Intelligence Analysis, Threat Assessment, International Operations'
    },
    {
      name: 'David Rodriguez',
      position: 'Head of Technology',
      background: 'Cybersecurity expert and former military technology specialist.',
      expertise: 'Cyber Security, Surveillance Systems, Technology Integration'
    },
    {
      name: 'Elena Volkov',
      position: 'Director of Operations',
      background: 'International security consultant with diplomatic protection experience.',
      expertise: 'Executive Protection, Diplomatic Security, Training & Development'
    }
  ];

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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
      >
        {/* Subtle geometric background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-valentor-red/10 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="bg-valentor-red/20 backdrop-blur-sm rounded-2xl p-4 mr-6">
                <Shield className="h-12 w-12 text-valentor-red" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  About
                  <span className="block text-valentor-red">Valentor Group</span>
                </h1>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Founded on the principles of discretion, strength, and adaptability, 
              we are the world's premier risk management and protection consultancy.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-valentor-red hover:bg-red-700 text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg rounded-xl">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Valentor Group was founded in 2009 by Marcus Valentor, a former Special Forces 
                  Colonel who recognized the growing need for sophisticated, discrete security 
                  solutions in an increasingly complex global landscape.
                </p>
                <p>
                  What began as a small team of elite security professionals has evolved into 
                  a global consultancy, serving Fortune 500 companies, high-net-worth individuals, 
                  governments, and international organizations across six continents.
                </p>
                <p>
                  Our approach combines traditional security expertise with cutting-edge technology 
                  and intelligence gathering, ensuring our clients receive the most comprehensive 
                  protection available in today's world.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Founded by former Special Forces leadership</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">15+ years of proven excellence</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Global reach with local expertise</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-valentor-red/10 to-slate-100 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 mb-6">
                    To provide world-class risk management and protection services that enable 
                    our clients to operate confidently in challenging environments, combining 
                    cutting-edge technology with human expertise.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Award className="h-8 w-8 text-valentor-red" />
                    <div>
                      <p className="font-semibold text-gray-900">Excellence in Security</p>
                      <p className="text-sm text-gray-600">Recognized industry leader</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section ref={valuesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These foundational principles guide every operation and decision, 
              ensuring unparalleled service delivery in the most demanding circumstances.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="bg-valentor-red/10 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-valentor-red/20 transition-colors duration-300">
                      <value.icon className="h-8 w-8 text-valentor-red" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {value.description}
                    </p>
                    <ul className="space-y-2">
                      {value.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <Star className="h-4 w-4 text-valentor-red mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section ref={teamRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our leadership team brings together decades of experience from military, 
              intelligence, and private security sectors to deliver unmatched expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-valentor-red/10 rounded-xl p-3 flex-shrink-0">
                        <Users className="h-8 w-8 text-valentor-red" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {leader.name}
                        </h3>
                        <p className="text-valentor-red font-semibold mb-3">
                          {leader.position}
                        </p>
                        <p className="text-gray-600 mb-3 text-sm">
                          {leader.background}
                        </p>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Expertise:</span> {leader.expertise}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-20 bg-valentor-red text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">
              By the Numbers
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our track record speaks for itself. These numbers represent our commitment 
              to excellence and the trust our clients place in us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-white/80 text-sm">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Experience the Valentor Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the ranks of satisfied clients who trust Valentor Group with their 
              most critical security needs. Contact us today for a confidential consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-valentor-red hover:bg-red-700 px-8 py-4 text-lg rounded-xl">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-valentor-red text-valentor-red hover:bg-valentor-red hover:text-white px-8 py-4 text-lg rounded-xl">
                View Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;