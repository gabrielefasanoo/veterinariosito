import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const TeamSection = () => {
  const team = [
    {
      name: "Dr.ssa Elena Colombo",
      role: "Direttore Sanitario",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80",
      description: "Specialista in medicina interna e cardiologia veterinaria. Master in ecografia avanzata.",
      linkedin: "#",
      email: "e.colombo@vetmonza.it"
    },
    {
      name: "Dr. Andrea Fumagalli",
      role: "Chirurgo Veterinario",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80",
      description: "Chirurgo ortopedico con specializzazione in chirurgia mini-invasiva. Dottorato in traumatologia.",
      linkedin: "#",
      email: "a.fumagalli@vetmonza.it"
    },
    {
      name: "Dr.ssa Alberto Ricci",
      role: "Specialista in Diagnostica",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80",
      description: "Esperto in diagnostica per immagini e radiologia digitale. Specializzata in oncologia veterinaria.",
      linkedin: "#",
      email: "a.ricci@vetmonza.it"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Il Nostro <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professionisti dedicati alla salute e al benessere dei tuoi animali
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-[300px]">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.description}</p>
                
                <div className="flex space-x-4">
                  <a 
                    href={member.linkedin}
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-50 transition-colors"
                  >
                    <FaLinkedin className="h-5 w-5 text-blue-600" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-50 transition-colors"
                  >
                    <FaEnvelope className="h-5 w-5 text-blue-600" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
