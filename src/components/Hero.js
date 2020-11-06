import React from 'react'
import "../styles/Hero.css"
import logo from "../images/white-icon.svg"
import arrow from "../images/arrow.svg"
import MenuIcon from '@material-ui/icons/Menu';


function Hero() {
    return (
        <div className="hero">
            <div className="hero__logo">
                <img src={logo} alt="logo"/>
            </div>
            <nav className="hero__navbar">
                <ul>
                    <li> <a href="#app">projects</a></li>
                    <li> <a href="#app">about</a></li>
                    <li> <a href="#app">interests</a></li>
                    <li> <a href="#app">contact</a></li>
                    <li> <a href="#app">resume</a></li>
                </ul>
                <div className="nav__burgerBtn"><MenuIcon className="burger__icon" fontSize="large"/></div>
                <div className="nav__mobile"></div>
            </nav>
            <div className="hero__text">
                <div className="hero__title">
                    <div className="hero__title-top">Hi, I'm</div>
                    <div className="hero__title-bottom">Benjamin</div>
                </div>
                <div className="hero__slogan">
                    <p className="hero__slogan-text">
                        <span>24-year-old</span>{" "}
                        <span>creative coder</span>
                    </p>
                </div>
                <div className="hero__buttons">
                    <a href="#app">My work</a>
                    <a href="#app">Contact me</a>
                </div>
            </div>
            <div className="hero__arrow">
               <a href="#app"><img src={arrow} alt="arrow"/></a> 
            </div>
        </div>
    )
}

export default Hero
