import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative bg-dark-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-500/20"
    >
      {/* Color accent top */}
      <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`}></div>

      <div className="p-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="inline-block px-3 py-1 bg-dark-bg text-orange-500 text-xs font-semibold rounded-full mb-4">
              {project.date}
            </span>
            <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-orange-500 transition-all">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-dark-bg text-gray-300 rounded-full text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors duration-300 border border-orange-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features List */}
        <div className="mb-8 space-y-3">
          {project.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">{feature}</p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button className="group/btn w-full py-4 bg-dark-bg text-white rounded-xl font-semibold hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 transition-all duration-300 flex items-center justify-center gap-2 border border-orange-500/30">
          <span>View Project</span>
          <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Hover background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: 'Olive Oil Tracker Pro',
      date: 'July 2025',
      description: 'A comprehensive data analytics platform for olive oil production tracking, featuring real-time KPIs, anomaly detection, and predictive sales forecasting powered by AI.',
      tech: ['Streamlit', 'SQLite', 'Gemini AI', 'Python', 'Pandas'],
      features: [
        'Real-time KPIs dashboard with interactive visualizations',
        'AI-powered anomaly detection for production data',
        '3D visualization of production trends and patterns',
        'Sales forecasting using machine learning algorithms',
      ],
      gradient: 'from-orange-500 to-red-600',
    },
    {
      title: 'TunisiaTourAI',
      date: 'February 2025',
      description: 'An intelligent tourism assistant for Tunisia using advanced NLP and AI image generation to provide personalized travel recommendations.',
      tech: ['Gemini AI', 'Stable Diffusion', 'NLP', 'Python', 'FastAPI'],
      features: [
        'AI-powered tourism recommendations and planning',
        'Natural language query processing for travel insights',
        'Interactive chat interface with context awareness',
        'Automated travel itinerary summaries',
      ],
      gradient: 'from-red-600 to-orange-500',
    },
    {
      title: 'SmartPOS Desktop App',
      date: 'August 2024',
      description: 'A full-featured Point of Sale desktop application with inventory management, invoice generation, and barcode scanning capabilities.',
      tech: ['JavaFX', 'Java', 'MVC', 'SQLite', 'JasperReports'],
      features: [
        'Complete inventory management system',
        'PDF invoice generation with custom templates',
        'Barcode scanning and product lookup',
        'Sales analytics and reporting dashboard',
      ],
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section id="projects" ref={ref} className="relative py-32 px-6 md:px-12 lg:px-16 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-display text-white mb-6">
            Featured <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl">
            Showcasing innovative solutions that combine AI, data analytics, and modern development practices
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-300 mb-6 text-lg">Interested in more of my work?</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-dark-surface text-white rounded-full font-semibold hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 transition-all duration-300 hover:scale-105 border border-orange-500/30"
          >
            <span>View All Projects on GitHub</span>
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
