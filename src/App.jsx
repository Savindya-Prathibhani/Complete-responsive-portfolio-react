import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";

import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Education from "./Components/Education/Education";
import TechStack from "./Components/TechStack/TechStack";
import Projects from "./Components/MyProjects/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
