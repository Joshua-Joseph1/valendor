'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from "react";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";

const ContactHero = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/4MUTVCAFzb7OJyfS81GR/webhook-trigger/15a35017-dc74-4f04-8e89-9264248c4c54', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Form submitted successfully:', formData);
        setFormSubmitted(true);
      } else {
        console.error('Form submission failed. Please try again.');
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form. Please try again.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative py-20 sm:py-32 lg:py-40 bg-[#1a1a1a] text-white overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-valentor-red/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-80 h-48 sm:h-80 bg-blue-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-r from-valentor-red/5 to-transparent rounded-full blur-3xl"></div>

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40l20-20v40l-20-20zm0 0l-20 20h40l-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-valentor-red/10 via-transparent to-slate-800/20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Main Content */}
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Icon and Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center space-y-4 sm:space-y-6"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="text-white">Contact</span>
                <span className="block bg-gradient-to-r from-valentor-red via-red-500 to-red-600 bg-clip-text text-transparent">
                  Valiant Risk Group
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto px-4">
                Ready to secure your future? Our global team of security experts
                is standing by to provide immediate assistance and consultation.
              </p>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-valentor-red to-red-600 rounded-full mx-auto"></div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8"
            >
              <Card className="bg-white/90 backdrop-blur-xl border-2 border-gray-200/50 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  {formSubmitted ? (
                    <div className="text-center text-green-600 font-semibold">
                      Thank you! Your form has been submitted successfully.
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4 sm:space-y-6"
                    >
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">
                            First Name *
                          </label>
                          <div className="relative group">
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
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
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
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
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">
                            Company
                          </label>
                          <div className="relative group">
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
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
                          <option value="risk-management">
                            Risk Management & Intelligence
                          </option>
                          <option value="executive-protection">
                            Executive Protection
                          </option>
                          <option value="secure-transfer">
                            Secure Transfer & Asset Escort
                          </option>
                          <option value="wildlife-protection">
                            Anti-Poaching & Wildlife Protection
                          </option>
                          <option value="hardware-software">
                            Hardware & Software Security
                          </option>
                          <option value="consultation">
                            General Consultation
                          </option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Message *
                        </label>
                        <div className="relative group">
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
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;