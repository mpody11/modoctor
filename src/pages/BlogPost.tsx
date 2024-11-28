import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Share2 } from 'lucide-react';

// Define the type for blog post
interface BlogPost {
  title: string;
  content: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
}

// Define the type for the blogPosts object
const blogPosts: Record<string, BlogPost> = {
  "1": {
    title: 'أحدث التقنيات في الجراحة العامة',
    content: `
      <p>تشهد الجراحة العامة تطوراً مستمراً في التقنيات والأساليب المستخدمة، مما يساهم في تحسين نتائج العمليات الجراحية وتقليل فترة التعافي للمرضى.</p>
      
      <h2>المناظير الجراحية المتقدمة</h2>
      <p>تعتبر جراحة المناظير من أهم التطورات في مجال الجراحة العامة، حيث تتميز بـ:</p>
      <ul>
        <li>تقليل الألم بعد العملية</li>
        <li>تقليل فترة النقاهة</li>
        <li>ندبات أصغر وأقل وضوحاً</li>
        <li>دقة أعلى في الإجراء الجراحي</li>
      </ul>

      <h2>الروبوتات الجراحية</h2>
      <p>أصبحت الروبوتات الجراحية جزءاً أساسياً من العمليات المتقدمة، حيث توفر:</p>
      <ul>
        <li>دقة متناهية في الإجراءات الجراحية</li>
        <li>تحكم أفضل في الأدوات الجراحية</li>
        <li>رؤية ثلاثية الأبعاد للمنطقة الجراحية</li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80',
    date: '١٥ مارس ٢٠٢٤',
    author: 'د. محمد أحمد',
    tags: ['جراحة', 'تكنولوجيا', 'طب']
  }
};

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts[id || ""];

  if (!post) {
    return <div className="text-center py-20">المقال غير موجود</div>;
  }

  return (
    <div className="font-arabic pt-20">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
          
          <div className="flex items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>{post.author}</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-2">
                {post.tags.map((tag: string) => (
                  <span key={tag} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <Share2 className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">مشاركة المقال</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <ArrowRight className="h-5 w-5" />
            العودة إلى المدونة
          </Link>
        </div>
      </article>
    </div>
  );
}
