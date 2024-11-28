import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 h-[600px] font-arabic">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80"
          alt="طبيب جراحة"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="w-full md:w-1/2 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            رعاية طبية متميزة
            <br />
            بأيدي خبيرة
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8"
          >
            نقدم أفضل خدمات الجراحة العامة مع فريق طبي متخصص وتقنيات حديثة
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-blue-50 transition duration-300"
          >
            <Calendar className="h-5 w-5" />
            <span>احجز موعدك الآن</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}