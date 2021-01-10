import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import image from "../images/galaxy.jpeg";
import monopolyImage from "../images/monopoly-demo.gif";

function GamesList() {

    function onGameClick(recipeName) {
        if (recipeName === "Monopoly") {
            window.open("https://elena-pan.github.io/monopoly");
        }
        else if (recipeName === "MouseTrap") {
            window.open("https://elena-pan.github.io/mousetrap");
        }
    }

    return (
        <div className="row" style={{marginTop:"30px"}}>
            <div className="col s12 m12 l6">
            <div className="card waves-effect waves-light hoverable hoverable" style={{height:"420px"}} onClick={() => onGameClick("Monopoly")}>
                <div className="card-image">
                    <img src={monopolyImage} alt="" style={{objectFit:"cover", height:"320px"}} />
                </div>
                <div className="card-content">
                    <span className="card-title" style={{fontSize:"20px", lineHeight:"130%"}}><b>Monopoly</b></span>
                </div>
            </div>
            </div>
            <div className="col s12 m12 l6">
            <div className="card waves-effect waves-light hoverable hoverable" style={{height:"420px"}} onClick={() => onGameClick("MouseTrap")}>
                <div className="card-image">
                    <img src={image} alt="" style={{objectFit:"cover", height:"320px"}} />
                </div>
                <div className="card-content">
                    <span className="card-title" style={{fontSize:"20px", lineHeight:"130%"}}><b>MouseTrap</b></span>
                </div>
            </div>
            </div>
        </div>
    );
}

export default withRouter(GamesList);