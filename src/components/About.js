import React from 'react'
import "../styles/About.css"

function About() {
    return (
        <div className="about">
            <h1>About</h1>
            <div className="about__text">
                <p>
                    My name is Benjamin Taylor and I am 24 years old. I am currently in my 3rd year of Software Engineering as a self taught developer - based in London, England.          
                </p>
                <p>
                    While remaining enthusiastic about software development, I have, in time, become passionate about frontend technologies, as well as design, UI and UX. In my free time I am an avid musician, manager of the @Featurefield blog on instagram, as well as an eager designer.
                </p>
                <p>
                    I think of myself as three different personas - creative coder, critical thinker and challenge seeker - as these are a great description of who I am, what I love doing and my path so far. I am more than excited to have you joining me on my journey right now!
                </p>
                <a href="#app">Resume</a>
            </div>
        </div>
    )
}

export default About
