import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}</nav>;
  return (<nav>
    <a key="home" href="#home">{links[0]}</a>
    <a key="about" href="#about">{links[1]}</a>
    <a key="projects" href="#projects">{links[2]}</a>
  </nav>)
}

export default NavBar;
