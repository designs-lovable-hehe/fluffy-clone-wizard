
import React from 'react';
import { cn } from '@/lib/utils';

interface WorkItemProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  className?: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ 
  title, 
  description, 
  image, 
  reverse = false,
  className
}) => {
  return (
    <div 
      className={cn(
        'flex flex-col lg:flex-row items-center gap-8 lg:gap-12',
        reverse && 'lg:flex-row-reverse',
        className
      )}
    >
      <div className="w-full lg:w-1/2 space-y-4">
        <h3 className="heading-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
          View Case Study
        </a>
      </div>
      
      <div className="w-full lg:w-1/2 relative group">
        <div className="rounded-lg overflow-hidden relative border-glow">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

const Work: React.FC = () => {
  const works = [
    {
      title: "Financial Dashboard Redesign",
      description: "A comprehensive redesign of a complex financial platform, focusing on clarity, efficiency, and user experience.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "E-commerce Mobile Application",
      description: "An elegant shopping experience designed for modern consumers, with attention to detail in every interaction.",
      image: "https://images.unsplash.com/photo-1556742208-999815fca738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Healthcare Platform",
      description: "A patient-centered healthcare platform that transforms complex medical processes into simple, intuitive experiences.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <section id="work" className="py-24 bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="chip mb-4">Selected Projects</span>
          <h2 className="heading-2">Our Recent Work</h2>
          <p className="subheading mt-4 max-w-2xl mx-auto">
            Explore our portfolio of carefully crafted digital experiences
          </p>
        </div>
        
        <div className="space-y-24">
          {works.map((work, index) => (
            <WorkItem 
              key={index}
              title={work.title}
              description={work.description}
              image={work.image}
              reverse={index % 2 !== 0}
              className="opacity-0 translate-y-8"
              // Add animation when element is in viewport
              {...{ "data-animate": true }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
