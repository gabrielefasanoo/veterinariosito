"use client";

import { FaStethoscope, FaSyringe, FaHospital, FaArrowRight } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaStethoscope className="h-16 w-16" />,
      title: "Visite di Alta Qualità",
      description: "Check-up completi e visite specialistiche con strumentazioni all'avanguardia.",
      bgColor: "from-blue-500 to-blue-600",
      textColor: "text-blue-100"
    },
    {
      icon: <FaSyringe className="h-16 w-16" />,
      title: "Vaccinazioni",
      description: "Programmi di vaccinazione personalizzati per la prevenzione.",
      bgColor: "from-green-500 to-green-600",
      textColor: "text-green-100"
    },
    {
      icon: <FaHospital className="h-16 w-16" />,
      title: "Pronto Soccorso 24/7",
      description: "Assistenza immediata per emergenze, sempre disponibili.",
      bgColor: "from-red-500 to-red-600",
      textColor: "text-red-100"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white" id="servizi">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Offriamo cure veterinarie di eccellenza con un team di professionisti dedicati al benessere del tuo animale
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl transition-all duration-500"
            >
              <div className={`bg-gradient-to-br ${service.bgColor} p-8 h-full transform transition-transform duration-500 group-hover:scale-105`}>
                <div className="relative z-10">
                  <div className="mb-8 p-4 rounded-full bg-white/10 backdrop-blur-sm w-fit">
                    <div className={`${service.textColor}`}>{service.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/90 mb-8 text-lg">{service.description}</p>
                  <button className="flex items-center space-x-2 text-white border border-white/30 px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 group-hover:border-white/50">
                    <span>Scopri di più</span>
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => window.location.href = '/prenota'}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Prenota una visita
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
