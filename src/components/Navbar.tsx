import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'خانه', href: '#home' },
    { name: 'درباره ما', href: '#about' },
    { name: 'خدمات', href: '#services' },
    { name: 'نمونه کارها', href: '#projects' },
    { name: 'تماس', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="w-28" />

          <div className="hidden md:flex gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className="text-gray-300 hover:text-white transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="md:hidden">
            <motion.button whileTap={{ scale: 0.96 }} onClick={() => setIsOpen(v => !v)} className="text-white p-2">
              <span className="text-2xl" aria-label="menu">{isOpen ? '✖️' : '☰'}</span>
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden bg-black/90 backdrop-blur-md rounded-b-2xl"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
