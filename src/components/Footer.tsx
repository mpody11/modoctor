import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Share2, Stethoscope } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white font-arabic">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Stethoscope className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">د. محمد أحمد</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              نقدم خدمات طبية متميزة في مجال الجراحة العامة مع التزامنا التام بأعلى معايير الجودة والرعاية الصحية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400">من نحن</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400">خدماتنا</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-blue-400">المدونة</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-400">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">معلومات التواصل</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+966 50 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">info@doctor.mohamed.com</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6">ساعات العمل</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <div className="text-gray-400">
                  <p>السبت - الخميس</p>
                  <p>9:00 صباحاً - 9:00 مساءً</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Share2 className="h-5 w-5 text-gray-400" />
              <span className="text-gray-400">تابعونا على وسائل التواصل الاجتماعي</span>
            </div>
            <p className="text-gray-400">© 2024 د. محمد أحمد. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </div>
    </footer>
  );
}