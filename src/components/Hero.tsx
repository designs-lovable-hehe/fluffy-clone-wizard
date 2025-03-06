
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beamsRef.current) return;
    
    const createBeam = () => {
      if (!beamsRef.current) return;
      
      const beam = document.createElement('div');
      beam.classList.add('beam', 'animate-beam');
      
      // Random position
      const x = Math.random() * beamsRef.current.offsetWidth;
      const y = Math.random() * beamsRef.current.offsetHeight;
      
      beam.style.left = `${x}px`;
      beam.style.top = `${y}px`;
      
      beamsRef.current.appendChild(beam);
      
      // Remove after animation
      setTimeout(() => {
        beam.remove();
      }, 1500);
    };

    const intervalId = setInterval(createBeam, 300);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden">
      <div ref={beamsRef} className="absolute inset-0 pointer-events-none" />
      
      <div className="container-custom text-center max-w-4xl mx-auto px-6 z-10">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-block">
            <span className="chip mb-4">Design Refined</span>
          </div>
          
          <h1 className="heading-1 text-balance">
            Creating digital products with
            <span className="text-gradient"> pixel perfect </span>
            design
          </h1>
          
          <p className="subheading text-balance mt-6 max-w-2xl mx-auto">
            We design and develop exceptional digital experiences that make an impact. 
            Our work is defined by simplicity, elegance, and attention to every detail.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="#" className="btn-primary w-full sm:w-auto">
              Get Started
            </a>
            <a href="#" className="btn-secondary w-full sm:w-auto">
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#work" 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown size={20} className="text-muted-foreground" />
      </a>
    </section>
  );
};

export default Hero;
