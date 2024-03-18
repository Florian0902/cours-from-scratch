import React from 'react';
import Buttons from '../components/Buttons';

import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Project from "../components/Project";

const Project4 = () => {
  return (
    <div>
      <main>
        <div className="project">
          <Navigation />
          <Logo />
          <Project projectNumber={3} />
          <Buttons left={"/projet-3"} right={"/contact"}/>
        </div>
      </main>
    </div>
  );
};

export default Project4;