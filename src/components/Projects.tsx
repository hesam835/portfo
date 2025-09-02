import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    { 
      id: 1, 
      title: 'آیزا - مانیتورینگ وب‌سایت', 
      description: 'سرویس مانیتورینگ و امنیت وب‌سایت با پایش لحظه‌ای از 177 نقطه در 30 استان ایران و 25 کشور جهان', 
      image: '🛡️',
      link: 'https://ayyza.com/'
    },
    { 
      id: 2, 
      title: 'استیناس - هوش مصنوعی فارسی', 
      description: 'شرکت پیشرو در زمینه هوش مصنوعی برای زبان فارسی با تخصص در پردازش سیگنال و یادگیری ماشین', 
      image: '🤖',
      link: 'https://stinas.ir/'
    },
    { 
      id: 3, 
      title: 'رگال - فروشگاه فرش', 
      description: 'سایت فروشگاه فرش با طراحی مدرن و تجربه کاربری بهینه', 
      image: '🏠'
    },

  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="gradient-text">نمونه کارها</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">نمونه‌ای از پروژه‌های انجام‌شده توسط تیم ما</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }} whileHover={{ y: -8 }} className="card group">
              <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform">{p.image}</div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-white">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{p.description}</p>
                {p.link && (
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    مشاهده سایت
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
