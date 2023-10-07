// MainContent.js
import FlipCard from "../FlipCard";

function MainContent() {
  return (
    <div className="main-content">
      <h2>Choose Your Career Path</h2>
      <div className="career-paths">
        <FlipCard
          title="Front End Development"
          description="Learn front-end technologies like HTML, CSS, and JavaScript."
          imgSrc="img_frontend.png" // Replace with actual image source
        />
        <FlipCard
          title="Back End Development"
          description="Explore server-side technologies and database management."
          imgSrc="img_backend.png" // Replace with actual image source
        />
        {/* Add FlipCard components for other career paths here */}
      </div>
    </div>
  );
}

export default MainContent;
