// src/components/DiscussionForums.js
import React from 'react';
import './DiscussionForums.css'

function DiscussionForums() {
  return (
    <div className="discussion-forums">
      <h2>Discussion Forums</h2>
      <p>Connect with the IT community, ask questions, share your experiences, and gain valuable insights from professionals and peers.</p>

      <div className="discussion-topic">
        <h3>Topic: Frontend Development</h3>
        <div className="post">
          <p>User123: I'm new to frontend development. Any advice on getting started?</p>
        </div>
        <div className="post">
          <p>ProDev456: Welcome! You can start by learning HTML, CSS, and JavaScript.</p>
        </div>
      </div>

      <div className="discussion-topic">
        <h3>Topic: Data Science Career</h3>
        <div className="post">
          <p>DataGeek789: What skills are in demand for a data science career?</p>
        </div>
        <div className="post">
          <p>DSExpert101: Data science requires skills in Python, machine learning, and data analysis.</p>
        </div>
      </div>

      {/* Add more discussion topics and posts as needed */}
    </div>
  );
}

export default DiscussionForums;