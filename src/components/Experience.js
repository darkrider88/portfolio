import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-date">June 2022 - Present</div>
              <div className="timeline-title">Tech Solutions Inc.</div>
              <div className="timeline-subtitle">Senior Software Developer</div>
              <div className="timeline-description">
                <ul>
                  <li>Led the development of a scalable web application using React and Node.js</li>
                  <li>Implemented responsive design principles to ensure optimal user experience across devices</li>
                  <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                  <li>Optimized application performance, resulting in 40% faster load times</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-date">January 2020 - May 2022</div>
              <div className="timeline-title">Digital Innovations</div>
              <div className="timeline-subtitle">Software Developer</div>
              <div className="timeline-description">
                <ul>
                  <li>Developed and maintained multiple web applications using modern JavaScript frameworks</li>
                  <li>Implemented RESTful APIs and integrated third-party services</li>
                  <li>Participated in agile development processes and sprint planning</li>
                  <li>Contributed to codebase improvements and technical documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 