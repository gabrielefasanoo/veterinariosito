"use client";

import { FaPaw, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1587764379873-97837921fd44?q=80&w=2574')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      <img 
        src="https://images.unsplash.com/photo-1587764379873-97837921fd44?q=80&w=2574"
        alt="Veterinario con cagnolino"
        className="absolute inset-0 w-full h-full object-cover opacity-0"
      />

      <div className="relative z-10 flex flex-col items-left justify-center h-full text-white px-6 md:px-10 lg:px-10 max-w-7xl mx-auto w-full">
        <FaPaw className="text-7xl mb-8 text-blue-400 animate-bounce" />
        
        <h1 className="text-5xl md:text-7xl font-bold text-left mb-6 tracking-tight max-w-4xl">
          Centro Veterinario <span className="text-blue-400">San Francesco</span><br />
          Monza
        </h1>
        
        <p className="text-xl md:text-2xl text-left max-w-2xl mb-12 text-gray-200">
          Dal 1995 ci prendiamo cura dei tuoi amici a quattro zampe con professionalità e passione
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <button 
            onClick={() => scrollToSection('prenota')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
          >
            Prenota Ora
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
          </button>
          <button 
            onClick={() => scrollToSection('servizi')}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 border-2 border-white/30"
          >
            Scopri i Servizi
          </button>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <FaArrowDown className="text-2xl text-white/70" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
