// src/components/Home.js
import React from 'react';
import './Home.css'

function Home() {
  return (
    <div className="home">
      <header>
        <h1>Welcome to the Career Guidance Website</h1>
        <p>Your path to a successful IT career starts here.</p>
      </header>
      <main>
        <section className="feature">
          <h2>Comprehensive Career Information</h2>
          <p>Explore various IT career paths, job roles, and required skills.</p>
        </section>
        <section className="feature">
          <h2>Personalized Roadmaps</h2>
          <p>Get customized career roadmaps based on your interests and goals.</p>
        </section>
        <section className="feature">
          <h2>Interactive Assessments</h2>
          <p>Assess your skills and suitability for specific IT roles.</p>
        </section>
      </main>
    </div>
  );
}

export default Home;
