import { menu } from '../menu.js';
import './Menu.css'

function About() {
  return (
    <div className="fondo">
      
      <h1 className='titulo'>Nuestro Menú</h1>
      <p className='parrafo'>En nuestra cafetería, ofrecemos una variedad de delicias para satisfacer todos los gustos. Desde el clásico café recién hecho hasta el reconfortante chocolate caliente, cada uno de nuestros productos está elaborado con ingredientes frescos y de alta calidad. ¡Ven a disfrutar de un momento especial con nosotros!</p>
      <div className='comida'>
        {menu.map((item, idx) => (
          <div className='tarjeta'>
          <div key={idx}>
            <img src={item.Image} alt={item.Name} width={150} />
            <h3>{item.Name}</h3>
            <p>{item.Description}</p>
          </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default About;