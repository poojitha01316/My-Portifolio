import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Brain, Code2, Database } from 'lucide-react';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="about-section" id="about">
      <div className="container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>
              I’m an enthusiastic <strong>B.Tech student</strong> specializing in Computer Science and Engineering (AI & ML) at Aditya College of Engineering and Technology, driven by a strong passion for Artificial Intelligence, Machine Learning, and impactful software development.
            </p>
            <p>
              Currently, I am expanding my technical foundation while training as a <strong>ServiceNow Trainee</strong>. I thrive on creating smart workflow automation solutions, building robust administrative applications, and exploring the intersection between enterprise software and cutting-edge AI.
            </p>
          </motion.div>

          <motion.div 
            className="about-cards"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="glass-card feature-card" variants={itemVariants}>
              <Brain className="feature-icon" />
              <h3>AI & ML</h3>
              <p>Passionate about data, intelligent algorithms, and real-world ML applications.</p>
            </motion.div>
            
            <motion.div className="glass-card feature-card" variants={itemVariants}>
              <Terminal className="feature-icon" />
              <h3>ServiceNow</h3>
              <p>Experienced in crafting automated workflows and administrative processes.</p>
            </motion.div>

            <motion.div className="glass-card feature-card" variants={itemVariants}>
              <Code2 className="feature-icon" />
              <h3>Development</h3>
              <p>Strong foundation in Java, HTML/CSS, SQL, and Front-End technologies.</p>
            </motion.div>

            <motion.div className="glass-card feature-card" variants={itemVariants}>
              <Database className="feature-icon" />
              <h3>Problem Solving</h3>
              <p>Solved 400+ competitive programming challenges across various platforms.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
