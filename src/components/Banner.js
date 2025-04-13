import React from 'react';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <section id="home" className="banner">
      <div className="banner-content">
        <h1>Shashwat Pandey</h1>
        <p className="subtitle">I'm a passionate software engineer creating efficient and scalable solutions</p>
        <div className="cta-buttons">
          <a href="https://drive.google.com/file/d/1RYgF1OF7OyJTRnUi7Bi5vHiGvIXB_pJw/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cta-button primary">Resume</a>
          <a href="#contact" className="cta-button secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Banner; 