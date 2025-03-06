
import React from 'react';
import { Check, Layers, Zap, PenTool, Smartphone, Users } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md border border-border/40 relative overflow-hidden group">
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-md bg-primary/5 flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-tl-[100px] transform translate-x-8 translate-y-8 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300"></div>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive interfaces with a focus on user experience and visual harmony.",
      icon: <PenTool size={24} />,
    },
    {
      title: "Development",
      description: "Building robust applications with clean, efficient, and maintainable code.",
      icon: <Layers size={24} />,
    },
    {
      title: "Mobile Apps",
      description: "Crafting native and cross-platform mobile experiences for iOS and Android.",
      icon: <Smartphone size={24} />,
    },
    {
      title: "Fast Performance",
      description: "Optimizing for speed and efficiency across all platforms and devices.",
      icon: <Zap size={24} />,
    },
    {
      title: "User Research",
      description: "Understanding user needs through research, testing, and validation.",
      icon: <Users size={24} />,
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing to ensure flawless functionality and reliability.",
      icon: <Check size={24} />,
    },
  ];

  return (
    <section id="features" className="py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="chip mb-4">Our Services</span>
          <h2 className="heading-2">What We Do</h2>
          <p className="subheading mt-4 max-w-2xl mx-auto">
            We offer a comprehensive range of services to help your business thrive in the digital landscape
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
