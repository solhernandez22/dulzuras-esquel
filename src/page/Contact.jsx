import './Contacto.css'
import { FaMapLocation } from "react-icons/fa6";


function Contact() {
  return (
    <div  className="fondou">
      <div>
      <h1>INFORMACION DE CONTACTO</h1>
      <p>
        Si tienes alguna pregunta o deseas realizar un pedido, no dudes en
        contactarnos. Estamos aquí para ayudarte a disfrutar de nuestras
        deliciosas creaciones.
      </p>
  <a href='https://maps.app.goo.gl/YX9inR3VBwqL7y5K9'><FaMapLocation /></a>
  
    
      <p>
      
        Puedes llamarnos al <strong>(123) 456-7890</strong> o enviarnos un
        correo electrónico a <strong>777@falso.com</strong>
      </p>
      </div>
    </div>
    )
    }

export default Contact;