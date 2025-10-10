'use client';

import HardwareSoftwareHero from '@/components/hss/Hero';
import HardwareSoftwareOfferings from '@/components/hss/Offerings';
import HardwareSoftwareSolutions from '@/components/hss/Solutions';
import HardwareSoftwareFeatures from '@/components/hss/Features';
import HardwareSoftwareCTA from '@/components/hss/CTA';

const HardwareSoftwareSecurityPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#1a1a1a] text-white antialiased">
      <HardwareSoftwareHero />
      <HardwareSoftwareOfferings />
      <HardwareSoftwareSolutions />
      {/* <HardwareSoftwareFeatures /> */}
      <HardwareSoftwareCTA />
    </div>
  );
};

export default HardwareSoftwareSecurityPage;