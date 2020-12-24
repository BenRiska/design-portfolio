import React from 'react'
import "../styles/Projects.css"
import gears from "../images/gears.svg"
import pwPhoto from "../images/portfolio.png"
import artlogicPhoto from "../images/artlogic.png"
import facebookPhoto from "../images/blog.png"
import airPhoto from "../images/air.png"
import blueReceiptPhoto from "../images/blue-receipt.png"

function Projects() {

    return (
        <div id="projects" className="projects">
            <h1>Projects</h1>
            <div className="projects__container">
                <div className="projects__card">
                    <img src={artlogicPhoto} alt="project"/>
                    <p className="projects__card-title">Artlogic</p>
                    <p className="projects__card-text">Artlogic is an art oriented web agency, offering modern database, sales and marketing solutions that seamlessly integrate, providing you with all you need to run your art business.  </p>
                    <p className="projects__card-text built-with">html, css, javascript, react, firebase</p>
                    <div className="projects__card-buttons">
                        <a className="card-btn" target="_blank" rel="noreferrer" href="https://github.com/BenRiska/artlogic">Source</a>
                        <a className="card-btn" target="_blank" rel="noreferrer" href="https://lnkd.in/dGsVtj3">Visit</a>
                    </div>
                </div>
                <div className="projects__card">
                    <img src={facebookPhoto} alt="project"/>
                    <p className="projects__card-title">Personal Blog</p>
                    <p className="projects__card-text">A blog holding articles about software development, productivity and my general life.</p>
                    <p className="projects__card-text built-with">gsap, css, javascript, react, three.js, figma</p>
                    <div className="projects__card-buttons">
                        <a className="card-btn" target="_blank" rel="noreferrer" href="https://github.com/BenRiska/blog" >Source</a>
                        <a className="card-btn" target="_blank" rel="noreferrer" href="https://blog-6a15f.web.app/">Visit</a>
                    </div>
                </div>
                <div className="projects__card">
                    <img src={airPhoto} alt="project"/>
                    <p className="projects__card-title">Air</p>
                    <p className="projects__card-text">A website for Air. Giving your marketing team a centralized hub for content-driven work, empowering the rest of your organization to take an active role in brand experience.</p>
                    <p className="projects__card-text built-with">html, css, javascript, react, firebase</p>
                    <div className="projects__card-buttons">
                        <a className="card-btn" target="_blank" rel="noreferrer" href="https://github.com/BenRiska/air">Source</a>
                        <a className="card-btn" target="_blank" rel="noreferrer" href="https://air-ui.web.app/">Visit</a>
                    </div>
                </div>
                <div className="projects__card">
                    <img src={blueReceiptPhoto} alt="project"/>
                    <p className="projects__card-title">BlueReceipt</p>
                    <p className="projects__card-text">BlueReceipt is text SMS marketing and 1:1 helpdesk for shopify sellers. Increase your revenue by $1000's with BlueReceipt Texts. Send Broadcasts, Create Automations, Text 1-On-1.</p>
                    <p className="projects__card-text built-with">html, css, typescript, react, figma</p>
                    <div className="projects__card-buttons">
                        <a className="card-btn" target="_blank" rel="noreferrer" href="https://github.com/BenRiska/blue-receipt">Source</a>
                        <a className="card-btn" target="_blank" rel="noreferrer" href="https://bluereceipt-92603.web.app/">Visit</a>
                    </div>
                </div>
            </div>
            <div className="projects__wip-card">
                <img src={gears} alt="gears icon"/>
                <p className="wip-title">Next project is WIP</p>
                <p className="wip-text">To be listed soon.</p>
            </div>
        </div>
    )
}

export default Projects
