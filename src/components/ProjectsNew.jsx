import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  // Track current image index for each project
  const [currentImages, setCurrentImages] = useState({});

  // Project configuration with multiple images
  const projects = [
    {
      id: 1,
      title: 'Olive Oil Tracker Pro',
      logo: `${import.meta.env.BASE_URL}images/projects/olive-oil-tracker/Logo.png`,
      images: [
        `${import.meta.env.BASE_URL}images/projects/olive-oil-tracker/1.png`,
        `${import.meta.env.BASE_URL}images/projects/olive-oil-tracker/2.png`,
        `${import.meta.env.BASE_URL}images/projects/olive-oil-tracker/3.png`,
      ],
      description: 'Advanced dashboard for tracking olive oil sales and analytics',
      category: 'Data Analytics'
    },
    {
      id: 2,
      title: 'TunisiaTourAI',
      logo: `${import.meta.env.BASE_URL}images/projects/tunisia-tour-ai/Logo.png`,
      images: [
        `${import.meta.env.BASE_URL}images/projects/tunisia-tour-ai/1.png`,
        `${import.meta.env.BASE_URL}images/projects/tunisia-tour-ai/2.png`,
        `${import.meta.env.BASE_URL}images/projects/tunisia-tour-ai/3.png`,
      ],
      description: 'AI-powered tourism assistant for Tunisia using Gemini AI',
      category: 'Machine Learning'
    },
  ];

  // Initialize current images
  useEffect(() => {
    const initialImages = {};
    projects.forEach(project => {
      initialImages[project.id] = 0;
    });
    setCurrentImages(initialImages);
  }, []);

  // Auto-cycle images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages(prev => {
        const newImages = { ...prev };
        projects.forEach(project => {
          newImages[project.id] = (prev[project.id] + 1) % project.images.length;
        });
        return newImages;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Duplicate for infinite scroll
  const allProjects = [...projects, ...projects];

  const categories = [
    {
      title: 'Data Analytics',
      description: 'Interactive dashboards and data visualization projects',
      icon: '📊',
      gradient: 'from-orange-500 via-orange-600 to-orange-700',
      bgPattern: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
    },
    {
      title: 'Machine Learning',
      description: 'AI/ML models for prediction and classification',
      icon: '🤖',
      gradient: 'from-orange-600 via-red-500 to-red-600',
      bgPattern: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)'
    },
    {
      title: 'Business Intelligence',
      description: 'Strategic insights and decision-making tools',
      icon: '💼',
      gradient: 'from-red-600 via-red-700 to-red-800',
      bgPattern: 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)'
    },
    {
      title: 'ETL & Pipelines',
      description: 'Data engineering and automation workflows',
      icon: '⚙️',
      gradient: 'from-orange-700 via-red-600 to-black',
      bgPattern: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)'
    },
  ];

  return (
    <>
      {/* Featured Projects Section */}
      <section className="about-section" id="projects">
        <div className="about-grid">
          <div className="about-left">
            <h2 className="about-title">
              <span className="initial-part">Featured</span>{' '}
              <span className="portfolio-part">Projects</span>
            </h2>
          </div>
          <div className="about-divider"></div>
          <div className="about-right">
            <p className="about-description">
              This collection showcases my work in data analytics, machine learning, and business intelligence.
              Each project demonstrates practical applications of advanced analytical techniques, transforming
              raw data into actionable insights that drive business decisions and create measurable value.
            </p>
          </div>
        </div>

        {/* Flexible Project Grid */}
        <div className="projects-grid-flexible">
          {projects.map((project) => {
            const currentImageIndex = currentImages[project.id] || 0;
            
            return (
              <motion.div
                key={project.id}
                className="project-card-flexible"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: project.id * 0.2 }}
              >
                <div className="project-image-wrapper">
                  {project.images.map((img, imgIndex) => (
                    <img 
                      key={imgIndex}
                      src={img}
                      alt={`${project.title} - ${imgIndex + 1}`}
                      className={`project-image-flexible ${imgIndex === currentImageIndex ? 'active' : ''}`}
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/800x600/1a1a2e/ff8c42?text=${encodeURIComponent(project.title)}`;
                      }}
                    />
                  ))}
                  
                  {/* Image indicators */}
                  <div className="project-indicators-flexible">
                    {project.images.map((_, imgIndex) => (
                      <div 
                        key={imgIndex}
                        className={`indicator-flex ${imgIndex === currentImageIndex ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="project-content-flexible">
                  <div className="project-header-flexible">
                    <img 
                      src={project.logo} 
                      alt={`${project.title} logo`}
                      className="project-logo-flexible"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div>
                      <span className="project-category-flexible">{project.category}</span>
                      <h3 className="project-title-flexible">{project.title}</h3>
                    </div>
                  </div>
                  <p className="project-desc-flexible">{project.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Category Cards Section */}
      <section className="categories-section">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="category-card-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="category-card-inner">
              {/* 3D Background Layer */}
              <div className={`category-bg-layer bg-gradient-to-br ${category.gradient}`}
                   style={{ clipPath: category.bgPattern }}></div>
              
              {/* Floating Icon */}
              <div className="category-icon-3d">
                <span className="text-8xl">{category.icon}</span>
              </div>
              
              {/* Grid Pattern Overlay */}
              <div className="category-grid-pattern"></div>
              
              {/* Content */}
              <div className="category-content-3d">
                <h3 className="category-title-3d">{category.title}</h3>
                <p className="category-description-3d">{category.description}</p>
                
                {/* 3D Accent Line */}
                <div className="category-accent-line"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default Projects;
