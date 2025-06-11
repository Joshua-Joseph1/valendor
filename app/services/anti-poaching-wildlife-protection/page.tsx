'use client';

import WildlifeProtectionHero from '@/components/apwp/Hero';
import WildlifeProtectionOfferings from '@/components/apwp/Offerings';
import WildlifeProtectionTechnology from '@/components/apwp/Technology';
import WildlifeProtectionImpact from '@/components/apwp/Impact';
import WildlifeProtectionCTA from '@/components/apwp/CTA';

const WildlifeProtectionPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <WildlifeProtectionHero />
      <WildlifeProtectionOfferings />
      <WildlifeProtectionTechnology />
      <WildlifeProtectionImpact />
      <WildlifeProtectionCTA />
    </div>
  );
};

export default WildlifeProtectionPage;