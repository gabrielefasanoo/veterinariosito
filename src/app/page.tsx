"use client";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <Services />
        <TeamSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
