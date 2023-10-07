// src/components/RealWorldInsights.js
import React from 'react';
import './RealWorldInsights.css'

function RealWorldInsights() {
  return (
    <div className="real-world-insights">
      <h2>Real-World Insights</h2>
      <p>Learn from professionals who have successfully navigated their IT careers. Gain practical insights into different career paths and industry trends.</p>

      {/* Sample Insights */}
      <div className="insight">
        <h3>Interview with a Senior Web Developer</h3>
        <p>
          In this interview, John Smith, a Senior Web Developer with 10 years of experience, shares his journey and advice for aspiring developers.
        </p>
      </div>

      <div className="insight">
        <h3>Success Story: From Junior to DevOps Engineer</h3>
        <p>
          Read how Sarah Johnson transitioned from a Junior Developer to a successful DevOps Engineer and the challenges she overcame.
        </p>
      </div>

      <div className="insight">
        <h3>Career Advice: Building a Strong Foundation in Cybersecurity</h3>
        <p>
          Experts weigh in on the essential skills and steps to take for a successful career in cybersecurity.
        </p>
      </div>
    </div>
  );
}

export default RealWorldInsights;
