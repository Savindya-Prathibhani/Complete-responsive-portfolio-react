import React from "react";
import "./About.css";
import about_profile from "../../assets/profile.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h2>About Me</h2>
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={about_profile} alt="Profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am a third-year undergraduate at the University of Moratuwa, 
              Faculty of Information Technology, with a passion for <strong>web</strong> and <strong>mobile development</strong>.
            </p>
            <p>
              I aspire to become a <strong>Software Engineer</strong>, driven by a strong enthusiasm for 
              creating user-friendly and efficient digital solutions.
            </p>
            <p>
              I am seeking an opportunity as a <strong>Software Engineering Intern</strong> to enhance my 
              skills and contribute to impactful projects while growing within the field of modern technology.
            </p>
            <p>
              My passion for <strong>full-stack development</strong> is reflected in my dedication and eagerness 
              to explore emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
