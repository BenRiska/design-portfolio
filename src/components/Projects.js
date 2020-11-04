import React from 'react'
import "../styles/Projects.css"
import gears from "../images/gears.svg"

function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects__container">
                <div className="projects__card">
                    <img src="https://alexnastase.com/res/img/png/project4.png" alt="project"/>
                    <p className="projects__card-title">Artlogic</p>
                    <p className="projects__card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto impedit accusamus veniam quibusdam similique voluptates repudiandae, laudantium illo amet!</p>
                    <p className="projects__card-text built-with">html, css, javascript, react, firebase</p>
                    <div className="projects__card-buttons">
                        <a href="#app">Source</a>
                        <a href="#app">Visit</a>
                    </div>
                </div>
                <div className="projects__card">
                    <img src="https://alexnastase.com/res/img/png/project3.png" alt="project"/>
                    <p className="projects__card-title">Artlogic</p>
                    <p className="projects__card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto impedit accusamus veniam quibusdam similique voluptates repudiandae, laudantium illo amet!</p>
                    <p className="projects__card-text built-with">html, css, javascript, react, firebase</p>
                    <div className="projects__card-buttons">
                        <a href="#app">Source</a>
                        <a href="#app">Visit</a>
                    </div>
                </div>
                <div className="projects__card">
                    <img src="https://alexnastase.com/res/img/png/project2.png" alt="project"/>
                    <p className="projects__card-title">Artlogic</p>
                    <p className="projects__card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto impedit accusamus veniam quibusdam similique voluptates repudiandae, laudantium illo amet!</p>
                    <p className="projects__card-text built-with">html, css, javascript, react, firebase</p>
                    <div className="projects__card-buttons">
                        <a href="#app">Source</a>
                        <a href="#app">Visit</a>
                    </div>
                </div>
                <div className="projects__card">
                    <img src="https://alexnastase.com/res/img/png/project4.png" alt="project"/>
                    <p className="projects__card-title">Artlogic</p>
                    <p className="projects__card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto impedit accusamus veniam quibusdam similique voluptates repudiandae, laudantium illo amet!</p>
                    <p className="projects__card-text built-with">html, css, javascript, react, firebase</p>
                    <div className="projects__card-buttons">
                        <a href="#app">Source</a>
                        <a href="#app">Visit</a>
                    </div>
                </div>
            </div>
            <div className="projects__wip-card">
                <img src={gears} alt="gears icon"/>
                <p className="wip-title">Next project is WIP</p>
                <p>To be listed soon.</p>
            </div>
        </div>
    )
}

export default Projects
