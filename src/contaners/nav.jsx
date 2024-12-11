import { useEffect } from "react";
import "../global.css";

export default function Nav() {
  return (
    <div className="fixed top-[86%] left-[0%] w-[100%] rounded-full text-white bg-black z-50 p-2 shadow-custom sm:w-[100%] sm:left-[0%] lg:w-[35%] md:left-[10%] md:w-[80%] lg:left-[35%]">
      <div className="flex justify-between items-center px-2">
        <a
          href="#home"
          className="pb-2 pt-2 text-center transition-all duration-500"
        >
          Home
        </a>
        <a
          href="#about"
          className="pb-2 pt-2 text-center transition-all duration-500"
        >
          About Me
        </a>
        <a
          href="#skills"
          className="pb-2 pt-2 text-center transition-all duration-500"
        >
          My Skills
        </a>
        <a
          href="#projects"
          className="pb-2 pt-2 text-center transition-all duration-500"
        >
          Projects
        </a>
        <a
          href="#biography"
          className="pb-2 pt-2 text-center transition-all duration-500"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
