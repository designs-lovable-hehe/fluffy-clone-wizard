import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 text-center">
      <h1 className="text-5xl font-bold text-pink-500 mb-4">
        Descubra eventos <span className="text-black">extraordinários</span> perto de você
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Encontre e compre ingressos para os melhores shows, festivais, conferências e muito mais. Tudo em um só lugar.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-pink-500 text-white py-3 px-6 rounded-full hover:bg-pink-600 transition">
          Explorar Eventos
        </button>
        <button className="border-2 border-pink-500 text-pink-500 py-3 px-6 rounded-full hover:bg-pink-500 hover:text-white transition">
          Criar Evento
        </button>
      </div>
      <div className="flex justify-center mt-8 space-x-8">
        <div className="text-center">
          <span className="text-2xl font-bold">10k+</span>
          <p className="text-gray-600">Eventos</p>
        </div>
        <div className="text-center">
          <span className="text-2xl font-bold">50+</span>
          <p className="text-gray-600">Cidades</p>
        </div>
        <div className="text-center">
          <span className="text-2xl font-bold">1M+</span>
          <p className="text-gray-600">Ingressos</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
