import { menu } from '../COMPONENTES/menu.js';
import './Menu.css';
import './busqueda.css';

function About({ busqueda }) {
  const filtrar = (categoria) =>
    menu
      .filter(item => item.Category === categoria)
      .filter(item =>
        item.Name.toLowerCase().includes(busqueda.toLowerCase())
      );

  return (
    <div className="fondo">
      <h1 className='h1div'>Nuestro Menú</h1>
      {/* El input ya está en el nav, no lo repitas aquí */}
      <h2 className='titulo-menu'>Bebidas Calientes</h2>
      <div className='comida'>
        {filtrar('Bebidas Calientes').map((item, idx) => (
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
        {filtrar('Bebidas Frías').map((item, idx) => (
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
        {filtrar('Pasteleria').map((item, idx) => (
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