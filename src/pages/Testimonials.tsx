import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Quote, Users, Heart, Award } from 'lucide-react';

const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  // Mock video testimonials data - replace with actual video URLs when available
  const videoTestimonials = [
    {
      id: 1,
      title: 'Wedding Catering Excellence',
      client: 'Priya & Rajesh',
      event: 'Wedding Reception',
      thumbnail: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '2:30',
      rating: 5,
      preview: 'Amazing biryani and exceptional service for our wedding!'
    },
    {
      id: 2,
      title: 'Corporate Event Success',
      client: 'Tech Solutions Pvt Ltd',
      event: 'Annual Conference',
      thumbnail: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '1:45',
      rating: 5,
      preview: 'Professional service and delicious food for 200+ guests'
    },
    {
      id: 3,
      title: 'Birthday Celebration',
      client: 'Meera Family',
      event: 'Birthday Party',
      thumbnail: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '1:20',
      rating: 5,
      preview: 'Kids loved the food, parents loved the service!'
    },
    {
      id: 4,
      title: 'Housewarming Function',
      client: 'Kumar Family',
      event: 'Griha Pravesh',
      thumbnail: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '2:10',
      rating: 5,
      preview: 'Traditional flavors that reminded us of home'
    },
    {
      id: 5,
      title: 'Office Inauguration',
      client: 'StartUp Hub',
      event: 'Office Opening',
      thumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '1:55',
      rating: 5,
      preview: 'Live cooking stations were a huge hit!'
    },
    {
      id: 6,
      title: 'Anniversary Celebration',
      client: 'Sharma Couple',
      event: '25th Anniversary',
      thumbnail: 'https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '2:45',
      rating: 5,
      preview: 'Exceeded all our expectations with quality and taste'
    }
  ];

  const writtenTestimonials = [
    {
      name: 'Anitha Krishnan',
      event: 'Wedding Reception',
      rating: 5,
      text: 'Khans Events made our wedding reception absolutely perfect! The Dum Biryani was the highlight of the evening. Every guest complimented the food quality and presentation. Hussain and his team were professional, punctual, and went above and beyond our expectations.',
      date: 'December 2024'
    },
    {
      name: 'Rajesh Kumar',
      event: 'Corporate Annual Day',
      rating: 5,
      text: 'We hired Khans Events for our company annual day with 300+ employees. The variety in the menu, the live cooking stations, and the impeccable service made it a memorable event. The Haryali Chicken was absolutely delicious!',
      date: 'November 2024'
    },
    {
      name: 'Lakshmi Venkat',
      event: 'Housewarming Ceremony',
      rating: 5,
      text: 'From the initial consultation to the final cleanup, everything was handled professionally. The traditional South Indian breakfast items were authentic and delicious. Our guests are still talking about the filter coffee!',
      date: 'October 2024'
    },
    {
      name: 'Mohammed Farhan',
      event: 'Birthday Celebration',
      rating: 5,
      text: 'Khans Events catered my father\'s 60th birthday celebration. The attention to detail, the quality of food, and the courteous staff made the day special. The Mittah Khana dessert was the perfect ending to a perfect meal.',
      date: 'September 2024'
    }
  ];

  const stats = [
    { icon: Users, number: '1723+', label: 'Happy Clients' },
    { icon: Star, number: '4.9/5', label: 'Average Rating' },
    { icon: Heart, number: '98%', label: 'Repeat Customers' },
    { icon: Award, number: '20+', label: 'Video Reviews' }
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
              Client <span className="text-[#d4af37]">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear what our satisfied clients have to say about their experience with Khans Events
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <IconComponent size={48} className="text-[#d4af37] mx-auto mb-4" />
                  <div className="text-3xl font-bold text-[#001f4d] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
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
              Video <span className="text-[#d4af37]">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch real feedback from our clients about their events and experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative group cursor-pointer" onClick={() => setSelectedVideo(video.id)}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-[#d4af37] rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play size={24} className="text-[#001f4d] ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {[...Array(video.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-[#001f4d] mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>{video.client}</strong> • {video.event}
                  </p>
                  <p className="text-gray-700 text-sm">
                    "{video.preview}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Video Modal Placeholder */}
          {selectedVideo && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl w-full">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300 text-2xl"
                >
                  ✕
                </button>
                <div className="bg-white rounded-lg p-8 text-center">
                  <Play size={64} className="text-[#d4af37] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#001f4d] mb-4">
                    Video Testimonial
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Video testimonials will be embedded here when available.
                    Contact us to see our collection of client feedback videos.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://www.instagram.com/_khans_events_officiall"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#d4af37] text-[#001f4d] px-6 py-3 rounded-full font-semibold hover:bg-[#b8941f] transition-colors duration-300"
                    >
                      View on Instagram
                    </a>
                    <button
                      onClick={() => setSelectedVideo(null)}
                      className="border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Written Testimonials */}
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
              Written <span className="text-[#d4af37]">Reviews</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed feedback from our valued clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {writtenTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 relative"
              >
                <Quote size={32} className="text-[#d4af37] opacity-50 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-[#001f4d]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.event} • {testimonial.date}
                    </p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-[#001f4d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              See More <span className="text-[#d4af37]">Client Stories</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Follow us on Instagram to see more video testimonials, behind-the-scenes content, and client celebrations
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
                Follow on Instagram
              </motion.a>
              <motion.a
                href="tel:+919600060849"
                className="border-2 border-[#d4af37] text-[#d4af37] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#d4af37] hover:text-[#001f4d] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Share Your Experience
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;