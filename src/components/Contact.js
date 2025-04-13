import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container ">
        <h2 className='center-heading'>Get In Touch</h2>
        <p className="contact-description center-heading">
          As a full-stack software engineer, I bring expertise in both frontend and backend development. Let's collaborate on creating innovative solutions and building exceptional digital experiences together.
        </p>
        <div className="contact-content">
          <div className="contact-methods">
            <div className="contact-method">
              <img src="/assets/email-icon.svg" alt="Email" className="method-icon" />
              <div className="method-info">
                <h3>Email Me</h3>
                <a href="mailto:shashwatpandey88@gmail.com" className="email-link">
                  shashwatpandey88@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-method">
              <img src="/assets/location-icon.svg" alt="Location" className="method-icon" />
              <div className="method-info">
                <h3>Location</h3>
                <p>New Delhi, India</p>
              </div>
            </div>
          </div>
          <div className="social-section">
            <h3>Connect With Me</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/shashwat88/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/assets/linkedin-icon.svg" alt="LinkedIn" className="social-icon" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/darkrider88" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/assets/github-icon.svg" alt="GitHub" className="social-icon" />
                <span>GitHub</span>
              </a>
              <a href="https://medium.com/@darkrider88" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/assets/blog-icon.svg" alt="Blog" className="social-icon" />
                <span>Blog</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 