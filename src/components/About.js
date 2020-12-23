import React from 'react'
import "../styles/About.css"
import cv from "../images/ben-taylor-cv.pdf"

function About() {
    return (
        <div id="about" className="about">
            <h1>About</h1>
            <div className="about__text">
                <p>
                    My name is Benjamin Taylor and I am 24 years old. I am currently in my 3rd year of <span className="about-text-highlight">Software Engineering</span> as a self taught developer - based in London, England.          
                </p>
                <p>
                    While remaining <span className="about-text-highlight">enthusiastic</span> about software development, I have, in time, become <span className="about-text-highlight">passionate</span> about frontend technologies, as well as design, UI and UX. In my free time I am an <span className="about-text-highlight">avid</span> musician, manager of the <a rel="noreferrer" target="_blank" href="https://www.instagram.com/featurefield/?hl=en">@Featurefield</a> blog on instagram, as well as an <span className="about-text-highlight">eager</span> designer.
                </p>
                <p>
                    I think of myself as three different personas - <span className="about-text-highlight">creative</span> coder, <span className="about-text-highlight">critical</span> thinker and challenge seeker - as these are a great description of who I am, what I love doing and my path so far. I am more than excited to have you joining me on my journey right now!
                </p>
                <a href={cv} download>Resume</a>
                
            </div>
        </div>
    )
}

export default About
