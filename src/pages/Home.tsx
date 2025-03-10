import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Services from '../components/Services';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;