import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Clock, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#001f4d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-[#d4af37] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Khans Events
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Creating memorable events with exquisite catering for over 8 years. 
              Specializing in authentic South Indian cuisine and signature dishes 
              that make every celebration unforgettable.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <Star className="text-[#d4af37]" size={20} />
                <span className="text-sm">8+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="text-[#d4af37]" size={20} />
                <span className="text-sm">1723+ Orders Completed</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#d4af37]">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#d4af37] mt-1" />
                <div>
                  <p className="text-gray-300 text-sm">
                    31/19, West Cemetery Road,<br />
                    Old Washermenpet,<br />
                    Chennai – 600021
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#d4af37]" />
                <a href="tel:+919600060849" className="text-gray-300 hover:text-[#d4af37] transition-colors duration-300">
                  +91 9600060849
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#d4af37]" />
                <a href="mailto:khanseventsofficial@gmail.com" className="text-gray-300 hover:text-[#d4af37] transition-colors duration-300 text-sm">
                  khanseventsofficial@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links & Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#d4af37]">Quick Links</h4>
            <div className="space-y-3 mb-6">
              {[
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' }
].map((link) => (
  <Link
    key={link.path}
    to={link.path}
    className="block text-gray-300 hover:text-[#d4af37] transition-colors duration-300"
  >
    {link.name}
  </Link>
))}

            </div>
            
            <div>
              <h5 className="font-semibold mb-2 flex items-center space-x-2">
                <Clock size={18} className="text-[#d4af37]" />
                <span>Business Hours</span>
              </h5>
              <p className="text-gray-300 text-sm">
                Mon - Sun: 8:00 AM - 10:00 PM<br />
                Emergency: 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Khans Events. All rights reserved.
              
            </div>
            
            
            <div className="text-gray-400 text-sm">Designed and Developed By Lokesh Founder of TecLanC</div>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.instagram.com/tec_loke"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-[#d4af37] transition-colors duration-300"
              >
                <Instagram size={20} />
                <span className="text-sm">Follow us on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;