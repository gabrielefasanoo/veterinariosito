"use client";

import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
