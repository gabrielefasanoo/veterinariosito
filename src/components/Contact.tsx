import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaDirections } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informazioni di contatto */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Contattaci
            </h2>

            <div className="space-y-4">
              {/* Telefono */}
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaPhone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telefono</p>
                  <p className="text-lg font-semibold">+39 123 456 7890</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaEnvelope className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-semibold">info@clinicaveterinaria.it</p>
                </div>
              </div>

              {/* Indirizzo */}
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaMapMarkerAlt className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Indirizzo</p>
                  <p className="text-lg font-semibold">Via Roma 123, Milano</p>
                </div>
              </div>
            </div>

            {/* Pulsante indicazioni */}
            <button 
              onClick={() => window.open('https://maps.google.com?q=Via+Roma+123+Milano')}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <FaDirections className="h-5 w-5" />
              <span>Ottieni indicazioni</span>
            </button>
          </div>

          {/* Mappa */}
          <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.5!2d9.1!3d45.4!4m5!3m4!1s0x0:0x0!8m2!3d45.4!4d9.1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
