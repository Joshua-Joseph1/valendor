'use client';

import WildlifeProtectionHero from '@/components/apwp/Hero';
import WildlifeProtectionOfferings from '@/components/apwp/Offerings';
import WildlifeProtectionTechnology from '@/components/apwp/Technology';
import WildlifeProtectionImpact from '@/components/apwp/Impact';
import WildlifeProtectionCTA from '@/components/apwp/CTA';

const WildlifeProtectionPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#1A1A1A] text-white antialiased">
      <WildlifeProtectionHero />
      <WildlifeProtectionOfferings />
      <WildlifeProtectionTechnology />

      <WildlifeProtectionCTA />
    </div>
  );
};

export default WildlifeProtectionPage;