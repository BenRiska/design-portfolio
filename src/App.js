import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Hero from "./components/Hero"
import Interests from './components/Interests';
import Projects from './components/Projects';
import FavoriteIcon from '@material-ui/icons/Favorite';

function App() {
  return (
    <div className="app">
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
        <p>Made with <FavoriteIcon fontSize="small"/>  by Benjamin Taylor</p>
        <p>Copyright © 2020. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
