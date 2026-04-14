import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const customSkills = [
    { category: 'Programming', items: ['Java', 'HTML', 'CSS', 'Python', 'SQL'] },
    { category: 'Technologies', items: ['ServiceNow (CSA & CAD)', 'Pega (Beginner)', 'React', 'Git', 'VS Code'] },
    { category: 'Concepts', items: ['AI & ML', 'OOPS', 'DBMS', 'Workflow Automation'] },
    { category: 'Data Analytics', items: ['Microsoft Excel', 'Power BI', 'Data Preprocessing'] },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="skills-container">
          {customSkills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              className="skill-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skill-badges">
                {skillGroup.items.map((item, id) => (
                  <motion.span 
                    key={id}
                    className="skill-badge"
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--color-accent)' }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
