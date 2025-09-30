import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Users, Settings, Heart, Clock, Award, Utensils, Calendar } from 'lucide-react';
import SEO from '../components/SEO';

const Services = () => {
  const mainServices = [
  {
    icon: ChefHat,
    title: 'Full-Service Catering',
    description: 'Complete catering solutions for weddings, corporate events, and family functions with professional presentation and exceptional taste.',
    features: ['Professional chefs', 'Premium ingredients', 'Elegant presentation', 'Timely service', 'Quality assurance'],
    image: '/videos/briyani2.webp'
  },
  {
    icon: Settings,
    title: 'Menu Customization',
    description: 'Personalized menu planning tailored to your preferences, dietary requirements, and cultural traditions.',
    features: ['Custom recipes', 'Dietary accommodations', 'Cultural specialties', 'Flexible portions', 'Nutritional guidance'],
    image: '/videos/haryali chicken.jpg'
  },
  {
    icon: Users,
    title: 'Live Food Stalls',
    description: 'Interactive cooking stations and live food counters that add excitement and freshness to your events.',
    features: ['Live cooking', 'Interactive stations', 'Fresh preparation', 'Entertainment value', 'Crowd engagement'],
    image: '/videos/Chicken 65.jpg'
  },
  {
    icon: Heart,
    title: 'Complete Event Setup',
    description: 'End-to-end event management with experienced staff and complete kitchen setup for seamless execution.',
    features: ['Event planning', 'Staff coordination', 'Kitchen setup', 'Quality assurance', 'Cleanup service'],
    image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];


  const additionalServices = [
    {
      icon: Calendar,
      title: 'Event Planning Consultation',
      description: 'Expert guidance on menu selection, guest capacity planning, and event logistics.'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Catering',
      description: 'Last-minute catering solutions for urgent events and emergency situations.'
    },
    {
      icon: Award,
      title: 'Premium Service Package',
      description: 'Luxury catering experience with premium ingredients and white-glove service.'
    },
    {
      icon: Utensils,
      title: 'Specialty Cuisine Options',
      description: 'Regional specialties, fusion dishes, and international cuisine adaptations.'
    }
  ];

  const eventTypes = [
    {
      title: 'Weddings & Receptions',
      description: 'Make your special day unforgettable with our comprehensive wedding catering services.',
      features: ['Bridal menu tasting', 'Multi-course meals', 'Traditional ceremonies', 'Guest accommodation'],
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Corporate Events',
      description: 'Professional catering for business meetings, conferences, and corporate celebrations.',
      features: ['Business lunch menus', 'Conference catering', 'Team building events', 'Product launches'],
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Family Functions',
      description: 'Intimate gatherings and family celebrations with personalized menu options.',
      features: ['Birthday parties', 'Anniversary celebrations', 'Housewarming ceremonies', 'Religious functions'],
      image: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Social Events',
      description: 'Community gatherings, festivals, and large-scale social celebrations.',
      features: ['Community festivals', 'Charity events', 'Cultural celebrations', 'Public gatherings'],
      image: 'https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Services | Khan Events Catering in Chennai"
        description="Full-service catering, menu customization, live food stalls, and complete event setups across Chennai. Specializing in biryani catering for weddings, corporate, and family events."
        keywords={['services', 'catering services Chennai', 'biryani catering services']}
        canonical="https://khansevents.com/services"
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our <span className="text-[#d4af37]">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive catering and event solutions designed to make your celebrations memorable and stress-free
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#001f4d] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Core <span className="text-[#d4af37]">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a successful event, handled by our experienced team
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy" decoding="async" fetchpriority="low"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-[#d4af37] p-3 rounded-2xl">
                        <IconComponent size={32} className="text-[#001f4d]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#001f4d]" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#001f4d] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Additional <span className="text-[#d4af37]">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services to enhance your event experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center transform transition-all duration-300"
                >
                  <div className="bg-[#d4af37] p-4 rounded-2xl w-fit mx-auto mb-4">
                    <IconComponent size={32} className="text-[#001f4d]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#001f4d] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#001f4d] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Event <span className="text-[#d4af37]">Specializations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We cater to all types of events with specialized menus and services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {eventTypes.map((eventType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={eventType.image}
                      alt={eventType.title}
                      className="w-full h-48 md:h-full object-cover"
                      loading="lazy" decoding="async" fetchpriority="low"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold text-[#001f4d] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {eventType.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {eventType.description}
                    </p>
                    <ul className="space-y-2">
                      {eventType.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#001f4d] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our <span className="text-[#d4af37]">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to ensure your event is perfectly executed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Initial discussion about your event requirements and preferences' },
              { step: '02', title: 'Menu Planning', description: 'Customized menu creation based on your needs and budget' },
              { step: '03', title: 'Preparation', description: 'Professional preparation with quality ingredients and expert chefs' },
              { step: '04', title: 'Execution', description: 'Flawless service delivery with attention to every detail' }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-[#d4af37] text-[#001f4d] w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-[#001f4d] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
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
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Create Your <span className="text-[#d4af37]">Perfect Event?</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our experienced team handle every detail while you focus on enjoying your special moment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+919600060849"
                className="bg-[#d4af37] text-[#001f4d] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#b8941f] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call for Consultation
              </motion.a>
              <motion.a
                href="https://wa.me/919600060849"
                className="border-2 border-[#d4af37] text-[#d4af37] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#d4af37] hover:text-[#001f4d] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;