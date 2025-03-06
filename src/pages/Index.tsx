
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useAnimateOnScroll } from '@/lib/useAnimateOnScroll';

const Index: React.FC = () => {
  // Initialize scroll animations
  useAnimateOnScroll();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Work />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
