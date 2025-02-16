import React from "react";
import "./Projects.css";


const Projects = () => {
  // Hard-coded project data with images
  const projectsData = [
    {
      p_name: "Assets Management System",
      p_desc: "A centralized assets management system aimed at enhancing accountability, optimizing asset utilization, and ensuring the security of the assets of the company. Mentored by Corzent Edge (PVT) LTD.",
      p_tech: "Technologies : Angular | .NET | MSSQL",
      p_image: "AMS.png", // Replace with actual image path
    },
    {
      p_name: "AppleMore",
      p_desc: "An e-commerce platform for browsing and purchasing Apple products to support secure payments, real-time notifications, and features such as product browsing, shopping cart, and order tracking.",
      p_tech: "Technologies : NodeJs | NextJs | MySql | MongoDB | TailwindCSS",
      p_image: "AppleMore.jpg", // Replace with actual image path
    },
    {
      p_name: "Flutter Jokes App",
      p_desc: "A Flutter app that fetches and caches jokes, showcasing a simple and effective approach to handling data.",
      p_tech: "Technologies : Flutter | Dart | Android Studio",
      p_image: "Jokes-app.PNG", // Replace with actual image path
    },
    {
      p_name: "Foot Relaxing Machine",
      p_desc: "Innovated a foot relaxation machine featuring rhythmic movements for feet and calves, heated airflow, and a pain-relieving spray for enhanced comfort and relief.",
      p_tech: "Technologies : Arduino | C Languages | Proteus Simulation | EasyEDA",
      p_image: "machine.jpeg", // Replace with actual image path
    },
  ];

  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>My Projects</h1>
      </div>
      <div className="projects-container">
        {projectsData.map((project, index) => {
          return (
            <div key={index} className="projects-format">
              
              <h2>{project.p_name}</h2>
              <img src={project.p_image} alt={project.p_name} className="project-image" />
              <p>{project.p_desc}</p>
              <p>{project.p_tech}</p>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
