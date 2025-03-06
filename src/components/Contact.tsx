
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="chip mb-4">Get in Touch</span>
          <h2 className="heading-2">Contact Us</h2>
          <p className="subheading mt-4 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Get in touch and let's create something extraordinary together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium">Email Us</h3>
                <p className="text-muted-foreground mt-1">Our friendly team is here to help.</p>
                <a href="mailto:hello@example.com" className="text-primary hover:underline mt-2 block">
                  hello@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium">Call Us</h3>
                <p className="text-muted-foreground mt-1">Mon-Fri from 9am to 5pm.</p>
                <a href="tel:+1234567890" className="text-primary hover:underline mt-2 block">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium">Visit Us</h3>
                <p className="text-muted-foreground mt-1">Come say hello at our office.</p>
                <address className="not-italic text-primary mt-2 block">
                  123 Design Street, Creative City, 10001
                </address>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 border border-border/40">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-md border border-input px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-input px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full rounded-md border border-input px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-md border border-input px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
