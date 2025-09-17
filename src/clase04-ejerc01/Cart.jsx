import './Cart.css';

function Cart({ carrito, setCarrito }) {
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

  console.log('Total calculado:', total);

  return (
    <section className="cart-container">
      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <p className='parrafo-vacio'>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {carrito.map((prod, index) => (
              <li className="carrito-li" key={index}>
                <div>
                  {prod.nombre}
                </div>
                <div>
                  ${prod.precio}
                </div>
              </li>
            ))}
          </ul>
          <p className="carrito-total">TOTAL Carrito: ${total}</p>
          <button className='btn-vaciar' onClick={vaciarCarrito}>Vaciar carrito</button>
        </>
      )}
    </section>
  );
}

export default Cart;

