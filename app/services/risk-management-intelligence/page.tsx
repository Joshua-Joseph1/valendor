'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, 
  Target, 
  AlertTriangle, 
  Users, 
  FileText, 
  ArrowRight,
  CheckCircle,
  Eye,
  Brain,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata = {
  title: 'Risk Management & Intelligence - Valentor Group',
  description: 'Comprehensive threat assessment and strategic risk consulting services to protect your business interests and operations worldwide.',
};

const RiskManagementPage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });

  const offerings = [
    {
      title: 'Threat & Vulnerability Assessments',
      description: 'Comprehensive evaluation of potential risks to your organization, assets, and personnel.',
      details: [
        'Physical security assessments of facilities and operations',
        'Personnel threat profiling and background verification',
        'Operational vulnerability analysis and gap identification',
        'Geopolitical risk evaluation for international operations'
      ]
    },
    {
      title: 'Strategic Risk Consulting',
      description: 'Expert guidance on risk mitigation strategies and security planning.',
      details: [
        'Risk management framework development',
        'Security policy creation and implementation',
        'Threat landscape analysis and monitoring',
        'Strategic security planning and budgeting'
      ]
    },
    {
      title: 'Embedded Risk Advisors',
      description: 'Dedicated risk management professionals integrated into your operations.',
      details: [
        'On-site risk management specialists',
        'Real-time threat assessment and response',
        'Security protocol development and training',
        'Continuous risk monitoring and reporting'
      ]
    },
    {
      title: 'Crisis Planning & Contingency Management',
      description: 'Comprehensive crisis response planning and emergency management protocols.',
      details: [
        'Crisis response plan development',
        'Emergency evacuation procedures',
        'Business continuity planning',
        'Crisis communication strategies'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive risk and threat analysis',
      icon: Eye
    },
    {
      step: '02',
      title: 'Analysis',
      description: 'Strategic evaluation and planning',
      icon: Brain
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deployment of risk mitigation measures',
      icon: Target
    },
    {
      step: '04',
      title: 'Monitoring',
      description: 'Continuous oversight and adjustment',
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center mb-6">
              <Shield className="h-12 w-12 text-valentor-red mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
                Risk Management & Intelligence
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Comprehensive threat assessment and strategic risk consulting to protect 
              your business interests and operations in an ever-changing security landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-valentor-red hover:bg-red-700">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Download Capability Brief
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Risk Management Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored risk management solutions designed to identify, assess, and mitigate 
              threats before they impact your operations.
            </p>
          </motion.div>

          <div className="space-y-8">
            <Accordion type="single" collapsible className="w-full">
              {offerings.map((offering, index) => (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center text-left">
                        <div className="bg-valentor-red/10 rounded-lg p-3 mr-4">
                          <AlertTriangle className="h-6 w-6 text-valentor-red" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {offering.title}
                          </h3>
                          <p className="text-gray-600 mt-1">
                            {offering.description}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="bg-gray-50 rounded-lg p-4 ml-16">
                        <ul className="space-y-2">
                          {offering.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to risk management that ensures comprehensive 
              coverage and effective threat mitigation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="bg-valentor-red text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {item.step}
                    </div>
                    <item.icon className="h-8 w-8 text-valentor-red mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-valentor-red text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Protect Your Organization Today
            </h2>
            <p className="text-xl mb-8">
              Don't wait for threats to materialize. Let our risk management experts 
              assess your security posture and develop a comprehensive protection strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-valentor-red hover:bg-gray-100">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-valentor-red">
                Request Assessment
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RiskManagementPage;