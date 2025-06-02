import './App.css'
import { Link, Routes, Route } from 'react-router';
import About from './paginas/About.jsx';
import Contact from './paginas/Contact.jsx';
import Inicio from './paginas/Inicio.jsx'
import {Routes, Route } from 'react-router'


function App() {
  return (
    <>
    <nav>
      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      </nav>
      <Link to="/">Inicio</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <h1>HOLA Sol, te la re mandaste</h1>
    </>

  )



}

export default App
