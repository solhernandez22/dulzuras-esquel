import './App.css';
import { Link, Routes, Route, useLocation } from 'react-router';
import React, { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import Galeria from './Productos.jsx';


function App() {
  const [scrolled, setScrolled] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const location = useLocation(); 


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const mostrarBuscador = location.pathname === "/about" || location.pathname === "/Productos";

  return (
    <>
      <nav className={`navazo${scrolled ? " navazo-scrolled" : ""}`}>
        <img
          src="https://dulzurasdeesquel.com.ar/wp-content/uploads/2025/01/logovio.png"
          className='dulz'
          alt="Logo Dulzuras de Esquel"
        />
        {mostrarBuscador &&  (
          <div className="group">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
            <input
              placeholder="Buscar producto..."
              type="search"
              className="input"
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
            />
          </div>
        )}
        <ul>
          <li><Link to="/">INICIO</Link></li>
          <li><Link to="/about">CAFETERIA</Link></li>
          <li><Link to="/Productos">PRODUCTOS</Link></li>
          <li><Link to="/contact">CONTACTO</Link></li>
        </ul>
      </nav>

      <div className='eldiv'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About busqueda={busqueda} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Productos" element={<Galeria busqueda={busqueda} />} />
        </Routes>
      </div>


      <div className='boton'>
        <button
          className="btn-flotante"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Ir arriba"
        >
          <FaAngleDoubleUp size={25} />
        </button>
      </div>
    </>
  );
}

export default App;
