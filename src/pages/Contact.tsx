import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Clock, User, Instagram } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '31/19, West Cemetery Road, Old Washermenpet, Chennai – 600021',
      action: 'View on Google Maps',
      link: 'https://share.google/a5RAzD6PNT8gbYLKc'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9600060849',
      action: 'Call Now',
      link: 'tel:+919600060849'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'khanseventsofficial@gmail.com',
      action: 'Send Email',
      link: 'mailto:khanseventsofficial@gmail.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Monday - Sunday: 8:00 AM - 10:00 PM',
      action: 'Emergency: 24/7',
      link: null
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Contact Khan Events | Catering in Chennai – Call 9600060849"
        description="Contact Khan Events for premium catering in Chennai. Phone: +91 9600060849, Email: khanseventsofficial@gmail.com, Instagram: @_khans_events_officiall."
        keywords={["contact Khan Events", "catering contact Chennai", "call 9600060849"]}
        canonical="https://khansevents.com/contact"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#001f4d] to-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Contact <span className="text-[#d4af37]">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to plan your next event? Get in touch with us for a personalized consultation and quote
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Buttons */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.a
              href="tel:+919600060849"
              className="flex items-center justify-center space-x-4 bg-[#d4af37] text-[#001f4d] p-6 rounded-2xl font-semibold text-lg hover:bg-[#b8941f] transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={28} />
              <div>
                <div className="font-bold">Call Now</div>
                <div className="text-sm opacity-80">+91 9600060849</div>
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/919600060849"
              className="flex items-center justify-center space-x-4 bg-green-500 text-white p-6 rounded-2xl font-semibold text-lg hover:bg-green-600 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={28} />
              <div>
                <div className="font-bold">WhatsApp</div>
                <div className="text-sm opacity-80">Quick Response</div>
              </div>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/_khans_events_officiall"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-4 bg-pink-600 text-white p-6 rounded-2xl font-semibold text-lg hover:bg-pink-700 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Instagram size={28} />
              <div>
                <div className="font-bold">Instagram</div>
                <div className="text-sm opacity-80">See Reviews & Reels</div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Get in Touch Section (Centered) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-lg text-center"
          >
            <h2
              className="text-3xl font-bold text-[#001f4d] mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Get in Touch
            </h2>

            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="bg-[#d4af37] p-3 rounded-full">
                      <IconComponent size={24} className="text-[#001f4d]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#001f4d] mb-1">{info.title}</h3>
                      <p className="text-gray-700 mb-1">{info.content}</p>
                      {info.link && (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-[#d4af37] hover:text-[#b8941f] font-medium transition-colors duration-300"
                        >
                          {info.action}
                        </a>
                      )}
                      {!info.link && <span className="text-gray-500 text-sm">{info.action}</span>}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Owner Info */}
            <div className="mt-12 bg-gray-50 p-6 rounded-2xl shadow-inner">
              <div className="flex flex-col items-center">
                <User size={32} className="text-[#d4af37] mb-3" />
                <h3 className="text-xl font-bold text-[#001f4d]">Hussain Khan</h3>
                <p className="text-gray-600 mb-3">Founder & Owner</p>
                <p className="text-gray-700 max-w-lg">
                  "With over 8 years of experience in the catering industry, I personally ensure
                  that every event we cater exceeds your expectations. Your satisfaction is our success."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl font-bold text-[#001f4d] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Visit Our <span className="text-[#d4af37]">Location</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Chennai, we're easily accessible for consultations and tastings
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-2xl p-8 text-center"
          >
            <MapPin size={48} className="text-[#d4af37] mx-auto mb-4" />
            <h3
              className="text-2xl font-bold text-[#001f4d] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Address
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              31/19, West Cemetery Road, Old Washermenpet<br />
              Chennai – 600021, Tamil Nadu, India
            </p>
            <motion.a
              href="https://share.google/a5RAzD6PNT8gbYLKc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#d4af37] text-[#001f4d] px-6 py-3 rounded-full font-semibold hover:bg-[#b8941f] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin size={20} />
              <span>View on Google Maps</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
