import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactForm from '../components/Contact';

const Contact = () => {
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
          Contattaci
        </motion.h1>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
