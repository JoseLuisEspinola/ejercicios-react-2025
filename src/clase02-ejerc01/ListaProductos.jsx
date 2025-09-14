function ListaProductos({ productos }) {
  return (
    <ol>
      {productos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
}

export default ListaProductos;
