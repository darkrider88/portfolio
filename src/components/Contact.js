import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-description">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
        <div className="contact-content">
          <div className="contact-methods">
            <div className="contact-method">
              <span className="method-icon">📧</span>
              <div className="method-info">
                <h3>Email Me</h3>
                <a href="mailto:your.email@example.com" className="email-link">
                  your.email@example.com
                </a>
              </div>
            </div>
            <div className="contact-method">
              <span className="method-icon">📍</span>
              <div className="method-info">
                <h3>Location</h3>
                <p>Your City, Country</p>
              </div>
            </div>
          </div>
          <div className="social-section">
            <h3>Connect With Me</h3>
            <div className="social-icons">
              <a href="#" className="social-link">
                <span className="social-icon">LinkedIn</span>
              </a>
              <a href="#" className="social-link">
                <span className="social-icon">GitHub</span>
              </a>
              <a href="#" className="social-link">
                <span className="social-icon">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 