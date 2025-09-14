function Boton({ texto, onClick }) {
  return (
    <button
      style={{
        backgroundColor: '#007bff',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {texto}
    </button>
  );
}

export default Boton;
