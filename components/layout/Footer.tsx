import Link from 'next/link';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const serviceLinks = [
    { name: 'Risk Management', href: '/services/risk-management-intelligence' },
    { name: 'Executive Protection', href: '/services/executive-protection' },
    { name: 'Secure Transfer', href: '/services/secure-transfer-asset-escort' },
    { name: 'Wildlife Protection', href: '/services/anti-poaching-wildlife-protection' },
    { name: 'Security Systems', href: '/services/hardware-software-security' },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/images/logo.png"
                alt="Valiant Risk Group Logo"
                className="h-20 w-30"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Global risk management and protection consultancy providing
              discrete, professional security services worldwide.
            </p>
            <p className="text-sm text-valentor-red font-semibold">
              Discretion. Strength. Adaptability.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-valentor-red transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-valentor-red" />
                <span className="text-gray-300"></span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-valentor-red" />
                <span className="text-gray-300">info@valentorgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-valentor-red" />
                <span className="text-gray-300">Global Operations</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-valentor-red transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Valiant Risk Group. All rights reserved. Professional
            security services worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;