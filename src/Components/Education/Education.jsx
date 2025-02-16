import React from "react";
import "./Education.css";
import university_logo from "../../assets/UOM.png"; // Add your university logo
import highschool_logo from "../../assets/rcc.jpg"; // Add your high school logo

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="education-title">
        <h2>Education</h2>
      </div>
      <div className="education-content">
        <div className="education-item">
          <img src={university_logo} alt="University Logo" className="education-logo" />
          <h3>University of Moratuwa</h3>
          <p>Bachelor of Science (Hons) in Information Technology</p>
          <p>2022 - Present</p>
          <p>3.78 CGPA</p>
          <p>
            Currently pursuing my undergraduate degree with a strong focus on
            software engineering, full-stack development, and modern
            technologies.
          </p>
        </div>
        <div className="education-item">
          <img src={highschool_logo} alt="High School Logo" className="education-logo" />
          <h3>Rajapakse Central College, Weeraketiya</h3>
          <p>2015 - 2021</p>
          <p> GCE Advanced Level - 
          Physical Science Stream</p>
          <p>
          Results : 3As<br></br>
          Z-Score : 2.3734<br></br>
          District Rank : 13
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
