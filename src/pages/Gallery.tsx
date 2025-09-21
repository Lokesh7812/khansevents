import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Camera, Users, ChefHat, Award } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Wedding Reception Setup',
      category: 'events',
      description: 'Elegant wedding reception with traditional decorations and premium catering setup'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Signature Khans Dum Biryani',
      category: 'food',
      description: 'Our famous signature dish prepared with authentic spices and traditional cooking methods'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Traditional South Indian Feast',
      category: 'food',
      description: 'Complete traditional meal with variety of curries, rice, and accompaniments'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Corporate Event Catering',
      category: 'events',
      description: 'Professional catering setup for corporate annual day with 300+ guests'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Live Cooking Station',
      category: 'service',
      description: 'Interactive live cooking stations adding entertainment value to events'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Dessert Counter Display',
      category: 'food',
      description: 'Beautifully arranged dessert counter with traditional and modern sweets'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Professional Kitchen Setup',
      category: 'service',
      description: 'State-of-the-art mobile kitchen setup ensuring hygiene and quality'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Elegant Table Setting',
      category: 'events',
      description: 'Premium table arrangements with attention to detail and aesthetic appeal'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Grand Event Hall Setup',
      category: 'events',
      description: 'Large-scale event setup with comprehensive catering arrangements'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1199958/pexels-photo-1199958.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Haryali Chicken Special',
      category: 'food',
      description: 'Our signature Haryali Chicken prepared with fresh herbs and spices'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Team Service Excellence',
      category: 'service',
      description: 'Our professional team ensuring exceptional service quality'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/2788793/pexels-photo-2788793.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Birthday Celebration Setup',
      category: 'events',
      description: 'Colorful and joyful birthday party catering with special arrangements'
    }
  ];

  const filters = [
    { key: 'all', label: 'All', icon: Camera },
    { key: 'events', label: 'Events', icon: Users },
    { key: 'food', label: 'Food', icon: ChefHat },
    { key: 'service', label: 'Service', icon: Award }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const stats = [
    { number: '1723+', label: 'Events Completed' },
    { number: '50K+', label: 'Guests Served' },
    { number: '8+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="min-h-screen pt-20">
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
              Our <span className="text-[#d4af37]">Gallery</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful events, signature dishes, and professional service excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[#d4af37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <motion.button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === filter.key
                      ? 'bg-[#001f4d] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent size={20} />
                  <span>{filter.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${activeFilter}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300"
                  onClick={() => setSelectedImage(item.src)}
                >
                  <div className="aspect-square">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Testimonials Section */}
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
              Client <span className="text-[#d4af37]">Video Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our satisfied clients have to say about their experience with Khans Events
            </p>
          </motion.div>

          <div className="bg-gradient-to-r from-[#001f4d] to-[#003366] rounded-3xl p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Play size={48} className="text-[#d4af37]" />
                <div>
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                    20+ Video Testimonials
                  </h3>
                  <p className="text-gray-300">Real feedback from our happy customers</p>
                </div>
              </div>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Watch authentic reviews and feedback from clients who trusted us with their special events. 
                See how we've made their celebrations memorable and successful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://www.instagram.com/_khans_events_officiall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#d4af37] text-[#001f4d] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#b8941f] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Video Testimonials
                </motion.a>
                <motion.a
                  href="tel:+919600060849"
                  className="border-2 border-[#d4af37] text-[#d4af37] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#d4af37] hover:text-[#001f4d] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your Event
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#001f4d] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Follow Us for <span className="text-[#d4af37]">More Updates</span>
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay connected with us on Instagram for the latest events, behind-the-scenes content, 
              and client celebrations
            </p>
            <motion.a
              href="https://www.instagram.com/_khans_events_officiall"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Camera size={24} />
              <span>Follow on Instagram</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;