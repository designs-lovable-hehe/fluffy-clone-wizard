import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGlobe, FiTrendingUp, FiLayout, FiShield } from 'react-icons/fi';

const FeaturesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "Alcance Global",
      description: "Promova seus eventos para um público mundial com nossa plataforma multilíngue.",
      gradient: "from-[#FF416C] to-[#FF4B2B]",
      delay: 0,
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Analytics Avançado",
      description: "Acompanhe vendas, engajamento e tendências em tempo real.",
      gradient: "from-[#7F7FD5] to-[#91EAE4]",
      delay: 0.1,
    },
    {
      icon: <FiLayout className="w-8 h-8" />,
      title: "Gestão Simplificada",
      description: "Interface intuitiva para gerenciar todos os aspectos do seu evento.",
      gradient: "from-[#4776E6] to-[#8E54E9]",
      delay: 0.2,
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Pagamentos Seguros",
      description: "Transações protegidas e múltiplas opções de pagamento.",
      gradient: "from-[#00B4DB] to-[#0083B0]",
      delay: 0.3,
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/50 pointer-events-none" />
      <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-6">
            Recursos que fazem a{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              diferença
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Nossa plataforma oferece todas as ferramentas necessárias para o sucesso do seu evento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: feature.delay }}
              className="group"
            >
              <div className="h-[400px] relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Card Content */}
                <div className="relative h-full p-8 flex flex-col">
                  {/* Icon Container */}
                  <div className="mb-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-4 text-white transform group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Indicator */}
                  <div className="mt-auto">
                    <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full transform origin-left scale-0 group-hover:scale-100 transition-transform duration-300" />
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
          <button className="bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-full transition-colors duration-300 text-lg font-medium">
            Explorar Todos os Recursos
          </button>
        </motion.div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection; 