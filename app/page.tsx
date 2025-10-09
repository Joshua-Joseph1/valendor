'use client';

import { useRef } from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import MissionVisionSection from '@/components/home/MissionVisionSection';
import CTASection from '@/components/home/CTASection';

const HomePage = () => {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      (servicesRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white antialiased">
      <HeroSection onScrollToServices={scrollToServices} />
      <div ref={servicesRef}>
        <ServicesSection />
      </div>
      <AboutSection />
      <MissionVisionSection />
      <CTASection />
    </div>
  );
};

export default HomePage;