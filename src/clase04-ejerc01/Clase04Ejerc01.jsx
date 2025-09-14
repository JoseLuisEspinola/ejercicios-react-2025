import { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import ProductList from './ProductList';
import Cart from './Cart';
import Contacto from './Contacto';

function Clase04Ejer01() {
  const [carrito, setCarrito] = useState([]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <div id="inicio">
        <Header />
      </div>
      <Nav />
      <Main>
        <section id="productos">
          <ProductList carrito={carrito} setCarrito={setCarrito} />
        </section>

        <section id="carrito">
          <Cart carrito={carrito} setCarrito={setCarrito} />
        </section>

        <section id="contacto">
          <Contacto />
        </section>
      </Main>
      <Footer />
    </div>
  );
}

export default Clase04Ejer01;
