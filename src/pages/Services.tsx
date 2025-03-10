import { motion } from "framer-motion";
import { FaStethoscope, FaSyringe, FaHospital } from 'react-icons/fa';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Services = () => {
  const services = [
    {
      icon: <FaStethoscope className="h-16 w-16 text-blue-600" />,
      title: "Visite di Alta Qualità",
      description: "Check-up completi e visite specialistiche con strumentazioni all'avanguardia per la salute del tuo animale.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <FaSyringe className="h-16 w-16 text-green-600" />,
      title: "Vaccinazioni",
      description: "Programmi di vaccinazione personalizzati e monitoraggio costante per la prevenzione delle malattie più comuni.",
      bgColor: "bg-green-50"
    },
    {
      icon: <FaHospital className="h-16 w-16 text-red-600" />,
      title: "Pronto Soccorso",
      description: "Assistenza immediata 24/7 per emergenze, con personale specializzato e attrezzature di ultima generazione.",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="relative bg-gray-800 text-white py-24 mb-16">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1200" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
      </div>
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-12 text-center text-gray-800"
        >
          I Nostri Servizi
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose lg:prose-xl mb-16 max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-600 text-lg leading-relaxed">
            Offriamo cure veterinarie complete e di alta qualità per il benessere del tuo animale domestico
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.bgColor} p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-white shadow-md">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <button className="mt-4 px-6 py-2 bg-white text-blue-600 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                  Scopri di più
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
