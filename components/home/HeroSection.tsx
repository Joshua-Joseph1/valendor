'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

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
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1a1a1a]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/60 via-[#1a1a1a]/40 to-[#1a1a1a]/60"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-valentor-red/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-valentor-blue/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-24 md:py-32">
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
                className="text-4xl md:text-6xl font-[ui-serif] tracking-tight leading-tight"
              >
                Discretion. Strength. Adaptability.
              </motion.h1>
              <div className="h-px w-16 bg-[#344154]" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-base md:text-lg text-[#AFC1CF] md:text-white/80 font-[ui-sans-serif] leading-relaxed">
                Distinguished security solutions, crafted for the discerning
                few. Valiant delivers intelligence-led protection across
                industries and environments—precise, unobtrusive, and
                unyielding.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/contact" aria-label="Arrange a Private Consultation with Valiant Risk Group">
                <Button
                  size="lg"
                  className="bg-[#C1272D] hover:bg-[#C1272D]/90 text-white px-8 py-4 text-base md:text-lg rounded-xl transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D] will-change-transform"
                >
                  Arrange a Private Consultation
                </Button>
              </Link>
              <button
                onClick={onScrollToServices}
                className="text-white/90 hover:text-white underline decoration-[#344154]/60 hover:decoration-white underline-offset-4 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D] text-base md:text-lg"
                aria-label="Explore Our Offerings at Valiant Risk Group"
              >
                Explore Our Offerings
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="xl:pl-8"
          >
            <Card className="bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/10 transition-colors duration-300 rounded-xl overflow-hidden max-w-md mx-auto mt-8">
              <div className="bg-[#1a1a1a]/60 border-b border-white/10 p-4 text-white">
                <div className="text-center">
                  <h3 className="text-lg font-[ui-serif] tracking-tight mb-1">
                    Arrange a Private Consultation
                  </h3>
                  <p className="text-white/70 font-[ui-sans-serif]">
                    Speak with our experts about your security needs
                  </p>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-gray-300 font-[ui-sans-serif]">
                        First Name *
                      </label>
                      <div className="relative group">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-3 border border-white/10 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D] transition-colors duration-300 bg-[#1a1a1a] text-white placeholder-gray-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-gray-300 font-[ui-sans-serif]">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 border border-white/10 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D] transition-colors duration-300 bg-[#1a1a1a] text-white placeholder-gray-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-300 font-[ui-sans-serif]">
                      Email Address *
                    </label>
                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 border border-white/10 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D] transition-colors duration-300 bg-[#1a1a1a] text-white placeholder-gray-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-300 font-[ui-sans-serif]">
                      Phone Number
                    </label>
                    <div className="relative group">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 border border-white/10 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D] transition-colors duration-300 bg-[#1a1a1a] text-white placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-300 font-[ui-sans-serif]">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 border border-white/10 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D] transition-colors duration-300 bg-[#1a1a1a] text-white"
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
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    size="sm"
                    className="w-full bg-[#C1272D] hover:bg-[#C1272D]/90 text-white py-3 text-md rounded-md transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
                    aria-label="Arrange a Private Consultation with Valiant Risk Group"
                  >
                    Arrange a Private Consultation
                  </Button>
                </form>
                {formStatus && (
                  <div className="mt-4 text-center text-sm text-gray-300">
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
