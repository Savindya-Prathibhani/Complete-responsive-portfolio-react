import React from "react";
import "./TechStack.css";

const TechStack = () => {
  return (
    <div id="techstack" className="techstack">
      <div className="techstack-title">
        <h2>Tech Stack</h2>
      </div>
      <div className="techstack-content">
        <div className="techstack-category">
          <h3>Programming Languages</h3>
          <div className="techstack-logos">
            <img src="java2.png" alt="Java" />
            <img src="C.png" alt="C" />
            <img src="C++_logo.png" alt="C++" />
            <img src="Logo_C_sharp.svg.png" alt="C#" />
          </div>
        </div>
        <div className="techstack-category">
          <h3>Web Technologies</h3>
          <div className="techstack-logos">
            <img src="react.png" alt="React" />
            <img src="angular2.png" alt="angular" />
            <img src="node3.png" alt="Node" />
            <img src="dotnet.png" alt=".NET" />
            <img src="html.png" alt="HTML" />
            <img src="css.png" alt="CSS" />
            <img src="JavaScript-logo.png" alt="JS" />
            <img src="ts.png" alt="TypeScript" />

          </div>
        </div>
        <div className="techstack-category">
          <h3>Databases</h3>
          <div className="techstack-logos">
            <img src="mssql.png" alt="MSSQL" />
            <img src="postgresql.png" alt="PostgreSQL" />
            <img src="mongodb.png" alt="MongoDB" />
          </div>
        </div>
        <div className="techstack-category">
          <h3>Version Control</h3>
          <div className="techstack-logos">
            <img src="git.png" alt="Git" />
            <img src="github.png" alt="GitHub" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
