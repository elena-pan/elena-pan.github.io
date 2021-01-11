import React from "react";
import githubLogoBlack from "../images/github-logo-black.png";
import linkIcon from "../images/link-icon.png";
import smartGardenIcon from "../images/smart-garden-icon.png";
import chefpanIcon from "../images/chefpan-icon.png";
import fitspireIcon from "../images/fitspire-icon.jpg";
import batchEmailerIcon from "../images/batch-emailer-icon.jpg";
import monopoly2dIcon from "../images/monopoly2d-icon.jpg";
import chatbotIcon from "../images/chatbot-icon.png";
import webScraperIcon from "../images/web-scraper-icon.png";
//import cliMateIcon from "../images/cli-mate-icon.png";
import cliMateIcon from "../images/cli-mate-icon2.png";
import virtuoBookingsIcon from "../images/virtuobookings-icon.png";

function ProjectsList() {

    const projects = [{name: "Smart Garden", description: "Smart Garden is an automated plant management system that allows users to take care of their plant remotely via an Android app. It monitors environmental conditions and waters the plant remotely.", image:smartGardenIcon, github:"https://github.com/elena-pan/smart-garden"},
                    {name: "Chef Pan | Personal Brand Web App", description: "This is the website that hosts my recipes and personal brand! It's a full-stack web app built using React and Flask, with MongoDB and GCP for data storage.", image:chefpanIcon, github:"https://github.com/elena-pan/ChefPan-Web-App", link:"https://chefpan.herokuapp.com/"},
                    {name: "FitSpire | Fitness Tracker", description: "FitSpire is a full-stack web app for exercise tracking, which sends daily fitness challenges. It's built using the MERN stack.", image:fitspireIcon, github:"https://github.com/elena-pan/fitspire", link:"https://fitspire.herokuapp.com/"},
                    {name: "VirtuoBookings", description: "An open-sourced Android app with an appointment booking system, real-time chat rooms, and user management.", image:virtuoBookingsIcon, github:"https://github.com/elena-pan/VirtuoBookings"},
                    {name: "Cli-Mate | WhatsApp Sustainability Buddy", description: "Cli-Mate is a WhatsApp buddy that sends you daily sustainability challenges and trivia. It tracks the amount of carbon, water, and money saved by completing these challenges.", image:cliMateIcon, github:"https://github.com/elena-pan/Cli-Mate"},
                    {name: "Personalized Batch Emailer", description: "A Python app that reads from a spreadsheet of recipients and send personalized emails to each recipient, based on an editable email template. User Gmail accounts are authenticated using OAuth2.", image:batchEmailerIcon, github:"https://github.com/elena-pan/Personalized-Batch-Emailer"},
                    {name: "Retrieval-based Chatbot", description: "The chatbot uses a Tfidf Vectorizer to find similarities between words in the corpus, which it uses to return a response to input.", image:chatbotIcon, github:"https://github.com/elena-pan/Retrieval-based-Chatbot"},
                    {name: "Web Scraper for New Projects", description: "I made this script and ran it on a Cronjob to login to my volunteer page, scan the current shifts, and notify me if there were any new projects.", image:webScraperIcon, github:"https://github.com/elena-pan/Check-For-New-Youth-Central-Projects"},
                    {name: "2D Multiplayer Monopoly", description: "This is the Monopoly game I created before my 3D one, which I wrote my own network layer for. It uses Winsock TCP sockets for client-server communication and is built using C++ and Qt.", image:monopoly2dIcon, github:"https://github.com/elena-pan/Multiplayer-Monopoly"}];
                    
    const cards = projects.map(project => {
        let link;
        if (project.hasOwnProperty("link")) {
            link = (<a href={project.link} style={{marginRight: "15px"}}>
                        <img src={linkIcon} alt="" height="32px"/>
                    </a>);
        } else link = (<span></span>);
        return (<div className="col s12 m6 l4">
        <div className="card hoverable" style={{height:"300px"}}>
            <div className="card-image waves-effect waves-light">
                <img className="activator" src={project.image} alt="" style={{objectFit:"cover", height:"200px"}} />
            </div>
            <div className="card-content">
                <span className="card-title activator" style={{fontSize:"20px", lineHeight:"130%"}}><b>{ project.name }</b></span>
            </div>
            <div className="card-reveal" style={{padding:"32px"}}>
                <span className="card-title left-align" style={{fontSize:"20px", fontWeight:"bold", lineHeight:"130%"}}>{ project.name }<i className="material-icons right">close</i></span>
                <p className="left-align" style={{paddingRight:"28px", lineHeight:"170%"}}>{ project.description }</p>
                <p className="left-align">
                    { link }
                    <a href={project.github} style={{marginRight: "15px"}}>
                        <img src={githubLogoBlack} alt="GitHub" height="32px"/>
                    </a>
                </p>
            </div>
        </div>
        </div>)}
    )

    return (
        <div className="row" style={{marginTop:"30px", marginBottom:0}}>
            { cards }
        </div>
    );
}

export default ProjectsList;