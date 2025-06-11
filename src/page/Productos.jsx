import { menup } from '../menup.js';
import './Menup.css'


function Productos() {
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
          <div className='contenedor'>
            {menup.map((item, idx) => (
              <div className='productos'>
              <div key={idx}>
                <img src={item.Image} alt={item.Name} width={150} />
                <h2>{item.Name}</h2>
                <p>{item.Description}</p>
                <p className='p2'>{"Precio:  "+item.Price}</p>
              </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      );
    }
    export default Productos;


 
    
    