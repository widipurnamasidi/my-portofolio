import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Bio from "./sections/Bio";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <div className="container-md mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-3 md:p-7">
        <div className="">
          <Bio />
          <Skills />
        </div>
        <div className="col-span-2">
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
