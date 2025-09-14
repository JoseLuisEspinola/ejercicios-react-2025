import { useState } from 'react';
import Saludo from './clase01-ejerc01/Saludo';
import ListaProductos from './clase02-ejerc01/ListaProductos';
import Tarjeta from './clase02-ejerc01/Tarjeta';
import EquipoTalentoLab from './clase03-ejerc01/EquipoTalentoLab';
import TarjetaProyecto from './clase03-ejerc01/TarjetaProjecto';
import GaleriaIntereses from './clase03-ejerc01/GaleriaIntereses';
import Clase04Ejerc01 from './clase04-ejerc01/Clase04Ejerc01';

function App() {
  const productos = ['Manzanas', 'Peras', 'Naranjas'];
  const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];
  const [carrito, setCarrito] = useState([]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px'}}>
      <h2>Clase 01 - Ejercicio 01</h2>
      <Saludo />

      <hr />

      <h2>Clase 02 - Ejercicio 01</h2>
      <ListaProductos productos={productos} />
      <Tarjeta
        titulo="Oferta especial"
        descripcion="20% de descuento en todos los productos"
        botonTexto="Ver más"
      />

      <hr />

      <h2>Clase 03 - Ejercicio 01</h2>
      <EquipoTalentoLab />
      <TarjetaProyecto
        titulo="Plataforma de Gestión"
        descripcion="Una herramienta para optimizar la gestión de equipos."
        botonTexto="Explorar Proyecto"
      />

      <hr />

      <h2>Clase 03 - Ejercicio 02</h2>
      <GaleriaIntereses temas={intereses} />

      <hr />

      <h2>Clase 04 - Ejercicio 01</h2>
      <Clase04Ejerc01 carrito={carrito} setCarrito={setCarrito} />
    </div>
  );
}

export default App;
