import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Layers, Workflow } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'School Admission Approval System',
      description: 'Automated admission requests and approval workflows using ServiceNow, significantly improving the efficiency and transparency of the admission process.',
      icon: <Layers size={32} />
    },
    {
      id: 2,
      title: 'SkillSnap.AI',
      description: 'A career guidance platform developed on ServiceNow. It analyzes resumes to generate ATS scores, job-match percentages, skill-gap insights, and provides a personalized career roadmap for students.',
      icon: <Rocket size={32} />
    },
    {
      id: 3,
      title: 'Intelligent Workflow Orchestration',
      description: 'ServiceNow-based system automating institutional administrative workflows. Integrated AI, Machine Learning, WhatsApp notifications, and smart scheduling to reduce waiting time.',
      icon: <Workflow size={32} />
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="project-icon-wrapper">
                {project.icon}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                <div className="project-tech-stack">
                  <span className="project-tech">ServiceNow</span>
                  <span className="project-tech">AI Integration</span>
                </div>
                <div className="project-actions">
                  <a href="#" className="project-link" onClick={(e) => e.preventDefault()}>
                    <Rocket size={16} /> Live Demo
                  </a>
                  <a href="#" className="project-link" onClick={(e) => e.preventDefault()}>
                    <Workflow size={16} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
