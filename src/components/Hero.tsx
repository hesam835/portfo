import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const features = [
    { icon: '💻', title: 'توسعه وب حرفه‌ای', description: 'با استفاده از جدیدترین تکنولوژی‌ها' },
    { icon: '💡', title: 'طراحی خلاقانه', description: 'راه‌حل‌های نوآورانه برای کسب‌وکار' },
    { icon: '🚀', title: 'عملکرد بهینه', description: 'سرعت و کیفیت در بالاترین سطح' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">طراحی سایت حرفه‌ای با تجربه کاربری بهینه و تکنولوژی‌های مدرن</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-14" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}>
          {features.map((f, i) => (
            <motion.div key={i} whileHover={{ y: -8 }} className="card text-center group">
              <div className="text-4xl mb-2">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{f.title}</h3>
              <p className="text-gray-400">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
