'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText, 
  Mail, 
  Phone,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicyPage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true });

  const sections = [
    {
      title: 'Information We Collect',
      icon: FileText,
      content: [
        'Personal identification information (name, email address, phone number)',
        'Company or organization details',
        'Security requirements and consultation details',
        'Communication preferences and contact history',
        'Technical information about your use of our website'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        'To provide and improve our security consulting services',
        'To communicate with you about your security requirements',
        'To send you important updates about our services',
        'To comply with legal and regulatory requirements',
        'To protect our legitimate business interests'
      ]
    },
    {
      title: 'Information Security',
      icon: Lock,
      content: [
        'We implement industry-standard security measures to protect your data',
        'All sensitive information is encrypted during transmission and storage',
        'Access to personal information is restricted to authorized personnel only',
        'Regular security audits and assessments are conducted',
        'We maintain strict confidentiality protocols for all client information'
      ]
    },
    {
      title: 'Information Sharing',
      icon: Shield,
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'Information may be shared with trusted partners only when necessary for service delivery',
        'We may disclose information when required by law or to protect our rights',
        'All third-party partners are bound by strict confidentiality agreements',
        'You will be notified of any significant changes to our sharing practices'
      ]
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
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
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
              <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Privacy
                  <span className="block text-valentor-red">Policy</span>
                </h1>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Your privacy and confidentiality are fundamental to our
              operations. Learn how we protect and handle your information with
              the highest security standards.
            </p>
            <div className="bg-valentor-red/10 backdrop-blur-sm rounded-xl p-4 inline-flex items-center">
              <AlertCircle className="h-5 w-5 text-valentor-red mr-3" />
              <span className="text-sm">Last updated: January 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Commitment to Privacy
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                At Valiant Risk Group, we understand that privacy and
                confidentiality are not just legal requirements but fundamental
                aspects of the trust our clients place in us. As a global risk
                management and protection consultancy, we handle sensitive
                information with the utmost care and security.
              </p>
              <p className="text-lg text-gray-700">
                This Privacy Policy explains how we collect, use, protect, and
                share information when you use our services or visit our
                website. We are committed to transparency and ensuring you
                understand your rights regarding your personal information.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section ref={contentRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="bg-valentor-red/10 rounded-xl p-3 mr-4">
                          <section.icon className="h-6 w-6 text-valentor-red" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {section.title}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-valentor-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Data Retention */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Data Retention
              </h3>
              <p className="text-gray-700 mb-4">
                We retain your personal information only for as long as
                necessary to fulfill the purposes for which it was collected,
                comply with legal obligations, resolve disputes, and enforce our
                agreements. The retention period varies depending on the type of
                information and the purpose for which it was collected.
              </p>
              <p className="text-gray-700">
                When personal information is no longer needed, we securely
                delete or anonymize it in accordance with our data retention
                policies and applicable laws.
              </p>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Your Rights
              </h3>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have certain rights
                regarding your personal information, including:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-valentor-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  The right to access and receive a copy of your personal
                  information
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-valentor-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  The right to rectify inaccurate personal information
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-valentor-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  The right to request deletion of your personal information
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-valentor-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  The right to restrict or object to processing of your personal
                  information
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-valentor-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  The right to data portability
                </li>
              </ul>
            </motion.div>

            {/* Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Cookies and Tracking
              </h3>
              <p className="text-gray-700 mb-4">
                Our website uses cookies and similar tracking technologies to
                enhance your browsing experience, analyze website traffic, and
                understand user preferences. You can control cookie settings
                through your browser preferences.
              </p>
              <p className="text-gray-700">
                We use both session cookies (which expire when you close your
                browser) and persistent cookies (which remain on your device for
                a specified period) to improve website functionality and user
                experience.
              </p>
            </motion.div>

            {/* Changes to Policy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Changes to This Policy
              </h3>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology, legal requirements, or
                other factors. We will notify you of any material changes by
                posting the updated policy on our website and updating the "Last
                Updated" date. We encourage you to review this policy
                periodically.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-valentor-red text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Questions About Privacy?
            </h2>
            <p className="text-xl mb-8">
              If you have any questions about this Privacy Policy or how we
              handle your personal information, please don't hesitate to contact
              us.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center">
                <Mail className="h-6 w-6 mr-3" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-white/80">privacy@valentorgroup.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="h-6 w-6 mr-3" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-white/80"></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;