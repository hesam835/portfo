import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: '💻',
      title: 'طراحی و توسعه وب‌سایت سفارشی',
      description: 'طراحی مدرن، تجربه کاربری بهینه و عملکرد بالا برای رشد کسب‌وکار شما'
    },
    {
      icon: '🛡️',
      title: 'امنیت و سخت‌سازی سرویس',
      description: 'پیاده‌سازی لایه‌های امنیتی و استانداردهای روز برای محافظت از داده‌ها'
    },
    {
      icon: '⚙️',
      title: 'Backend مقیاس‌پذیر',
      description: 'توسعه هسته سرویس با Django, DRF, FastAPI و Docker برای مقیاس‌پذیری'
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="gradient-text">خدمات</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">طراحی، توسعه و استقرار امن برای رشد پایدار کسب‌وکار شما</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
          {services.map((s, i) => (
            <motion.div key={i} className="card" whileHover={{ y: -8 }}>
              <div className="text-4xl text-purple-400 mb-3">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{s.title}</h3>
              <p className="text-gray-400 mb-3">{s.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
