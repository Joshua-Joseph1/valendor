'use client';

import AboutHero from '@/components/about/Hero';
import AboutStory from '@/components/about/Story';
import AboutValues from '@/components/about/Values';
import AboutLeadership from '@/components/about/Leadership';
import AboutStatistics from '@/components/about/Statistics';
import AboutCTA from '@/components/about/CTA';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#1a1a1a] text-white">
      <AboutHero />
      <AboutStory />
      <AboutValues />

      <AboutCTA />
    </div>
  );
};

export default AboutPage;