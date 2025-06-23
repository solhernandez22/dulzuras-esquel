import { menup } from '../COMPONENTES/menup.js';
import './Menup.css';
import './busqueda.css';

function Galeria({ busqueda = "" }) {
  const filtrar =  (categoria) => menup
  .filter(item => item.Category === categoria)
  .filter(item =>
    item.Name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className='fondop'>
      <div className='oscup'>
        <div className='titl'>
          <h1 className='h1div'>Nuestros Productos</h1>
          <p className='pdiv'>
            Descubre la magia de la repostería artesanal en el corazón de Esquel.
            Aquí encontrarás una variedad de delicias hechas con amor y dedicación.
          </p>
        </div>
        <h2 className='titulo-menu'>Chocolates</h2>
        <div className='contenedor1'>
        {filtrar('Chocolates').map((item, idx) => (
            <div className='productos' key={idx}>

                <img src={item.Image} alt={item.Name} width={150} />
                <h2>{item.Name}</h2>
                <p>{item.Description}</p>
                <p className='p2'>{"Precio: $" + item.Price}</p>

            </div>
          ))}
        </div>
        <h2  className='titulo-menu'>Pasteleria</h2>
                <div className='contenedor2'>
        {filtrar('Pasteleriaa').map((item, idx) => (
            <div className='productos' key={idx}>

                <img src={item.Image} alt={item.Name} width={150} />
                <h2>{item.Name}</h2>
                <p>{item.Description}</p>
                <p className='p2'>{"Precio: $" + item.Price}</p>

            </div>
          ))}
        </div>
        <h2  className='titulo-menu'>Sin Tacc</h2>
                <div className='contenedor3'>
        {filtrar('Sin Tacc').map((item, idx) => (
            <div className='productos' key={idx}>

                <img src={item.Image} alt={item.Name} width={150} />
                <h2>{item.Name}</h2>
                <p>{item.Description}</p>
                <p>Precio: ${item.Price}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Galeria;




