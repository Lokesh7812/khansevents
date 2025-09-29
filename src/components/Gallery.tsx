import React, { useState } from 'react';
import { X, Play } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Chicken Dum Biryani on Banana Leaf',
      category: 'Food'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1199958/pexels-photo-1199958.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Haryali Chicken (Signature)',
      category: 'Food'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Traditional Banana Leaf Feast',
      category: 'Food'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Ghee Rice and Sides',
      category: 'Food'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Chicken 65 (Signature)',
      category: 'Food'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Phirni Sweet (Signature)',
      category: 'Food'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Dum Ka Roat',
      category: 'Food'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/2788793/pexels-photo-2788793.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Banana Leaf Service',
      category: 'Food'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001f4d] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our <span className="text-[#d4af37]">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful events, signature dishes, and professional service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedImage(item.src)}
            >
              <div className="aspect-square">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <Play size={48} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  ) : (
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-300">{item.category}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
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
            </div>
          </div>
        )}

        {/* Video Testimonials Section */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#001f4d] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Client Video Testimonials
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Hear what our satisfied clients have to say about their experience with Khans Events
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Play size={48} className="text-[#d4af37]" />
                <div>
                  <h4 className="text-xl font-semibold text-[#001f4d]">20+ Video Testimonials</h4>
                  <p className="text-gray-600">Real feedback from our happy customers</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Watch authentic reviews and feedback from clients who trusted us with their special events
              </p>
              <a
                href="https://www.instagram.com/_khans_events_officiall"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#d4af37] text-[#001f4d] px-6 py-3 rounded-full font-semibold hover:bg-[#b8941f] transition-colors duration-300"
              >
                <span>View on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;