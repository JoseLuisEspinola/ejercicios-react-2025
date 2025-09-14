import './ProductList.css';

function ProductList({ carrito, setCarrito }) {
  const productos = [
    { id: 1, nombre: 'Mouse', precio: 9000 },
    { id: 2, nombre: 'Teclado', precio: 35000 },
    { id: 3, nombre: 'Monitor', precio: 180000 },
    { id: 4, nombre: 'Tablet', precio: 110000 },
    { id: 5, nombre: 'Impresora', precio: 255000 },
    { id: 6, nombre: 'Pad', precio: 5000 },
  ];

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <section>
      <h2>Productos</h2>
      <ul>
        {productos.map((prod) => (
          <li key={prod.id}>
            <div>
              {prod.nombre} 
            </div>
            <div>
              ${prod.precio}
            </div>
            <button onClick={() => agregarAlCarrito(prod)}>Agregar</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
