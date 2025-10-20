import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Importe todas as seções da nossa landing page
import HeroSection from '../../components/HeroSection';
import TrendingDeals from '../../components/TrendingDeals';
import AboutSection from '../../components/AboutSection';
import LaunchSection from '../../components/LaunchSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import NewsletterSection from '../../components/NewsletterSection';

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#about-us') {
      document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <HeroSection />
      <TrendingDeals />
      <AboutSection />
      <LaunchSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
};

export default LandingPage;
