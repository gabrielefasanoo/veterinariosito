import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/services" className="text-gray-700 hover:text-gray-900 px-3 py-2">
              Servizi Veterinari
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2">
              Chi Siamo
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2">
              Contattaci
            </Link>
            
            {/* Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-700 hover:text-gray-900 px-3 py-2"
              >
                Altri Servizi
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl z-20">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Servizio 1</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Servizio 2</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Servizio 3</a>
                </div>
              )}
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Scopri
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Prenota
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
