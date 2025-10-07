'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, Globe, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactMethods = () => {
  const contactRef = useRef(null);
  const isContactInView = useInView(contactRef, { once: true });

  const contactMethods = [
    {
      title: 'Emergency Hotline',
      description: '24/7 emergency response and immediate assistance for critical security situations',
      icon: Phone,
      contact: '+1 (555) 911-SAFE',
      available: '24/7 Emergency Response',
      gradient: 'from-red-500 to-red-700'
    },
    {
      title: 'General Inquiries',
      description: 'Business inquiries and service consultations with expert security advisors',
      icon: Mail,
      contact: 'info@valentorgroup.com',
      available: 'Response within 2 hours',
      gradient: 'from-blue-900 to-blue-700'
    },
    {
      title: 'Global Operations',
      description: 'Worldwide coverage with local expertise and cultural understanding',
      icon: Globe,
      contact: 'Multiple locations worldwide',
      available: 'Regional offices available',
      gradient: 'from-green-500 to-green-700'
    },
    {
      title: 'Secure Communications',
      description: 'Encrypted channels for sensitive discussions and confidential consultations',
      icon: MessageSquare,
      contact: 'secure@valentorgroup.com',
      available: 'End-to-end encryption',
      gradient: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <section
      ref={contactRef}
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
          animate={isContactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            How to Reach Us
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Multiple channels available for immediate response and secure
            communication. Choose the method that best suits your security
            requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isContactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full bg-[#252525] backdrop-blur-xl border border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105 rounded-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-valentor-red to-red-700"></div>
                <CardContent className="p-8 text-center">
                  {/* Icon with luxury styling */}
                  <div className="relative mb-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-6`}
                    >
                      <method.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {method.description}
                  </p>

                  <div className="space-y-3">
                    <div className="bg-valentor-red/10 backdrop-blur-sm rounded-xl p-4 border border-valentor-red/20 group-hover:bg-valentor-red/15 transition-colors duration-300">
                      <p className="font-bold text-white text-sm break-all">
                        {method.contact}
                      </p>
                    </div>
                    <p className="text-xs text-valentor-red font-semibold">
                      {method.available}
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

export default ContactMethods;