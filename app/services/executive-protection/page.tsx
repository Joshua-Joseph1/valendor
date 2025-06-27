'use client';

import ExecutiveProtectionHero from '@/components/ep/Hero';
import ExecutiveProtectionOfferings from '@/components/ep/Offerings';
import ExecutiveProtectionFeatures from '@/components/ep/Features';
import ExecutiveProtectionCTA from '@/components/ep/CTA';

const ExecutiveProtectionPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <ExecutiveProtectionHero />
      <ExecutiveProtectionOfferings />
      <ExecutiveProtectionFeatures />
      <ExecutiveProtectionCTA />
    </div>
  );
};

export default ExecutiveProtectionPage;