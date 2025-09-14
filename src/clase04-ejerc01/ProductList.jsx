import './ProductList.css';

function ProductList({ carrito, setCarrito }) {
  const productos = [
    { id: 1, nombre: 'Mouse', precio: 5000 },
    { id: 2, nombre: 'Teclado', precio: 35000 },
    { id: 3, nombre: 'Monitor', precio: 45000 },
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
            {prod.nombre} - ${prod.precio}
            <button onClick={() => agregarAlCarrito(prod)}>Agregar</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
