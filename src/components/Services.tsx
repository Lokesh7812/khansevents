import React from 'react';
import { ChefHat, Users, Settings, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: ChefHat,
      title: 'Full-Service Catering',
      description: 'Complete catering solutions for weddings, corporate events, and family functions with professional presentation.',
      features: ['Professional chefs', 'Premium ingredients', 'Elegant presentation', 'Timely service']
    },
    {
      icon: Settings,
      title: 'Menu Customization',
      description: 'Personalized menu planning tailored to your preferences, dietary requirements, and cultural traditions.',
      features: ['Custom recipes', 'Dietary accommodations', 'Cultural specialties', 'Flexible portions']
    },
    {
      icon: Users,
      title: 'Live Food Stalls',
      description: 'Interactive cooking stations and live food counters that add excitement and freshness to your events.',
      features: ['Live cooking', 'Interactive stations', 'Fresh preparation', 'Entertainment value']
    },
    {
      icon: Heart,
      title: 'Complete Event Setup',
      description: 'End-to-end event management with experienced staff and complete kitchen setup for seamless execution.',
      features: ['Event planning', 'Staff coordination', 'Kitchen setup', 'Quality assurance']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001f4d] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our <span className="text-[#d4af37]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive catering and event solutions designed to make your celebrations memorable
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-[#d4af37] p-4 rounded-2xl">
                    <IconComponent size={32} className="text-[#001f4d]" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#001f4d] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {service.title}
                    </h3>
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
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-[#001f4d] rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Create Your Perfect Event?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experienced team handle every detail while you focus on enjoying your special moment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919600060849"
              className="bg-[#d4af37] text-[#001f4d] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#b8941f] transition-colors duration-300"
            >
              Call for Consultation
            </a>
            <a
              href="https://wa.me/919600060849"
              className="border-2 border-[#d4af37] text-[#d4af37] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#d4af37] hover:text-[#001f4d] transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;