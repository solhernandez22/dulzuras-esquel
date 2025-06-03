import CircularGallery from './CircularGallery.jsx';


function Galeria() {
  return (
    <div>
      <h1 className="text-black">Galeria de Trunks</h1>
      
      <p>a</p>
      <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div>
<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div>
    </div>
    
    )}
    export default Galeria;