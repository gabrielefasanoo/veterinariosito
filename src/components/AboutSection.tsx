const AboutSection = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              La tua clinica veterinaria <br />
              <span className="text-blue-600">di fiducia dal 2000</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Con oltre 20 anni di esperienza, il nostro team di veterinari qualificati 
              si dedica con passione alla cura dei vostri amici a quattro zampe. 
              Utilizziamo le più moderne tecnologie e approcci terapeutici per garantire 
              il massimo della qualità nelle cure veterinarie.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Scopri di più
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Contattaci
              </button>
            </div>
          </div>
          
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80" 
              alt="Veterinario con animale"
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
