import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import M from "materialize-css";

function Navbar() {

    const [opacity, setOpacity] = useState("#000000");

    useEffect(() => {
        const elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, { edge:'right' });
        const elems2 = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems2);
    }, []);

    useEffect(() => {
        window.onscroll = function() {
            if(window.pageYOffset === 0) {
                // If at top of page set navbar background to black
                setOpacity("#000000");
            }
            else {
                setOpacity("#26a69a");
            }
          };
    })

    return (
        <div>
            <div className="navbar-fixed">
            <nav className="z-depth-0">
                <div className="nav-wrapper" style={{backgroundColor:opacity}}>
                <div className="container">
                    <Link to="#" className="sidenav-trigger right" data-target="mobile-nav">
                        <i className="material-icons white-text">menu</i>
                    </Link>
                    <a href="/">
                        <b>Elena Pan</b>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000} className="white-text">
                                <b>Projects</b>
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="games" spy={true} smooth={true} duration={1000} className="white-text">
                                <b>Games</b>
                            </Link>
                        </li>
                        <li>
                            <a href="https://elena-pan.github.io/resume.pdf" className="white-text">
                                <b>Resume</b>
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
            </div>
            
            <ul className="sidenav collapsible" id="mobile-nav" style={{backgroundColor:opacity, border:0}}>
                <li>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000} className="white-text">
                        <b>Projects</b>
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="games" spy={true} smooth={true} duration={1000} className="white-text sidenav-close">
                        <b>Games</b>
                    </Link>
                </li>
                <li>
                    <a href="https://elena-pan.github.io/resume.pdf" className="white-text">
                        <b>Resume</b>
                    </a>
                </li>
            </ul>
        </div>
    );
}


export default Navbar;