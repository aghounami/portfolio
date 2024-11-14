import "./global.css";
import React, { useEffect } from "react";
import Nav from "./contaners/nav.jsx";
import Conteaner from "./contaners/container.jsx";
import Home from "./contaners/home.jsx";
import About from "./contaners/about.jsx";
import Biography from "./contaners/biography.jsx";
import Skills from "./contaners/skills.jsx";
import Projects from "./contaners/projects.jsx";
import Progress from "./contaners/progress.jsx";

import {LampDemo} from "./components/header/header-Comp/header-Comp.jsx";

export default function App() {
  return (
<div className="relative w-[100%] h-[100vh] bg-gradient-to-b from-black to-[#240541] flex flex-col items-center overflow-scroll">
      <Nav />
      <Conteaner>
        <LampDemo/>
        <Home/>
        < About />
        < Biography />
        < Skills />
        < Projects />
        < Progress />
      </Conteaner>
    </div>
  );
}
