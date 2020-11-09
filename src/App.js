import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Hero from "./components/Hero"
import Interests from './components/Interests';
import Projects from './components/Projects';
import arrow from "./images/arrow.svg"
import {Link} from "react-scroll"
import {useState} from "react"

function App() {


  useState(() => {
    const browserHeight = window.innerHeight * 1.3;
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > browserHeight){
        document.querySelector(".bottom-arrow-icon").style.opacity = 1;
        document.querySelector(".bottom-arrow-icon").style.cursor = "pointer";
      } else {
        document.querySelector(".bottom-arrow-icon").style.opacity = 0;
        document.querySelector(".bottom-arrow-icon").style.cursor = "initial"; 
      }
    })
  }, [])


  return (
    <div id="app" className="app">
      {/* Hero */}
      <Hero/>
      {/* Projects */}
      <Projects/>
      {/* About */}
      <About/>
      {/* Interests */}
      <Interests/>
      {/* Contact */}
      <Contact/>
      {/* Footer */}
      <hr/>
      <footer>
        
        <p>Copyright © 2020. All rights reserved.</p>
      </footer>
      <Link className="cursor bottom-arrow" to="app" smooth duration={1000}><img className="bottom-arrow-icon" src={arrow} alt="arrow"/></Link> 
    </div>
  );
}

export default App;
