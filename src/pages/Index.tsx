
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import EventsSection from '../components/EventsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <EventsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
