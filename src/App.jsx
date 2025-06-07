import './App.css'
import { Link, Routes, Route } from 'react-router'
import About from './page/About.jsx'
import Contact from './page/Contact.jsx'
import Home from './page/Home.jsx'
import Galeria from './page/Galeria.jsx'
import React, { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";




function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <>
      <nav className={`navazo${scrolled ? " navazo-scrolled" : ""}`}>
        <img src="https://dulzurasdeesquel.com.ar/wp-content/uploads/2025/01/logovio.png" className='dulz' />
        <ul>
          <li>
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/about">CAFETERIA</Link>
          </li>
          <li>
            <Link to="/Galeria">CAMPOTEXT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACTO</Link>
          </li>
        </ul>
      </nav>
      
      <div className='eldiv'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Galeria" element={<Galeria />} />
        </Routes>
      </div>
    
    
      <div className='boton'><button
        className="btn-flotante"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Ir arriba"><FaAngleDoubleUp size={25}/>
          
      </button></div>
   </>
  )
}

export default App
