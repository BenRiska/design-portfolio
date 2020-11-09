import React from 'react'
import "../styles/Contact.css"
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Contact() {
    return (
        <div id="contact" className="contact">
            <h1>Contact</h1>
            <p>Lets talk! you can contact me at</p>
            <p className="contact__email">ben10taylor10@hotmail.com</p>
            <p>You can also find me on</p>
            <div className="contact__socials">
                <a href="https://www.instagram.com/benhernandezlt/?hl=en"><InstagramIcon className="contact__icon"/></a>
                <a href="https://github.com/BenRiska"><GitHubIcon className="contact__icon"/></a>
                <a href="https://www.linkedin.com/in/ben-taylor-tech/"><LinkedInIcon className="contact__icon"/></a>
            </div>
        </div>
    )
}

export default Contact
