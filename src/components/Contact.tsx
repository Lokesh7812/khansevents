import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    // You can integrate with Web3Forms or another service here
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001f4d] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Contact <span className="text-[#d4af37]">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to plan your next event? Get in touch with us for a personalized consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#001f4d] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#d4af37] p-3 rounded-full">
                    <MapPin size={24} className="text-[#001f4d]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#001f4d] mb-1">Address</h4>
                    <p className="text-gray-700">
                      31/19, West Cemetery Road, Old Washermenpet<br />
                      Chennai – 600021
                    </p>
                    <a
                      href="https://share.google/a5RAzD6PNT8gbYLKc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#d4af37] hover:text-[#b8941f] font-medium"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#d4af37] p-3 rounded-full">
                    <Phone size={24} className="text-[#001f4d]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#001f4d] mb-1">Phone</h4>
                    <a
                      href="tel:+919600060849"
                      className="text-gray-700 hover:text-[#d4af37] transition-colors duration-300"
                    >
                      +91 9600060849
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#d4af37] p-3 rounded-full">
                    <Mail size={24} className="text-[#001f4d]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#001f4d] mb-1">Email</h4>
                    <a
                      href="mailto:khanseventsofficial@gmail.com"
                      className="text-gray-700 hover:text-[#d4af37] transition-colors duration-300"
                    >
                      khanseventsofficial@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#d4af37] p-3 rounded-full">
                    <Clock size={24} className="text-[#001f4d]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#001f4d] mb-1">Business Hours</h4>
                    <p className="text-gray-700">
                      Monday - Sunday: 8:00 AM - 10:00 PM<br />
                      Emergency bookings: 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+919600060849"
                className="flex items-center justify-center space-x-2 bg-[#d4af37] text-[#001f4d] px-6 py-4 rounded-xl font-semibold hover:bg-[#b8941f] transition-colors duration-300"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919600060849"
                className="flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#001f4d] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Tell us about your event requirements, number of guests, and any special requests..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-[#001f4d] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#002a5c] transition-all duration-300 transform hover:scale-105"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;