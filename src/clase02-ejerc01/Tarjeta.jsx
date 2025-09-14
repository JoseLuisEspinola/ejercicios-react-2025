import Boton from './Boton';

function Tarjeta({ titulo, descripcion, botonTexto }) {
  const manejarClick = () => {
    alert('Acción del botón: ' + botonTexto);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <Boton texto={botonTexto} onClick={manejarClick} />
    </div>
  );
}

export default Tarjeta;
