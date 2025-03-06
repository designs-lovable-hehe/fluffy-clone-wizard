import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMap, FiTrendingUp, FiSearch } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

const HeroSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Descubra eventos
              <span className="block text-accent">extraordinários</span>
              perto de você
            </h1>
            
            <p className="text-gray-600 text-lg max-w-xl">
              Encontre e compre ingressos para os melhores shows, festivais, 
              conferências e muito mais. Tudo em um só lugar.
            </p>

            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="Buscar eventos..."
                className="input pl-12 pr-4 py-4 w-full text-lg"
              />
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Explorar Eventos
              </button>
              <button className="btn-secondary">
                Criar Evento
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <Stat icon={<FiCalendar />} number="10k+" label="Eventos" />
              <Stat icon={<FiMap />} number="50+" label="Cidades" />
              <Stat icon={<FiTrendingUp />} number="1M+" label="Ingressos" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              <EventCard
                image="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14"
                title="Festival de Música 2024"
                date="20-22 Jun"
                location="São Paulo, SP"
                price="R$ 150"
                className="transform rotate-3 hover:rotate-0"
              />
              <EventCard
                image="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4"
                title="Show do Metallica"
                date="15 Jul"
                location="Rio de Janeiro, RJ"
                price="R$ 350"
                className="-mt-8 -ml-8 transform -rotate-3 hover:rotate-0"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl opacity-20 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-20 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Stat({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-accent flex justify-center mb-2 text-2xl">{icon}</div>
      <div className="text-2xl font-bold">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

function EventCard({ 
  image, 
  title, 
  date, 
  location, 
  price, 
  className = "" 
}: { 
  image: string;
  title: string;
  date: string;
  location: string;
  price: string;
  className?: string;
}) {
  return (
    <div className={`card p-4 transition-all duration-300 ${className}`}>
      <img
        src={image}
        alt={title}
        className="rounded-lg w-full h-48 object-cover"
      />
      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center text-gray-600">
          <FiCalendar className="mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FiMap className="mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className="text-accent font-medium">{price}</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            Disponível
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection; 