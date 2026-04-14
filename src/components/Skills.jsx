import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const customSkills = [
    { category: 'Programming', items: ['Java', 'HTML', 'CSS', 'Python', 'SQL'] },
    { category: 'Technologies', items: ['ServiceNow (CSA & CAD)', 'Pega (Beginner)', 'React', 'Git', 'VS Code'] },
    { category: 'Concepts', items: ['AI & ML', 'OOPS', 'DBMS', 'Workflow Automation'] },

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
            <div key={index} className="skill-group">
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="marquee-wrapper">
                <motion.div 
                  className="marquee-track"
                  animate={{ x: index % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                  transition={{ 
                    duration: 30, 
                    ease: "linear", 
                    repeat: Infinity 
                  }}
                >
                  {/* We duplicate the items array so the marquee loops seamlessly! */}
                  {[...skillGroup.items, ...skillGroup.items, ...skillGroup.items].map((item, id) => (
                    <span 
                      key={id}
                      className="skill-badge hover-target"
                    >
                      {item}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
