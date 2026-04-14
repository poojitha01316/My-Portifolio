import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, User, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            className="contact-info glass-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-title">Let's Connect</h3>
            <p className="contact-description">
              I am currently looking for exciting opportunities in AI/ML and software development. My inbox is always open!
            </p>
            
            <div className="contact-links">
              <a href="mailto:poojithanallabelli523@gmail.com" className="contact-item">
                <div className="contact-icon-wrapper"><Mail size={24} /></div>
                <span>poojithanallabelli523@gmail.com</span>
              </a>
              <a href="tel:+917386117149" className="contact-item">
                <div className="contact-icon-wrapper"><Phone size={24} /></div>
                <span>+91 7386117149</span>
              </a>
            </div>

            <div className="social-links">
              <motion.a 
                href="https://github.com/poojitha01316" 
                target="_blank" 
                rel="noreferrer"
                className="social-btn"
                whileHover={{ y: -5 }}
              >
                <Globe size={24} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/pujitha-nallabelli-4b95b2352/" 
                target="_blank" 
                rel="noreferrer"
                className="social-btn"
                whileHover={{ y: -5 }}
              >
                <User size={24} />
              </motion.a>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form glass-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={(e) => { e.preventDefault(); alert("Thanks for your message! This is a UI demo."); }}
          >
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Hello Pujitha, I'd like to hire you for..." required></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Nallabelli Pujitha. All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
