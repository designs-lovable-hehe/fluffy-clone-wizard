
import { useEffect } from 'react';

export const useAnimateOnScroll = () => {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('[data-animate="true"]');
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.85;
        
        if (isVisible) {
          element.classList.add('animate-slide-in');
          element.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    };
    
    // Run once on mount to animate elements already in view
    animateElements();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateElements);
    
    return () => {
      window.removeEventListener('scroll', animateElements);
    };
  }, []);
};
