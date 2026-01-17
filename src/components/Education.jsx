import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const education = [
    {
      icon: GraduationCap,
      title: 'License in Business Information Systems',
      institution: 'ESPRIT School of Business',
      date: '2023 - Present',
      description: 'Pursuing a comprehensive degree combining business strategy with information systems, focusing on AI, data analytics, and digital transformation.',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: Award,
      title: 'SQL Certification',
      institution: '365 Data Science',
      date: 'December 2024',
      description: 'Advanced certification covering complex queries, database optimization, data manipulation, and performance tuning.',
      gradient: 'from-red-600 to-orange-500',
    },
    {
      icon: Award,
      title: 'Honoris Sustainability Certificate',
      institution: 'Honoris United Universities',
      date: 'July 2024',
      description: 'Certification focused on sustainable business practices and environmental impact analysis.',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: GraduationCap,
      title: 'Baccalaureate in Economics',
      institution: 'High School',
      date: '2022 - 2023',
      description: 'Completed with focus on economics, mathematics, and analytical thinking.',
      gradient: 'from-red-600 to-orange-500',
    },
  ];

  return (
    <section id="education" ref={ref} className="relative py-32 px-6 md:px-12 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-display text-white mb-6">
            Education & <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl">
            A journey of continuous learning and professional development
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-dark-surface text-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 border border-orange-500/20"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.gradient} mb-6`}>
                <item.icon size={32} className="text-white" />
              </div>

              {/* Date */}
              <span className="text-sm text-gray-300 mb-3 block">{item.date}</span>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>

              {/* Institution */}
              <p className="text-lg text-orange-500 font-semibold mb-4">{item.institution}</p>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">{item.description}</p>

              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
