
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const EventsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      title: "Festival de Música 2024",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "20-22 Jun",
      location: "São Paulo, SP",
      price: "R$ 150",
      category: "Música",
    },
    {
      title: "Show do Metallica",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "15 Jul",
      location: "Rio de Janeiro, RJ",
      price: "R$ 350",
      category: "Música",
      available: true
    },
    {
      title: "Workshop de Fotografia",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "10 Ago",
      location: "Curitiba, PR",
      price: "R$ 90",
      category: "Arte",
    },
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Eventos em{" "}
            <span className="text-primary">
              Destaque
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubra os eventos mais aguardados e garanta seu ingresso com antecedência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-primary">
                  {event.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <FiCalendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiMapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-accent font-semibold text-lg">
                    {event.price}
                  </span>
                  <div className="flex items-center gap-2">
                    {event.available && (
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">
                        Disponível
                      </span>
                    )}
                    <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary/5 transition-colors text-lg font-medium">
            Ver Todos os Eventos
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
