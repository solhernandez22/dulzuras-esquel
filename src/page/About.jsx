import { menu } from '../menu.js';
import './Menu.css'

function About() {
  return (
    <div className="fondo">
      
      <h1>Nuestro Menú</h1>
      <div>
        {menu.map((item, idx) => (
          <div key={idx}>
            <img src={item.Image} alt={item.Name} width={150} />
            <h3>{item.Name}</h3>
            <p>{item.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;