import React from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, number: '8+', label: 'Years Experience' },
    { icon: Users, number: '1723+', label: 'Orders Completed' },
    { icon: Award, number: '100%', label: 'Satisfaction Rate' },
    { icon: Star, number: '5★', label: 'Average Rating' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001f4d] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            About <span className="text-[#d4af37]">Khans Events</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Khans Events has been a trusted name in catering and event solutions for over 8 years, 
              serving all types of industries and family functions across the region. With a legacy of 
              excellence and dedication, we have successfully completed 1500+ orders, making every 
              occasion a delightful culinary experience.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our reputation is built on outstanding service, creativity, and our signature dishes—especially 
              <span className="font-semibold text-[#d4af37]"> Khans Dum Biryani</span> and 
              <span className="font-semibold text-[#d4af37]"> Haryali Chicken</span>—which have become 
              favorites at every celebration.
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#d4af37]">
              <h3 className="text-xl font-bold text-[#001f4d] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Mission
              </h3>
              <p className="text-gray-700">
                To create extraordinary culinary experiences that bring people together and make 
                every celebration memorable through authentic flavors and exceptional service.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300"
                  >
                    <IconComponent size={48} className="text-[#d4af37] mx-auto mb-4" />
                    <div className="text-3xl font-bold text-[#001f4d] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#d4af37] opacity-10 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#001f4d] opacity-5 rounded-full"></div>
          </div>
        </div>

        {/* Contact Info Card */}
        <div className="mt-16 bg-[#001f4d] rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Plan Your Event?
          </h3>
          <p className="text-gray-300 mb-6">
            Contact us today for a personalized consultation and menu planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919600060849"
              className="bg-[#d4af37] text-[#001f4d] px-6 py-3 rounded-full font-semibold hover:bg-[#b8941f] transition-colors duration-300"
            >
              +91 9600060849
            </a>
            <a
              href="mailto:khanseventsofficial@gmail.com"
              className="border border-[#d4af37] text-[#d4af37] px-6 py-3 rounded-full font-semibold hover:bg-[#d4af37] hover:text-[#001f4d] transition-all duration-300"
            >
              khanseventsofficial@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;