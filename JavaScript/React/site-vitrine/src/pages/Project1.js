import React from "react";
import Buttons from "../components/Buttons";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Project from "../components/Project";

const Project1 = () => {
  return (
    <div>
      <main>
        <div className="project">
          <Navigation />
          <Logo />
          <Project projectNumber={0} />
          <Buttons left={"/"} right={"/projet-2"}/>
        </div>
      </main>
    </div>
  );
};

export default Project1;
