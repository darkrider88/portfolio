import React from 'react';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <section id="home" className="banner">
      <div className="banner-content">
        <h1>Welcome to My Portfolio</h1>
        <p className="subtitle">I'm a passionate developer creating amazing web experiences</p>
        <div className="cta-buttons">
          <a href="#projects" className="cta-button primary">View My Work</a>
          <a href="#contact" className="cta-button secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Banner; 