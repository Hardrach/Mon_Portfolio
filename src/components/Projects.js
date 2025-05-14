import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Une plateforme e-commerce moderne avec panier d\'achat et paiement en ligne.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Task Management App',
      description: 'Application de gestion de tâches avec authentification et tableau de bord.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Weather Dashboard',
      description: 'Tableau de bord météo interactif avec prévisions en temps réel.',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js'],
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Mes Projets</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 