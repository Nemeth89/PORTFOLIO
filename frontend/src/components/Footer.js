import React from "react";
//import './index.css'; // Add this at the top of your Footer.js file

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
    <div className="social-icons">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://twitter.com/nemethhub" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://facebook.com/neme onuoha" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
      </a>
    </div>
    <p>
      Built with ❤️ by <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">Nemeka Onuoha</a>
    </p>
  </footer>
);

export default Footer;
