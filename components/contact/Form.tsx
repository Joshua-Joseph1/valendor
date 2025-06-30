'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Clock, User, Mail, Phone, Building2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactForm = () => {
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/alxZNaCEizQAvDhmth5a/webhook-trigger/725695a6-e696-4f4f-89e5-4e2e65b95943', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormSubmitted(true);
        console.log('Form successfully submitted:', formData);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section ref={formRef} className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-slate-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 sm:w-96 h-64 sm:h-96 bg-valentor-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 sm:w-80 h-48 sm:h-80 bg-blue-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Send Us a Message
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-valentor-red to-red-600 rounded-full mb-6 sm:mb-8"></div>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                For non-emergency inquiries, consultations, or detailed security assessments, 
                please fill out the form below. Our team will respond within 2 hours.
              </p>
            </div>
            
            <Card className="bg-white/90 backdrop-blur-xl border-2 border-gray-200/50 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-6 sm:p-8">
                {formSubmitted ? (
                  <div className="text-center text-green-600 font-semibold">
                    Thank you! Your message has been successfully submitted.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          First Name *
                        </label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-valentor-red transition-colors duration-200" />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
                            placeholder="John"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Email Address *
                      </label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-valentor-red transition-colors duration-200" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
                          placeholder="john.doe@company.com"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Phone and Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Phone Number
                        </label>
                        <div className="relative group">
                          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-valentor-red transition-colors duration-200" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Company
                        </label>
                        <div className="relative group">
                          <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-valentor-red transition-colors duration-200" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Service Interest */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Service Interest
                      </label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900"
                      >
                        <option value="">Select a service...</option>
                        <option value="risk-management">Risk Management & Intelligence</option>
                        <option value="executive-protection">Executive Protection</option>
                        <option value="secure-transfer">Secure Transfer & Asset Escort</option>
                        <option value="wildlife-protection">Anti-Poaching & Wildlife Protection</option>
                        <option value="hardware-software">Hardware & Software Security</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>
                    
                    {/* Message */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Message *
                      </label>
                      <div className="relative group">
                        <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-valentor-red transition-colors duration-200" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 resize-none text-gray-900 placeholder-gray-500"
                          placeholder="Please describe your security requirements and any specific concerns..."
                          required
                        ></textarea>
                      </div>
                    </div>
                    
                    {/* Submit Button */}
                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full bg-gradient-to-r from-valentor-red to-red-600 hover:from-red-700 hover:to-red-800 text-white py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group font-semibold"
                    >
                      Book A Consultation
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </form>
                )}

                {/* Form Footer */}
                <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4 text-valentor-red" />
                      <span className="text-sm font-semibold text-gray-700">Emergency Hotline:</span>
                      <a href="tel:+15559115233" className="text-valentor-red hover:text-red-700 font-bold transition-colors duration-200">
                        +1 (555) 911-SAFE
                      </a>
                    </div>
                    <div className="text-xs text-gray-500">
                      All consultations are confidential and secure • ISO 27001 Certified
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side - Response Times */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Response Times Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Card className="bg-gradient-to-br from-valentor-red to-red-700 text-white shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 mr-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold">Response Times</h4>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { label: 'Emergency Response:', time: 'Immediate' },
                      { label: 'General Inquiries:', time: 'Within 2 hours' },
                      { label: 'Detailed Assessments:', time: 'Within 24 hours' }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center text-sm sm:text-base">
                        <span className="text-white/90">{item.label}</span>
                        <span className="font-bold text-white">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;