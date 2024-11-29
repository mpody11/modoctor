import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import HomeFeatures from './components/HomeFeatures';
import HomeTestimonials from './components/HomeTestimonials';

function App() {
  return (
    <Router basename="/modoctor"> {/* أضف خاصية basename */}
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <Navbar />
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <HomeFeatures />
                <HomeTestimonials />
              </>
            }
          />
          {/* باقي الصفحات */}
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
