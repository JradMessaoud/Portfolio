import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Database, Brain, Sparkles, Globe, Server, User, Briefcase, Award, Languages } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    { name: 'Python', icon: Code2 },
    { name: 'Java', icon: Code2 },
    { name: 'SQL', icon: Database },
    { name: 'JavaScript', icon: Code2 },
    { name: 'Machine Learning', icon: Brain },
    { name: 'NLP', icon: Sparkles },
    { name: 'Streamlit', icon: Server },
    { name: 'REST APIs', icon: Globe },
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 md:px-12 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-display text-white mb-6">
            About Me
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column - Profile and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Profile Photo */}
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 mb-12">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={`${import.meta.env.BASE_URL}images/Messaoud_jrad_photo-removebg-preview.png`} 
                  alt="Messaoud Jrad - AI Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Who I Am</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I'm a passionate <span className="font-semibold text-orange-500">Business Information Systems student</span> at ESPRIT School of Business, 
                specializing in AI and Data Analytics. My journey combines business acumen with 
                technical expertise, allowing me to build innovative solutions that bridge technology 
                and real-world business needs.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With hands-on experience in machine learning, natural language processing, and 
                full-stack development, I create intelligent applications that solve complex problems. 
                From building AI-powered tourism assistants to developing comprehensive data analytics 
                platforms, I'm driven by the potential of technology to transform industries.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Education */}
            <div className="bg-dark-surface text-white p-8 rounded-2xl border border-orange-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Award size={28} className="text-orange-500" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-lg">ESPRIT School of Business</p>
                  <p className="text-gray-300">License in Business Information Systems</p>
                  <p className="text-sm text-gray-400">2023 - Present</p>
                </div>
                <div>
                  <p className="font-semibold text-lg">Baccalaureate in Economics</p>
                  <p className="text-sm text-gray-400">2022 - 2023</p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-dark-surface text-white p-8 rounded-2xl border border-orange-500/20">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Languages</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">English</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm">Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">French</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm">Advanced</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-dark-surface text-white p-8 rounded-2xl border border-orange-500/20">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">SQL Certification</p>
                  <p className="text-sm text-gray-400">365 Data Science • Dec 2024</p>
                </div>
                <div>
                  <p className="font-semibold">Sustainability Certificate</p>
                  <p className="text-sm text-gray-400">Honoris • July 2024</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
