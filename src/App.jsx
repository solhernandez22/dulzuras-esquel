
import './App.css'
import { Link, Routes, Route } from 'react-router'
import About from './page/About.jsx'
import Contact from './page/Contact.jsx'
import Home from './page/Home.jsx'
import Galeria from './page/Galeria.jsx'
import { IoHomeOutline } from "react-icons/io5";
  




function App(){
  return (
   <>
   
      <nav className='navazo'>
        <a href='https://www.youtube.com/watch?v=Inbg9Pcu7u8'><IoHomeOutline size={30} color='black'/></a>

         <ul>
        <li>
          <Link to="/">Introduccion</Link>
        </li>
        <li>
          <Link to="/about">Historia</Link>
        </li>
        <li>
          <Link to="/contact">Técnicas</Link>
        </li>
        <li>
          <Link to="/Galeria">Galeria</Link>
        </li>
        </ul>
         <img src="https://radardeldragon.com/wp-content/uploads/2023/12/esfera-del-dragon-1-estrella-dragon-ball.jpg" className='esfera'/>   
      </nav>
  <div className="parent">
  <div className="div1">
    <div className="div1tr">
    <h1>𝙏𝙧𝙪𝙣𝙠𝙨 𝘿𝙚𝙡 𝙁𝙪𝙩𝙪𝙧𝙤</h1>
  </div>
  </div>
  <div className="div2">
    <img src="https://i.ibb.co/LdrQ1chz/tronk1.jpg" className="wikiTrunks" />
    <img src="https://i.ibb.co/CpJ0nr6g/tronk2.jpg" className="wikiTrunks" />
    <img src="https://i.ibb.co/S7RB9N8F/tronk3.jpg" className="wikiTrunks" />
    <img src="https://i.ibb.co/5hKkLxqY/tronk4.jpg" className="wikiTrunks" />
    <img src="wiki.jpg" alt="Wiki Trunks" className="wikiTrunks" />
  </div>
  <div className="divazo">
    <div className="translucido">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Galeria" element={<Galeria />} />
      </Routes>
    </div>
  </div>
  
  
</div>


    <button
      className="btn-flotante"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Ir arriba"> </button>

   </>
  )
}
   
    
 /*<div className="div4">
    <img src="https://wallpapers.com/images/hd/trunks-phone-a1nyr3t0g2bmdygx.jpg" className="fotoDerecha"/>
    <img src="https://i.pinimg.com/474x/be/88/ff/be88ff4f0b64e09ac5fb6e9bb89560a6.jpg" className="fotoDerecha"/>
    <img src="https://wallpapers.com/images/hd/trunks-phone-52to3dsm2nyy1gh2.jpg" className="fotoDerecha"/>
    <img src="https://w0.peakpx.com/wallpaper/1023/27/HD-wallpaper-trunks-dragon-dragons-future-trunks-girl-lol-purple-skull-skulls-tiger-vikings.jpg" className="fotoDerecha"/>
    <img src="https://i.pinimg.com/736x/a8/b9/86/a8b98681059284229e32c961c0328781.jpg" className="fotoDerecha"/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpMiN6WAZgUYKogDLjKWOQDvBOgGjyWCOlpbFJ0_wwBHkerbKWriGWfYkGmMv8qKWL34g&usqp=CAU" className="fotoDerecha"/>
  </div>*/

export default App
