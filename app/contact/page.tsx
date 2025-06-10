'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Shield,
  Globe,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactPage = () => {
  const heroRef = useRef(null);
  const contactRef = useRef(null);
  const formRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isContactInView = useInView(contactRef, { once: true });
  const isFormInView = useInView(formRef, { once: true });

  const contactMethods = [
    {
      title: 'Emergency Hotline',
      description: '24/7 emergency response and immediate assistance',
      icon: Phone,
      contact: '+1 (555) 911-SAFE',
      available: '24/7 Emergency Response'
    },
    {
      title: 'General Inquiries',
      description: 'Business inquiries and service consultations',
      icon: Mail,
      contact: 'info@valentorgroup.com',
      available: 'Response within 2 hours'
    },
    {
      title: 'Global Operations',
      description: 'Worldwide coverage with local expertise',
      icon: Globe,
      contact: 'Multiple locations worldwide',
      available: 'Regional offices available'
    },
    {
      title: 'Secure Communications',
      description: 'Encrypted channels for sensitive discussions',
      icon: MessageSquare,
      contact: 'secure@valentorgroup.com',
      available: 'End-to-end encryption'
    }
  ];

  const offices = [
    {
      region: 'North America',
      city: 'New York, USA',
      address: '432 Park Avenue, Suite 1500\nNew York, NY 10016',
      phone: '+1 (555) 123-4567'
    },
    {
      region: 'Europe',
      city: 'London, UK',
      address: '25 Grosvenor Street\nMayfair, London W1K 4QN',
      phone: '+44 20 7123 4567'
    },
    {
      region: 'Middle East',
      city: 'Dubai, UAE',
      address: 'Emirates Towers\nSheikh Zayed Road, Dubai',
      phone: '+971 4 123 4567'
    },
    {
      region: 'Asia Pacific',
      city: 'Singapore',
      address: '1 Raffles Place\n#40-61 One Raffles Place',
      phone: '+65 6123 4567'
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
                <Phone className="h-12 w-12 text-valentor-red" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Contact
                  <span className="block text-valentor-red">Valentor Group</span>
                </h1>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Ready to secure your future? Our global team of security experts is standing by 
              to provide immediate assistance and consultation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-valentor-red hover:bg-red-700 text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                Emergency Contact
                <Phone className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg rounded-xl">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section ref={contactRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How to Reach Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Multiple channels available for immediate response and secure communication. 
              Choose the method that best suits your security requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isContactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="bg-valentor-red/10 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-valentor-red/20 transition-colors duration-300">
                      <method.icon className="h-8 w-8 text-valentor-red" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {method.description}
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold text-gray-900">{method.contact}</p>
                      <p className="text-sm text-valentor-red">{method.available}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                For non-emergency inquiries, consultations, or detailed security assessments, 
                please fill out the form below. Our team will respond within 2 hours.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-transparent transition-all duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-transparent transition-all duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-transparent transition-all duration-200"
                    placeholder="john.doe@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-transparent transition-all duration-200"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-transparent transition-all duration-200">
                    <option>Select a service...</option>
                    <option>Risk Management & Intelligence</option>
                    <option>Executive Protection</option>
                    <option>Secure Transfer & Asset Escort</option>
                    <option>Anti-Poaching & Wildlife Protection</option>
                    <option>Hardware & Software Security</option>
                    <option>General Consultation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-transparent transition-all duration-200"
                    placeholder="Please describe your security requirements and any specific concerns..."
                  ></textarea>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-valentor-red hover:bg-red-700 text-white py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Global Offices
                </h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={office.region} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-valentor-red/10 rounded-xl p-3">
                            <MapPin className="h-6 w-6 text-valentor-red" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">{office.region}</h4>
                            <p className="text-sm text-gray-600 mb-2">{office.city}</p>
                            <p className="text-sm text-gray-500 whitespace-pre-line mb-2">{office.address}</p>
                            <p className="text-sm font-medium text-valentor-red">{office.phone}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-valentor-red text-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 mr-3" />
                    <h4 className="font-semibold">Response Times</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Emergency Response:</span>
                      <span className="font-semibold">Immediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span>General Inquiries:</span>
                      <span className="font-semibold">Within 2 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Detailed Assessments:</span>
                      <span className="font-semibold">Within 24 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Your Security Cannot Wait
            </h2>
            <p className="text-xl mb-8">
              In security, timing is everything. Contact us now for immediate assistance 
              or to schedule a comprehensive security consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-valentor-red hover:bg-gray-100 px-8 py-4 text-lg rounded-xl">
                Emergency Hotline
                <Phone className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;