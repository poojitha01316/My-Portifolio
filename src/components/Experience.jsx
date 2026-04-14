import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <motion.div 
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="experience-timeline">
          <motion.div 
            className="timeline-item glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="timeline-icon">
              <Briefcase size={24} />
            </div>
            <div className="timeline-content">
              <span className="timeline-date">Present</span>
              <h3 className="timeline-title">ServiceNow Trainee</h3>
              <h4 className="timeline-company">Technical Hub, Aditya College of Engineering and Technology</h4>
              <ul className="timeline-details">
                <li>Hands-on experience with ServiceNow platform and beginner-level Pega.</li>
                <li>Developed workflow automation solutions including forms, approvals, and dashboards utilizing REST APIs.</li>
                <li>Built applications improving overall administrative process efficiency.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
