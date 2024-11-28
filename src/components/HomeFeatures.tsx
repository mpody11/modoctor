import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'رعاية طبية آمنة',
    description: 'نلتزم بأعلى معايير السلامة والجودة في جميع إجراءاتنا الطبية'
  },
  {
    icon: Clock,
    title: 'مواعيد مرنة',
    description: 'نوفر مواعيد مرنة تناسب جدولك اليومي مع إمكانية الحجز عبر الإنترنت'
  },
  {
    icon: Users,
    title: 'فريق متخصص',
    description: 'فريق طبي متكامل من ذوي الخبرة والكفاءة العالية'
  },
  {
    icon: Award,
    title: 'خبرة معتمدة',
    description: 'حاصلون على شهادات واعتمادات من أفضل المؤسسات الطبية العالمية'
  }
];

export default function HomeFeatures() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">لماذا تختارنا؟</h2>
          <p className="text-xl text-gray-600">نقدم خدمات طبية متميزة تجمع بين الخبرة والتقنية الحديثة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}