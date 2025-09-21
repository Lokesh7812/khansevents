import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' }
  ];

  // helper to decide text color for desktop
  const getLinkClass = (href) => {
    if (location.pathname === href) {
      return 'text-[#d4af37] font-semibold'; // active
    }

    // home page ("/") and not scrolled -> white
    if (location.pathname === '/' && !isScrolled) {
      return 'text-white hover:text-[#d4af37]';
    }

    // all other pages or scrolled -> gray
    return 'text-gray-700 hover:text-[#d4af37]';
  };

  // helper to decide text color for mobile menu
  const getMobileLinkClass = (href) => {
    if (location.pathname === href) {
      return 'text-[#d4af37] font-semibold bg-gray-100 px-3 py-2 rounded-lg'; // active mobile
    }
    return 'text-gray-700 hover:text-[#d4af37] hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors duration-300';
  };

  // Function to handle navigation with scroll to top
  const handleNavigation = (href) => {
    setIsMenuOpen(false);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3"
          >
            <img
              src="/logo.jpg"
              alt="Khans Events Logo"
              className="w-10 h-10 rounded-lg"
            />
            <div
              className={`text-2xl font-bold transition-colors duration-300 ${
                location.pathname === '/' && !isScrolled
                  ? 'text-white'
                  : 'text-[#001f4d]'
              }`}
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Khans Events
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`transition-colors duration-300 ${getLinkClass(
                  item.href
                )}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Buttons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="tel:+919600060849"
              className="flex items-center space-x-2 bg-[#d4af37] text-[#001f4d] px-4 py-2 rounded-full hover:bg-[#b8941f] transition-colors duration-300"
            >
              <Phone size={18} />
              <span>Call</span>
            </a>
            <a
              href="https://wa.me/919600060849"
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              location.pathname === '/' && !isScrolled
                ? 'text-white'
                : 'text-[#001f4d]'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className={`block w-full text-left transition-all duration-300 ${getMobileLinkClass(
                    item.href
                  )}`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200 mt-4">
                <a
                  href="tel:+919600060849"
                  className="flex items-center justify-center space-x-2 bg-[#d4af37] text-[#001f4d] px-4 py-3 rounded-full hover:bg-[#b8941f] transition-colors duration-300 font-semibold"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919600060849"
                  className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-3 rounded-full hover:bg-green-600 transition-colors duration-300 font-semibold"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
