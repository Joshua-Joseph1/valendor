'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function SubscribePage() {
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mirror contact form behavior; integrate provider later
    try {
      // Placeholder success state
      setFormSubmitted(true);
      console.log('Newsletter subscription submitted:', formData);
    } catch (error) {
      console.error('Subscription failed:', error);
    }
  };

  return (
    <section
      ref={formRef}
      className="py-24 md:py-32 bg-[#1a1a1a] text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 sm:w-96 h-64 sm:h-96 bg-valentor-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 sm:w-80 h-48 sm:h-80 bg-blue-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        <div className="flex justify-center">
          <div className="max-w-7xl">
            {/* Subscribe Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4 leading-tight">
                  Subscribe to Newsletter
                </h2>
                <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
                <p className="text-base md:text-lg text-white/80 leading-relaxed font-[ui-sans-serif]">
                  Get updates on risk insights, protection strategies, and company news.
                </p>
              </div>

              <Card className="bg-transparent border-0 shadow-none">
                <CardContent className="p-0">
                  {formSubmitted ? (
                    <div className="text-center text-green-600 font-semibold">
                      Thank you! You have been subscribed to our newsletter.
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-white/80 font-[ui-sans-serif]">
                          Full Name *
                        </label>
                        <div className="relative group">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-3 border border-white/10 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D] transition-colors duration-300 bg-transparent text-white placeholder-gray-500"
                            placeholder=""
                            required
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-white/80 font-[ui-sans-serif]">
                          Email Address *
                        </label>
                        <div className="relative group">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-3 border border-white/10 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D] transition-colors duration-300 bg-transparent text-white placeholder-gray-500"
                            placeholder=""
                            required
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#C1272D] hover:bg-[#C1272D]/90 text-white py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
                        aria-label="Subscribe to the Valiant Risk Group newsletter"
                      >
                        Subscribe
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


