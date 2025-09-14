function TarjetaProyecto({ titulo, descripcion, botonTexto }) {
  return (
    <div
      style={{
        border: '2px solid #007bff',
        borderRadius: '10px',
        padding: '20px',
        maxWidth: '400px',
        marginTop: '30px',
      }}
    >
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <button
        onClick={() => console.log(`Explorando: ${titulo} `)}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {botonTexto}
      </button>
    </div>
  );
}

export default TarjetaProyecto;
