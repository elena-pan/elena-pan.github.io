import React, { useEffect } from "react";
import M from "materialize-css";
import image from "../images/galaxy.jpg"
import emailIcon from "../images/email-icon.png";
import githubLogo from "../images/github-logo.png";
import linkedinLogo from "../images/linkedin-logo.png";
import youtubeLogo from "../images/youtube-logo.png";
import resumeIcon from "../images/resume-icon.png";

import GamesList from "./GamesList";
import ProjectsList from "./ProjectsList";

function Landing() {

  useEffect(() => {
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  }, []);

  let marginLeftSize;
  if (window.innerWidth >= 900) {
    marginLeftSize = "15%";
  }
  else if (window.innerWidth >= 650) {
    marginLeftSize = "20%";
  }
  else {
    marginLeftSize = 0;
  }

  return (
    <div>
      <div className="parallax-container" style={{height:"100vh"}}>
        <div className="left white-text" style={{marginTop:"10rem", marginLeft: marginLeftSize}}>
          <h1 style={{marginBottom:0}}><b>Elena Pan</b></h1>
          <h5>Honours Software Engineering | University of Waterloo</h5>
          <div style={{marginTop: "30px"}}>
            <a href="mailto:elena.pan@uwaterloo.ca" style={{marginRight: "15px"}}>
              <img src={emailIcon} alt="Email" height="32px"/>
            </a>
            <a href="https://github.com/elena-pan" style={{marginRight: "15px"}}>
              <img src={githubLogo} alt="GitHub" height="32px"/>
            </a>
            <a href="https://www.linkedin.com/in/elena-pan/" style={{marginRight: "15px"}}>
              <img src={linkedinLogo} alt="LinkedIn" height="32px"/>
            </a>
            <a href="https://www.youtube.com/channel/UCExJR98eGcdssIRf9FlcGfQ" style={{marginRight: "15px"}}>
              <img src={youtubeLogo} alt="YouTube" height="32px"/>
            </a>
            <a href="https://elena-pan.github.io/resume.pdf" style={{marginRight: "15px"}} className="white-text">
            <img src={resumeIcon} alt="Resume" height="32px"/>
            </a>
          </div>
          </div>
        <div className="parallax"><img src={image} alt="" /></div>
      </div>
      <div style={{padding:"5rem"}} className="center" id="projects">
        <h3><b>Projects</b></h3>
        <ProjectsList />
      </div>
      <div style={{padding:"5rem"}} className="center grey darken-4" id="games">
        <h3 className="white-text"><b>Games</b></h3>
        <GamesList />
      </div>
    </div>
  );
}

export default Landing;