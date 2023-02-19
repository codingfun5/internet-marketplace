import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom"

import './App.css';
import Shop from './Shop';
import About from './About';
import Home from './Home';
import First from './First';
import Team from './Team';
import Contact from './Contact';

function App() {
 
  return <Router>
    <nav>
      <Link to="/" className='link'>FIRST PAGE</Link>
      <Link to="/about" className='link'>About</Link>
      <Link to="/home" className='link'>HOME</Link>
      <Link to="/shop" className='link'>SHOP</Link>
      <Link to="/team" className='link'>TEAM</Link>
      <Link to="/contact" className='link'>CONTACT US</Link>
    </nav>
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
    
  </Router>
 
 
  
  }

export default App;
