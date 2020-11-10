import React from 'react'
import "../styles/Projects.css"
import gears from "../images/gears.svg"
import pwPhoto from "../images/portfolio.png"
import artlogicPhoto from "../images/artlogic.png"
import facebookPhoto from "../images/facebook.png"
import airPhoto from "../images/air.png"

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
                    <p className="projects__card-title">Facebook</p>
                    <p className="projects__card-text">An attempt at re-creating facebooks modern web UI, utilising modern front-end standards such as CSS grid, react hooks and context API.</p>
                    <p className="projects__card-text built-with">material-ui, css, javascript, react, google-api</p>
                    <div className="projects__card-buttons">
                        <a className="card-btn" target="_blank" rel="noreferrer" href="https://github.com/BenRiska/facebook-clone" >Source</a>
                        <a className="card-btn" target="_blank" rel="noreferrer" href="https://fb-clone-138e6.web.app/">Visit</a>
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
                    <img src={pwPhoto} alt="project"/>
                    <p className="projects__card-title">Personal Website</p>
                    <p className="projects__card-text">The website you are looking at now. I wanted a platform to share my journey and decided that this is one of the best ways I can achieve that.</p>
                    <p className="projects__card-text built-with">inkscape, css, javascript, react, figma</p>
                    <div className="projects__card-buttons">
                        <a className="card-btn" target="_blank" rel="noreferrer" href="https://github.com/BenRiska/design-portfolio">Source</a>
                        <a className="card-btn" target="_blank" rel="noreferrer" href="https://portfolio-11585.web.app/">Visit</a>
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
