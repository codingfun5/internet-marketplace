import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom"

import './App.css';

import About from './About';
import Home from './Home';
import First from './First';

import Contact from './Contact';

function App() {
 
  return <Router>
    <nav>
      <Link to="/" className='link'>FIRST PAGE</Link>
      <Link to="/about" className='link'>About</Link>
      <Link to="/home" className='link'>HOME</Link>
      <Link to="/contact" className='link'>CONTACT US</Link>
    </nav>
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      
    
      <Route path="/contact" element={<Contact />} />

    </Routes>
    
  </Router> 
 
 
  
  }

export default App;
