import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Animazione iniziale
    gsap.from("nav", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img className="h-12 w-auto" src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?w=200" alt="Logo Veterinario" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['services', 'about', 'contact'].map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                className={`text-${isScrolled ? 'gray-800' : 'white'} hover:text-blue-500 px-3 py-2 text-sm font-medium transition-colors`}
              >
                {item === 'services' ? 'Servizi Veterinari' :
                 item === 'about' ? 'Chi Siamo' : 'Contattaci'}
              </Link>
            ))}
            
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Prenota Ora
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/services" className="block text-gray-700 hover:text-gray-900 px-3 py-2">
              Servizi Veterinari
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-gray-900 px-3 py-2">
              Chi Siamo
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-gray-900 px-3 py-2">
              Contattaci
            </Link>
            <a href="#" className="block text-gray-700 hover:text-gray-900 px-3 py-2">
              Altri Servizi
            </a>
            <div className="space-y-2 pt-2">
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Scopri
              </button>
              <button className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Prenota
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
