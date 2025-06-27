'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ];

  const serviceItems = [
    { name: 'Risk Management & Intelligence', href: '/services/risk-management-intelligence' },
    { name: 'Executive Protection', href: '/services/executive-protection' },
    { name: 'Secure Transfer & Asset Escort', href: '/services/secure-transfer-asset-escort' },
    { name: 'Anti-Poaching & Wildlife Protection', href: '/services/anti-poaching-wildlife-protection' },
    { name: 'Hardware & Software Security', href: '/services/hardware-software-security' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200 transition-all duration-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="p-2 transition-all duration-300">
              <Image src="/images/valentor-logo.png" alt="Valentor Logo" width={60} height={60} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-lg font-medium transition-all duration-300 text-gray-700 hover:text-valentor-red hover:bg-valentor-red/5"
                onClick={() => setServicesOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 text-gray-700 hover:text-valentor-red hover:bg-valentor-red/5"
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                  servicesOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* Dropdown Menu */}
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200/50 overflow-hidden z-50"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="p-2">
                    {serviceItems.map((service, index) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-gray-700 hover:text-valentor-red hover:bg-valentor-red/5 rounded-lg transition-all duration-200 text-sm font-medium"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* CTA Button */}
            <div className="ml-6">
              <Link href="/contact">
                <Button className="px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl bg-valentor-red hover:bg-red-700 text-white">
                  Book A Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl transition-all duration-300 text-gray-900 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2 bg-white rounded-xl mt-4 mb-4 border border-gray-200/50 shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-6 py-3 text-gray-700 hover:text-valentor-red hover:bg-valentor-red/5 transition-all duration-200 font-medium rounded-xl mx-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Services */}
            <div className="px-2">
              <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Services
              </div>
              {serviceItems.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block px-6 py-2 text-gray-600 hover:text-valentor-red hover:bg-valentor-red/5 transition-all duration-200 text-sm rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <div className="px-4 pt-4">
              <Link href="/contact">
                <Button 
                  className="w-full bg-valentor-red hover:bg-red-700 text-white rounded-xl py-3 font-semibold shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Book A Consultation
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;