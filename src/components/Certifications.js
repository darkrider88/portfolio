import React from 'react';
import '../styles/Certifications.css';
import ejptIcon from '../assets/ejpt.png';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          <div className="certification-item">
            <div className="certification-content">
              <div className="certification-header">
                <div className="certification-icon">
                  <img src={ejptIcon} alt="eJPT Certification" />
                </div>
                <div className="certification-info">
                  <div className="certification-title">eJPT</div>
                  <div className="certification-subtitle">Junior Penetration Tester</div>
                  <div className="certification-issuer">INE Security</div>
                </div>
              </div>
              <div className="certification-description">
                <ul>
                  <li>Practical penetration testing certification focusing on real-world scenarios</li>
                  <li>Covers network security, web application security, and system exploitation</li>
                  <li>Hands-on exam requiring practical demonstration of penetration testing skills</li>
                </ul>
              </div>
              <div className="certification-footer">
                <a href="https://certs.ine.com/9c196e28-549a-4c80-9637-a4c22ff3d08f#acc.7CKxzA4P" className="view-certification-btn" target="_blank" rel="noopener noreferrer">
                  View Certification
                </a>
              </div>
            </div>
          </div>

          <div className="certification-item">
            <div className="certification-content">
              <div className="certification-header">
                <div className="certification-icon">
                  <img src={ejptIcon} alt="eWPT Certification" />
                </div>
                <div className="certification-info">
                  <div className="certification-title">eWPT</div>
                  <div className="certification-subtitle">Web Application Penetration Tester</div>
                  <div className="certification-issuer">INE Security</div>
                </div>
              </div>
              <div className="certification-description">
                <ul>
                  <li>Advanced web application security certification</li>
                  <li>Focuses on identifying and exploiting web application vulnerabilities</li>
                  <li>Practical exam testing real-world web application penetration testing skills</li>
                </ul>
              </div>
              <div className="certification-footer">
                <a href="https://certs.ine.com/ba6a3d10-951b-4252-b0b3-3b008de6d394" className="view-certification-btn" target="_blank" rel="noopener noreferrer">
                  View Certification
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 