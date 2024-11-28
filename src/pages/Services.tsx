import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, Heart, Activity, Microscope, 
  Clipboard, UserCheck, Clock, Shield, Calendar 
} from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'جراحة عامة',
    description: 'نقدم خدمات الجراحة العامة المتقدمة باستخدام أحدث التقنيات والمعدات الطبية.',
    features: ['جراحة المناظير', 'جراحة الغدة الدرقية', 'جراحة المرارة', 'جراحة الفتق']
  },
  {
    icon: Microscope,
    title: 'تشخيص متقدم',
    description: 'نستخدم أحدث الأجهزة والتقنيات التشخيصية لضمان دقة التشخيص وفعالية العلاج.',
    features: ['تصوير بالموجات فوق الصوتية', 'تنظير الجهاز الهضمي', 'فحوصات مخبرية شاملة']
  },
  {
    icon: UserCheck,
    title: 'رعاية شخصية',
    description: 'نقدم رعاية شخصية مخصصة لكل مريض مع متابعة مستمرة قبل وبعد العملية.',
    features: ['خطة علاج مخصصة', 'متابعة دورية', 'استشارات طبية', 'دعم نفسي']
  },
  {
    icon: Shield,
    title: 'جودة وأمان',
    description: 'نلتزم بأعلى معايير الجودة والسلامة في جميع إجراءاتنا الطبية.',
    features: ['معايير عالمية', 'تعقيم متقدم', 'فريق طبي متخصص', 'تجهيزات حديثة']
  }
];

export default function Services() {
  return (
    <div className="font-arabic pt-20">
{/* Hero Section */}
<div className="bg-blue-600 text-white py-20 -mt-20 w-full">
  <div className="max-w-7xl mx-auto px-4">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-bold mb-6 text-center"
    >
      خدماتنا الطبية
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl text-center max-w-3xl mx-auto"
    >
      نقدم مجموعة شاملة من الخدمات الطبية المتخصصة في مجال الجراحة العامة
    </motion.p>
  </div>
</div>
      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">هل تحتاج إلى استشارة طبية؟</h2>
          <p className="text-gray-600 mb-8">نحن هنا لمساعدتك والإجابة على جميع استفساراتك</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">
            احجز موعدك الآن
            <Calendar className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}