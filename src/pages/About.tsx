import { motion } from 'framer-motion';
import { Award, Users, Clock, Star, Heart, ChefHat, Target, Trophy } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, number: '8+', label: 'Years Experience', color: 'text-blue-500' },
    { icon: Users, number: '1723+', label: 'Orders Completed', color: 'text-green-500' },
    { icon: Award, number: '100%', label: 'Satisfaction Rate', color: 'text-purple-500' },
    { icon: Star, number: '5★', label: 'Average Rating', color: 'text-yellow-500' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'Every dish is crafted with love and attention to detail, ensuring exceptional quality in every bite.'
    },
    {
      icon: ChefHat,
      title: 'Authentic Flavors',
      description: 'Traditional recipes passed down through generations, combined with modern culinary techniques.'
    },
    {
      icon: Target,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We customize every menu to match your preferences and requirements.'
    },
    {
      icon: Trophy,
      title: 'Proven Track Record',
      description: 'Over 1723 successful events and countless happy customers speak to our commitment to excellence.'
    }
  ];

  const milestones = [
    { year: '2016', event: 'Khans Events Founded', description: 'Started with a vision to create memorable culinary experiences' },
    { year: '2018', event: 'First 100 Events', description: 'Reached our first major milestone with growing customer base' },
    { year: '2020', event: 'Signature Dishes Launch', description: 'Introduced our famous Khans Dum Biryani and Haryali Chicken' },
    { year: '2022', event: '1000+ Orders Completed', description: 'Celebrated serving over 1000 successful events' },
    { year: '2024', event: 'Premium Service Expansion', description: 'Expanded to offer complete event management solutions' }
  ];

  return (
    <div className="min-h-screen pt-20 w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#001f4d] to-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              About <span className="text-[#d4af37]">Khans Events</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Crafting culinary excellence and creating unforgettable memories for over 8 years
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001f4d] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our <span className="text-[#d4af37]">Story</span>
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  Khans Events began as a dream to bring authentic South Indian flavors and exceptional 
                  service to every celebration. Founded by <strong>Hussain Khan</strong>, our journey 
                  started with a simple belief: every event deserves to be memorable.
                </p>
                <p>
                  Over the past 8 years, we have grown from a small catering service to Chennai's 
                  trusted partner for weddings, corporate events, and family celebrations. Our commitment 
                  to quality, authenticity, and customer satisfaction has earned us the trust of over 
                  1723 satisfied clients.
                </p>
                <p>
                  What sets us apart is our dedication to preserving traditional recipes while embracing 
                  modern presentation and service standards. Our signature dishes, especially the 
                  <strong className="text-[#d4af37]"> Khans Dum Biryani</strong> and 
                  <strong className="text-[#d4af37]"> Haryali Chicken</strong>, have become synonymous 
                  with exceptional taste and quality.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                <img
                  src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Professional Kitchen"
                  className="rounded-2xl shadow-lg w-full h-24 sm:h-32 md:h-40 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Event Setup"
                  className="rounded-2xl shadow-lg mt-4 sm:mt-8 w-full h-24 sm:h-32 md:h-40 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Signature Dishes"
                  className="rounded-2xl shadow-lg -mt-4 sm:-mt-8 w-full h-24 sm:h-32 md:h-40 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Team Service"
                  className="rounded-2xl shadow-lg w-full h-24 sm:h-32 md:h-40 object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-16 h-16 sm:w-32 sm:h-32 bg-[#d4af37] opacity-10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-12 h-12 sm:w-24 sm:h-24 bg-[#001f4d] opacity-10 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Our <span className="text-[#d4af37]">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction
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
                  className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center transform transition-all duration-300"
                >
                  <IconComponent size={40} className={`${stat.color} mx-auto mb-3 sm:mb-4`} />
                  <div className="text-2xl sm:text-3xl font-bold text-[#001f4d] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              Our <span className="text-[#d4af37]">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6"
                >
                  <div className="bg-[#d4af37] p-3 sm:p-4 rounded-2xl flex-shrink-0">
                    <IconComponent size={28} className="text-[#001f4d]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#001f4d] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our <span className="text-[#d4af37]">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth and evolution
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#d4af37] opacity-30"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-8 md:mb-12 ${
                  index % 2 === 0 ? 'justify-start md:justify-start' : 'justify-start md:justify-end'
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
                    <div className="text-xl sm:text-2xl font-bold text-[#d4af37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {milestone.year}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#001f4d] mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline dot - hidden on mobile, visible on desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#d4af37] rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#001f4d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Experience <span className="text-[#d4af37]">Khans Events?</span>
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4">
              Let us bring our passion for excellence to your next celebration
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <motion.a
                href="tel:+919600060849"
                className="bg-[#d4af37] text-[#001f4d] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#b8941f] transition-colors duration-300 w-full sm:w-auto text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Us Today
              </motion.a>
              <motion.a
                href="https://wa.me/919600060849"
                className="border-2 border-[#d4af37] text-[#d4af37] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#d4af37] hover:text-[#001f4d] transition-all duration-300 w-full sm:w-auto text-center"
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

export default About;