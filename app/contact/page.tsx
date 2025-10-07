'use client';

import ContactHero from '@/components/contact/Hero';
import ContactMethods from '@/components/contact/Methods';
import ContactForm from '@/components/contact/Form';
import ContactCTA from '@/components/contact/CTA';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#1a1a1a] text-white">
      {/* <ContactHero /> */}
      <ContactForm />
      {/* <ContactCTA /> */}
    </div>
  );
};

export default ContactPage;