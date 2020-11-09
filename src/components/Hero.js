import React, {useState} from 'react'
import "../styles/Hero.css"
import logo from "../images/white-icon.svg"
import arrow from "../images/arrow.svg"
import {Link} from "react-scroll"
import logoDark from "../images/dark-logo.svg"



function Hero() {

    const [darkMode, setDarkMode] = useState(false)
    const [navOpen, setNavOpen] = useState(false)

    const handleBgChange = () => {
        if(!darkMode){
            document.documentElement.style
                .setProperty('--bg', 'black');
            document.documentElement.style
                .setProperty('--primary-color-light', '#57aeff');
            document.documentElement.style
                .setProperty('--text', 'white');
            document.documentElement.style
                .setProperty('--card-bg', 'rgb(30, 30, 30)');
        } else{
            document.documentElement.style
                .setProperty('--bg', 'white');
            document.documentElement.style
                .setProperty('--primary-color-light', '#5575ff');
            document.documentElement.style
                .setProperty('--text', 'black');
            document.documentElement.style
                .setProperty('--card-bg', 'white');
        }
        

    }

    const openNav = () => {
        const nav = document.querySelector(".nav__mobile");
        const line1 = document.querySelector(".line-1");
        const line2 = document.querySelector(".line-2");
        const line3 = document.querySelector(".line-3");
        const links = document.querySelectorAll(".nav__mobile > ul > li")
        nav.style.animation = "0.3s ease-in-out 0s 1 normal forwards running dropdown-container-appear"
        line1.style.animation = "0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards running hamburger-line-1"
        line2.style.animation = "0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards running hamburger-line-2"
        line3.style.animation = "0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards running hamburger-line-3"
        links.forEach(link => {
            link.style.animation = `dropdown-link-appear ${link.dataset.delay} cubic-bezier(0.25, 0.8, 0.25, 1) 0.15s 1 normal forwards running`
        })
        setNavOpen(true)
    }

    const closeNav = () => {
        const nav = document.querySelector(".nav__mobile");
        const line1 = document.querySelector(".line-1");
        const line2 = document.querySelector(".line-2");
        const line3 = document.querySelector(".line-3");
        const links = document.querySelectorAll(".nav__mobile > ul > li");
        nav.style.animation = "1s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards running dropdown-container-disappear"
        line1.style.animation = "0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards running hamburger-line-1-reverse"
        line2.style.animation = "0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards running humberger-line-2-reverse"
        line3.style.animation = "0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards running hamburger-line-3-reverse"
        links.forEach(link => {
            link.style.animation = "initial"
        })
        setNavOpen(false)
    }

    return (
        <div className="hero">
            <div className="hero__logo">
                <img src={darkMode ? logoDark : logo} alt="logo"/>
            </div>
            <nav className="hero__navbar">
                <ul>
                    <li> <Link smooth duration={2000} onClick={closeNav} to="projects">projects</Link></li>
                    <li> <Link smooth duration={2000} onClick={closeNav} to="about">about</Link></li>
                    <li> <Link smooth duration={2000} onClick={closeNav} to="interests">interests</Link></li>
                    <li> <Link smooth duration={2000} onClick={closeNav} to="contact">contact</Link></li>
                    <li> <Link smooth duration={2000} onClick={closeNav} to="about">resume</Link></li>
                </ul>
                <div onClick={navOpen ? closeNav : openNav} className="nav__burgerBtn">
                    <span className="line-1"></span>
                    <span className="line-2"></span>
                    <span className="line-3"></span>
                </div>
                <div className="nav__mobile">
                    <ul>
                    <li data-delay=".7s"> <Link smooth duration={2000} onClick={closeNav} to="projects">projects</Link></li>
                    <li data-delay="1s"> <Link smooth duration={2000} onClick={closeNav} to="about">about</Link></li>
                    <li data-delay="1.3s"> <Link smooth duration={2000} onClick={closeNav} to="interests">interests</Link></li>
                    <li data-delay="1.6s"> <Link smooth duration={2000} onClick={closeNav} to="contact">contact</Link></li>
                    <li data-delay="1.9s"> <Link smooth duration={2000} onClick={closeNav} to="about">resume</Link></li>
                    </ul>
                </div>
            </nav>
            <div style={{background: darkMode ? "black" : "linear-gradient(to bottom right, #5855ff, #47b5ff)"}} className="color-mode-container">
                <input onChange={e => {
                    handleBgChange()
                    setDarkMode(!darkMode)
                }} type="checkbox"/>
                <div className="slider__icon1"></div>
                <div className="slider__icon2"></div>
                <div className="slider__icon3"></div>
                <div className="slider__icon4"></div>
            </div>
            <div className="hero__text">
                <div className="hero__title">
                    <div className="hero__title-top">Hi, I'm</div>
                    <div className="hero__title-bottom">Benjamin</div>
                </div>
                <div className="hero__slogan">
                    <p className="hero__slogan-text">
                        <span>24-year-old</span>{" "}
                        <span className="rotate-text"></span>
                    </p>
                </div>
                <div className="hero__buttons">
                    <Link className="cursor" to="projects" smooth duration={1000}>My work</Link>
                    <Link className="cursor" to="contact" smooth duration={2000}>Contact me</Link>
                </div>
            </div>
            <div className="hero__arrow">
               <Link className="cursor" to="projects" smooth duration={1000}><img src={arrow} alt="arrow"/></Link> 
            </div>
        </div>
    )
}

export default Hero
