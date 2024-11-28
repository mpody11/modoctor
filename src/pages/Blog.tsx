import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'أحدث التقنيات في الجراحة العامة',
    excerpt: 'تعرف على أحدث التقنيات المستخدمة في مجال الجراحة العامة وكيف تساهم في تحسين نتائج العمليات الجراحية.',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80',
    date: '١٥ مارس ٢٠٢٤',
    author: 'د. محمد أحمد'
  },
  {
    id: 2,
    title: 'نصائح هامة قبل العملية الجراحية',
    excerpt: 'إرشادات وتوجيهات مهمة يجب اتباعها قبل إجراء أي عملية جراحية لضمان أفضل النتائج.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80',
    date: '١٠ مارس ٢٠٢٤',
    author: 'د. محمد أحمد'
  },
  {
    id: 3,
    title: 'العناية بعد العملية الجراحية',
    excerpt: 'دليل شامل للعناية الصحيحة بعد العملية الجراحية وكيفية التعافي السريع.',
    image: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&q=80',
    date: '٥ مارس ٢٠٢٤',
    author: 'د. محمد أحمد'
  }
];

export default function Blog() {
  return (
    <div className="font-arabic">
      {/* Header Bar */}
      <div className="bg-blue-600 text-white" style={{ height: '7rem', marginTop: '-2rem' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-center h-full">
        </div>
      </div>

      {/* Blog Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12"
          >
            المدونة الطبية
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="mt-4 text-blue-600 flex items-center hover:text-blue-700"
                  >
                    اقرأ المزيد
                    <ArrowLeft className="h-4 w-4 mr-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
