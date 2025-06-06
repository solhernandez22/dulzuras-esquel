import './Contacto.css'
import { FaMapLocation } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";
import { GoClock } from "react-icons/go";


function Contact() {
  return (
    <div className="fondou">
      <div>
        <h1>INFORMACION DE CONTACTO</h1>
        <div className='cafe'>
        ⚞⸻⸻⸻⸻<PiCoffeeFill size={25} />⸻⸻⸻⸻⚟
        </div>
        <div className='texto'>
        <p>
          Si tienes alguna pregunta o deseas realizar un pedido, no dudes en
          contactarnos. Estamos aquí para ayudarte a disfrutar de nuestras
          deliciosas creaciones.
        </p>
        </div>
        <div className='texto'>
        <p>¡Te esperamos en <strong>Dulzuras de Esquel</strong>! Visitanos en Sarmiento 590, U9200 Esquel, Chubut</p>
        </div>
        <a
          href='https://maps.app.goo.gl/YX9inR3VBwqL7y5K9'
          className="mapa-link"
        >
          <FaMapLocation size={40} />
        </a>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.066041561679!2d-71.3221336246088!3d-42.91364814234442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961dac3bb114dc8f%3A0xa890f4f193643c39!2sDulzuras%20de%20Esquel!5e0!3m2!1ses!2sar!4v1749075114583!5m2!1ses!2sar"
            width="100%"
            height="350"
            style={{ border: 0, maxWidth: '600px', minWidth: '250px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Dulzuras de Esquel"
          ></iframe>
        </div>
        
        <div className='texto' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', textAlign: 'left' }}>
          <FaPhoneAlt style={{ verticalAlign: 'middle' }} />
          <span>
            Puedes llamarnos al <strong>(02945) 41-1673 </strong> o enviarnos un
            correo electrónico a <strong>info@dulzurasdeesquel.com.ar</strong> o 
          </span>
        </div>
      </div>

      
        <p><h2>seguinos en nuestras redes</h2>
        <div className="redes">
      <a href="https://www.facebook.com/dulzurasdeesquel" >    
      <FaFacebook size={40} />
      </a>
      
      <a href="https://www.instagram.com/dulzurasdeesquel/">
      <FaInstagram size={40} />
      </a>
      </div></p>
      <p>⚞⸻⸻⸻⸻⸻⸻⸻⸻⸻⚟</p>


      <h2>Estamos abiertos todos los días de la semana para que puedas disfrutar de nuestros productos en el momento que más te convenga.</h2>
      <div className="reloj">
        <GoClock size={25}/>
      </div>

    
  <li>Lunes a Sabado 09:00 a 21:00</li>
  <li>Domingo 10:00 a 13:30, 16:00 a 20:30</li>


⸻⸻⸻⸻⸻⸻⸻
    </div>
    
  )
}

export default Contact;