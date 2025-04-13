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
          I am a Computer Science and Engineering graduate with a specialization in cybersecurity, holding certifications like eJPT and eWPT. With a strong foundation in penetration testing, web application security, and ethical hacking. I have also experience in full stack development building efficient and scalable systems. Beyond tech, I enjoy playing the flute, watching a wide range of movies, and constantly exploring new topics out of sheer curiosity. My blend of technical expertise and an eagerness to learn makes me a dynamic and well-rounded contributor to any team or project.
          </p>
          <div className="skills">
            <h3>Tit Bits</h3>
            <div className="skill-tags">
              <span className="skill-tag">Programming</span>
              <span className="skill-tag">Music</span>
              <span className="skill-tag">Movies</span>
              <span className="skill-tag">Travel</span>
              <span className="skill-tag">Sprituality</span>
              <span className="skill-tag">Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 