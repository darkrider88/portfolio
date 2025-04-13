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
              <div className="timeline-date">Aug 2022 - Present</div>
              <div className="timeline-title">3clogic Technologies</div>
              <div className="timeline-subtitle">Software Engineer</div>
              <div className="timeline-description">
                <ul>
                  <li>Boosted IVR front-end performance using Angular, achieving a 900% increase in concurrent tab handling and a 266% improvement in node utilization, enhancing scalability and user experience for managing 100+ tabs</li>
                  <li>Developed a NodeJS based webhook service integrated with Kafka and DynamoDB, automating customer's workflows, reducing manual efforts by 30+ hours weekly and streamlining system communication</li>
                  <li>Built a high-performance event service using Kafka, Redis, and Node.js with an integrated state machine architecture, enabling the streaming of 1000+ event/second.</li>
                  <li>Enhanced code quality with 85% test coverage using Chai and Mocha, reducing production bugs by 35%. Designed a custom way for testing Node-Red flows, cutting integration errors by 50%</li>
                  <li>Delivered an IVR over WhatsApp system using Node.js, Express.js, and Meta APIs, enabling real-time communication for users with MongoDB and Redis for caching</li>
                  <li>Managed microservice deployments via Kubernetes and Helm charts, and automated infrastructure deployment with AWS CloudFormation, achieving maximum uptime </li>
                  <li>Collaborated with cross-functional teams, resolving 15+ customer-reported issues</li>
                  <li>Identified and mitigated 5+ critical vulnerabilities. Led OWASP Top 10 demos, training 7+ engineers in secure coding practices</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-date">June 2021 - Apr 2022</div>
              <div className="timeline-title">RebelCorp Ltd.</div>
              <div className="timeline-subtitle">Frontend Developer Intern</div>
              <div className="timeline-description">
                <ul>
                  <li>Developed responsive web applications using React.js, implementing modern UI/UX principles and ensuring cross-browser compatibility</li>
                  <li>Created reusable React components and custom hooks, improving code maintainability and reducing development time by 25%</li>
                  <li>Collaborated with the design team to transform Figma mockups into pixel-perfect, interactive web interfaces</li>
                  <li>Optimized application performance by implementing code splitting, lazy loading, and efficient state management</li>
                  <li>Integrated RESTful APIs with React applications, implementing proper error handling and loading states</li>
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