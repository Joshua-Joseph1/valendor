'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
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

  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
        setFormStatus('Form submitted successfully!');
        console.log('Form submitted successfully:', formData);
      } else {
        setFormStatus('Form submission failed. Please try again.');
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      setFormStatus('Error submitting form. Please try again.');
      console.error('Error submitting form:', error);
    }

  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center text-white overflow-hidden pt-24 sm:pt-12"
      style={{
        backgroundImage: `url('/images/hero-image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1a1a1a]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/60 via-[#1a1a1a]/40 to-[#1a1a1a]/60"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-valentor-red/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-valentor-blue/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="text-white drop-shadow-2xl">Valiant Risk</span>
                <span className="block text-white drop-shadow-2xl">
                  Group
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-light tracking-wide drop-shadow-lg leading-relaxed">
                Discretion. Strength. Adaptability. These pillars form the bedrock of our ethos. At Valiant, we deliver distinguished solutions crafted for the discerning few, addressing the unique challenges of a global clientele across varied industries and environments.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-valentor-red to-red-600 rounded-full"></div>
            </motion.div>

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
                Explore Our Offerings
                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="xl:pl-8"
          >
            <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl overflow-hidden max-w-md mx-auto mt-8">
              <div className="bg-gradient-to-r from-valentor-red to-red-500 p-4 text-white">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-1">
                    Secure Your Consultation
                  </h3>
                  <p className="text-white/80">
                    Speak with our experts about your security needs
                  </p>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-gray-700">
                        First Name *
                      </label>
                      <div className="relative group">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
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
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <div className="relative group">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-valentor-red focus:border-valentor-red transition-all duration-200 bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
                      />
                    </div>
                  </div>

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

                  <Button
                    type="submit"
                    size="sm"
                    className="w-full bg-gradient-to-r from-valentor-red to-red-500 hover:from-red-600 hover:to-red-700 text-white py-3 text-md rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group font-semibold"
                  >
                    Secure Your Consultation
                    <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Button>
                </form>
                {formStatus && (
                  <div className="mt-4 text-center text-sm text-gray-700">
                    {formStatus}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
