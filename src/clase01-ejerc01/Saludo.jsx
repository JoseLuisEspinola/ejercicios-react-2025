import { useState } from 'react';

const nombre = "Jose";

function Saludo() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      {!mostrar && (
        <button onClick={() => setMostrar(true)}>
          Mostrar saludo
        </button>
      )}
      {mostrar && <h3>¡Hola, {nombre}! Este es tu primer componente React.</h3>}
    </div>
  );
}

export default Saludo;
