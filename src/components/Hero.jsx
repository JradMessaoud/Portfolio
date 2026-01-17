import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, TrendingUp, BarChart3 } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero-section');
      if (hero && window.scrollY > 50) {
        hero.classList.add('hero-scrolled');
      } else if (hero) {
        hero.classList.remove('hero-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: Brain, name: 'Machine Learning' },
    { icon: Database, name: 'Deep Learning' },
    { icon: TrendingUp, name: 'AI Solutions' },
    { icon: BarChart3, name: 'Model Development' },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-name"
          >
            Messaoud Jrad
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="data-word">AI</span><br />
            <span className="analyst-first">D</span>eveloper
          </motion.h1>
          
          <motion.div
            className="services"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <service.icon className="service-icon" size={24} strokeWidth={2} />
                <div className="service-name">{service.name}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <img 
            src={`${import.meta.env.BASE_URL}images/Messaoud_jrad_photo-removebg-preview.png`} 
            alt="Messaoud Jrad - AI Developer"
            className="hero-profile-photo"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
