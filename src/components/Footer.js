import React from "react";
import emailIcon from "../images/email-icon.png";
import githubLogo from "../images/github-logo.png";
import linkedinLogo from "../images/linkedin-logo.png";
import youtubeLogo from "../images/youtube-logo.png";

function Footer() {

  return (
      <div>
      <footer className="page-footer" style={{backgroundColor:"#00897b"}}>
        <div className="container center" style={{padding:"24px"}}>
          <b>Elena Pan</b>
          <div>____</div>
          <div style={{marginTop: "24px"}}>
            <a href="mailto:elena.pan@uwaterloo.ca" style={{marginRight: "15px"}}>
              <img src={emailIcon} alt="Email" height="24px"/>
            </a>
            <a href="https://github.com/elena-pan" style={{marginRight: "15px"}}>
              <img src={githubLogo} alt="GitHub" height="24px"/>
            </a>
            <a href="https://www.linkedin.com/in/elena-pan/" style={{marginRight: "15px"}}>
              <img src={linkedinLogo} alt="LinkedIn" height="24px"/>
            </a>
            <a href="https://www.youtube.com/channel/UCExJR98eGcdssIRf9FlcGfQ">
              <img src={youtubeLogo} alt="YouTube" height="24px"/>
            </a>
          </div>
        </div>
        <div className="footer-copyright"></div>
      </footer>
      </div>
  );
}

export default Footer;