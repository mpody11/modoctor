import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'أحمد محمد',
    text: 'تجربة ممتازة مع الدكتور. شرح تفصيلي للحالة وعناية فائقة قبل وبعد العملية.',
    rating: 5,
  },
  {
    name: 'سارة أحمد',
    text: 'الطاقم الطبي محترف جداً والعناية ممتازة. أنصح بشدة بالتعامل معهم.',
    rating: 5,
  },
  {
    name: 'خالد عبدالله',
    text: 'خدمة راقية ونتائج ممتازة. شكراً جزيلاً للدكتور وفريقه المتميز.',
    rating: 5,
  }
];

export default function HomeTestimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">آراء المرضى</h2>
          <p className="text-xl text-gray-600">ما يقوله مرضانا عن تجربتهم معنا</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">

                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}