import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const team = [
    { name: 'حسام شادمهری', role: 'Backend Developer', skills: ['Django', 'Django REST Framework', 'FastAPI', 'Docker'], avatar: '💻' },
    { name: 'محمدرضا کلهر', role: 'Backend Developer', skills: ['Django', 'Django REST Framework', 'FastAPI', 'Docker'], avatar: '💻' },
    { name: 'مصطفی مشعشعی', role: 'Full‑stack Developer', skills: ['React', 'Django', 'Django REST Framework', 'FastAPI', 'Docker'], avatar: '💻' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="gradient-text">درباره ما</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">ما تیمی حرفه‌ای برای طراحی و توسعه وب‌سایت‌های امن و مقیاس‌پذیر هستیم تا به رشد کسب‌وکار شما کمک کنیم</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>
          <h3 className="text-3xl font-bold text-center mb-12 text-white">اعضای تیم</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }} whileHover={{ y: -8 }} className="card text-center">
                <div className="text-6xl mb-4">{m.avatar}</div>
                <h4 className="text-xl font-semibold mb-1 text-white">{m.name}</h4>
                <p className="text-purple-400 mb-4">{m.role}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {m.skills.map((sk, j) => (
                    <span key={j} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">{sk}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
