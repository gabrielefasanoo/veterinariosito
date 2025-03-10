import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Prima colonna */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Servizi</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Visite Generali</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chirurgia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Radiologia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vaccinazioni</a></li>
            </ul>
          </div>

          {/* Seconda colonna */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Clinica</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Chi Siamo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Il Nostro Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Orari</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contatti</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Iscriviti per ricevere aggiornamenti e consigli per il tuo pet</p>
            <form className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="La tua email"
                  className="flex-1 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
                >
                  Iscriviti
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>

            {/* Info Legali */}
            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>© 2024 Clinica Veterinaria Aurora. Tutti i diritti riservati.</p>
              <p className="mt-1">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                {' '}&middot;{' '}
                <a href="#" className="hover:text-white">Termini e Condizioni</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
