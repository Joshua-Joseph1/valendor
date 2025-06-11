'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Shield, 
  ArrowRight, 
  Send, 
  Phone, 
  Mail, 
  User, 
  Building2,
  MessageSquare,
  Star,
  Globe,
  Award,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface HeroSectionProps {
  onScrollToServices: () => void;
}

const HeroSection = ({ onScrollToServices }: HeroSectionProps) => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden pt-16 sm:pt-0"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-valentor-red/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-valentor-red/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40l20-20v40l-20-20zm0 0l-20 20h40l-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-valentor-red/10 via-transparent to-slate-800/20" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Enhanced Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20"
            >
              <Award className="h-5 w-5 text-valentor-red mr-2" />
              <span className="text-white font-semibold text-sm uppercase tracking-wider">Elite Security Consultancy</span>
              <div className="ml-3 flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-amber-300 fill-current" />
                ))}
              </div>
            </motion.div>

            {/* Logo and Title */}
            <div className="space-y-6">
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-valentor-red/20 backdrop-blur-sm rounded-3xl p-6 inline-block border border-valentor-red/30"
              >
                <Shield className="h-16 w-16 text-valentor-red" />
              </motion.div> */}
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
              >
                <span className="text-white">Valentor</span>
                <span className="block bg-gradient-to-r from-valentor-red via-red-500 to-red-600 bg-clip-text text-transparent">
                  Group
                </span>
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl text-slate-300 font-light tracking-wide">
                Discretion. Strength. Adaptability.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-valentor-red to-red-600 rounded-full"></div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl"
            >
              Global risk management and protection consultancy providing comprehensive 
              security solutions for the world's most challenging environments.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 text-sm text-slate-400"
            >
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-valentor-red" />
                <span>50+ Countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>500+ Clients Protected</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-amber-400" />
                <span>15+ Years Excellence</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button 
                size="lg" 
                className="bg-valentor-red hover:bg-red-700 text-white px-8 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
                onClick={onScrollToServices}
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="xl:pl-8"
          >
            <Card className="bg-white/95 backdrop-blur-2xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-3xl overflow-hidden max-w-lg mx-auto">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-valentor-red to-red-600 p-6 text-white">
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 inline-block mb-4">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Get a Security Consultation
                  </h3>
                  <p className="text-white/90">
                    Speak with our experts about your security requirements
                  </p>
                </div>
              </div>

              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
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
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
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
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
                        placeholder="john.doe@company.com"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Phone and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
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
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
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
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900"
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
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 resize-none text-gray-900 placeholder-gray-500"
                      placeholder="Tell us about your security requirements..."
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-gradient-to-r from-valentor-red to-red-600 hover:from-red-700 hover:to-red-800 text-white py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group font-semibold"
                  >
                    Request Consultation
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </form>

                {/* Form Footer */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4 text-valentor-red" />
                      <span className="text-sm font-semibold text-gray-700">Emergency Hotline:</span>
                      <a href="tel:+15559115233" className="text-valentor-red hover:text-red-700 font-bold transition-colors duration-200">
                        +1 (555) 911-SAFE
                      </a>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                        <span>Confidential</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Shield className="h-3 w-3 text-blue-500" />
                        <span>Secure</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="h-3 w-3 text-amber-500" />
                        <span>ISO 27001 Certified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;