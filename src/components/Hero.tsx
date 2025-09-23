import React from 'react';
import { Phone, MessageCircle, ChevronDown, Instagram } from 'lucide-react';

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.querySelector('#menu');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 31, 77, 0.8), rgba(0, 31, 77, 0.6)), url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Creating Memorable Events
            <span className="block text-[#d4af37]">with Exquisite Catering</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            8+ years of experience • 1723+ orders completed
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="tel:+919600060849"
              className="group flex items-center space-x-3 bg-[#d4af37] text-[#001f4d] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#b8941f] transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Phone size={24} className="group-hover:animate-pulse" />
              <span>Call Now</span>
            </a>
            
            <a
              href="https://wa.me/919600060849"
              className="group flex items-center space-x-3 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <MessageCircle size={24} className="group-hover:animate-pulse" />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://www.instagram.com/_khans_events_officiall"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Instagram size={24} className="group-hover:animate-pulse" />
              <span>Instagram</span>
            </a>
            
            <button
              onClick={scrollToMenu}
              className="group flex items-center space-x-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#001f4d] transform hover:scale-105 transition-all duration-300"
            >
              <span>View Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white opacity-70" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 bg-[#d4af37] opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-[#d4af37] opacity-10 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;