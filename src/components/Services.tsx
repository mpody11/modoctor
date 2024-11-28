import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Heart, Activity, Microscope } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'جراحة عامة',
    description: 'نقدم خدمات الجراحة العامة بأحدث التقنيات وأعلى معايير الجودة'
  },
  {
    icon: Heart,
    title: 'رعاية متكاملة',
    description: 'نهتم بصحتك قبل وأثناء وبعد العملية الجراحية'
  },
  {
    icon: Activity,
    title: 'متابعة دورية',
    description: 'نتابع حالتك الصحية بشكل مستمر لضمان أفضل النتائج'
  },
  {
    icon: Microscope,
    title: 'تشخيص دقيق',
    description: 'نستخدم أحدث الأجهزة الطبية للتشخيص الدقيق'
  }
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50 font-arabic">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">خدماتنا الطبية</h2>
          <p className="text-xl text-gray-600">نقدم مجموعة متكاملة من الخدمات الطبية المتميزة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}