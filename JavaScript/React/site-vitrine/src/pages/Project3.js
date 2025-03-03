import React from 'react';
import Buttons from '../components/Buttons';
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Project from "../components/Project";

const Project3 = () => {
  return (
    <div>
      <main>
        <div className="project">
          <Navigation />
          <Logo />
          <Project projectNumber={2} />
          <Buttons left={"/projet-2"} right={"/projet-4"}/>
        </div>
      </main>
    </div>
  );
};

export default Project3;