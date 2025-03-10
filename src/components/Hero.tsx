import { useEffect, useRef } from 'react';
import { FaPaw, FaArrowDown } from 'react-icons/fa';
import gsap from

'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(heroRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5")
    .from(ctaRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.3");

    // Parallax effect
    gsap.to(heroRef.current, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        scrub: true
      }
    });
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        ref={heroRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1587764379873-97837921fd44?q=80&w=2574')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col items-left justify-center h-full text-white px-6 md:px-10 lg:px-20 max-w-8xl mx-auto">
        <div ref={textRef}>
          <FaPaw className="text-7xl mb-8 text-blue-400" />
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight">
            Centro Veterinario<br/>
            <span className="text-blue-400 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              San Francesco
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-12 text-gray-300">
            Dal 1995 ci prendiamo cura dei tuoi amici a quattro zampe con professionalità e passione
          </p>
        </div>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6">
          <button className="group bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Prenota Ora
            <span className="ml-2 group-hover:translate-x-2 inline-block transition-transform">→</span>
          </button>
          <button className="backdrop-blur-md bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 border border-white/30">
            Scopri i Servizi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
