import React from "react";
import Buttons from "../components/Buttons";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Project from "../components/Project";

const Project2 = () => {
  return (
    <div>
      <main>
        <div className="project">
          <Navigation />
          <Logo />
          <Project projectNumber={1} />
          <Buttons left={"/projet-1"} right={"/projet-3"} />
        </div>
      </main>
    </div>
  );
};

export default Project2;
