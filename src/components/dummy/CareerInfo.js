// src/components/CareerInfo.js
import React from 'react';
import './CareerInfo.css'

function CareerInfo() {
  return (
    <div className="career-info">
      <h2>Comprehensive Career Information</h2>
      <p>Explore different career paths within the Information Technology (IT) sector.</p>

      <div className="career-path">
        <h3>Frontend Developer</h3>
        <p>
          As a Frontend Developer, you'll work on the user interface of web applications. Key responsibilities include creating responsive and interactive user interfaces using HTML, CSS, and JavaScript.
        </p>
        <h4>Required Skills:</h4>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>Responsive design</li>
          <li>Version control (e.g., Git)</li>
        </ul>
        <h4>Industry Trends:</h4>
        <p>
          Frontend technologies are constantly evolving. Stay updated with the latest JavaScript frameworks and libraries like React, Angular, or Vue.js.
        </p>
      </div>

      <div className="career-path">
        <h3>Backend Developer</h3>
        <p>
          Backend Developers focus on server-side development, managing databases, and ensuring the functionality of web applications. They work with languages like Node.js, Python, or Ruby.
        </p>
        <h4>Required Skills:</h4>
        <ul>
          <li>Server-side programming (e.g., Node.js)</li>
          <li>Database management (e.g., MongoDB, PostgreSQL)</li>
          <li>API design</li>
        </ul>
        <h4>Industry Trends:</h4>
        <p>
          Explore serverless architecture, containerization (e.g., Docker), and cloud services (e.g., AWS, Azure).
        </p>
      </div>

      <div className="career-path">
        <h3>Fullstack Developer</h3>
        <p>
          Fullstack Developers have expertise in both frontend and backend development, making them well-rounded professionals capable of building complete web applications.
        </p>
        <h4>Required Skills:</h4>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>Server-side programming (e.g., Node.js)</li>
          <li>Database management (e.g., MySQL, PostgreSQL)</li>
        </ul>
        <h4>Industry Trends:</h4>
        <p>
          Master a combination of frontend and backend technologies. Consider exploring popular fullstack frameworks like MERN (MongoDB, Express.js, React, Node.js) or MEAN (MongoDB, Express.js, Angular, Node.js).
        </p>
      </div>

      {/* Add more career paths with descriptions, skills, and trends */}
    </div>
  );
}

export default CareerInfo;
