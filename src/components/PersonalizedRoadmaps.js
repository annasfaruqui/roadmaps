import React from "react";
import FlipCard from "./FlipCard"; // Import the FlipCard component
import Heading from "../ui/Heading";

import "./FlipCard.css";

// IMAGES
import frontend from "./imgs/frontend.svg";
import backend from "./imgs/backend.svg";
import ml from "./imgs/ml.svg";
import uiux from "./imgs/ui-ux.svg";
import cybersecurity from "./imgs/cybersecurity.svg";
import fullstack from "./imgs/fullstack.svg";
import devops from "./imgs/devops.svg";
import android from "./imgs/android.svg";

// Temporary data (NOT used in application)
const tempData = [
  {
    link: "data-administrator",
    title: "Database Administrator (DBA)",
    description: "Manage and maintain databases to ensure data integrity",
  },
  {
    link: "android-app-development",
    title: "Android App Development",
    description: "Create mobile apps for Android devices",
    background: android,
  },
  {
    link: "fullstack-development",
    title: "Full Stack Development",
    description: "Master both frontend and backend development",
    background: fullstack,
  },
  {
    link: "machine-learning",
    title: "Machine Learning / Data Science",
    description:
      "Dive into data analysis, machine learning, and artificial intelligence",
    background: ml,
  },
  {
    link: "data-analyst",
    title: "Data Analyst",
    description:
      "Analyze data to provide insights and make data-driven decisions",
  },
  {
    link: "cybersecurity",
    title: "Cybersecurity",
    description: "Protect systems and networks from cyber threats",
    background: cybersecurity,
  },
];
console.log("Temporary Data:", tempData);

//////////////////////////////////////////////////////////////////////////////////
// ACTUAL DATA USED IN APPLICATION

const dataFlipCard = [
  {
    link: "frontend-development",
    title: "Frontend Development",
    description: "Build user interfaces with HTML, CSS, and JavaScript",
    background: frontend,
  },
  {
    link: "backend-development",
    title: "Backend Development",
    description:
      "Develop server-side applications using languages like Node.js or Python",
    background: backend,
  },
  {
    link: "devops",
    title: "DevOps",
    description: "Streamline software development and IT operations",
    background: devops,
  },
  {
    link: "ui-ux-designing",
    title: "UI/UX Designing",
    description: "Design user-friendly and visually appealing interfaces",
    background: uiux,
  },
  {
    link: "software-architecture",
    title: "Software Architecture",
    description:
      "Dive into data analysis, machine learning, and artificial intelligence",
    background: ml,
  },
];

const flipCards = dataFlipCard;

function PersonalizedRoadmaps() {
  return (
    <div className="personalized-roadmaps">
      <Heading as="h1">Personalized Roadmaps</Heading>
      <div className="flip-card-container">
        {flipCards.map((flipcard) => (
          <FlipCard
            key={flipcard.link}
            title={flipcard.title}
            description={flipcard.description}
            link={flipcard.link}
            background={flipcard.background}
          />
        ))}
      </div>
    </div>
  );
}

export default PersonalizedRoadmaps;
