import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Tools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const tools = [
    { name: 'Python', icon: '🐍', category: 'Language' },
    { name: 'Java', icon: '☕', category: 'Language' },
    { name: 'SQL', icon: '🗄️', category: 'Database' },
    { name: 'JavaScript', icon: '⚡', category: 'Language' },
    { name: 'HTML/CSS', icon: '🎨', category: 'Frontend' },
    { name: 'SQLite', icon: '💾', category: 'Database' },
    { name: 'Tableau', icon: '📊', category: 'Analytics' },
    { name: 'Machine Learning', icon: '🤖', category: 'ML/AI' },
    { name: 'NLP', icon: '💬', category: 'ML/AI' },
    { name: 'REST APIs', icon: '🔌', category: 'Backend' },
    { name: 'Pipelines ETL', icon: '⚙️', category: 'Data Engineering' },
    { name: 'Git', icon: '📦', category: 'Version Control' },
    { name: 'LLM', icon: '🧠', category: 'ML/AI' },
    { name: 'Travail En équipe', icon: '🤝', category: 'Soft Skills' },
    { name: 'Adaptabilité', icon: '🔄', category: 'Soft Skills' },
    { name: 'Créativité', icon: '💡', category: 'Soft Skills' },
  ];

  return (
    <section id="tools" ref={ref} className="relative py-32 px-6 md:px-12 lg:px-16 bg-black text-white overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-display mb-6">
            My <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I leverage cutting-edge tools and technologies to build innovative solutions
            that solve real-world problems
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-300">{tool.category}</p>
              </div>

              {/* Hover effect glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 via-red-600/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-red-600/10 group-hover:to-orange-500/10 transition-all duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-lg mb-6">
            Always learning and exploring new technologies
          </p>
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
            <span>View My Projects</span>
            <span>→</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
