"use client";

import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Services />
      </main>
      <Footer />
    </div>
  );
}
