"use client";

import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          Utilizziamo i cookie per migliorare la tua esperienza. Continuando a navigare, accetti la nostra politica sui cookie.
        </p>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Accetta
          </button>
          <a href="/privacy" className="text-sm underline hover:text-blue-400">
            Maggiori informazioni
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
