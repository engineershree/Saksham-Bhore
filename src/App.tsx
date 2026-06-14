import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ParticleBackground from "./components/ui/ParticleBackground";
import CustomCursor from "./components/ui/CustomCursor";
import CommandPalette from "./components/ui/CommandPalette";

// Sections
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Showcases from "./components/sections/Showcases";
import FutureVision from "./components/sections/FutureVision";
import Leadership from "./components/sections/Leadership";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-gray-300 font-inter selection:bg-accent-cyan/30 selection:text-white cursor-none">
      <CustomCursor />
      <CommandPalette />
      <ParticleBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        
        {/* Aggregated showcases for all 8 projects */}
        <Showcases />
        
        <FutureVision />
        <Leadership />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
