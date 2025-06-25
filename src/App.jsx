import './App.css';
import { Link, Routes, Route } from 'react-router';
import React, { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import About from './page/About.jsx';
import Contact from './page/Contact.jsx';
import Home from './page/Home.jsx';
import Galeria from './page/Productos.jsx';
import { TiHome } from "react-icons/ti";
import { PiCoffeeFill } from "react-icons/pi";
import { GiChocolateBar } from "react-icons/gi";
import { MdLocationPin } from "react-icons/md";
import { LuPanelLeftClose } from "react-icons/lu";



function App() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Topbar responsive: hamburguesa + búsqueda */}
      <div className="topbar-responsive">
        <div
          className="btn-hamburguesa"
          onClick={() => setSidebarOpen(true)}
          aria-label="Abrir menú"
        >
          &#9776;
        </div>
        <input
          placeholder="Buscar producto..."
          type="search"
          className="input"
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
      </div>

      {/* Header normal (oculto en móvil) */}
      <header className={`navazo${scrolled ? " navazo-scrolled" : ""}`}>
        <img
          src="https://dulzurasdeesquel.com.ar/wp-content/uploads/2025/01/logovio.png"
          className='dulz'
          alt="Logo Dulzuras de Esquel"
        />
        <ul>
          <li>
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/about">CAFETERIA</Link>
          </li>
          <li>
            <Link to="/Productos">PRODUCTOS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACTO</Link>
          </li>

        </ul>
      </header>

      {/* Sidebar lateral para móvil */}
      {sidebarOpen && (
        <nav className="sidebar">
          <div className="close" onClick={() => setSidebarOpen(false)} aria-label="Cerrar menú"><LuPanelLeftClose />
            </div><img
                  src="https://dulzurasdeesquel.com.ar/wp-content/uploads/2025/01/logovio.png"
                  className='dulz'
                  alt="Logo Dulzuras de Esquel"
                />
               <ul>
                  <li>
                    <Link to="/" onClick={() => setSidebarOpen(false)}>
                      <TiHome style={{ marginRight: "8px" }} />
                      INICIO
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={() => setSidebarOpen(false)}>
                      <PiCoffeeFill style={{ marginRight: "8px" }} />
                      CAFETERIA
                    </Link>
                  </li>
                  <li>
                    <Link to="/Productos" onClick={() => setSidebarOpen(false)}>
                      <GiChocolateBar style={{ marginRight: "8px" }} />
                      PRODUCTOS
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={() => setSidebarOpen(false)}>
                      <MdLocationPin style={{ marginRight: "8px" }} />
                      CONTACTO
                    </Link>
                  </li>
              </ul>
              
        </nav>
      )}

      <div className='eldiv'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About busqueda={busqueda} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Productos" element={<Galeria busqueda={busqueda} />} />

        </Routes>
      </div>

      
        <div
          className="btn-flotante"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Ir arriba"
        >
          <FaAngleDoubleUp size={25} />
        </div>
      
    </>
  );
}

export default App;