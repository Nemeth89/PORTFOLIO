import React from "react";
import './About'; // Add CSS for styling


const About = () => (
  <div className="about-container">
    <h2 className="section-title">About Me</h2>
    <div className="about-content">
      <img src="/Neme 1.jpg" alt="Nemeka" className="profile-photo" />
      <div className="about-text">
        <p>
          Hi, I'm [<b className="bold">Nemeka Onuoha</b>], a passionate web developer skilled in the MERN stack. 
          I am also an aspiring cybersecurity expert, as I hold certifications from Cisco Networking Academy.
          My goal is to create web applications that are both functional and visually appealing. I also have interest in mobile app development and not to forget to mention, that i am a certfied TEFL tutor.   
        </p>
        <p>
          <strong className="strong"> Skills:</strong> React, Node.js, MongoDB, MySql, Express.js, Git, Flutter, Dart and more.
        </p>
        <p>
          When I'm not coding, I enjoy [Cooking]. Feel free to check out my projects or contact me!
        </p>
      </div>
    </div>
  </div>
);

export default About;
