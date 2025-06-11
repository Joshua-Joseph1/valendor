'use client';

import SecureTransferHero from '@/components/stae/ServiceHero';
import SecureTransferOfferings from '@/components/stae/ServiceOfferings';
import SecureTransferCapabilities from '@/components/stae/ServiceCapabilities';
import SecureTransferStatistics from '@/components/stae/ServiceStatictics';
import SecureTransferCTA from '@/components/stae/ServiceCTA';

const SecureTransferPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <SecureTransferHero />
      <SecureTransferOfferings />
      <SecureTransferCapabilities />
      <SecureTransferStatistics />
      <SecureTransferCTA />
    </div>
  );
};

export default SecureTransferPage;