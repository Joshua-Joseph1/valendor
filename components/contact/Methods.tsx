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
      title: "Emergency Hotline",
      description:
        "24/7 emergency response and immediate assistance for critical security situations",
      icon: Phone,
      contact: "+1 (555) 911-SAFE",
      available: "24/7 Emergency Response",
      gradient: "from-red-500 to-red-700",
    },
    {
      title: "General Inquiries",
      description:
        "Business inquiries and service consultations with expert security advisors",
      icon: Mail,
      contact: "info@valiantriskgroup.com",
      available: "Response within 2 hours",
      gradient: "from-blue-900 to-blue-700",
    },
    {
      title: "Global Operations",
      description:
        "Worldwide coverage with local expertise and cultural understanding",
      icon: Globe,
      contact: "Multiple locations worldwide",
      available: "Regional offices available",
      gradient: "from-green-500 to-green-700",
    },
    {
      title: "Secure Communications",
      description:
        "Encrypted channels for sensitive discussions and confidential consultations",
      icon: MessageSquare,
      contact: "secure@valiantriskgroup.com",
      available: "End-to-end encryption",
      gradient: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <section
      ref={contactRef}
      className="py-24 md:py-32 bg-[#1a1a1a] text-white relative overflow-hidden"
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4">
            How to Reach Us
          </h2>
          <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed font-[ui-sans-serif]">
            Multiple channels available for immediate response and secure
            communication. Choose the method that best suits your security
            requirements.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto divide-y divide-white/10">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isContactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="py-6"
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center`}>
                  <method.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-[ui-serif] tracking-tight text-white mb-1">
                    {method.title}
                  </h3>
                  <p className="text-white/80 mb-2 text-sm leading-relaxed font-[ui-sans-serif]">
                    {method.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-[ui-serif] text-white">
                      {method.contact}
                    </p>
                    <p className="text-xs text-white/70 font-[ui-sans-serif]">
                      {method.available}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;