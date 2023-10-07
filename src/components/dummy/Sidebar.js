// src/components/Navigation.js
import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
       <li> <Link to="/">Home</Link></li>
       <li> <Link to="/career-info">Career Info</Link></li>
       <li> <Link to="/personalized-roadmaps">Personalized Roadmaps</Link></li>
       <li> <Link to="/interactive-assessments">Interactive Assessments</Link></li>
       <li> <Link to="/real-world-insights">Real-World Insights</Link></li>
       <li> <Link to="/user-profiles">User Profiles</Link></li>
       <li> <Link to="/discussion-forums">Discussion Forums</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
