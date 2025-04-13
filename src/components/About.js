import React from 'react';
import '../styles/About.css';
import profile from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={profile} alt="Profile" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p className="about-description">
            I am a passionate developer with a strong focus on creating beautiful and functional web applications.
            With expertise in modern web technologies, I strive to deliver exceptional user experiences.
          </p>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">UI/UX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 