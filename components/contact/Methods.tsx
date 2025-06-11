'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, Globe, MessageSquare, Award, Star } from 'lucide-react';
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
      gradient: 'from-blue-500 to-blue-700'
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
    <section ref={contactRef} className="py-16 sm:py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 sm:w-96 h-64 sm:h-96 bg-valentor-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 sm:w-80 h-48 sm:h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isContactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center bg-valentor-red/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-3 mb-6 sm:mb-8">
            <Award className="h-4 w-4 sm:h-5 sm:w-5 text-valentor-red mr-2" />
            <span className="text-valentor-red font-semibold text-xs sm:text-sm uppercase tracking-wider">Multiple Contact Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            How to Reach Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Multiple channels available for immediate response and secure communication. 
            Choose the method that best suits your security requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isContactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full bg-white/90 backdrop-blur-xl border-2 border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 rounded-2xl overflow-hidden">
                <CardContent className="p-6 sm:p-8 text-center">
                  {/* Icon with luxury styling */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6`}>
                      <method.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-valentor-red rounded-full flex items-center justify-center">
                      <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {method.description}
                  </p>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4 group-hover:bg-gray-100 transition-colors duration-300">
                      <p className="font-bold text-gray-900 text-sm sm:text-base break-all">{method.contact}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-valentor-red font-semibold">{method.available}</p>
                  </div>

                  {/* Decorative element */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 bg-gradient-to-r ${method.gradient} rounded-full opacity-${(i + 1) * 30}`}></div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 text-center mt-2 font-medium">
                      Professional Service
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