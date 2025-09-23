import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ChevronDown, Star, Award, Users, Clock, Instagram } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Clock, number: '8+', label: 'Years Experience' },
    { icon: Users, number: '1723+', label: 'Orders Completed' },
    { icon: Award, number: '100%', label: 'Satisfaction Rate' },
    { icon: Star, number: '5★', label: 'Average Rating' }
  ];

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 31, 77, 0.85), rgba(0, 31, 77, 0.7)), url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight" 
              style={{ fontFamily: 'Playfair Display, serif' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Creating Memorable Events
              <motion.span 
                className="block text-[#d4af37]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                with Exquisite Catering
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              8+ years of experience • 1723+ orders completed
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-16 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <motion.a
                href="tel:+919600060849"
                className="group flex items-center justify-center space-x-2 sm:space-x-3 bg-[#d4af37] text-[#001f4d] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#b8941f] transform hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} className="group-hover:animate-pulse" />
                <span>Call Now</span>
              </motion.a>
              
              <motion.a
                href="https://wa.me/919600060849"
                className="group flex items-center justify-center space-x-2 sm:space-x-3 bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={20} className="group-hover:animate-pulse" />
                <span>WhatsApp</span>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/_khans_events_officiall"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-2 sm:space-x-3 bg-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={20} className="group-hover:animate-pulse" />
                <span>Instagram</span>
              </motion.a>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  to="/menu"
                  className="group flex items-center justify-center space-x-2 sm:space-x-3 bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-[#001f4d] transform hover:scale-105 transition-all duration-300 w-full"
                >
                  <span>View Menu</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToNext}
        >
          <ChevronDown size={32} className="text-white opacity-70" />
        </motion.div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-1/4 left-4 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-[#d4af37] opacity-20 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 bg-[#d4af37] opacity-10 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#001f4d] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Why Choose <span className="text-[#d4af37]">Khans Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by thousands of clients for exceptional catering and event management services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-[#001f4d] to-[#003366] p-6 sm:p-8 rounded-2xl shadow-lg text-center transform transition-all duration-300"
                >
                  <IconComponent size={40} className="text-[#d4af37] mx-auto mb-3 sm:mb-4" />
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001f4d] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Experience the <span className="text-[#d4af37]">Khans Difference</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                From intimate family gatherings to grand corporate events, we bring authentic flavors 
                and professional service to every occasion. Our signature dishes like Khans Dum Biryani 
                and Haryali Chicken have made us Chennai's preferred catering choice.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/about"
                  className="bg-[#001f4d] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#002a5c] transition-colors duration-300 text-center text-sm sm:text-base"
                >
                  Learn More About Us
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-[#d4af37] text-[#d4af37] px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#d4af37] hover:text-[#001f4d] transition-all duration-300 text-center text-sm sm:text-base"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <img
                  src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Signature Biryani"
                  className="rounded-2xl shadow-lg w-full h-32 sm:h-40 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Event Setup"
                  className="rounded-2xl shadow-lg mt-4 sm:mt-8 w-full h-32 sm:h-40 object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 bg-[#d4af37] opacity-20 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#001f4d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Plan Your <span className="text-[#d4af37]">Perfect Event?</span>
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4">
              Contact us today for a personalized consultation and let us make your celebration unforgettable
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <motion.a
                href="tel:+919600060849"
                className="bg-[#d4af37] text-[#001f4d] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#b8941f] transition-colors duration-300 w-full sm:w-auto text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call for Consultation
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="border-2 border-[#d4af37] text-[#d4af37] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#d4af37] hover:text-[#001f4d] transition-all duration-300 inline-block w-full text-center"
                >
                  Get Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;