
import './App.css'
import { Link, Routes, Route } from 'react-router'
import About from './page/About.jsx'
import Contact from './page/Contact.jsx'
import Home from './page/Home.jsx'
import Galeria from './page/Galeria.jsx'

  




function App(){
  return (
   <>
      <nav className='navazo'>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Historia</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
          <li>
            <Link to="/Galeria">campodetexto</Link>
          </li>
        </ul>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Galeria" element={<Galeria />} />
        </Routes>
      </div>
    
    
      <button
        className="btn-flotante"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Ir arriba">
          
      </button>
   </>
  )
}
   

export default App
