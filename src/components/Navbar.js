import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from 'react-scroll';
import M from "materialize-css";

class Navbar extends Component {

    componentDidMount = () => {
        const elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, { edge:'right' });
        const elems2 = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems2, {
            onOpenStart: e => {
                if (e.className==="category-header") {
                    e.style.backgroundColor="#f57f17"
                    e.style.color="white"
                }
                else {
                    e.style.backgroundColor="#ffffff"
                    e.style.color="black"
                }
            },
            onCloseEnd: e => {
                if (e.className==="category-header") {
                    e.style.backgroundColor="#ffffff"
                    e.style.color="black"
                }
                else {
                    e.style.backgroundColor="#f57f17"
                    e.style.color="white"
                }
            }
        });
    }

    render() {
        return (
            <div>
                <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper black">
                    <div className="container">
                    <Link to="#" className="sidenav-trigger right" data-target="mobile-nav">
                        <i className="material-icons white-text">menu</i>
                    </Link>
                    <a href="/">
                        <b>Elena Pan</b>
                    </a>
                    <ul className="right hide-on-med-and-down">
                            <li>
                                <Link activeClass="active" to="games" spy={true} smooth={true} duration={1000} className="white-text">
                                    <b>Games</b>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                </div>
                
                <ul className="sidenav collapsible" id="mobile-nav">
                    <li>
                        <Link activeClass="active" to="games" spy={true} smooth={true} duration={1000} className="white-text sidenav-close">
                            Games
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}


export default (withRouter(Navbar));