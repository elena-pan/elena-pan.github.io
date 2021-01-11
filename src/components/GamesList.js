import React from "react";
import monopolyImage from "../images/monopoly-demo.gif";
import mousetrapImage from "../images/mousetrap-demo.gif";

function GamesList() {

    function onGameClick(gameName) {
        if (gameName === "Monopoly") {
            window.open("https://elena-pan.github.io/Unity-Monopoly");
        }
        else if (gameName === "MouseTrap") {
            window.open("https://elena-pan.github.io/Unity-Mousetrap");
        }
    }

    return (
        <div className="row" style={{marginTop:"30px"}}>
            <div className="col s12 m12 l6">
            <div className="card waves-effect hoverable" style={{height:"420px"}} onClick={() => onGameClick("Monopoly")}>
                <div className="card-image">
                    <img src={monopolyImage} alt="" style={{objectFit:"cover", height:"320px"}} />
                </div>
                <div className="card-content">
                    <span className="card-title" style={{fontSize:"20px", lineHeight:"130%"}}><b>Monopoly</b></span>
                </div>
            </div>
            </div>
            <div className="col s12 m12 l6">
            <div className="card waves-effect hoverable" style={{height:"420px"}} onClick={() => onGameClick("MouseTrap")}>
                <div className="card-image">
                    <img src={mousetrapImage} alt="" style={{objectFit:"cover", height:"320px"}} />
                </div>
                <div className="card-content">
                    <span className="card-title" style={{fontSize:"20px", lineHeight:"130%"}}><b>MouseTrap</b></span>
                </div>
            </div>
            </div>
        </div>
    );
}

export default GamesList;