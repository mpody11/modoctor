import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="font-arabic">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 -mt-20 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            من نحن
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            نحن فريق طبي متخصص في الجراحة العامة، نسعى لتقديم أفضل رعاية صحية ممكنة لمرضانا
          </motion.p>
        </div>
      </div>

      {/* Doctor's Profile */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="doctor.webp" 
                alt="د. محمد أحمد"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">د. محمد أحمد</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                استشاري الجراحة العامة مع خبرة تمتد لأكثر من 15 عاماً في مجال الجراحة. 
                حاصل على البورد الأمريكي في الجراحة العامة وعضو في العديد من الجمعيات الطبية العالمية.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-blue-600" />
                  <span>البورد الأمريكي في الجراحة العامة</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-blue-600" />
                  <span>عضو الجمعية الأمريكية للجراحين</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span>خبرة 15+ عاماً</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
