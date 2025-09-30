import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Utensils, Coffee, Cake, Droplets, ChefHat } from 'lucide-react';
import SEO from '../components/SEO';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('signature');

  const menuCategories = {
    signature: {
      title: 'Signature Highlights',
      icon: Star,
      items: [
        'Khans Chicken Dum Biryani',
        'Khans Mutton Dum Biryani',
        'Khans Ghee Rice',
        'Chicken 65',
        'Haryali Chicken',
        'Phirni Sweet',
        'Dum Ka Roat',
        'Mittah Khana'
      ],
      color: 'text-[#d4af37]',
      bgColor: 'bg-[#d4af37]',
      description: 'Our most celebrated dishes that have made us famous across Chennai'
    },
    nonveg: {
      title: 'Non-Vegetarian Delights',
      icon: ChefHat,
      items: [
        'Chicken Biryani (Signature)',
        'Mutton Biryani',
        'Chicken 65',
        'Haryali Chicken (Signature)',
        'Fish Fry',
        'Mandhi',
        'Chicken Kurma',
        'Mutton Kurma',
        'Chicken Cutlets',
        'Mutton Cutlets'
      ],
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      description: 'Authentic non-vegetarian dishes prepared with traditional spices and techniques'
    },
    vegbreakfast: {
      title: 'Vegetarian Breakfast',
      icon: Coffee,
      items: [
        'Idli with Sambar and Chutneys (coconut, tomato, mint)',
        'Ghee Pongal',
        'Veg Oothappam',
        'Dosa / Masala Dosa / Podi Dosa',
        'Poori with Potato Masala',
        'Upma',
        'Idiyappam with Kurma/Chops'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      description: 'Traditional South Indian breakfast items to start your day perfectly'
    },
    vegmain: {
      title: 'Vegetarian Main Course',
      icon: Utensils,
      items: [
        'Veg Biryani',
        'Mushroom Biryani',
        'Ghee Rice',
        'Veg Kurma',
        'Gobi 65',
        'Steamed White Rice',
        'Sambar (arachuvitta, tiffin sambar, drumstick)',
        'Rasam (pepper garlic, lemon, tomato)',
        'Vatha Kuzhambu / Mor Kuzhambu',
        'Kootu (chow chow, pudalai, cabbage)',
        'Poriyal (potato, carrot, beans, cabbage, chenna)',
        'Aviyal (Malabar style)',
        'Kalyana Kadaiyal',
        'Koottu Curry',
        'Vegetable Kurma',
        'Kathirikai Kara Curry',
        'Beans Usili',
        'Aloo Masala',
        'Bhindi Fry / Dondakaya Fry'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      description: 'Comprehensive vegetarian main course options for complete meals'
    },
    accompaniments: {
      title: 'Accompaniments & Sides',
      icon: Utensils,
      items: [
        'Appalam / Pappadam',
        'Pickle (mango, lime)',
        'Curd / Buttermilk',
        'Kachumber Salad',
        'Coconut Chutney',
        'Thokku Chutney',
        'Banana Chips'
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      description: 'Perfect accompaniments to complement your main dishes'
    },
    rice: {
      title: 'Rice Varieties',
      icon: Utensils,
      items: [
        'Lemon Rice',
        'Coconut Rice',
        'Curd Rice',
        'Jeera Rice',
        'Peas Pulao',
        'Veg Pulao',
        'Bisibelebath'
      ],
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      description: 'Flavorful rice preparations for every taste preference'
    },
    breads: {
      title: 'Fresh Breads',
      icon: Utensils,
      items: [
        'Chapati',
        'Phulka',
        'Roti'
      ],
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
      description: 'Freshly made breads to accompany your curries'
    },
    sweets: {
      title: 'Sweets & Desserts',
      icon: Cake,
      items: [
        'Mittah Khana (Signature)',
        'Bread Halwa',
        'Dum Ka Roat Halwa',
        'Kesari / Rava Kesari',
        'Payasam (Ada Pradhaman, Paruppu, Javvarisi/Sago)',
        'Gulab Jamun',
        'Rasgulla',
        'Ice Creams (all flavours)'
      ],
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
      description: 'Traditional and modern desserts to end your meal on a sweet note'
    },
    beverages: {
      title: 'Beverages',
      icon: Droplets,
      items: [
        'Filter Coffee',
        'Fresh Buttermilk (Neer More)',
        'Real Fruit Welcome Drink (Kiwi, Litchi, Mango)',
        'Mojito'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      description: 'Refreshing beverages to complement your dining experience'
    },
    stalls: {
      title: 'Live Food Stalls',
      icon: ChefHat,
      items: [
        'Paani Poori',
        'Cotton Candy',
        'Popcorn',
        'Beeda',
        'Chocolate Fountains'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      description: 'Interactive food stalls that add excitement to your events'
    }
  };

  const categoryKeys = Object.keys(menuCategories) as Array<keyof typeof menuCategories>;

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Menu | Khan Events – Biryani Catering and Authentic Menus in Chennai"
        description="Explore Khan Events' signature biryani, vegetarian and non-vegetarian menus, live stalls, and desserts. Perfect for weddings, corporate events, and parties in Chennai."
        keywords={["menu", "biryani catering menu", "catering menu Chennai"]}
        canonical="https://khansevents.com/menu"
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
              Our <span className="text-[#d4af37]">Event Menus</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our extensive collection of authentic dishes, crafted with traditional recipes and premium ingredients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categoryKeys.map((key) => {
              const category = menuCategories[key];
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === key
                      ? 'bg-[#001f4d] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent size={20} />
                  <span className="hidden sm:inline">{category.title}</span>
                  <span className="sm:hidden">{category.title.split(' ')[0]}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Active Category Display */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#001f4d] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                {menuCategories[activeCategory as keyof typeof menuCategories].title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {menuCategories[activeCategory as keyof typeof menuCategories].description}
              </p>
            </div>

            {/* Menu Items Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuCategories[activeCategory as keyof typeof menuCategories].items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-full ${
                      activeCategory === 'signature' ? 'bg-[#d4af37]' : 
                      menuCategories[activeCategory as keyof typeof menuCategories].bgColor
                    }`}>
                      {activeCategory === 'signature' ? 
                        <Star size={20} className="text-white" /> :
                        <Utensils size={20} className={menuCategories[activeCategory as keyof typeof menuCategories].color} />
                      }
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {item}
                      </h3>
                      {item.includes('Signature') && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#d4af37] text-[#001f4d]">
                          <Star size={12} className="mr-1" />
                          Signature
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customization Note */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#d4af37] to-[#f4c430] rounded-3xl p-12"
          >
            <h3 className="text-3xl font-bold text-[#001f4d] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              ✨ Custom Menu Planning ✨
            </h3>
            <p className="text-lg text-[#001f4d] mb-6 max-w-2xl mx-auto">
              All menus can be customized according to your preferences, dietary requirements, 
              and cultural traditions. We're happy to create a personalized menu for your special event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+919600060849"
                className="bg-[#001f4d] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#002a5c] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discuss Menu Options
              </motion.a>
              <motion.a
                href="https://wa.me/919600060849"
                className="border-2 border-[#001f4d] text-[#001f4d] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#001f4d] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp Menu Query
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Combinations */}
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
              Popular <span className="text-[#d4af37]">Menu Combinations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pre-designed menu packages for different types of events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Wedding Special',
                items: ['Khans Dum Biryani', 'Haryali Chicken', 'Veg Kurma', 'Raita', 'Payasam', 'Filter Coffee'],
                price: 'Custom Quote',
                popular: true
              },
              {
                title: 'Corporate Lunch',
                items: ['Chicken Biryani', 'Veg Biryani', 'Chicken 65', 'Sambar', 'Curd', 'Pickle'],
                price: 'Custom Quote',
                popular: false
              },
              {
                title: 'Family Function',
                items: ['Mixed Rice Varieties', 'Chicken Kurma', 'Veg Kurma', 'Poriyal', 'Rasam', 'Sweets'],
                price: 'Custom Quote',
                popular: false
              }
            ].map((combo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 ${
                  combo.popular ? 'ring-2 ring-[#d4af37]' : ''
                }`}
              >
                {combo.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#d4af37] text-[#001f4d] px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-[#001f4d] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {combo.title}
                </h3>
                
                <ul className="space-y-2 mb-6">
                  {combo.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <div className="text-lg font-semibold text-[#d4af37] mb-4">
                    {combo.price}
                  </div>
                  <motion.a
                    href="tel:+919600060849"
                    className="bg-[#001f4d] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#002a5c] transition-colors duration-300 inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Quote
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;