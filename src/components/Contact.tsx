import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const info = [
    { icon: '✉️', value: 'hesamshadmehri@gmail.com', link: 'mailto:hesamshadmehri@gmail.com' },
    { icon: '📞', value: '09019509858', link: 'tel:09019509858' },
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">تماس با ما</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            برای همکاری و مشاوره، از راه‌های ارتباطی زیر استفاده کنید.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {info.map((it, i) => (
            <motion.a
              key={i}
              href={it.link}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="flex items-center gap-4 p-5 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="text-2xl text-purple-400">{it.icon}</div>
              <p className="text-gray-300 text-lg break-all">{it.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
