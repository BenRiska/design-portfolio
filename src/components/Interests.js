import React from 'react'
import "../styles/Interests.css"
import SDIcon from "../images/web_dev_icon.svg"
import UiUxIcon from "../images/ui_ux_icon.svg"
import MusicIcon from "../images/pub_sp_icon.svg"

function Interests() {
    return (
        <div id="interests" className="interests">
            <h1>Interests</h1>
            <div className="interests__container">
                <div className="interest__card">
                    <img src={SDIcon} alt="icon"/>
                    <h2>Software development</h2>
                    <p>Learning software development allows me to be creative, solve problems and have new ideas.</p>
                </div>
                <div className="interest__card">
                    <img src={UiUxIcon} alt="icon"/>
                    <h2>UI & UX</h2>
                    <p>I enjoy creating digital experiences centered on the users and their interactions.</p>
                </div>
                <div className="interest__card">
                    <img src={MusicIcon} alt="icon"/>
                    <h2>Music Production</h2>
                    <p>Music production lets me capture and immortalise important feelings throughout my life.</p>
                </div>
                <div className="interest__card">
                    <img src={UiUxIcon} alt="icon"/>
                    <h2>Fitness</h2>
                    <p>Exercise is important to me. I enjoy going to the gym, playing sports and looking after my physical and mental health.</p>
                </div>
            </div>
        </div>
    )
}

export default Interests
