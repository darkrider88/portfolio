import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend Development',
      items: ['React', 'Angular', 'Tailwind', 'JavaScript', 'HTML/CSS', 'TypeScript']
    },
    {
      category: 'Backend Development',
      items: ['Node.js', 'Golang', 'Python', 'Express', 'MongoDB', 'SQL', 'Kafka', 'Redis', 'Kubernetes', 'Helm']
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Application Security', 'Penetration Testing', 'Docker','SAST/DAST']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 