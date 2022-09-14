import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'
import Contact from './components/Contact';


function App() {

  const packages = ['Activate your Crystals',
   'Monkey Meditation',
    'Soak in the Hotsprings',
     'Hypnotherapy',
      'Mineral Bath']

  return (
    <div className="App">
      <Router>
      <header>
        <h1 className="title">Welcome to Monty's Mineral SPA</h1>

        <div className="navBar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/packages">Our Packages</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

      </header>

      <div className="display">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages packages={ packages } />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;





