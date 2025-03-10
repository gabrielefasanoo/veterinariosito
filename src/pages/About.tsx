import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
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
          Chi Siamo
        </motion.h1>
        
        {/* Sezione Introduttiva */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose lg:prose-xl mb-16 max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-600 text-lg leading-relaxed">
            La nostra clinica veterinaria offre servizi di alta qualità dal 2005. 
            Il nostro team di professionisti è dedicato alla cura e al benessere dei vostri animali.
          </p>
        </motion.div>

        {/* Sezione Storia */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-12 mb-24 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold mb-6 text-gray-800 border-b-4 border-blue-500 pb-2 inline-block">
              La Nostra Storia
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Fondata nel 2005, la nostra clinica è nata dalla passione per gli animali del Dott. Marco Rossi.
              Nel corso degli anni, ci siamo evoluti fino a diventare un centro di riferimento per la salute animale nella zona.
            </p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200"
              alt="La nostra clinica" 
              className="rounded-2xl shadow-2xl w-full h-auto hover:shadow-3xl transition-shadow duration-300"
            />
          </motion.div>
        </motion.div>

        {/* Sezione Team */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-semibold mb-12 text-center text-gray-800">Il Nostro Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Dott. Marco Rossi",
                role: "Direttore Sanitario",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400",
              },
              {
                name: "Dott.ssa Laura Bianchi",
                role: "Chirurgo Veterinario",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400",
              },
              {
                name: "Dott.ssa Anna Verdi",
                role: "Specialista in medicina interna",
                image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400",
              }
            ].map((member, index) => (
              <motion.div 
                key={member.name}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-56 h-56 rounded-full mx-auto mb-6 object-cover shadow-md border-4 border-white"
                />
                <h3 className="font-semibold text-2xl text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sezione Servizi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-4xl font-semibold mb-12 text-center text-gray-800">I Nostri Servizi</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Visite di routine",
              "Chirurgia",
              "Diagnostica avanzata",
              "Pronto soccorso 24/7",
              "Dermatologia",
              "Nutrizione"
            ].map((service, index) => (
              <motion.div 
                key={service}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="font-semibold text-xl mb-3 text-gray-800">{service}</h3>
                <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
