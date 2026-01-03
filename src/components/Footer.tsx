import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-container">
          <h3>Connect with Me</h3>
          <ul>
            <li><a href="https://github.com/TheSiddKid" target="_blank">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/TheSiddKid" target="_blank">LinkedIn</a></li>
            <li><a href="https://x.com/thesiddkid" target="_blank">Twitter / X</a></li>
            <li><a href="https://facebook.com/thesiddkid" target="_blank">Facebook</a></li>
            <li><a href="https://youtube.com/@thesiddkid" target="_blank">YouTube</a></li>
            <li><a href="mailto:thesiddkid@gmail.com">Email</a></li>
          </ul>
        </div>

        <div className="footer-container">
          <h2 className="logo">TheSiddKid</h2>
          <p style={{ color: "var(--muted)" }}>Personal portfolio of Junaid Siddiqui</p>
        </div>

        <div className="footer-container">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-container">
          <h3>Resources</h3>
          <ul>
            <li><a href="https://projects.thesiddkid.com" target="_blank">Projects Subdomain</a></li>
            <li><a href="https://github.com/TheSiddKid" target="_blank">GitHub</a></li>
          </ul>
        </div>

        <div className="footer-container">
          <h3>Contact</h3>
          <ul>
            <li><a href="mailto:thesiddkid@gmail.com">thesiddkid@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
