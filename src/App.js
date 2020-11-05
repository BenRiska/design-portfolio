import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Hero from "./components/Hero"
import Interests from './components/Interests';
import Projects from './components/Projects';

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
    </div>
  );
}

export default App;
