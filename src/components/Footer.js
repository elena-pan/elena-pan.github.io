import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  
  openYoutube = e => {
    e.preventDefault();
    window.open("https://www.youtube.com/channel/UCExJR98eGcdssIRf9FlcGfQ");
  } 
  
  render() {
    return (
        <div>
        <footer className="page-footer" style={{backgroundColor:"#000000"}}>
          <div className="container">
            <div><Link to="/" className="white-text">
                <b>Elena Pan</b>
            </Link></div>
            <Link to="#" onClick={this.openYoutube} className="grey-text text-lighten-3">
                <i style={{verticalAlign:"middle"}} className="material-icons grey-text text-lighten-3 prefix">slideshow</i>
            </Link>
          </div>
          <div className="footer-copyright"></div>
        </footer>
        </div>
    );
  }
}

export default Footer;