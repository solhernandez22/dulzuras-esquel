import { menu } from '../COMPONENTES/Menu.js';
import './Menu.css'

function About() {
  return (
    <div className="fondo">
      
      <h1 className='titulo'>Nuestro Menú</h1>
      <h2 className='titulo-menu'>Bebidas Calientes</h2>
      <div className='comida'>
        {menu.filter(item => item.Category === 'Bebidas Calientes').map((item, idx) => (
          <div className='tarjeta' key={idx}>
            <img src={item.Image} alt={item.Name} width={150} />
            <h3>{item.Name}</h3>
            <p>{item.Description}</p>
            <p>Precio: ${item.Price}</p>
          </div>
        ))}
      </div>
      <h2 className='titulo-menu'>Bebidas Frías</h2>
      <div className='comida'>
        {menu.filter(item => item.Category === 'Bebidas Frías').map((item, idx) => (
          <div className='tarjeta' key={idx}>
            <img src={item.Image} alt={item.Name} width={150} />
            <h3>{item.Name}</h3>
            <p>{item.Description}</p>
            <p>Precio: ${item.Price}</p>
          </div>
        ))}
      </div>
            <h2 className='titulo-menu'>Pasteleria</h2>
      <div className='comida'>
        {menu.filter(item => item.Category === 'Pasteleria').map((item, idx) => (
          <div className='tarjeta' key={idx}>
            <img src={item.Image} alt={item.Name} width={150} />
            <h3>{item.Name}</h3>
            <p>{item.Description}</p>
            <p>Precio: ${item.Price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;