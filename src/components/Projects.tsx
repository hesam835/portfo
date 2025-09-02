import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    { id: 1, title: 'فروشگاه آنلاین', description: 'فروشگاه کامل با پرداخت آنلاین', image: '🛒' },
    { id: 2, title: 'مدیریت پروژه', description: 'سیستم مدیریت پروژه با گزارش‌گیری', image: '📊' },
    { id: 3, title: 'سایت خبری', description: 'پورتال خبری با SEO بالا', image: '📰' },
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
                <p className="text-gray-400 text-sm">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
