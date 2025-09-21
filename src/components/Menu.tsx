import React, { useState } from 'react';
import { Star, Utensils } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('signature');

  const menuCategories = {
    signature: {
      title: 'Signature Highlights',
      items: ['Khans Chicken Dum Biryani', 'Khans Mutton Dum Biryani', 'Khans Ghee Rice', 'Chicken 65', 'Phirni Sweet', 'Dum Ka Roat'],
      color: 'text-[#d4af37]'
    },
    nonveg: {
      title: 'Non-Vegetarian',
      items: ['Chicken Biryani (Signature)', 'Mutton Biryani', 'Chicken 65', 'Haryali Chicken (Signature)', 'Fish Fry', 'Mandhi', 'Chicken Kurma', 'Mutton Kurma', 'Chicken Cutlets', 'Mutton Cutlets'],
      color: 'text-red-600'
    },
    vegbreakfast: {
      title: 'Vegetarian Breakfast',
      items: ['Idli with Sambar and Chutneys', 'Ghee Pongal', 'Veg Oothappam', 'Dosa / Masala Dosa / Podi Dosa', 'Poori with Potato Masala', 'Upma', 'Idiyappam with Kurma/Chops'],
      color: 'text-green-600'
    },
    vegmain: {
      title: 'Vegetarian Main Course',
      items: ['Veg Biryani', 'Mushroom Biryani', 'Ghee Rice', 'Veg Kurma', 'Gobi 65', 'Steamed White Rice', 'Sambar (arachuvitta, tiffin sambar)', 'Rasam (pepper garlic, lemon)', 'Vatha Kuzhambu / Mor Kuzhambu', 'Kootu (chow chow, pudalai)', 'Poriyal (potato, carrot, beans)', 'Aviyal (Malabar style)', 'Kalyana Kadaiyal'],
      color: 'text-green-600'
    },
    sweets: {
      title: 'Sweets & Desserts',
      items: ['Mittah Khana (Signature)', 'Bread Halwa', 'Dum Ka Roat Halwa', 'Kesari / Rava Kesari', 'Payasam (Ada Pradhaman, Paruppu)', 'Gulab Jamun', 'Rasgulla', 'Ice Creams (all flavours)'],
      color: 'text-pink-600'
    },
    beverages: {
      title: 'Beverages',
      items: ['Filter Coffee', 'Fresh Buttermilk (Neer More)', 'Real Fruit Welcome Drink (Kiwi, Litchi, Mango)', 'Mojito'],
      color: 'text-blue-600'
    }
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001f4d] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our <span className="text-[#d4af37]">Event Menus</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our extensive collection of authentic dishes, crafted with traditional recipes and premium ingredients
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(menuCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-[#001f4d] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories[activeCategory as keyof typeof menuCategories].items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-2 rounded-full ${
                  activeCategory === 'signature' ? 'bg-[#d4af37]' : 
                  activeCategory === 'nonveg' ? 'bg-red-100' :
                  activeCategory.includes('veg') ? 'bg-green-100' :
                  activeCategory === 'sweets' ? 'bg-pink-100' :
                  'bg-blue-100'
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
            </div>
          ))}
        </div>

        {/* Special Note */}
        <div className="mt-16 text-center">
          <div className="bg-[#d4af37] bg-opacity-10 rounded-2xl p-8 inline-block">
            <p className="text-lg font-semibold text-[#001f4d]">
              ✨ Menus can be customized according to customer requests ✨
            </p>
            <p className="text-gray-600 mt-2">
              We're happy to create a personalized menu for your special event
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;