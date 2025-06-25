'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  ArrowRight, 
  Send, 
  Phone, 
  Mail, 
  User, 
  MessageSquare,
  Star,
  Award
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
    service: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      className="relative min-h-screen flex items-center text-white overflow-hidden pt-24 sm:pt-12"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Cape Town Background with Lighter Overlays */}
      <div className="absolute inset-0">
        {/* Reduced primary overlay for better image visibility */}
        <div className="absolute inset-0 bg-slate-900/40"></div>
        
        {/* Lighter gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50"></div>
        
        {/* Subtle animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-valentor-red/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Final light gradient overlay for brand integration */}
        <div className="absolute inset-0 bg-gradient-to-r from-valentor-red/5 via-transparent to-slate-800/10" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Simplified Hero Content */}
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
              className="inline-flex items-center bg-white/15 backdrop-blur-xl rounded-full px-6 py-3 border border-white/30"
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
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="text-white drop-shadow-2xl">Valiant Risk</span>
                <span className="block bg-gradient-to-r from-valentor-red via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-2xl">
                  Group
                </span>
              </motion.h1>
            </div>

            {/* Simplified Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-light tracking-wide drop-shadow-lg">
                Discretion. Strength. Adaptability.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-valentor-red to-red-600 rounded-full"></div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
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
            <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl overflow-hidden max-w-md mx-auto mt-8">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-valentor-red to-red-500 p-4 text-white">
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 inline-block mb-3">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">
                    Get a Security Consultation
                  </h3>
                  <p className="text-white/80">
                    Speak with our experts about your security requirements
                  </p>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-gray-700">
                        First Name *
                      </label>
                      <div className="relative group">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-valentor-red transition-colors duration-200" />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
                          placeholder="John"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-gray-700">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <div className="relative group">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-valentor-red transition-colors duration-200" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
                        placeholder="john.doe@company.com"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <div className="relative group">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-valentor-red transition-colors duration-200" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  {/* Service Interest */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700">
                      Service Interest
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900"
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
                  
                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    size="sm" 
                    className="w-full bg-gradient-to-r from-valentor-red to-red-500 hover:from-red-600 hover:to-red-700 text-white py-3 text-md rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group font-semibold"
                  >
                    Request Consultation
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;