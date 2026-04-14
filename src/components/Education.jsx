import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy, Star } from 'lucide-react';
import './Education.css';

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="container">
        <motion.div 
          className="education-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="education-content">
          {/* Education Box */}
          <motion.div 
            className="glass-card edu-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="edu-icon"><GraduationCap size={32} /></div>
            <h3 className="edu-degree">B.Tech in Computer Science (AI & ML)</h3>
            <h4 className="edu-school">Aditya College Of Engineering and Technology</h4>
            <p className="edu-date">Surampalem, India | 2023 - 2027</p>
            <div className="edu-gpa">GPA: 8.8</div>
          </motion.div>

          {/* Achievements Box */}
          <motion.div 
            className="glass-card achievements-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="achievements-list">
              <div className="achievement-item">
                <Trophy className="ach-icon" size={24} />
                <div>
                  <h4>Competitive Programming</h4>
                  <p>Solved 400+ problems across platforms.</p>
                  <div className="ach-links">
                    <a href="https://www.codechef.com/users/poojitha_soc" target="_blank" rel="noreferrer">CodeChef</a>
                    <a href="https://leetcode.com/u/poojithanallabelli/" target="_blank" rel="noreferrer">LeetCode</a>
                    <a href="https://www.hackerrank.com/profile/poojithanallabe1" target="_blank" rel="noreferrer">HackerRank</a>
                  </div>
                </div>
              </div>

              <div className="achievement-item">
                <Star className="ach-icon" size={24} />
                <div>
                  <h4>HackerRank Badges</h4>
                  <p>5-star badge in Java, 5-star in Python, 3-star in SQL</p>
                </div>
              </div>

              <div className="achievement-item">
                <Award className="ach-icon" size={24} />
                <div>
                  <h4>Certifications</h4>
                  <p>Certified ServiceNow System Administrator (CSA)</p>
                  <p>Certified ServiceNow Application Developer (CAD)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
