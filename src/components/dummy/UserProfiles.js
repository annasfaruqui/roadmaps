// src/components/UserProfiles.js
import React, { useState } from 'react';
import './UserProfiles.css'

function UserProfiles() {
  // State to store user profile data
  const [profileData, setProfileData] = useState({
    education: '',
    skills: '',
    careerAspirations: '',
  });

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  return (
    <div className="user-profiles">
      <h2>User Profiles</h2>
      <p>Create and customize your profile to get personalized career recommendations and connect with like-minded professionals.</p>
      <form>
        <div className="form-group">
          <label htmlFor="education">Educational Background:</label>
          <input
            type="text"
            id="education"
            name="education"
            value={profileData.education}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={profileData.skills}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="careerAspirations">Career Aspirations:</label>
          <textarea
            id="careerAspirations"
            name="careerAspirations"
            value={profileData.careerAspirations}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default UserProfiles;
