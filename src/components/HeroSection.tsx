
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
    <section ref={ref} className="relative min-h-[90vh] flex items-center bg-white">
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
                className="w-full px-12 py-4 border border-gray-200 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-accent text-white px-8 py-3 rounded-full hover:bg-accent/90 transition-colors font-medium">
                Explorar Eventos
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary/5 transition-colors font-medium">
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
                image="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3"
                title="Festival de Música 2024"
                date="20-22 Jun"
                location="São Paulo, SP"
                price="R$ 150"
                className="transform"
              />
              <EventCard
                image="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
                title="Show do Metallica"
                date="15 Jul"
                location="Rio de Janeiro, RJ"
                price="R$ 350"
                className="-mt-8"
                available={true}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Stat({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-primary flex justify-center mb-2 text-2xl">{icon}</div>
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
  className = "",
  available = false
}: { 
  image: string;
  title: string;
  date: string;
  location: string;
  price: string;
  className?: string;
  available?: boolean;
}) {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${className}`}>
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center text-gray-600 text-sm">
          <FiCalendar className="mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <FiMap className="mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className="text-accent font-medium">{price}</span>
          {available && (
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">
              Disponível
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
