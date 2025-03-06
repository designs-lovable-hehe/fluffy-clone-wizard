
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12',
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight">
          <span className="text-gradient">brand</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#work" className="nav-link">Work</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#" className="btn-primary ml-4">Get Started</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          'fixed inset-0 top-[73px] bg-background z-40 md:hidden transition-transform duration-300 ease-in-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          <a 
            href="#work" 
            className="text-2xl font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Work
          </a>
          <a 
            href="#features" 
            className="text-2xl font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#contact" 
            className="text-2xl font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <a 
            href="#" 
            className="btn-primary text-lg mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
